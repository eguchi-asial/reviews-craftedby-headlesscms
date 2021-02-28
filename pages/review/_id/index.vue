<template>
  <div>
    <Header>
      <div class="left" slot="left"><nuxt-link to="/">戻る</nuxt-link></div>
    </Header>
    <div class="container">
      <nuxt-content :document="content" />
    </div>
  </div>
</template>
<script lang="ts">
import { IContentDocument } from '@nuxt/content/types/content'
import Vue from 'vue'
import Header from '~/components/Header.vue'
import { mapMutations } from 'vuex'

export default Vue.extend({
  components: { Header },
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
