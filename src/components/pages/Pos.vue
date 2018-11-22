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
                    <div style="width:100%;height:30px;line-height:30px;vertical-align:middle;text-align:left;background-color:#edf4f7;border-bottom:1px solid #9b9b9b">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;常用商品
                    </div>
                    <div class="right-list-top">
                        <ul>
                            <li v-for="rightTopData in rightTopListData">
                                 {{rightTopData.goodsName}}<span>￥{{rightTopData.price}}元</span>
                            </li>
                            <div style="clear:both">

                            </div>
                        </ul>
                    </div>
                    <div class="right-list-bottom">
                        <el-tabs>
                            <el-tab-pane label="汉堡">
                                <div v-for="item in bottomDataList0">
                                    <el-card :body-style="{ padding: '0px' }" style="width:180px;height:250px;float:left;margin:20px">
                                        <img :src="item.goodsImg" class="image">
                                        <div style="padding: 14px;">
                                            <el-row>
                                                <el-col :span="7" style="text-align:left;color:rgb(206, 66, 31);">
                                                     ￥{{ item.price }}
                                                 </el-col>
                                                 <el-col :span="17" style="text-align:right">
                                                    {{item.goodsName}}
                                                 </el-col>
                                            </el-row>
                                            <div class="bottom clearfix">
                                                <el-button type="text" class="button" style="color:#8e8e93;">点击加入购物车</el-button>
                                            </div>
                                        </div>
                                    </el-card>
                                </div>
                                        
                            </el-tab-pane>
                            <el-tab-pane label="小吃">
                                <div v-for="item in bottomDataList1">
                                    <el-card :body-style="{ padding: '0px' }" style="width:180px;height:250px;float:left;margin:20px">
                                        <img :src="item.goodsImg" class="image">
                                        <div style="padding: 14px;">
                                            <el-row>
                                                <el-col :span="7" style="text-align:left;color:rgb(206, 66, 31);">
                                                     ￥{{ item.price }}
                                                 </el-col>
                                                 <el-col :span="17" style="text-align:right">
                                                    {{item.goodsName}}
                                                 </el-col>
                                            </el-row>
                                            <div class="bottom clearfix">
                                                <el-button type="text" class="button" style="color:#8e8e93;">点击加入购物车</el-button>
                                            </div>
                                        </div>
                                    </el-card>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="饮料">
                                <div v-for="item in bottomDataList2">
                                    <el-card :body-style="{ padding: '0px' }" style="width:180px;height:250px;float:left;margin:20px">
                                        <img :src="item.goodsImg" class="image">
                                        <div style="padding: 14px;">
                                            <el-row>
                                                <el-col :span="7" style="text-align:left;color:rgb(206, 66, 31);">
                                                     ￥{{ item.price }}
                                                 </el-col>
                                                 <el-col :span="17" style="text-align:right">
                                                    {{item.goodsName}}
                                                 </el-col>
                                            </el-row>
                                            <div class="bottom clearfix">
                                                <el-button type="text" class="button" style="color:#8e8e93;">点击加入购物车</el-button>
                                            </div>
                                        </div>
                                    </el-card>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="套餐">
                                <div v-for="item in bottomDataList3" >
                                    <span style="cursor:pointer">
                                    <el-card :body-style="{ padding: '0px' }" style="width:180px;height:250px;float:left;margin:20px;">
                                        <img :src="item.goodsImg" class="image">
                                        <div style="padding: 14px;cursor: pointer">
                                            <el-row>
                                                <el-col :span="7" style="text-align:left;color:rgb(206, 66, 31);">
                                                     ￥{{ item.price }}
                                                 </el-col>
                                                 <el-col :span="17" style="text-align:right">
                                                    {{item.goodsName}}
                                                 </el-col>
                                            </el-row>
                                            <div class="bottom clearfix">
                                                <el-button type="text" class="button" style="color:#8e8e93;">点击加入购物车</el-button>
                                            </div>
                                        </div>
                                    </el-card>
                                    </span>
                                </div>
                            </el-tab-pane>
                        </el-tabs>

                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name : "Pos",
    data(){
        return{
        tableData: [
        ],
        rightTopListData : [],
        rightBottomDataList :[
             {
              goodsId:1,
              goodsImg:"https://image.oss.m.1-joy.com/2018-11-01/30923667587021166513.jpg?x-oss-process=style/200",
              goodsName:'香辣鸡腿堡',
              goodsPrice:18
          }, {
              goodsId:2,
              goodsImg:"https://image.oss.m.1-joy.com/2018-08-09/39594809069301905717.jpg?x-oss-process=style/200",
              goodsName:'田园鸡腿堡',
              goodsPrice:15
          }, {
              goodsId:3,
              goodsImg:"https://image.oss.m.1-joy.com/2018-09-19/39483582168831930627.jpg?x-oss-process=style/200",
              goodsName:'和风汉堡',
              goodsPrice:15
          }, {
              goodsId:4,
               goodsImg:"https://image.oss.m.1-joy.com/2018-08-02/39001557572794275722.jpg?x-oss-process=style/200",
              goodsName:'快乐全家桶',
              goodsPrice:80
          }, {
              goodsId:5,
               goodsImg:"https://image.oss.m.1-joy.com/2018-07-30/38389221762708751550.jpg?x-oss-process=style/200",
              goodsName:'脆皮炸鸡腿',
              goodsPrice:10
          }, {
              goodsId:6,
               goodsImg:"https://image.oss.m.1-joy.com/2018-07-15/38385213433113038835.jpg?x-oss-process=style/200",
              goodsName:'魔法鸡块',
              goodsPrice:20
          }, {
              goodsId:7,
               goodsImg:"https://image.oss.m.1-joy.com/2018-07-12/38109805634289447137.jpg?x-oss-process=style/200",
              goodsName:'可乐大杯',
              goodsPrice:10
          }, {
              goodsId:8,
               goodsImg:"https://image.oss.m.1-joy.com/2018-07-15/38316083232363389908.jpg?x-oss-process=style/200",
              goodsName:'雪顶咖啡',
              goodsPrice:18
          }, {
              goodsId:9,
               goodsImg:"https://image.oss.m.1-joy.com/2018-07-30/38412429203953757183.jpg?x-oss-process=style/200",
              goodsName:'大块鸡米花',
              goodsPrice:15
          }, {
              goodsId:20,
               goodsImg:"https://image.oss.m.1-joy.com/2018-07-26/38036193251402824062.jpg?x-oss-process=style/200",
              goodsName:'香脆鸡柳',
              goodsPrice:17
          }

        ],
        bottomDataList0 : [],
        bottomDataList1 : [],
        bottomDataList2 : [],
        bottomDataList3 : [],
        }
    },
    created : function(){
        axios.get("https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/oftenGoods")
        .then(response=>{
            this.rightTopListData = response.data
        })
        .catch(error=>{
            
        });
         axios.get("https://www.easy-mock.com/mock/5b8b30dbf032f03c5e71de7f/kuaican/typeGoods")
            .then(response=>{
                var data0 = response.data[0];
                var data1 = response.data[1];
                var data2 =  response.data[2];
                var data3 = response.data[3];
                for(var i=0;i<data0.length;i++){
                    data0[i].goodsImg = this.rightBottomDataList[i].goodsImg
                }
                this.bottomDataList0 =data0;
                for(var i=0;i<data1.length;i++){
                    data1[i].goodsImg = this.rightBottomDataList[i+data0.length].goodsImg
                }
                this.bottomDataList1 = data1;
                 for(var i=0;i<data2.length;i++){
                    data2[i].goodsImg = this.rightBottomDataList[i+data0.length+data1.length].goodsImg
                }
                
                this.bottomDataList2 = data2;
                for(var i=0;i<data3.length;i++){
                    data3[i].goodsImg = this.rightBottomDataList[i+data0.length+data1.length+data2.length].goodsImg
                }
                this.bottomDataList3 = data3
            })
            .catch(error=>{
                console.log(error)
            })
    },
    mounted : function(){
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
        background-color:#ffffff;overflow-y: scroll;
    }
    .right-list-top ul li{
        list-style: none;
        background-color:#ffffff;
        padding:10px;
        margin:10px;
        text-align: center;
        height:25px;
        float: left;
        cursor:pointer

    }
    .right-list-top ul li span{
        color:#6A6AFF
    }
    .right-list-bottom{
        padding-left:50px;
    }
    .image{
        width:180px;height:180px;    cursor: pointer
    }
</style>


