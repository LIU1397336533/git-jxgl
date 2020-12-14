<template>
  <div id="home">

  <div class="header">
      <div class="headleft">
        <i class="icon iconfont icon-category"></i>
        <span class="zi">现场机械化管理系统</span>
      </div>
      <div class="headright">
        <i class="icon iconfont icon-lingdang"></i>
        <span class="dian">•</span>
      </div>
    </div>
    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return{
      machine:[]
    }
  },
  components: {

  },
  mounted(){

  }
}
</script>
<style lang="scss">
#home{
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-size: 28px;


  box-sizing: border-box;
  background: -webkit-gradient(
    linear,
    0% 0%,
    0% 100%,
    from(#2988fe),
    to(#9ec9fe)
  );
  .icon {
    font-size: 35px;
  }
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
// .subwayProject {
//   width: 100%;
//   padding: 20px 0;
//   text-align: center;
//   color: #fff;
// }
// .daiban {
//   width: 100%;
//   padding: 20px 20px;
//   box-sizing: border-box;
//   background: #fff;
//   display: flex;
//   justify-content: space-between;
//   border-radius: 20px;
//   .span1 {
//     color: red;
//     i {
//       padding-right: 10px;
//     }
//   }
// }
// .title {
//   padding: 15px 20px;
//   background: #fff;
//   margin-top: 15px;
//   border-top-left-radius: 15px;
//   border-top-right-radius: 15px;
// }
// ._v-container{
//   position: absolute;
//   bottom: -100px;
// height: 80%!important;
// width: 100%;
//     flex-shrink: 0;
//     display: flex;
//     flex-direction: column;
// }
// .newest {
//   width: 100%;
//   flex: 1;
//   flex-shrink: 0;
//   background: #fff;
//   padding: 20px 0;
// box-sizing: border-box;
//   overflow: hidden;
//   .newestContent {

//     width: 100%;
//     .content {
//       width: 100%;
//       padding: 0 20px;
//       box-sizing: border-box;
//       border-bottom: 1px solid #e7e7e5;
//       .contentmain {
//         padding: 20px 0;
//         div {
//           padding: 8px 0;
//         }
//         .content1 {
//           display: flex;
//           flex-direction: row;
//           .service {
//             background: #2d8bef;
//             font-size: 20px;
//             color: #fff;
//             padding: 5px 10px;
//             border-radius: 10px;
//           }
//           .machine {
//             padding: 0 10px;
//           }
//         }
//         .content2 {
//           display: flex;
//           flex-direction: row;
//           font-size: 20px;
//           .code {
//             color: #989898;
//             font-size: 25px;
//           }
//           .type {
//             background: #f5eae6;
//             color: #db455e;
//             border: 1px solid #db455e;
//             margin: 0 10px;
//             box-sizing: border-box;
//             padding: 0 8px;
//             border-radius: 15px;
//           }
//           .perfect {
//             color: #b8b3b3;
//             border: #b8b3b3 1px solid;
//             box-sizing: border-box;
//             padding: 0 8px;
//             border-radius: 15px;
//           }
//         }
//         .content3 {
//           display: flex;
//           justify-content: space-between;
//           color: #595957;
//         }
//       }
//     }
//   }
// }
}

</style>
