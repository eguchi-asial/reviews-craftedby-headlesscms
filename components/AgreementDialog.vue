<template>
  <div class="agreement-dialog">
    <div class="wrapper">
      <div class="message">{{ mainMessage }}</div>
      <div class="action">
        <span class="button positive" @click="$emit('positive')">{{
          positiveActionMessage
        }}</span>
        <span class="button negative" @click="$emit('negative')">{{
          negativeActionMessage
        }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AgreementDialog',
  props: {
    mainMessage: {
      type: String,
      required: true,
    },
    positiveActionMessage: {
      type: String,
      required: false,
      default: () => 'YES',
    },
    negativeActionMessage: {
      type: String,
      required: false,
      default: () => 'NO',
    },
  },
})
</script>
<style lang="scss" scoped>
.agreement-dialog {
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.9);

  .wrapper {
    background: #fff;
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .message {
      font-size: 24px;
      font-weight: bold;
    }

    .action {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .button {
        font-size: 30px;
        font-weight: bold;

        &.positive {
          color: #3498db;
        }

        &.negative {
          color: #999;
        }
      }
    }
  }
}
</style>
