<template>
  <div class="cinema-form">
    <div class="mt-16">
      <ElInput v-model="form.name" placeholder="Название фильма" />
    </div>
    <div class="mt-16">
      <ElInput v-model="form.originName" placeholder="Оригинальное название" />
    </div>
    <div class="mt-16">
      <ElInput v-model="form.producer" placeholder="Режиссер" />
    </div>
    <div class="mt-16">
      <ElDatePicker
        v-model="form.date"
        type="year"
        placeholder="Дата выхода фильма"
      />
    </div>
    <div class="mt-16">
      <ElInput v-model="form.previewUrl" placeholder="Ссылка на обложку" />
    </div>
    <div class="mt-16">
      <span>Оценка фильма</span>
      <ElRate v-model="form.score" :colors="getSroceIcons" class="mt-16" />
    </div>
    <div class="mt-16">
      <ElButton type="success" @click="() => handleClick()">{{ btnText }}</ElButton>
    </div>
    <div class="mt-16">
        <ElButton
          type="primary"
          class="load-by-id"
          @click="() => changeVisibleFormById()"
        >{{  isVisibleLoadFormById ? "Отмена" : "Загрузить по id"  }}</ElButton>
      </div>
    <div v-if="isVisibleLoadFormById" class="cinema-form__load-by-id mt-16">
      <ElInput v-model="form.id" placeholder="ID фильма"/>
      <ElButton icon="el-icon-download" @click="() => loadFilmFromApi()" circle />
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
        id: null,
        name: '',
        originName: '',
        producer: '',
        date: null,
        previewUrl: '',
        score: null
      },
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
      this.loadFilmById(this.form.id)
        .then(data => {
          this.form = {
            ...this.form,
            id: data.kinopoiskId,
            name: data.nameRu,
            originName: data.nameOriginal,
            date: data.year,
            previewUrl: data.posterUrlPreview,
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="less">
.mt-16 {
  margin-top: 16px;
}

.cinema-form {
  &__load-by-id {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
}
</style>