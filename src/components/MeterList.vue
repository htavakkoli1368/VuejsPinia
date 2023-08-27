<template>
  <div>
    <SubMeter :dt="dataPar" />
  </div>
</template>

<script>
import { ref } from 'vue'
import SubMeter from './SubMeter.vue'
export default {
  components: { SubMeter },
  setup() {
    const dataPar = ref('testing meterlistdddd')
    return {
      dataPar,
      SubMeter
    }
  }
}
</script>
