<template>
  <div>
    <div class="container cooolum">
      <div v-for="picture in pictures" :key="pictures.id">
        <div class="d-inline-block py-3 ">
          <img :src="picture.imgUrlSmall" alt="pretty picture" class="img-fluid">
          <p>{{ picture.attribution }}</p>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import Pop from '../utils/Pop.js'
import { logger } from '../utils/Logger.js'
import { pictureService } from '../services/PictureService.js'
import { AppState } from "../AppState.js"

export default {
  setup() {

    async function getPictures() {
      try {
        await pictureService.getPictures()
      } catch (error) {
        Pop.error(error)
        logger.error
      }
    }

    onMounted(() => { getPictures() })

    return {
      pictures: computed(() => AppState.pictures)
    }
  }
}
</script>

<style scoped lang="scss">
.cooolum {
  columns: auto;
  columns: 4;
}
</style>
