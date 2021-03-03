<template>
  <div class="header">
    <slot name="left" />
    <div class="center">{{ currentTitle }}</div>
    <slot name="right" />
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
<style lang="scss" scoped>
.header {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 19999;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  height: auto;
  border-bottom: 1px solid;
  padding: 10px;
  font-size: 14px;
  color: #fff;
  background: #27ae60;

  .left {
    position: absolute;
    left: 0;
    padding-left: 10px;

    a {
      color: #fff;
      text-decoration: none;
    }
  }

  .right {
    position: absolute;
    right: 0;
    padding-left: 10px;
  }

  .center {
    font-weight: bold;
    font-size: 18px;
  }
}
</style>
