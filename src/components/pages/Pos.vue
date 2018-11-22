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
            <el-col :span="17" class="pos-main-right" style="background-color:#EEF2F8">
                <div>
                    <div style="width:100%;height:30px;line-height:30px;vertical-align:middle;text-align:left;background-color:#edf4f7;padding-left:80px;border-bottom:1px solid #9b9b9b">
                      常用商品
                    </div>
                    <div class="right-list-top">
                        <ul>
                            <li v-for="rightTopData in rightTopListData">
                                 {{rightTopData.goodsName}}<span>￥{{rightTopData.price}}元</span>
                            </li>
                        </ul>
                    </div>
                    <div class="">

                    </div>
                </div>
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
        ],
        rightTopListData : [
          {
              goodsId:1,
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsName:'和风汉堡',
              price:15
          }, {
              goodsId:4,
              goodsName:'快乐全家桶',
              price:80
          }, {
              goodsId:5,
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
              goodsName:'魔法鸡块',
              price:20
          }, {
              goodsId:7,
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:8,
              goodsName:'雪顶咖啡',
              price:18
          }, {
              goodsId:9,
              goodsName:'大块鸡米花',
              price:15
          }, {
              goodsId:20,
              goodsName:'香脆鸡柳',
              price:17
          }
        ],
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
    .right-list-top ul li{
        list-style: none;
        background-color:#ffffff;
        padding:10px;
        margin:10px;
        text-align: center;
        height:25px;
        float: left;

    }
    .right-list-top ul li span{
        color:#6A6AFF
    }
</style>


