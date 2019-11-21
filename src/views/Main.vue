<template>
<div>
    <div class="navigation-bar">
        <img class="logo" src="logo.png">
        <div @click="menu()">메뉴 소개</div>
        <div @click="translator()">순우리말 번역</div>
        <div @click="game()">우리말 게임</div>
    </div>
    <div class="topline"><span>우리말을 지키다<br>우리말의 기본,앝</span></div>
    <div class="bottomline"></div>
</div>
</template>

<script>
export default {
    methods:{ menu(){this.$router.push("/")},game(){this.$router.push("/game")},translator(){this.$router.push("/translator")}},
}
</script>

<style>
body{
    margin: 0;
}
    .navigation-bar {
    
    width: 100%;  /* i'm assuming full width */
    height: 80px; /* change it to desired width */

}
.logo {
    display: inline-block;
    vertical-align: top;
    width: 50px;
    height: 50px;
    margin-right: 20px;
    margin-top: 15px;    /* if you want it vertically middle of the navbar. */
}
.navigation-bar > div {
    display: inline-block;
    vertical-align: top;
    margin-right: 20px;
    height: 80px;        /* if you want it to take the full height of the bar */
    line-height: 80px;    /* if you want it vertically middle of the navbar */
}
</style>