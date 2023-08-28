<template>
  <div>
    <p>our props:</p>
    <h6>{{ data }}</h6>
    <button @click="btnClick">click me</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  props: ['dt'],
  setup(props) {
    const data = ref(props.dt)
    const btnClick = () => console.log('button clickedgit apply')
    return {
      data,
      btnClick
    }
  }
}
</script>

<style></style>
