<template>
  <div id="TodayProject">
    <div class="scroll">
      <div class="checkbox">
        <div class="checktop">
          <span>盾构机日常检查表</span>
          <span class="execute">执行中(0/16)</span>
        </div>
        <div class="checklist">
          <div class="checklist1">
            <span>
              <span class="jian">日检</span>
              <span class="name">2020.12.14土压平衡盾构机直</span>
            </span>
            <span class="dai">待查</span>
          </div>
          <div class="checklist2">
            <span>项目设备编码：sdfsfdfsf</span>
          </div>
        </div>
        <div class="checklist">
          <div class="checklist1">
            <span>
              <span class="jian">日检</span>
              <span class="name">2020.12.14土压平衡盾构机直</span>
            </span>
            <span class="dai">待查</span>
          </div>
          <div class="checklist2">
            <span>项目设备编码：sdfsfdfsf</span>
          </div>
        </div>
        <div class="checklist">
          <div class="checklist1">
            <span>
              <span class="jian">日检</span>
              <span class="name">2020.12.14土压平衡盾构机直</span>
            </span>
            <span class="dai">待查</span>
          </div>
          <div class="checklist2">
            <span>项目设备编码：sdfsfdfsf</span>
          </div>
        </div>
        <div class="special" v-show="showMore">
          <div class="checklist">
            <div class="checklist1">
              <span>
                <span class="jian">日检</span>
                <span class="name">2020.12.14土压平衡盾构机直</span>
              </span>
              <span class="dai">待查</span>
            </div>
            <div class="checklist2">
              <span>项目设备编码：sdfsfdfsf</span>
            </div>
          </div>
          <div class="checklist">
            <div class="checklist1">
              <span>
                <span class="jian">日检</span>
                <span class="name">2020.12.14土压平衡盾构机直</span>
              </span>
              <span class="dai">待查</span>
            </div>
            <div class="checklist2">
              <span>项目设备编码：sdfsfdfsf</span>
            </div>
          </div>
        </div>

        <div class="btn">
          <div @click="displayMore">
            {{ more }}
            <span :class="'iconfont ' + iconName"></span>
          </div>
        </div>
      </div>
      <div class="checkbox">
        <div class="checktop">
          <span>盾构机日常检查表</span>
          <span class="execute">执行中(0/16)</span>
        </div>
        <div class="checklist">
          <div class="checklist1">
            <span>
              <span class="jian">日检</span>
              <span class="name">2020.12.14土压平衡盾构机直</span>
            </span>
            <span class="dai">待查</span>
          </div>
          <div class="checklist2">
            <span>项目设备编码：sdfsfdfsf</span>
          </div>
        </div>
        <div class="checklist">
          <div class="checklist1">
            <span>
              <span class="jian">日检</span>
              <span class="name">2020.12.14土压平衡盾构机直</span>
            </span>
            <span class="dai">待查</span>
          </div>
          <div class="checklist2">
            <span>项目设备编码：sdfsfdfsf</span>
          </div>
        </div>
        <div class="checklist">
          <div class="checklist1">
            <span>
              <span class="jian">日检</span>
              <span class="name">2020.12.14土压平衡盾构机直</span>
            </span>
            <span class="dai">待查</span>
          </div>
          <div class="checklist2">
            <span>项目设备编码：sdfsfdfsf</span>
          </div>
        </div>
        <div class="special" v-show="showMore1">
          <div class="checklist">
            <div class="checklist1">
              <span>
                <span class="jian">日检</span>
                <span class="name">2020.12.14土压平衡盾构机直</span>
              </span>
              <span class="dai">待查</span>
            </div>
            <div class="checklist2">
              <span>项目设备编码：sdfsfdfsf</span>
            </div>
          </div>
          <div class="checklist">
            <div class="checklist1">
              <span>
                <span class="jian">日检</span>
                <span class="name">2020.12.14土压平衡盾构机直</span>
              </span>
              <span class="dai">待查</span>
            </div>
            <div class="checklist2">
              <span>项目设备编码：sdfsfdfsf</span>
            </div>
          </div>
        </div>

        <div class="btn">
          <div @click="displayMore1">
            {{ more }}
            <span :class="'iconfont ' + iconName"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Constructor",
  data() {
    return {
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
    }
  },
   updated() {
    this.scroll.refresh();
  },
  mounted() {
    this.scroll = new BScroll("#TodayProject", {
      click: true
    });
  }
};
</script>

<style lang="scss">
#TodayProject {
  display: flex;
  width: 100%;
  flex-direction: column;

  .icon {
    font-size: 25px;
  }
  .scroll{
    width: 100%;
    overflow: hidden;
  }
  .checkbox {
    width: 100%;
    border-bottom: 10px solid #f3f5f4;
    .checktop {
      width: 100%;
      padding: 30px 30px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      .execute {
        color: #e17103;
        font-size: 18px;
      }
    }
    .checklist {
      width: 100%;
      border-bottom: solid 1px #f3f5f4;
      padding: 20px 30px;
      box-sizing: border-box;
      .checklist1 {
        display: flex;
        justify-content: space-between;
        span {
          &:nth-child(1) {
            width: 65%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            .name {
              padding-left: 15px;
            }
            .jian {
              color: #2988fc;
              padding: 5px 10px;
              background: #d9e7f2;
              border-radius: 15px;
            }
          }
        }
        .dai {
          color: #de5658;
        }
      }
      .checklist2 {
        padding-top: 20px;
        color: #464646;
        span {
          padding: 10px 0;
        }
      }
    }
    .btn {
          width: 100%;
          padding: 20px 0;
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
  }
}
</style>
