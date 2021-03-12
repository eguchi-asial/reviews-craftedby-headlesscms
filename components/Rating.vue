<template>
  <div class="rating">
    <div
      v-for="star in Array.from({ length: rating })"
      :key="star"
      class="star">
      ★
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Rating',
  props: {
    rating: {
      type: Number,
      required: true
    }
  }
})

</script>
<style lang="scss" scoped>
.rating {
  display: flex;

  .star {
    font-size: 20px;
    color: #e67e22;
  }
}
</style>
