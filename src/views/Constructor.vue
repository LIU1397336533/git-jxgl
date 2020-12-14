<template>
  <div id="constructor">
    <div class="header">
      <div class="headleft">
        <i class="icon iconfont icon-zuojiantou" @click="returnBack"></i>
        <span class="zi">组织结构</span>
      </div>
      <div class="headright">
        <i class="icon iconfont icon-lingdang"></i>
        <span class="dian">•</span>
      </div>
    </div>
    <div class="content">
      <div class="contentTitle">
        <mt-search v-model="value" cancel-text="取消" placeholder="搜索">
        </mt-search>
      </div>
      <div class="contentValue">
        <div class="valueTitle">
          <span :class="'iconfont ' + iconAll" @click="allData"></span>
          <span>地铁12号线建设工程</span>
        </div>
        <div class="managerWrapper" v-show="showThisPage">
          <ConstrutorPage
            :whichUse='whichUse'
            ref="construct"
            :title="title"
            @showOrNot="showOrNot"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import ConstrutorPage from "../components/construtorPage.vue";
import { constructorData } from "../utils/api";
import { Indicator } from "mint-ui";
export default {
  name: "Constructor",
  data() {
    return {
      showThisPage: true,
      value: "",
      iconAll: "icon-shangjiantou",
      title: [],
      lengthVal: 0,
      whichUse:1,
      titleRepeat:[]
    };
  },
  components: {
    ConstrutorPage
  },
  methods: {
    returnBack(){
      this.$router.push({path:'/'})
    },
    showOrNot(val) {
   
        val
          .filter(i => i)
          .map((i, item) => {
            if (i) {
              return item;
            }
          })
    
    },
    allData() {
      this.showThisPage = !this.showThisPage;
      if (this.showThisPage) {
        this.iconAll = "icon-shangjiantou";
      } else {
        this.iconAll = "icon-xiajiantou";
      }
    },
    async initData() {
      Indicator.open({
        text: "Loading...",
        spinnerType: "fading-circle"
      });
      let data = await constructorData();
      // console.log(data.result.childNodes[0].childNodes);
      Indicator.close();
      this.titleRepeat=data.result.childNodes[0].childNodes;
      this.title = data.result.childNodes[0].childNodes;

      this.lengthVal = data.result.childNodes[0].childNodes.length;
      let arr = [];
      for (let i = 0; i < data.result.childNodes[0].childNodes.length; i++) {
        arr.push("icon-shangjiantou");
      }
      let arr1 = [];
      for (let i = 0; i < data.result.childNodes[0].childNodes.length; i++) {
        arr1.push(true);
      }
      this.$refs.construct.iconName = arr;
      this.$refs.construct.showThisPage = arr1;
      this.$refs.construct.showThisPage;

      this.scroll.refresh();
    }
  },
  updated() {
    this.scroll.refresh();
  },
  mounted() {
 
    this.scroll = new BScroll(".managerWrapper", {
      scrollY: true,
      click: true
    });

    this.$nextTick(() => {
      this.initData();
      this.scroll.refresh();
    });
  },
  watch:{
      value(val){
 this.title=this.titleRepeat
 this.filterVal= this.title.map(i=>i.childNodes.map(i=>i.name)).reduce((pre,next)=>{
         return  pre.concat(next) 
   
   },[])
   if(val){
    this.title= this.filterVal.filter(i=>i.includes(val)).map((i,index)=>{
         return { name:i,fullId:index}})
   }
 
  }
  }
};
</script>

<style lang="scss">
#constructor {
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
  > .content {
    flex: 1;
    width: 100%;
    flex-shrink: 0;
    background: #f1f1f3;
    display: flex;
    flex-direction: column;
    .contentTitle {
      width: 100%;
      height: 110px;
      .mint-search {
        width: 100%;
        height: 100%;
        .mint-searchbar {
          width: 100%;
          height: 100%;
          .mint-searchbar-inner {
            width: 90%;
            height: 70%;
          }
        }
      }
    }
    .contentValue {
      box-sizing: border-box;
      padding: 0 40px;
      display: flex;
      flex-direction: column;
      flex: 1;
      flex-shrink: 0;
      background: #fff;
      overflow: hidden;
      > .valueTitle {
        width: 100%;
        height: 50px;
        line-height: 50px;
      }
   .iconfont{
     padding-right: 10px;
     color: #a9a9ab;
   }
      .managerWrapper {
        height: 80%;
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
        color:#4c7bcd;
      }
    }
  }
}
</style>
