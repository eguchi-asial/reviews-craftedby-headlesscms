<template>
  <div class="container">
    <Header />
    <div class="contents">
      <div class="main">
        <Logo />
        <h2 class="latest-reviews-title">新着レビュー({{ latest10Contents.length }})</h2>
        <ul class="items">
          <li
            class="item"
            v-for="(content, index) in latest10Contents" :key="index">
            <nuxt-link class="nuxt-link" :to="content.path">
              <div class="left">
                <img src="logo.png" class="eyecatch" v-if="content.eyecatch" />
                <img src="noimage-gray.png" class="eyecatch" v-else />
              </div>
              <div class="right">
                <div class="title">{{ content.title }} {{ content.yyyymmdd }}</div>
                <div class="description">{{ content.description }}</div>
                <Tags class="category" :tags="content.category" />
              </div>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="sub">
        <h3>カテゴリー</h3>
        <ul>
          <li v-for="(category, index) in categories" :key="index">{{ category }}</li>
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
      .only(['id', 'category', 'title', 'description', 'eyecatch', 'yyyymmdd', 'path', 'createdAt'])
      .sortBy('createdBy', 'desc')
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
  }
})
</script>
<style lang="scss" scoped>
$eyecatch-height: 120px;

.contents {
  // HEADER高さ
  margin-top: 60px;
  display: grid;
  grid-template-columns: auto 20%;
  height: calc(100vh - 60px);

  .main {
    margin: 10px;
    padding: 10px;
    background: #fff;
    font-size: 18px;
    overflow: scroll;

    .latest-reviews-title {
      margin: 10px 0;
    }

    .items {
      .item {
        border: solid 1px;
        margin-bottom: 10px;

        .nuxt-link {
          display: flex;
          color: #000;
          text-decoration: none;

          .eyecatch {
            padding: 10px;
            width: $eyecatch-height;
            height: auto;
          }

          .right {
            display: flex;
            flex-direction: column;
            padding: 10px;
            width: calc(100% - #{$eyecatch-height});
            height: 100%;

            .title {
              font-weight: bold;
              font-size: 18px;
              width: 100%;
              height: auto;
            }

            .description {
              font-size: 16px;
              width: 100%;
              height: auto;
            }

            .category {
              z-index: 199999;
            }
          }
        }
      }
    }
  }

  .sub {
    margin: 10px;
    background: #fff;
    font-size: 14px;
  }
}
</style>