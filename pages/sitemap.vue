<template>
  <div class="container">
    <Header />
    <div class="contents">
      <div class="site">
        <h2>ホーム</h2>
        <ul class="items">
          <li class="item"><a href="/">ホーム</a></li>
        </ul>
      </div>
      <div class="site">
        <h2>レビュー</h2>
        <ul class="items">
          <li v-for="(review, index) in reviews" :key="index" class="item">
            <a :href="review.path">{{ review.title }}</a>
          </li>
        </ul>
      </div>
      <div class="site">
        <h2>カテゴリー</h2>
        <ul class="items">
          <li
            v-for="(category, index) in categories"
            :key="10 + index"
            class="item"
          >
            <a :href="category">{{ category.split('/')[3] }}</a>
          </li>
        </ul>
      </div>
      <div class="site">
        <h2>サイトマップ</h2>
        <ul class="items">
          <li class="item"><a href="/sitemap">サイトマップ</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Sitemap',
  async asyncData({ $content, store }) {
    store.commit('CHANGE_TITLE', 'サイトマップ')
    const paths = await $content('review').only(['path', 'id', 'title']).fetch()
    // カテゴリー別ページ生成
    let categories = await $content('review')
      .only(['category', 'id', 'title'])
      .fetch()
    categories = Array.isArray(categories) ? categories : [categories]
    const uniqueCategories = Array.from(
      new Set(categories.map((category) => category.category).flat())
    ).map((category) => `/review/category/${category}`)
    return {
      reviews: paths,
      categories: uniqueCategories,
    }
  },
  head() {
    return {
      title: 'サイトマップ',
    }
  },
  methods: {
    onClickTag(tag: string) {
      location.href = `/review/category/${tag}`
    },
  },
})
</script>
<style lang="scss" scoped>
.contents {
  // HEADER高さ
  margin-top: 60px;
  height: calc(100vh - 60px);
  overflow: scroll;
  width: 100%;

  .site {
    margin: 10px;

    .items {
      background: #fff;

      .item {
        margin: 10px;
        font-size: 20px;
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .contents {
    // HEADER高さ
    margin-top: 60px;
    display: inline-block;
    height: calc(100vh - 60px);
    overflow-y: scroll;
    width: 100%;
    padding-bottom: 100px;
  }
}
</style>
