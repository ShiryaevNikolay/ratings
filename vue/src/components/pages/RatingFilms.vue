<template>
  <PageLayout>
    <section class="p-16">
      <h1>Составление рейтинга</h1>
      <div class="rating">
        <div class="rating__cinema">
          <CinemaPreview :cinema="films[0]" />
          <div class="rating__controls">
            <ElButton type="success">{{ "+10" }}</ElButton>
            <div class="rating__controls__container">
              <ElButton type="primary">{{ "+1" }}</ElButton>
              <span>Lorem</span>
            </div>
          </div>
        </div>
        <div class="rating__divider"/>
        <div class="rating__cinema">
          <CinemaPreview :cinema="films[1]" />
          <div class="rating__controls">
            <div class="rating__controls__container">
              <span>Lorem</span>
              <ElButton type="primary">{{ "+1" }}</ElButton>
            </div>
            <ElButton type="success">{{ "+10" }}</ElButton>
          </div>
        </div>
      </div>
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../parts/PageLayout'
import CinemaPreview from '../cinema/CinemaPreview.vue';
import { mapGetters } from 'vuex';

export default {
  name: "RatingFilms",
  components: {
    PageLayout,
    CinemaPreview
  },
  computed: {
    ...mapGetters('cinema', [
      'getFilms'
    ]),
    films() {
      return this.getFilms
    }
  }
}
</script>

<style scoped lang="less">
.rating {
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  gap: 20px;
  margin: 16px;
  margin-top: 40px;

  &__divider {
    background-color: gray;
  }

  &__cinema {
    display: flex;
    flex-direction: column;
    widows: 100%;
  }

  &__controls {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;

    &__container {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 16px;
    }
  }
}
</style>