<template>
<div>
  <Banner></Banner>
  <div id="divFrm"  style="overflow-x:hidden; overflow-y:hidden;">
  <iframe src="https://translate.kakao.com/"  frameborder="0" scrolling="no"></iframe>
  </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue"
export default {
    components:{
        Banner
    }
    
}
</script>
<style>
iframe{
  width: 100%;
  height:670px;  
}
</style>