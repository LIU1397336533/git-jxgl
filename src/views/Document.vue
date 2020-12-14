<template>
  <div id="document">
    <div class="header">
      <div class="headleft">
        <i class="icon iconfont icon-zuojiantou" @click="returnBefore"></i>
        <span class="zi">机械档案</span>
      </div>
      <div class="headright">
        <i class="icon iconfont icon-lingdang"></i>
        <span class="dian">•</span>
      </div>
    </div>
    <div class="details">
      <div class="content1">
        <span v-if="documentData.statue == 0" class="service">使用中</span>
        <span v-else-if="documentData.statue == 1" class="service">未使用</span>
        <p class="machine">{{ documentData.machineryName }}</p>
        <span>{{ documentData.specification }}</span>
      </div>
      <div class="content2">
        <p class="code">{{ documentData.equipmentCode }}</p>
        <span class="type">{{ documentData.remark }}</span>
        <span class="perfect" v-if="documentData.delFlag === 0">信息未完善</span>
        <span class="perfect" v-else-if="documentData.delFlag === 1">信息完善</span>
      </div>
      <div class="content3">
        <p>
          所属工点：
          <span class>{{ documentData.projectName }}</span>
        </p>
        <p>
          进场日期：
          <span>{{ documentData.createTime }}</span>
        </p>
        <p>
          申报人：
          <span>{{ documentData.updateBy }}</span>
        </p>
        <p>
          申报时间：
          <span>{{ documentData.createTime }}</span>
        </p>
      </div>
    </div>
    <div class="tab">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">设备信息</mt-tab-item>
        <mt-tab-item id="2">设备资料</mt-tab-item>
        <mt-tab-item id="3">检查及维保</mt-tab-item>
        <mt-tab-item id="4">更多信息</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <div class="firstMessage">
            <div class="basisMessage">
              <div class="title">基本信息</div>
              <div>
                <span>机械名称</span>
                <span>somename</span>
              </div>
              <div>
                <span>型号规格</span>
                <span>sometype</span>
              </div>
              <div>
                <span>项目设备编码</span>
                <span>somecode</span>
              </div>
              <div>
                <span>属性</span>
                <span>someprops</span>
              </div>

              <div class="special" v-show="showMore">
                <div>
                  <span>机械名称</span>
                  <span>somename</span>
                </div>
                <div>
                  <span>型号规格</span>
                  <span>sometype</span>
                </div>
                <div>
                  <span>项目设备编码</span>
                  <span>somecode</span>
                </div>
              </div>
            </div>
            <div class="btn">
              <div @click="displayMore">
                {{ more }}
                <span :class="'iconfont ' + iconName"></span>
              </div>
            </div>

            <div class="useMessage">
              <div class="title">使用信息</div>
              <div>
                <span>机械名称</span>
                <span>somename</span>
              </div>
              <div>
                <span>型号规格</span>
                <span>sometype</span>
              </div>
              <div>
                <span>项目设备编码</span>
                <span>somecode</span>
              </div>
              <div>
                <span>属性</span>
                <span>someprops</span>
              </div>

              <div class="special" v-show="showMore1">
                <div>
                  <span>机械名称</span>
                  <span>somename</span>
                </div>
                <div>
                  <span>型号规格</span>
                  <span>sometype</span>
                </div>
                <div>
                  <span>项目设备编码</span>
                  <span>somecode</span>
                </div>
              </div>
            </div>
            <div class="btn">
              <div @click="displayMore1">
                {{ more1 }}
                <span :class="'iconfont ' + iconName1"></span>
              </div>
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">设备资料</mt-tab-container-item>
        <mt-tab-container-item id="3">检查及维保</mt-tab-container-item>
        <mt-tab-container-item id="4">更多信息</mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import { Indicator } from "mint-ui";
import BScroll from "better-scroll";
import { tooLongToTired } from "../utils/api";
export default {
  name: "Document",
  data() {
    return {
      selected: "1",
      documentData: {},
      iconName: "icon-ico_open",
      more: "查看更多",
      showMore: false,
      iconName1: "icon-ico_open",
      more1: "查看更多",
      showMore1: false
    };
  },
  methods: {
    displayMore() {
      this.showMore = !this.showMore;
      if (this.showMore) {
        this.more = "收起";
        this.iconName = "icon-arrow-up";
      } else {
        this.more = "查看更多";
        this.iconName = "icon-ico_open";
      }
    },
    displayMore1() {
      this.showMore1 = !this.showMore1;
      if (this.showMore1) {
        this.more1 = "收起";
        this.iconName1 = "icon-arrow-up";
      } else {
        this.more1 = "查看更多";
        this.iconName1 = "icon-ico_open";
      }
    },
    returnBefore() {
      this.$router.go(-1);
    },
    async initData() {
      // Indicator.open({
      //   text: "Loading...",
      //   spinnerType: "fading-circle"
      // });
      let data = await tooLongToTired();
      // console.log(data.result);
      // Indicator.close();
    }
  },
  updated() {
    this.scroll.refresh();
  },
  mounted() {
    if (!localStorage.getItem("machineData")) {
      this.$router.push({ path: "/" });
    }
    this.documentData = JSON.parse(localStorage.getItem("machineData"));
    //   console.log( JSON.parse( localStorage.getItem('machineData')))
    this.initData();
    this.scroll = new BScroll(".mint-tab-container-item", {
      click: true
    });
  }
};
</script>

