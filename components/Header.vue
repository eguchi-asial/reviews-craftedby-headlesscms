<template>
  <div class="header">
    <slot name="left" />
    <div class="center">
      <span class="logo-wrapper">
        <img
          class="logo"
          :class="{ 'no-title': !hasTitle }"
          src="/logo_header.png" />
      </span>
      {{ currentTitle }}
    </div>
    <slot name="right" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  name: 'Header',
  computed: {
    ...mapGetters(['currentTitle']),
    hasTitle () {
      return this.currentTitle.length > 0
    }
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
  min-height: 60px;
  height: auto;
  border-bottom: 1px dashed;
  padding: 10px;
  font-size: 14px;
  color: #000;
  background: #fff;

  .left {
    position: absolute;
    left: 0;
    padding-left: 10px;

    a {
      color: #000;
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
    display: flex;
    align-content: center;
    justify-content: center;

    .logo-wrapper {
      .logo {
        width: 50px;
        height: auto;
        margin-right: 10px;

        &.no-title {
          width: 80px;
        }
      }
    }
  }
}
</style>
