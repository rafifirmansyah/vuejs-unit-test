<template>
  <div>
    <Child v-for="id in [1, 2, 3]" :key="id" />
  </div>
</template>

<script>
import Child from "@/components/Child.vue"

export default {
  name: "ParentWithManyChildren",
  components: { Child }
}
</script>