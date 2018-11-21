<template>
    <div>
        <el-row>
            <el-col :span='7' class="pos-main-left" >
                <el-tabs>
                    <el-tab-pane label="点餐">
                       <el-table height="600" :data="tableData" border show-summary style="width: 100%" >
                           <el-table-column prop="goodsName" label="商品" >

                           </el-table-column>
                           <el-table-column prop="goodsPrice" label="价格" width="100">

                           </el-table-column>
                           <el-table-column prop="goodsCount" label="数量" width="100">

                           </el-table-column>
                           <el-table-column width="100" fixed="right" label="操作" >
                                <template slot-scope="scope">
                                    <el-button type="text" size="small">删除</el-button>
                                    <el-button type="text" size="small">增加</el-button>
                                </template>
                           </el-table-column>
                       </el-table>
                        <el-button type="warning" style="margin-top:50px">挂单</el-button>
                        <el-button type="danger" style="margin-top:50px">删除</el-button>
                        <el-button type="success" style="margin-top:50px">结账</el-button>
                    </el-tab-pane>
                    <el-tab-pane label="挂单">
                        挂单
                    </el-tab-pane>
                    <el-tab-pane label="外卖">
                        外卖
                    </el-tab-pane>
                </el-tabs>
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
        tableData: [{
          goodsName: '可口可乐',
          goodsPrice: 8,
          goodsCount:1
        }, {
          goodsName: '香辣鸡腿堡',
          goodsPrice: 15,
          goodsCount:1
        }, {
          goodsName: '爱心薯条',
          goodsPrice: 8,
          goodsCount:1
        }, {
          goodsName: '甜筒',
          goodsPrice: 8,
          goodsCount:1
        }
        ]
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
        border-right:1px solid #c0ccda;
        overflow: scroll
    }
    .pos-main-right{
        height:100vh;
        background-color:#ffffff;
    }
</style>