<style lang="scss">
#document {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-size: 28px;
  box-sizing: border-box;
  overflow: hidden;
  .icon {
    font-size: 35px;
  }
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 20px;
    box-sizing: border-box;
    color: #fff;
    .zi {
      padding-left: 30px;
      font-size: 32px;
    }
    .headright {
      position: relative;
    }
    .dian {
      position: absolute;
      top: -20px;
      right: -3px;
      color: red;
      font-size: 40px;
    }
  }
  .details {
    box-sizing: border-box;
    padding: 30px 30px;
    background: #fff;
    div {
      padding: 8px 0;
    }
    .content1 {
      display: flex;
      flex-direction: row;
      .service {
        background: #2d8bef;
        font-size: 20px;
        color: #fff;
        padding: 5px 10px;
        border-radius: 10px;
      }
      .machine {
        padding: 0 10px;
      }
    }
    .content2 {
      display: flex;
      flex-direction: row;
      font-size: 20px;
      padding: 10px 0;
      .code {
        color: #696969;
        font-size: 25px;
      }
      .type {
        background: #f5eae6;
        border: 1px solid #db455e;
        color: #db455e;
        margin: 0 10px;
        box-sizing: border-box;
        padding: 0 8px;
        border-radius: 15px;
      }
      .perfect {
        color: #b8b3b3;
        border: #b8b3b3 1px solid;
        box-sizing: border-box;
        padding: 0 8px;
        border-radius: 15px;
      }
    }
    .content3 {
      display: flex;
      flex-wrap: wrap;
      color: #696969;
      font-size: 18px;
      padding: 10px 0;
      p {
        width: 45%;
        padding: 15px 0;
        &:nth-child(2) {
          width: 55%;
        }
        &:nth-child(4) {
          width: 55%;
        }
        span {
          padding-left: 10px;
        }
      }
    }
  }
  .tab {
    width: 100%;
    flex: 1;
    flex-shrink: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: #f6f6f8;
    > .mint-tab-container {
      flex: 1;
      flex-shrink: 0;
      > .mint-tab-container-wrap {
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding: 20px 20px;
        box-sizing: border-box;
        .btn {
          width: 100%;
          padding: 10px 0;
          border-bottom-left-radius: 40px;
          border-bottom-right-radius: 40px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          >div{
            width: 30%;
            text-align: center;
            padding: 5px 20px;
            background: #f2f2f2;
            color: #656565;
            border-radius: 40px;
          }
        }
        > .mint-tab-container-item {
          width: 100%;
          height: 100%;
          overflow: hidden;
          .firstMessage {
            width: 100%;
            height: auto;
            .basisMessage,
            .useMessage {
              width: 100%;
              background: #fff;
              border-top-left-radius: 40px;
              border-top-right-radius: 40px;
              padding: 25px 20px;
              box-sizing: border-box;
              .title {
                font-size: 30px;
              }
              div {
                width: 100%;
                height: 50px;
                display: flex;
                flex-direction: row;

                span {
                  padding: 10px 20px;
                  &:nth-child(1) {
                    width: 40%;
                    color: #9d9d9d;
                  }
                  &:nth-child(2) {
                    width: 60%;
                    color: #8c8c8c;
                  }
                }
              }
              > .special {
                width: 100%;
                height: 150px;
                display: flex;
                flex-direction: column;
                div {
                  width: 100%;
                  height: 50px;
                  display: flex;
                  flex-direction: row;

                  span {
                    padding: 10px 20px;
                    &:nth-child(1) {
                      width: 40%;
                      color: #9d9d9d;
                    }
                    &:nth-child(2) {
                      width: 60%;
                      color: #8c8c8c;
                    }
                  }
                }
              }
            }
            .useMessage {
              margin-top: 30px;
              width: 100%;

              background: #fff;
              // border-radius: 40px;
              padding: 25px 20px;
              box-sizing: border-box;

              > div {
                width: 100%;
                height: 50px;
              }
              > .special {
                width: 100%;
                height: 150px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
