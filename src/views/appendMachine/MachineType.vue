<template>
  <div id="machineType">
    <div class="header">
      <div class="headleft">
        <i class="icon iconfont icon-zuojiantou" @click="goBack"></i>
        <span class="zi">机械类别</span>
      </div>
      <div class="headright">
        <i class="icon iconfont icon-lingdang"></i>
        <span class="dian">•</span>
      </div>
    </div>
    <div class="search">
      <mt-search v-model="value" cancel-text="取消" placeholder="按名称过滤" @change="search(value)"></mt-search>
    </div>
    <div class="contentValue">
      <div class="managerWrapper">
        <ConstrutorPage   :whichUse='whichUse' ref="construct" :title="initVal"/>
      </div>
    </div>
  </div>
</template>

<script>

import BScroll from "better-scroll";
import ConstrutorPage from "../../components/construtorPage.vue";
import {typeOfMachine} from '../../utils/api'
export default {
name:'MachineType',
components:{
  ConstrutorPage
},
data(){
  return {
    initVal:[],
    whichUse:2,
    value:"",
    filterVal:[],
    initValRepeat:[]
  }
},
methods:{
  search(val){
 this.initVal=this.initValRepeat
  },
  goBack(){
   this.$router.push({path:'append'})
  },
 async initData(){
   let data= await typeOfMachine()
  //  console.log(data.result)
  this.initValRepeat=data.result
   this.initVal=data.result
   console.log(this.initVal)
         this.lengthVal = data.result.length;
      let arr = [];
      for (let i = 0; i < data.result.length; i++) {
        arr.push("icon-shangjiantou");
      }
      let arr1 = [];
      for (let i = 0; i < data.result.length; i++) {
        arr1.push(true);
      }
      this.$refs.construct.iconName = arr;
      this.$refs.construct.showThisPage = arr1;
      this.$refs.construct.showThisPage;
  }
},
  updated() {
    this.scroll.refresh();
  },
mounted(){

  this.initData()
     this.scroll = new BScroll(".managerWrapper", {
      scrollY: true,
      click: true
    });
},
watch:{
  value(val){
 this.initVal=this.initValRepeat
 this.filterVal= this.initVal.map(i=>i.children.map(i=>i.name)).reduce((pre,next)=>{
         return  pre.concat(next) 
   
   },[])
   if(val){
    this.initVal= this.filterVal.filter(i=>i.includes(val)).map((i,index)=>{
         return { name:i,fullId:index}})
   }
  }
}
}
</script>


<style lang="scss">
#machineType {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  overflow: hidden;
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
  .search {
    height: 80px;
    width: 100%;
    background: #fff;
    .mint-searchbar {
      padding: 0.18rem;
      background: #f1f1f3;
    }
    .mint-searchbar-inner {
      padding: 0.153333rem 0.08rem 0.153333rem 40%;
    }
    .mint-searchbar-core {
      font-size: 25px;
    }
    .mintui-search {
      font-size: 0.45rem;
    }
    input::-webkit-input-placeholder {
      color: #b0b0ae;
      padding-left: 10px;
    }
  }
  .contentValue {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex: 1;
    flex-shrink: 0;
    background: #fff;
    overflow: hidden;
    .iconfont {
      padding-right: 10px;
      color: #a9a9ab;
    }
    .managerWrapper {
      height: 100%;
      padding: 10px 10px;
      .wrapper {
        padding: 5px 30px;
        div {
          padding: 3px 20px;
        }
      }
      box-sizing: border-box;
      overflow: hidden;
      > div {
        width: 100%;
      }
    }
    .project {
      color: #a9a9ab;
    }
    .projectlist {
      color: #515151;
    }
    .valueTitle {
      padding: 30px 0;
      color: #4c7bcd;
    }
  }
}
</style>