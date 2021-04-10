<template>
  <div class="container">
    <agreement-dialog
      v-if="!isAnswered"
      main-message="18才以上ですか？"
      @positive="isAnswered = true"
      @negative="$router.go(-1)"
    />
    <Header>
      <div slot="left" class="left"><nuxt-link to="/">戻る</nuxt-link></div>
    </Header>
    <div class="contents">
      <nuxt-content :document="content" @click-tag="onClickTag" />
    </div>
  </div>
</template>
<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import Vue from 'vue'

/**
 * 18+コンテンツなので必ず同意をとってから表示する
 */
export default Vue.extend({
  name: 'Review',
  async asyncData({ $content, route, store }) {
    let content: IContentDocument | IContentDocument[] = await $content(
      route.path
    ).fetch()
    // ts-lintでIContentDocumentなのかIContentDocument[]何かハッキリさせる必要があるため、IContentDocument単体Objectに強制代入する
    content = Array.isArray(content) ? content[0] : content
    store.commit('CHANGE_TITLE', content.title)
    return {
      content,
    }
  },
  data() {
    return {
      content: { title: '' },
      isAnswered: false,
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
          content: this.content.description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          // @ts-ignore
          content: this.content.category,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          // @ts-ignore
          content: this.content.description,
        },
      ],
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
