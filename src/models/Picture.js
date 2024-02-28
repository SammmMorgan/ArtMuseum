export class Picture {
    constructor(data) {
        this.id = data.id
        this.admirers = data.admirers
        this.description = data.description
        this.attribution = data.attribution
        this.imgUrlFull = data.imgUrls.full
        this.imgUrlSmall = data.imgUrls.small
    }

}