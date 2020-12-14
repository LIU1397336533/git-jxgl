<template>
  <div id="MachineModel">
    <div class="header">
      <div class="headleft">
        <i class="icon iconfont icon-zuojiantou" @click="returnBack"></i>
        <span class="zi">机械名称-型号</span>
      </div>
      <div class="headright">
        <i class="icon iconfont icon-lingdang"></i>
        <span class="dian">•</span>
      </div>
    </div>
    <div class="content">
      <div class="contentlist">
        <div @click="chooseMachineModel(item.name,item.code)" v-for="item in pageData" :key='item.id'>
          <span class="name">{{item.name}}</span>
          <span class="units">单位：{{item.unit}}</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import {machineNames} from '../../utils/api'
import BScroll from "better-scroll";
export default {
    name:'MachineModel',
    data(){
        return {
            pageData:[]
        }
    },
  methods: {
      chooseMachineModel(name,val){
          console.log(121,val)
            sessionStorage.setItem('machineModelName',name)
          sessionStorage.setItem('code',val)
          this.$router.push({path:'/append'})
      },
    returnBack() {
      this.$router.go(-1);
    },
   async initData(){
       if(sessionStorage.getItem('id')){
            let data=await machineNames({'id':sessionStorage.getItem('id')})
            this.pageData=data.data.result.records
              console.log(data.data.result.records)
       }
  
   
    }
  },
  updated() {
    this.scroll.refresh();
  },
  mounted() {
      this.initData()
    this.scroll = new BScroll(".content", {
      scrollY: true,
      click: true
    });
  }
};
</script>


<style lang="scss">
#MachineModel {
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
    flex: 1;
    background: #fff;
    .contentlist {
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
      div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 15px 15px;
        border-bottom: #e1e3e2 solid 1px;
        span {
          font-size: 25px;
          &:nth-child(2) {
            color: #a3a3a3;
          }
        }
      }
    }
  }
}
</style>