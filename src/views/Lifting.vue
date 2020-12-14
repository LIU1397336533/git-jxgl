<template>
  <div class="Details_page">
    <div class="header">
      <div class="navigation">
        <i class="iconfont icon-fanhui tubiao" @click="fanhuizhuye"></i>
        日常检查情况
        <i class="iconfont icon-lingdang tubiao"></i>
      </div>
    </div>
    <div class="conter">
        <div class="tiems">
            <div class="tiemsjuti">2020.11.30 <i class="iconfont icon-shixinsanjiao"></i></div>
            <div><el-checkbox v-model="checked">只看未生效</el-checkbox></div>
        </div>
        <div class="tiems">汽车起重机吊装令 <span>(0)</span></div>
        <div class="tiems">覆代式起重机吊装令<span>(2)</span></div>
        <div class="particulars">
            <div class="left">
                <div>11:00</div>
                <div class="xiawu">13:00</div>
            </div>
            <div class="rigth">
                <div>2020.11.30覆代式起重机QUY501</div>
                <div>项目设备编码: <span>DGJ-01-021-Z110</span><span class="siji">司机: 杨国福</span></div>
            </div>
        </div>
        <div class="particulars_xia">
            <div class="left">
                <div>11:00</div>
                <div class="xiawu">13:00</div>
            </div>
            <div class="rigth">
                <div>2020.11.30覆代式起重机QUY501 <span class="wsx">未生效</span></div>
                <div>项目设备编码: <span>DGJ-01-021-Z110</span><span class="siji">司机: 杨国福</span></div>
            </div>
        </div>
        <div class="tiems">门市起重机吊装令 <span>(0)</span></div>
        <div class="tiems">塔式起重机吊装令 <span>(0)</span></div>

    </div>
    <div class="foot">
      <i class="iconfont icon-jiahao jiahao"></i>日常检查记录
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
         checked: false
    }
  },
  methods: {
    tabSwitch: function (index, event) {},
    fanhuizhuye() {
      this.$router.push({ path: '/' })
    },
    async getjixiefun() {
      let getjixielist = await getjixie({})
      this.getjixielist = getjixielist.result.content
    },
  },

  mounted() {},
}
</script>

<style lang="scss" scoped>
.Details_page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    height: 120px;
    line-height: 120px;
    padding: 0px 15px 0px 15px;
    box-sizing: border-box;
    background: #1d97e9;
    .navigation {
      display: flex;
      justify-content: space-between;
      font-size: 30px;
      color: #fff;
      .tubiao {
        font-size: 30px;
      }
    }
  }
  .conter {
    flex: 1;
    width: 100%;
    padding: 20px 15px 0px 15px;
    box-sizing: border-box;
    background: rgb(247, 247, 247);
    .el-checkbox__label{
        font-size: 30px;
    }
    .tiems{
        width: 100%;
        height: 70px;
        line-height: 70px;
        background: #fff;
        display: flex;
        justify-content: space-between;
        padding: 0px 10px 0px 10px;
        box-sizing: border-box;
        margin-bottom: 20px;
        .tiemsjuti{
            color: #40a4d6;
        }
    }
    .particulars{
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        .left{
            width: 100px;
            height: 70px;
            border-right: 5px solid rgb(11, 226, 76);
            .xiawu{
                color: rgb(179, 177, 177);
            }
        }
        .rigth{
            height: 70px;

            flex: 1;
            margin-left: 20px;
            
            .siji{
                margin-left: 90px;
            }
        }
    }
     .particulars_xia{
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        .left{
            width: 100px;
            height: 70px;
            border-right: 5px solid rgb(226, 11, 29);
             .xiawu{
                color: rgb(179, 177, 177);
            }
        }
        .rigth{
            height: 70px;
            flex: 1;
            margin-left: 20px;
            .wsx{
                color: rgb(214, 31, 31);
                margin-left: 90px;
            }
            .siji{
                margin-left: 90px;
            }
        }
    }

  }
  .foot {
    width: 100%;
    height: 80px;
    line-height: 80px;
    background: #1d97e9;
    text-align: center;
    font-size: 30px;
    color: #fff;
    .jiahao {
      font-size: 30px;
    }
  }
}
</style>
<style >
 .el-checkbox__label{
        font-size: 20px;
    }
    .el-checkbox__inner{
        width: 24px;
        height: 24px;
    }
</style>