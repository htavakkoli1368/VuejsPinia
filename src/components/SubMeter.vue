<template>
  <div>
    <p>our props:</p>
    <h6>{{ data }}</h6>
    <button @click="btnClick">click me</button>
    <div style="width: 400px; height: 130px; margin-top: 20px; border-style: dotted">
      <br />
      <span>Firstmame: {{ firstname }}</span> <br />
      <span>Age: {{ age }}</span> <br />
    </div>
    <br /><br />
    <label> Enter Firstname </label><br />
    <input
      type="text"
      v-model="search"
      style="font-size: 20px; border-radius: 10px"
      placeholder=" Name ..."
    />
    <br />
    <br />
    <button type="button" @click="getAge">Guess Age</button>
    <br />
    <br />
    <br />
    <input type="radio" value="pop" /> <label>Save my data</label>
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
