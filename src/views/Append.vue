<template>
  <div id="append">
        <div class="header">
      <div class="headleft">
        <i class="icon iconfont icon-zuojiantou" @click="goBack"></i>
        <span class="zi">新增机械</span>
      </div>
      <div class="headright">
        <i class="icon iconfont icon-lingdang"></i>
        <span class="dian">•</span>
      </div>
    </div>
      <div class="title">
          <mt-range :max='100' :min='0' :value="rangeValue"></mt-range>
      </div>
      <div class="content">
          <div v-if="step===1">
              <BasisMes/>
          </div>
          <div v-if="step===2">
              <ImproveMes/>
          </div>
      </div>
      <div  v-if='step===1' class="footer" @click="toImprove ">
          showmore
      </div>
    
  </div>
</template>

<script>
import BasisMes from  './append/BasisMes'
import ImproveMes from  './append/ImproveMes'
export default {
  name: "Append",
  components: {
    BasisMes,
    ImproveMes
  },
  data() {
    return {
      rangeValue: 0,
      step:0,
      max:0,
      min:0,
    };
  },
  methods:{
      goBack(){
          this.$router.push({path:'/machineSystem'})
      },
      toImprove(){
          this.step=2
         this.rangeValue=100
       
      }
  },
  mounted(){
      this.step=1
   
  }
};
</script>

<style lang="scss">
#append {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
    //  
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
  .title{
      padding: 50px 20px;
    box-sizing: border-box;
      width: 100%;
      height: 150px;
      background: #fff;
  }
  .content{
    flex: 1;
     background: #f1f1f3;
     flex-shrink: 0;
     >div{
         width: 100%;
         height: 100%;
     }
  }
  }
  </style>
