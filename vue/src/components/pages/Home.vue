<template>
  <PageLayout>
    <section class="p-16">
      Homepage
      <button @click="() => openHelpModal()">Open modal</button>
      <div class="menu">
        <RouterLink :to="{ name: routeNames.LIST_CINEMA }">
          <ElButton
            type="primary"
            icon="el-icon-document-copy"
            plain
          >
          {{ getButtonsText.createCinema }}
          </ElButton>
        </RouterLink>
        <RouterLink :to="{ name: routeNames.CREATE_CINEMA }">
          <ElButton
            type="success"
            icon="el-icon-plus"
            plain
          >
          {{ getButtonsText.addCinema }}
          </ElButton>
        </RouterLink>
        <RouterLink :to="{ name: routeNames.RATING_FILMS }">
          <ElButton
            type="warning"
            icon="el-icon-top"
            plain
          >
          {{ getButtonsText.makeRating }}
          </ElButton>
        </RouterLink>
        <RouterLink :to="{ name: routeNames.SETTINGS }">
          <ElButton
            type="info"
            icon="el-icon-setting"
            plain
          >
          {{ getButtonsText.settings }}
          </ElButton>
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
        makeRating: "Составить рейтинг",
        settings: "Настройки"
      }
    }
  }
}
</script>

<style lang="less">
.menu {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
}
</style>
