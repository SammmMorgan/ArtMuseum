import { Picture } from "../models/Picture.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "../AppState.js"

class PictureService {

    async getPictures() {
        const response = await api.get('api/artworks')
        // logger.log(response.data)
        const pictures = response.data.artworks.map(pojo => new Picture(pojo))
        AppState.pictures = pictures
        // logger.log(AppState.pictures)
        AppState.currentPage = response.data.page
        AppState.totalPages = response.data.pages
    }

    async changePage(pageNumber) {
        const response = await api.get(`api/artworks?page=${pageNumber}`)
        const newPictures = response.data.artworks.map(pojo => new Picture(pojo))
        AppState.pictures = newPictures
        AppState.currentPage = response.data.page
    }
}



export const pictureService = new PictureService