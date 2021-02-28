<template>
  <div>
    {{ currentTitle }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'Header',
  computed: {
    ...mapGetters(['currentTitle'])
  }
})

</script>
