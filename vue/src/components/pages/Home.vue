<template>
  <PageLayout>
    <section class="p-16">
      Homepage
      <button @click="() => openHelpModal()">Open modal</button>
      <CinemaForm />
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import { helpModal } from "@/mixins/modals";
import CinemaForm from "../forms/CinemaForm"

export default {
  name: 'HomePage',
  mixins: [helpModal],
  components: {
    PageLayout,
    CinemaForm
  }
}
</script>

<style>
</style>
