<template>
    <div>
        <el-row>
            <el-col :span='7' class="pos-main-left" >
            我是订单栏
            <input type="hidden" id="test" value="123456">
            </el-col>
            <el-col :span="17" class="pos-main-right">
             我是产品栏
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name : "Pos",
    data(){
        return{
        }
    },
    mounted : function(){
        console.log($("#test").val())
    }
      
}

</script>
<style scoped>
    .pos-main-left{
        height:100vh;
        background-color:#F9FAFC;
        border-right:1px solid #c0ccda
    }
    .pos-main-right{
        height:100vh;
        background-color:#ffffff;
    }
</style>


