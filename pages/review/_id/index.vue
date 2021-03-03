<template>
  <div class="container">
    <Header>
      <div class="left" slot="left"><nuxt-link to="/">戻る</nuxt-link></div>
    </Header>
    <div class="contents">
      <nuxt-content :document="content" />
    </div>
  </div>
</template>
<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import Vue from 'vue'
import { mapMutations } from 'vuex'

export default Vue.extend({
  name: 'Review',
  data() {
    return {
      content: { title: '' }
    }
  },
  async asyncData ({ $content, route }) {
    const content: IContentDocument | IContentDocument[] = await $content(`review/${route.params.id}`).fetch()
    return {
      content
    }
  },
  mounted () {
    this.CHANGE_TITLE(this.content.title)
  },
  methods: {
    ...mapMutations(['CHANGE_TITLE'])
  }
})
</script>
<style lang="scss" scoped>
.contents {
  width: 100vw;
  height: 100vh;
  padding: 50px 10px 10px 10px;
  overflow: scroll;
}
</style>
