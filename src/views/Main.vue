<template>
<div>
    <div class="navigation-bar">
        <img class="logo" src="./logo.svg">
        
            <div @click="menu()">메뉴 소개</div>
            <div @click="translator()">순우리말 번역</div>
            <div @click="game()">우리말 게임</div>
        
    </div>
    <div class="topline"><span class="slogan">우리말을 지키다<br>우리말의 기본,앝</span></div>
    <div class="bottomline"></div>
</div>
</template>

<script>
export default {
    methods:{ menu(){this.$router.push("/")},game(){this.$router.push("/game")},translator(){this.$router.push("/translator")}},
}
</script>

<style>
@font-face {
    font-family: 'NanumGothic';
    src: url('./NanumGothic.ttf') format('truetype');
}
    .slogan{
        align-items: center;
        display: flex;
        font-size: 24px;
    }
    body    {
        margin: 0;
        height: 100%;
        font-family: NanumGothic;
        
    }
    .topline{
        margin-left: 87px;
        height: 300px;
        display: flex;
    }
    .bottomline{
        height: 500px;
        background-color: #2A2A4C
    }
    .navigation-bar {
    
    margin-left: 60.8px;
    margin-right: 60.8px;
    display: flex;
    align-items: center;
    width: 766.4px;  /* i'm assuming full width */
    height: 80px; /* change it to desired width */

}
.logo {
    display: inline-block;
    vertical-align: top;
    width: 98px;
    height: 24px;
    margin-left: 30px;
    margin-right: 10px;
        /* if you want it vertically middle of the navbar. */
}
.navigation-bar > div {
    display: inline-block;
    vertical-align: top;
    margin-left: 60px;
    height: 80px;        /* if you want it to take the full height of the bar */
    line-height: 80px;    /* if you want it vertically middle of the navbar */
    font-size: 14px;
}
</style>