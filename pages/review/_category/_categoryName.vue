<template>
  <div class="container">
    <Header />
    <div class="contents">
      <div class="main">
        <Logo />
        <h2 class="latest-reviews-title">{{ `”${category}”記事` }}{{ `(${contents.length})` }}</h2>
        <Contents :contents="contents" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import Vue from 'vue'

export default Vue.extend({
  name: 'ReviewsByCategory',
  async asyncData ({ $content, route }) {
    const selectedCategory = route.params.categoryName
    // 選択されたカテゴリーを含む記事一覧を取得する
    const contents: IContentDocument | IContentDocument[] = await $content('review')
      .where({ 'category': { $contains: [selectedCategory] } })
      .only(['id', 'category', 'title', 'description', 'rating', 'eyecatch', 'yyyymmdd', 'path', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      category: route.params.categoryName,
      contents
    }
  }
})
</script>
<style lang="scss" scoped>
$eyecatch-height: 120px;

.contents {
  // HEADER高さ
  margin-top: 60px;
  display: inline-block;
  height: calc(100vh - 60px);
  overflow-y: scroll;
  width: 100%;

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