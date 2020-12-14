<template>
  <div id="mainPage">
 <div class="subwayProject">
      地铁12号线建设工程
      <i class="icon iconfont icon-ico_open" @click="jumpToConstructor"></i>
    </div>
    <div class="daiban">
      <span>待办事项</span>
      <span class="span1">
        <i>•</i>待审核机械40
      </span>
    </div>
    <div class="title">最新登记机械</div>
       <scroller :on-refresh="onRefresh" ref="myscroller" style="top: 25%">
    <div class="newest">
      <div class="newestContent">
        <div class="content" @click="goToDocument(index)" v-for="(item,index) in machine" :key='index'>
          <div class="contentmain">
            <div class="content1">
               <span v-if="item.status==1" class="service">未使用</span>
              <span v-else-if="item.status==0" class="service">使用中</span>
              <p class="machine">{{item.machineryTypeName}}</p>
              <span>{{item.specification}}</span>
            </div>
            <div class="content2">
              <p class="code">{{item.equipmentCode}}</p>
              <span class="type">{{item.remark}}</span>
              <span class="perfect" v-if="item.delFlag==0">信息未完善</span>
               <span class="perfect" v-else-if="item.delFlag==1">信息完善</span>
            </div>
            <div class="content3">
              <span class>{{item.projectName}}</span>
              <span class>进场日期{{item.createTime}}</span>
            </div>
          </div>
        </div>
      
      </div>
    </div>
      </scroller>
  </div>
</template>

<script>
import { Indicator } from "mint-ui";
import BScroll from 'better-scroll'
import { homeData} from '../../utils/api'
export default {
name:'MainPage',
 data(){
    return{
      machine:[]
    }
  },
  components: {

  },
  methods:{
    onRefresh(){
      // console.log(1111)
           this.initData()
    this.$refs.myscroller.finishPullToRefresh()
         
    },
    goToDocument(val){
      // console.log(val, this.machine[val])
      localStorage.setItem('machineData', JSON.stringify( this.machine[val]))
     
        this.$router.push({path:'/document'})
    },
    jumpToConstructor(){
      this.$router.push({path:'/constructor'})
    },
   async initData(){
        Indicator.open({
        text: "Loading...",
        spinnerType: "fading-circle"
      });
   let data= await  homeData()
   this.machine=data.result.content
      Indicator.close()
  //  console.log(data.result.content)
    },
  },
updated(){
    this.scroll.refresh()
},
  mounted(){
    this.initData()
    this.scroll=new BScroll('.newest',{
      click:true
    })
  }
}
</script>

<style lang='scss'>
#mainPage{
  padding: 0 15px;
  box-sizing: border-box;
  .subwayProject {
  width: 100%;
  padding: 20px 0;
  text-align: center;
  color: #fff;
}
.daiban {
  width: 100%;
  padding: 20px 20px;
  box-sizing: border-box;
  background: #fff;
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  .span1 {
    color: red;
    i {
      padding-right: 10px;
    }
  }
}
.title {
  padding: 15px 20px;
  background: #fff;
  margin-top: 15px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
._v-container{
  position: absolute;
  bottom: -100px;
height: 80%!important;
width: 100%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
}
.newest {
  width: 100%;
  flex: 1;
  flex-shrink: 0;
  background: #fff;
  padding: 20px 0;
box-sizing: border-box;
  overflow: hidden;
  .newestContent {

    width: 100%;
    .content {
      width: 100%;
      padding: 0 20px;
      box-sizing: border-box;
      border-bottom: 1px solid #e7e7e5;
      .contentmain {
        padding: 20px 0;
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
          .code {
            color: #989898;
            font-size: 25px;
          }
          .type {
            background: #f5eae6;
            color: #db455e;
            border: 1px solid #db455e;
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
          justify-content: space-between;
          color: #595957;
        }
      }
    }
  }
}
}

</style>