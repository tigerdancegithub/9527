<template>
  <div id="main">
      <Header title='我的老虎'/>
      <Tabber/>
  </div>
</template>

<script>
import Header from "@/components/header";
import Tabber from "@/components/tabber";
export default {
  name: "mine",
  components: {
    Header,
    Tabber
  }
};
</script>

<style scoped>
</style>
