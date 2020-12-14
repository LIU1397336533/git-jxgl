<template>
  <div id="TodayProject">
    <div class="header">
      <div class="headleft">
        <i class="icon iconfont icon-zuojiantou" @click="returnBack"></i>
        <span class="zi">日常检查情况</span>
      </div>
      <div class="headright">
        <i class="icon iconfont icon-lingdang"></i>
        <span class="dian">•</span>
      </div>
    </div>
    <div class="content">
      <div class="tab">
          <span>今日任务</span>
          <span>周任务</span>
      </div>
    </div>
    <div class="footer">
      <span>+</span><span>日常查询记录</span>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Constructor",
  methods: {
    returnBack() {
      this.$router.go(-1);
    },
  },

  updated() {
    this.scroll.refresh();
  },
  mounted() {
    this.scroll = new BScroll(".content", {
      scrollY: true,
      click: true
    });
  }
};
</script>

<style lang="scss">
#TodayProject {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 10px;
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
  .content{
    width: 100%;
    flex:1;
    background: #fff;
    .tab{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 10px solid #f3f5f4;
      span{
        padding: 20px 30px;
      }
    }
  }
  .footer{
    width: 100%;
    height: 90px;
    position: fixed;
    bottom:0;
    left:0;
    background: #2988fc;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
      color: #fff;
      &:nth-child(1){
        font-size: 40px;
        padding-right: 10px;
      }
    }
  }
}
</style>
