  <template>
  <div id="machineSystem">
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
        <i class="icon iconfont icon-diantong" @click="PopupVisible"></i>
      </div>
      <mt-popup v-model="popupVisible" position="right">
        <div class="main">
          <div>状态</div>
          <div class="zhuangtai">
            <div>未申报</div>
            <div>待审核</div>
            <div>使用中</div>
            <div>已停用</div>
            <div>正在维保</div>
            <div>已退场</div>
          </div>
          <div>属性</div>
          <div class="shuxing">
            <div>未申报</div>
            <div>待审核</div>
            <div>使用中</div>
          </div>
          <div>来源</div>
          <div class="laiyuan">
            <div>未申报</div>
            <div>待审核</div>
            <div>使用中</div>
          </div>
          <div class="btn">
            <mt-button type="default">重置</mt-button>
            <mt-button @click="PopupVisibles" type="primary">确认</mt-button>
          </div>
        </div>
      </mt-popup>
    </div>
    <div class="footer">
      <div @click="toDailyStatus">
        <i class="icon iconfont icon-richangjianchatianxie"></i>
        日常检查
      </div>
      <div class="add">
        <span @click="toAppend">+</span>
      </div>
      <div @click="diaozhuang">
        <i class="icon iconfont icon-diaozhuang"></i>
        吊装作业
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MachineSystem",
  data() {
    return {
      projectName: "",
      popupVisible: false
    };
  },
  methods: {
    PopupVisible() {
      this.popupVisible = true;
    },
    PopupVisibles(){
      this.popupVisible = false;
    },
    toDailyStatus() {
      this.$router.push({ path: "/dailyStatus" });
    },
    toConstructor() {
      this.$router.push({ path: "/constructor" });
    },
    toAppend() {
      this.$router.push({ path: "/append" });
    },
    // 点击吊装
    diaozhuang() {
      this.$router.push({ path: "/lifting" });
    }
  },
  mounted() {
    this.projectName = localStorage.getItem("systemName");
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
    .icon-ico_open {
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
      .iconfont {
        color: #929292;
      }
      > div {
        width: 70%;
        height: 60px;
        line-height: 60px;
        padding: 0 30px;
        background: #f6f6f6;
        border-radius: 35px;
        .icon-fangdajing1 {
          color: #c5c5c5;
        }
        input {
          width: 85%;
          border: none;
          outline: none;
          background: #f6f6f6;
          padding-left: 20px;
        }
        ::-webkit-input-placeholder {
          color: #c5c5c5;
          font-size: 20px;
        }
      }
    }
    .v-modal {
      width: 100%;
      height: 88%;
      position: fixed;
      left: 0;
      top: 12%;
    }
    .mint-popup-right {
      top: 56%;
      right: 0;
      bottom: auto;
      left: auto;
      width: 70%;
      height: 88%;
      .main {
        width: 100%;
        height: 100%;
        padding: 20px 30px;
        box-sizing: border-box;
        position: relative;
        .zhuangtai,
        .shuxing,
        .laiyuan {
          padding: 20px 30px;
          display: flex;
          flex-wrap: wrap;
          div {
            padding: 5px 15px;
            background: #f5f7f4;
            margin: 10px 10px;
            border-radius: 50px;
            font-size: 20px;
          }
        }
        .btn{
          width: 100%;
          height: 80px;
          position: absolute;
          bottom:0;
          left:0;
          .mint-button--normal{
            width: 50%;
            height: 80px;
          }
        }
      }
    }
  }
  .footer {
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
    .icon {
      font-size: 20px;
    }
    .add {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: #f6f6f6;
      text-align: center;
      position: relative;
      bottom: 20px;
      font-size: 60px;
      span {
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
