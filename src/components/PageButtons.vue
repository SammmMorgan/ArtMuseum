<template>
    <div class="text-light px-3 d-flex">
        <button @click="changePage(currentPage - 1)" class="btn btn-light"> <i class="mdi mdi-arrow-left"></i> </button>
        <p class="mb-0 mx-3 fs-4">Page {{ currentPage }} of {{ totalPages }}</p>
        <button @click="changePage(currentPage + 1)" class="btn btn-light"> <i class="mdi mdi-arrow-right"></i> </button>

    </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';
import { pictureService } from '../services/PictureService.js'

export default {
    setup() {
        return {
            paintings: computed(() => AppState.pictures),
            currentPage: computed(() => AppState.currentPage),
            totalPages: computed(() => AppState.totalPages),

            async changePage(pageNumber) {
                try {
                    await pictureService.changePage(pageNumber)
                } catch (error) {
                    Pop.error(error)
                    logger.error(error)
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped></style>