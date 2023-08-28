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
    const search = ref('')
    const age = ref('')
    const firstname = ref('')
    const btnClick = () => console.log('button clicked')
    return {
      data,
      btnClick,
      search,
      age,
      firstname
    }
  }
}
</script>

<style></style>
