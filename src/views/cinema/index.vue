<template>
  <div id="main">
      <Header title='老虎影院'/>
      <Tabber/>
  </div>
</template>

<script>
import Header from "@/components/header";
import Tabber from "@/components/tabber";
export default {
  name: "cinema",
  components: {
    Header,
    Tabber
  }
};
</script>

<style scoped>
</style>
