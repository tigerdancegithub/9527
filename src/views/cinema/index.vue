<template>
  <div id="main">
      <Header title='老虎影院'/>
<div id="content">
			<div class="cinema_menu">
				<div class="city_switch">
					全城 <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="brand_swtich">
					品牌 <i class="iconfont icon-lower-triangle"></i>
				</div>
				<div class="feature_switch">
					特色 <i class="iconfont icon-lower-triangle"></i>
				</div>
			</div>
      <CinemaList/>
		
		</div>


      <Tabber/>
  </div>
</template>

<script>
import Header from "@/components/header";
import Tabber from "@/components/tabber";
import CinemaList from "@/components/cinemaList";
export default {
  name: "cinema",
  components: {
    Header,
    Tabber,
    CinemaList
  }
};
</script>

<style scoped>
#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
#content .cinema_body{ flex:1; overflow:auto;}

</style>
