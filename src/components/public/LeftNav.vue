<template>
    <div class="left-nav">
        <ul>
            <li>
                <i class="icon iconfont icon-money"></i>
                <div>收银</div>
            </li>
            <li>
                <i class="icon iconfont icon-dianpu"></i>
                <div>店铺</div>
            </li>
            <li>
                <i class="icon iconfont icon-hanbao"></i>
                <div>商品</div>
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
</style>


