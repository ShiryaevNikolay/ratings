<template>
  <div class="cinema-form">
    <div class="cinema-form__field">
      <ElButton
        type="primary"
        class="load-by-id"
        @click="() => changeVisibleFormById()"
      >
      {{  isVisibleLoadFormById ? "Отмена" : "Загрузить по id"  }}
      </ElButton>
    </div>
    <div v-if="isVisibleLoadFormById" class="cinema-form__load-by-id cinema-form__field">
      <ElInput v-model="id" placeholder="ID фильма"/>
      <ElButton icon="el-icon-download" @click="() => loadFilmFromApi()" circle />
    </div>
    <div class="cinema-form__field">
      <ElInput v-model="form.name" placeholder="Название фильма" />
    </div>
    <div class="cinema-form__field">
      <ElInput v-model="form.originName" placeholder="Оригинальное название" />
    </div>
    <div class="cinema-form__field">
      <ElInput v-model="form.producer" placeholder="Режиссер" />
    </div>
    <div class="cinema-form__field">
      <ElDatePicker
        v-model="form.year"
        type="year"
        placeholder="Год"
        value-format="yyyy"
      />
    </div>
    <div class="cinema-form__field">
      <ElInput v-model="form.previewUrl" placeholder="Ссылка на обложку" />
    </div>
    <div class="cinema-form__field">
      <span>Оценка фильма</span>
      <ElRate v-model="form.score" :colors="getSroceIcons" class="cinema-form__field" />
    </div>
    <div class="cinema-form__field">
      <ElButton type="success" @click="() => handleClick()">{{ btnText }}</ElButton>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'FormInput',
  props: {
    btnText: {
      type: String,
      default: "Применить"
    },
    cinema: {
      type: Object,
      default: () => (null)
    }
  },
  data() {
    return {
      form: {
        name: '',
        originName: '',
        producer: '',
        year: '',
        previewUrl: '',
        score: null
      },
      id: null,
      isVisibleLoadFormById: false
    }
  },
  mounted: function () {
    if (this.cinema) {
      this.form = {
        ...this.form,
        ...this.cinema
      }
    }
  },
  computed: {
    getSroceIcons () {
      return ['#99A9BF', '#F7BA2A', '#FF9900']
    }
  },
  methods: {
    ...mapActions('cinema', [
      'loadFilmById'
    ]),
    handleClick () {
      this.$emit('btnClick', this.form)
    },
    changeVisibleFormById () {
      this.isVisibleLoadFormById = !this.isVisibleLoadFormById
    },
    loadFilmFromApi () {
      this.loadFilmById(this.id)
        .then(data => {
          this.form = {
            ...this.form,
            name: data.nameRu,
            originName: data.nameOriginal,
            year: String(data.year),
            previewUrl: data.posterUrlPreview,
            coverUrl: data.coverUrl
          }
        })
        .catch(error => {
          this.$message.error(error)
        })
    }
  }
}
</script>

<style lang="less">
.cinema-form {
  &__field {
    margin-top: 16px;
  }

  &__load-by-id {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
}
</style>