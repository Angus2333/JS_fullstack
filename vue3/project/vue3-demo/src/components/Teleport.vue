<template>
  <div class="confirm-modal">
    <button @click="isOpen=true">打开</button>
    <teleport to="#foot-container">
      <div v-if="isOpen">
      <p>daaaaaaaaaaaaaa我才是小丑</p>
      <button @click="isOpen=false">取消</button>
    </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(){
    let isOpen=ref(false)
    return {isOpen}
  }
}
</script>

<style>

</style>