<template>
  <PageLayout>
    <div class="header">
      <RouterLink :to="{ name: routeNames.HOME }" replace>
        <ElButton type="primary" icon="el-icon-arrow-left">Главная страница</ElButton>
      </RouterLink>
    </div>
    <section class="p-16">
      <div class="settings">
        <h1>Настройки</h1>
        <div class="settings__key-form">
          <ElInput v-model="keyApi" placeholder="API ключ"/>
          <ElButton
            type="success"
            icon="el-icon-check"
            plain
            @click="() => saveApiKey()"
          >
          Сохранить ключ
          </ElButton>
        </div>
        <div class="settings__buttons">
          <ElButton
            type="primary"
            icon="el-icon-upload2"
            plain
            @click="() => exportData()"
          >
          Экспорт данных
          </ElButton>
          <ElButton
            type="primary"
            icon="el-icon-download"
            plain
            @click="() => importData()"
          >
          Импорт данных
          </ElButton>
        </div>
      </div>
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import { mapMutations } from 'vuex'
import { RouterLink } from 'vue-router'
import { RouteNames } from '@/router/routes'

export default {
  name: 'SettingsPage',
  components: {
    PageLayout,
    RouterLink
  },
  data () {
    return {
      keyApi: ''
    }
  },
  computed: {
    routeNames () {
      return RouteNames
    }
  },
  methods: {
    ...mapMutations('cinema', {
      saveApiKeyFoStore: 'saveApiKey'
    }),
    saveApiKey () {
      this.saveApiKeyFoStore(this.keyApi)
    },
    importData () {

    },
    exportData () {

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