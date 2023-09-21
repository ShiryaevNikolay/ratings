<template>
  <PageLayout>
    <section class="p-16">
      Homepage
      <button @click="() => openHelpModal()">Open modal</button>
      <FormInput />
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import { helpModal } from "@/mixins/modals";
import FormInput from "../form/FormInput"

export default {
  name: 'HomePage',
  mixins: [helpModal],
  components: {
    PageLayout,
    FormInput
  }
}
</script>

<style>
</style>
