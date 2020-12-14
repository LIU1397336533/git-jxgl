  <template>
  <div id="machineSystem">
   <Tan :show6='show6' @que='que'/>
    <div class="subwayProject">
   {{projectName}}
      <i class="icon iconfont icon-ico_open" @click="toConstructor"></i>
    </div>
    <div class="content">
      <div class="seek">
        <i class="icon iconfont icon-saomiao"></i>
        <div>
          <i class="icon iconfont icon-fangdajing1"></i>
          <input type="text" placeholder="搜索机械名称 / 规格型号 / 项目设备编码">
        </div>
        <i class="icon iconfont icon-diantong" ></i>
      </div>
    </div>
    <div class="seek"  >

    </div>
    <div class="footer">
      <div @click="kai">
        <i class="icon iconfont icon-richangjianchatianxie"></i>
        日常检查</div>
      <div class="add">
        <span @click="toAppend">+</span>
      </div>
      <div>
        <i class="icon iconfont icon-diaozhuang"></i>
        吊装作业</div>
    </div>
  </div>
</template>
<script>
import Tan from '@/components/tan.vue'
export default {
    name:'MachineSystem',
    data(){
        return{
            projectName:'',
            show6:0
        }
    },
    components:{
       Tan
    },
    methods:{
      toConstructor(){
        this.$router.push({path:'/constructor'})
      },
      toAppend(){
          this.$router.push({path:'/append'})
      },
      kai(){
        this.show6=1;
        console.log(this.show6);
      },
      que(e){
        console.log(e);
        this.show6=e

      }
    },
    mounted(){
        this.projectName=localStorage.getItem('systemName')
    }
 
};
</script>
<style lang="scss">
#machineSystem {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-size: 28px;

  box-sizing: border-box;
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
.subwayProject {

  width: 100%;
  padding: 20px 0;
  text-align: center;
  color: #fff;
  .icon-ico_open{
    font-size: 30px;
  }
}
.content {
  width: 100%;
  flex: 1;
  background: #fff;
  .seek {
    width: 100%;
    height: 80px;


    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    box-sizing: border-box;
    .iconfont{
      color: #929292;
    }
    >div{
      width: 70%;
      height: 60px;
      line-height: 60px;
      padding: 0 30px;
      background: #f6f6f6;
      border-radius: 35px;
      .icon-fangdajing1{
        color:  #c5c5c5;
      }
      input{
        width: 85%;
        border:none;
        outline: none;
        background: #f6f6f6;
        padding-left: 20px;
      }
      ::-webkit-input-placeholder{
        color: #c5c5c5;
        font-size: 20px;
      }
    }
  }
}
.footer{
  width: 100%;
  height: 80px;
  // position: fixed;
  // bottom: 0;
  // left:0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 30px;
  background: #f6f6f6;
  color: #1a7ce7;
  .icon{
    font-size: 20px;
  }
  .add{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: #f6f6f6;
    text-align: center;
    position: relative;
    bottom:20px;
    font-size: 60px;
    span{
      display: inline-block;
      width: 100px;
      height: 100px;
      line-height: 100px;
      border-radius: 50%;
      background: #2c87fc;
      color: #fff;
      margin-top: 20px;
    }
  }
}
  .icon {
    font-size: 35px;
  }
}

</style>
