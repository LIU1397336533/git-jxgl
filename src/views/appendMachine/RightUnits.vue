<template>
  <div id="rightUnits">
    <div class="header">
      <div class="headleft">
        <i class="icon iconfont icon-zuojiantou" @click="returnBack"></i>
        <span class="zi">产权单位</span>
      </div>
      <div class="headright">
        <i class="icon iconfont icon-lingdang"></i>
        <span class="dian">•</span>
      </div>
    </div>
    <div class="search">
      <mt-search v-model="value" cancel-text="取消" placeholder="按名称过滤"></mt-search>
    </div>
    <div class="content">
      <div class="contentlist">
        <div @click="chooseRightUnits(item.name)" v-for="item in initVal" :key='item.id'>
          <span>{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import BScroll from "better-scroll";
import { rightUnitsFn } from "../../utils/api";
export default {
  data() {
    return {
      value: "",
      initVal:[],
      initValRepeat:[],
    };
  },
  methods: {
      chooseRightUnits(val){
          sessionStorage.setItem('rightUnits',val)
          this.$router.push({path:'/append'})
      },
    returnBack() {
      this.$router.go(-1);
    },
   async initData(){
  let data= await rightUnitsFn()
   this.initValRepeat=data.result.records
  this.initVal=data.result.records
//   console.log(data.result.records)
    },
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
  },
  watch:{
      value(val){
          this.initVal=this.initValRepeat
          if(val){
          this.initVal=this.initVal.filter(i=>i.name.includes(val))
          }
      }
  }
};
</script>


<style lang="scss">
#rightUnits {
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
  .content {
    width: 100%;
    flex: 1;
    background: #fff;
    .contentlist {
      width: 100%;
      div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 15px 10px;
        border-bottom: #e1e3e2 solid 1px;
      }
    }
  }
}
</style>