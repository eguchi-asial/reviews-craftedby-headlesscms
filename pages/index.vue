<template>
  <div class="container">
    <Header />
    <div class="contents">
      <div class="main">
        <Logo />
        <h2>新着レビュー({{ latest10Contents.length }})</h2>
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
import { mapMutations } from 'vuex'

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
  async asyncData ({ $content }) {
    const latest10Contents: IContentDocument | IContentDocument[] = await $content('review')
      .only(['id', 'category', 'title', 'description', 'eyecatch', 'yyyymmdd', 'path', 'createdAt'])
      .sortBy('createdBy', 'desc')
      .limit(10)
      .fetch()
    const categories: IContentDocument | IContentDocument[] = await $content('review')
      .only(['category'])
      .fetch()
    // @ts-ignore 抽出された全てのカテゴリー配列を1つにまとめた後、一位な配列に組み直してセットする
    const uniqueCategories = Array.from(new Set(categories.map(category => category.category).flat()))
    return {
      latest10Contents,
      categories: uniqueCategories
    }
  },
  mounted () {
    this.CHANGE_TITLE('')
  },
  methods: {
    ...mapMutations(['CHANGE_TITLE'])
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

  .main {
    margin: 10px;
    padding: 10px;
    background: #fff;
    font-size: 18px;
    overflow: scroll;

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
            width: 120px;
            height: auto;
          }

          .right {
            display: flex;
            flex-direction: column;
            padding: 10px;

            .title {
              font-weight: bold;
              font-size: 18px;
            }

            .description {
              font-size: 16px;
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