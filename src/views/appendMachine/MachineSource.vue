<template>
  <div id="MachineSource">
    <div class="header">
      <div class="headleft">
        <i class="icon iconfont icon-zuojiantou" @click="returnBack"></i>
        <span class="zi">机械来源</span>
      </div>
      <div class="headright">
        <i class="icon iconfont icon-lingdang"></i>
        <span class="dian">•</span>
      </div>
    </div>
    <div class="content">
      <div class="contentleft">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">租赁</mt-tab-item>
          <mt-tab-item id="2">自有</mt-tab-item>
          <mt-tab-item id="3">分包自带</mt-tab-item>
        </mt-navbar>
      </div>
      <div class="contentright">
        <mt-tab-container v-model="selected" >
          <mt-tab-container-item id="1">
            <div @click="chooseMachineSource">无</div>
            <div @click="chooseMachineSource">临时</div>
          </mt-tab-container-item>
          <mt-tab-container-item  id="2"> <div @click="chooseMachineSource">2</div> </mt-tab-container-item>
          <mt-tab-container-item id="3"><div @click="chooseMachineSource">3</div> </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      selected: "1"
    };
  },
  methods: {
   chooseMachineSource(e){
          console.log(111,e.target.innerText)
          if(e.target.innerText){
              sessionStorage.setItem('machineSource',e.target.innerText)
          }
  this.$router.go(-1)
      },
    returnBack() {
      this.$router.go(-1);
    }
  },
  watch:{
      selected(val){
          console.log(val)
      }
  }
};
</script>


<style lang="scss">
#MachineSource {
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
  .content {
    width: 100%;
    background: #fff;
    flex: 1;
    display: flex;
    flex-direction: row;
    .contentleft {
      width: 25%;
      height: 100%;
      background: #f4f6f5;
      .mint-navbar {
        width: 100%;
        display: flex;
        flex-direction: column;
        background: #f4f6f5;
        .mint-tab-item{
          padding: 30px 0;
        }
      }
    }
    .contentright {
      width: 75%;
      padding: 30px 30px;
      box-sizing: border-box;
      .mint-tab-container-item{
        div{
          padding: 20px 0;
        }
      }
    }
  }
}
</style>