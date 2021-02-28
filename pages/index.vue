<template>
  <div>
    <Header />
    <div class="container">
      <div>
        <Logo />
        <h2>新着レビュー(10)</h2>
        <ul>
          <li v-for="(content, index) in latest10Contents" :key="index">
            <nuxt-link :to="content.path">
              <div>{{ content.category}} {{ content.title }} {{ content.yyyymmdd }}</div>
              <div>{{ content.description }}</div>
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
import Header from '~/components/Header.vue'
import { mapMutations } from 'vuex'

export default Vue.extend({
  components: { Header },
  name: 'Home',
  async asyncData ({ $content }) {
    const latest10Contents: IContentDocument | IContentDocument[] = await $content('review')
      .only(['id', 'category', 'title', 'description', 'yyyymmdd'])
      .sortBy('createdBy', 'desc')
      .limit(10)
      .fetch()
    return { latest10Contents }
  },
  mounted () {
    this.CHANGE_TITLE('ホーム')
  },
  methods: {
    ...mapMutations(['CHANGE_TITLE'])
  }
})
</script>
