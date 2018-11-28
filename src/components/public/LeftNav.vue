<template>
    <div class="left-nav">
        <ul>
            <li>
                <router-link to="/">
                    <i class="icon iconfont icon-money"></i>
                    <div>收银</div>
                </router-link>
            </li>
            <li>
                <router-link :to="{'name':'shop',params : {'userName' : 'ZD'}}">
                    <i class="icon iconfont icon-dianpu"></i>
                    <div>店铺</div>
                </router-link>
            </li>
            <li>
                <router-link to="/Shop/shop1">
                    <i class="icon iconfont icon-dianpu"></i>
                    <div>店铺1</div>
                </router-link>
            </li>
            <li>
                <router-link to="/Shop/shop2">
                    <i class="icon iconfont icon-dianpu"></i>
                    <div>店铺2</div>
                </router-link>
            </li>
            <li>
                <router-link to="/Product">
                <i class="icon iconfont icon-hanbao"></i>
                <div>商品</div>
                </router-link>
            </li>
            <li>
                <i class="icon iconfont icon-wode"></i>
                <div>会员</div>
            </li>
            <li>
                <i class="icon iconfont icon-tongji"></i>
                <div>统计</div>
            </li>
            <li>
                <i class="icon iconfont icon-shezhi"></i>
                <div>设置</div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name : 'leftNav'
}
</script>
<style>
 .left-nav{
     width : 5%;
     height : 100vh;
     background-color : #1D8ce0;
     color : #FFF;
     font-size : 14px;
     float : left;
     padding : 0px;
     margin : 0px;
 }
 .left-nav ul {
     padding : 0px;
     margin : 0px;

 }
 .left-nav li{
    list-style : none;
    text-align : center;
    border-bottom : 1px solid #20a0ff;
    padding : 10px;
 }
 .iconfont{
     font-size : 14px
 }
 a{
    color : #FFF;
    text-decoration: none
}
</style>


