<template>
<div>
    <div class="navigation-bar">
        <img class="logo" src="../views/logo.svg">

            <div @click="menu()" >메뉴 소개</div>
            <div @click="translator()">순우리말 번역</div>
            <div @click="game()">우리말 게임</div>
        <!-- .hover > div {
  margin-left: 60px;
} -->
    </div>
</div>

</template>

<script>
export default {
    methods:{ menu(){this.$router.push("/")},game(){this.$router.push("/game")},translator(){this.$router.push("/translator")}},
}
</script>

<style scoped>

    .slogan{
        align-items: center;
        display: flex;
        font-size: 24px;
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
.navigation-bar > div:hover{
    color: #01a4cd;
    font-weight: bold;
}

</style>