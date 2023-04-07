<template>
  <div>
    <h1>this is pageOne</h1>
    <button @click="goPage2">跳转到页面二</button>
  </div>
</template>

<script>
export default {
  methods: {
    goPage2() {
      this.$router.push({
        path: "pageTwo"
      })
    }
  }
}
</script>