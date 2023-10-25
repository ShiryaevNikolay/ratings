<template>
  <PageLayout>
    <section class="p-16">
      Homepage
      <button @click="() => openHelpModal()">Open modal</button>
      <div class="control">
        <RouterLink :to="{ name: routeNames.LIST_CINEMA }">
          <ElButton type="primary" plain>{{ getButtonsText.createCinema }}</ElButton>
        </RouterLink>
      </div>
      <div class="control">
        <RouterLink :to="{ name: routeNames.CREATE_CINEMA }">
          <ElButton type="primary" plain>{{ getButtonsText.addCinema }}</ElButton>
        </RouterLink>
      </div>
      <div class="control">
        <RouterLink :to="{ name: routeNames.RATING_FILMS }">
          <ElButton type="primary" plain>{{ getButtonsText.makeRating }}</ElButton>
        </RouterLink>
      </div>
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import { helpModal } from "@/mixins/modals";
import { RouteNames } from '@/router/routes';
import { RouterLink } from 'vue-router';

export default {
  name: 'HomePage',
  mixins: [helpModal],
  components: {
    PageLayout,
    RouterLink
  },
  computed: {
    routeNames () {
      return RouteNames
    },
    getButtonsText () {
      return {
        addCinema: "Добавить фильм",
        createCinema: "Показать список фильмов",
        makeRating: "Составить рейтинг"
      }
    }
  }
}
</script>

<style lang="less">
.control {
  margin-top: 16px;
}
</style>
