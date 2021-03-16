<template>
  <div class="container">
    <Header>
      <div class="left" slot="left"><nuxt-link to="/">戻る</nuxt-link></div>
    </Header>
    <div class="contents">
      <nuxt-content :document="content" @click-tag="onClickTag" />
    </div>
  </div>
</template>
<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import Vue from 'vue'

export default Vue.extend({
  name: 'Review',
  data() {
    return {
      content: { title: '' }
    }
  },
  head() {
    return {
      // @ts-ignore
      title: `${this.content.title}`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          // @ts-ignore
          content: this.content.description
        },
        {
          hid: 'keywords',
          name: 'keywords',
          // @ts-ignore
          content: this.content.category
        },
        {
          hid: 'og:description',
          name: 'og:description',
          // @ts-ignore
          content: this.content.description
        }
      ]
    }
  },
  async asyncData ({ $content, route, store }) {
    let content: IContentDocument | IContentDocument[] = await $content(`review/${route.params.id}`).fetch()
    // ts-lintでIContentDocumentなのかIContentDocument[]何かハッキリさせる必要があるため、IContentDocument単体Objectに強制代入する
    content = Array.isArray(content) ? content[0] : content
    store.commit('CHANGE_TITLE', content.title)
    return {
      content
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
  width: 100vw;
  height: 100vh;
  // HEADER高さ
  padding: 60px 10px 100px 10px;
  overflow: scroll;

  div:first-child {
    background: #fff;
    margin: 10px 5px;
    padding: 10px;
  }
}

</style>
