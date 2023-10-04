<template>
  <PageLayout>
    <section class="p-16">
      Homepage
      <button @click="() => openHelpModal()">Open modal</button>
      <CinemaForm />
      <div class="control">
        <RouterLink :to="{ name: routeNames.LIST_CINEMA }">
          <el-button type="primary" plain>Показать список фильмов</el-button>
        </RouterLink>
      </div>
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import { helpModal } from "@/mixins/modals";
import CinemaForm from "../forms/CinemaForm"
import { RouteNames } from '@/router/routes';
import { RouterLink } from 'vue-router';

export default {
  name: 'HomePage',
  mixins: [helpModal],
  components: {
    PageLayout,
    CinemaForm,
    RouterLink
  },
  computed: {
    routeNames () {
      return RouteNames
    }
  }
}
</script>

<style lang="less">
.control {
  margin-top: 16px;
}
</style>
