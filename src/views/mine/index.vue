<template>
  <div id="main">
      <Header title='我的老虎'/>
      <Login/>
      <Tabber/>
  </div>
</template>

<script>
import Header from "@/components/header";
import Tabber from "@/components/tabber";
import Login from "@/components/login";

export default {
  name: "mine",
  components: {
    Header,
		Tabber,
		Login
  }
};
</script>

<style scoped>

</style>
