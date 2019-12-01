<template>
  <div>
    <Banner></Banner>
    <div class="main">
      <div class="topline">
        <span class="slogan">
          우리말을 지키다
          <br />우리말의 기본,앝
        </span>
      </div>
      <div class="bottomline">
        <span class="slogan2">
          우리말의
          <br />기본을
          <br />지키다
          <div class="line_components">
            <hr style="border: solid 1px white;width: 500px;" />
          </div>
        </span>
        <div class="container">
          <span class="slogan3">
            더 바르게,
            <br />더 정직하게,
            <br />더 근본있게. <br>
          </span>
          <span class="lorem">
            앝은 ‘어떤 사물의 바탕이나 토대를 비유적으로 이르는 말’로,
            <br />우리가 일상생활에서 외래어나 줄임말 대신 순우리말을 사용할
            <br />수 있도록 도와주는 온라인을 통한 생활 편의 서비스입니다.
            <br />일상 속 모든 말이 더 나은 언어가 될 수 있도록
            <br />앝은 바로 가는 것을 멈추지 않고
            <br />계속해서 고민하겠습니다.
            <hr style="border: solid 1px white;width:500px; margin-right:0;" />
          </span>
        </div>
      </div>
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
@font-face {
  font-family: "NanumGothic";
  src: url("./NanumGothic.ttf") format("truetype");
}
.main {
  height: 100px;
}

.slogan3 {
  font-size: 22px;
  color: white;

}
.lorem {
padding-top: 12px;
  font-size: 14px;
  color: white;
  display: inline-block;
}
.line_components {
  width: 400px;
}
.slogan {
  margin-left: 30px;
  margin-top: 20px;
  align-items: center;
  display: flex;
  font-size: 24px;
}
body {
  margin: 0;
  height: 0;
  font-family: NanumGothic;
}
.topline {
  margin-left: 87px;
  height: 310px;
  display: flex;
  margin-left: 60.8px;
}
.bottomline {
  height: 460px;
  background-color: #2a2a4c;
  padding-right: 60.8px;
  padding-left: 90.8px;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
}


.container{
    text-align: right;
    
}
.slogan2 {
  font-size: 36px;
  color: white;
}
</style>