<template>
  <div class="container">
    <Header />
    <div class="contents">
      <div class="main">
        <Logo />
        <h2 class="latest-reviews-title">新着レビュー({{ latest10Contents.length }})</h2>
        <Contents :contents="latest10Contents" @click-tag="onClickTag" />
      </div>
      <div class="sub">
        <h3>カテゴリー</h3>
        <ul class="category-list">
          <li
            v-for="(category, index) in categories"
            :key="index"
            class="category-list-item">
            <nuxt-link :to="`/review/category/${category}`">
              {{ category }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  head () {
    return {
      title: 'ホーム',
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          // @ts-ignore
          content: this.categories.join(',')
        }
      ]
    }
  },
  async asyncData ({ $content, store }) {
    store.commit('CHANGE_TITLE', '')
    const latest10Contents: IContentDocument | IContentDocument[] = await $content('review')
      .only(['id', 'category', 'title', 'description', 'rating', 'eyecatch', 'yyyymmdd', 'path', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .limit(10)
      .fetch()
    let categories: IContentDocument | IContentDocument[] = await $content('review')
      .only(['category'])
      .fetch()
    // 抽出された全てのカテゴリー配列を1つにまとめた後、一位な配列に組み直してセットする
    // また、ts-lintでIContentDocumentなのかIContentDocument[]何かハッキリさせる必要があるため、配列に強制代入する
    categories = Array.isArray(categories) ? categories : [categories]
    const uniqueCategories = Array.from(new Set(categories.map(category => category.category).flat()))
    return {
      latest10Contents,
      categories: uniqueCategories
    }
  },
  methods: {
    onClickTag (tag: string) {
      location.href = `/review/category/${tag}`
    }
  }
})
</script>
<style lang="scss" scoped>
.contents {
  // HEADER高さ
  margin-top: 60px;
  display: grid;
  grid-template-columns: auto 20%;
  height: calc(100vh - 60px);
  overflow: scroll;
  width: 100%;
  padding-bottom: calc(80px + env(safe-area-inset-bottom));

  .main {
    margin: 10px;
    padding: 10px;
    background: #fff;
    font-size: 18px;
    overflow: scroll;

    .latest-reviews-title {
      margin: 10px 0;
    }
  }

  .sub {
    margin: 10px;
    background: #fff;
    font-size: 14px;

    h3 {
      margin: 5px;
    }

    .category-list {
      .category-list-item {
        margin: 5px;

        a {
          color: #000;
          text-decoration: none;
          font-size: 18px;
        }
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

    .sub {
      display: none;
    }
  }
}
</style>