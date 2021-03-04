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
            <nuxt-link :to="content.path">
              <div>{{ content.title }} {{ content.yyyymmdd }}</div>
              <div>{{ content.description }}</div>
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="sub">
        <h3>カテゴリー</h3>
        <ul>
          <li>aaa</li>
          <li>bbb</li>
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
  async asyncData ({ $content }) {
    const latest10Contents: IContentDocument | IContentDocument[] = await $content('review')
      .only(['id', 'category', 'title', 'description', 'yyyymmdd', 'path'])
      .sortBy('createdBy', 'desc')
      .limit(10)
      .fetch()
    return { latest10Contents }
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

    .items {
      .item {
        border: solid 1px;
        margin-bottom: 10px;
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