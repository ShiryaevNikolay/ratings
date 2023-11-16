<template>
  <PageLayout>
    <section class="p-16">
      <div class="settings">
        <h1>Настройки</h1>
        <div class="settings__key-form">
          <ElInput v-model="keyApi" placeholder="API ключ"/>
          <ElButton type="success" icon="el-icon-check" plain>Сохранить ключ</ElButton>
        </div>
        <div class="settings__buttons">
          <ElButton type="primary" icon="el-icon-upload2" plain>Экспорт данных</ElButton>
          <ElButton type="primary" icon="el-icon-download" plain>Импорт данных</ElButton>
        </div>
      </div>
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'

export default {
  name: 'SettingsPage',
  components: {
    PageLayout
  },
  data () {
    return {
      keyApi: ""
    }
  }
}
</script>

<style scoped lang="less">
.settings {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__key-form {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
}
</style>