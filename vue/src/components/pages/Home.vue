<template>
  <PageLayout>
    <section class="p-16">
      Homepage
      <button @click="() => openHelpModal()">Open modal</button>
      <CinemaForm />
      <div class="control">
        <el-button type="primary" @click="() => openListCinema()" plain>Показать список фильмов</el-button>
      </div>
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import { helpModal } from "@/mixins/modals";
import CinemaForm from "../forms/CinemaForm"
import { RouteNames } from '@/router/routes';

export default {
  name: 'HomePage',
  mixins: [helpModal],
  components: {
    PageLayout,
    CinemaForm
  },
  methods: {
    openListCinema() {
      this.$router.push({
        name: RouteNames.LIST_CINEMA
      })
    }
  }
}
</script>

<style lang="less">
.control {
  margin-top: 16px;
}
</style>
