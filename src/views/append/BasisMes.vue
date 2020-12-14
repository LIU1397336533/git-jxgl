<template>
  <div id="basisMes">
    <div class="scroll">
      <div class="contentChoose">
        <div class="type">
          <span>
            机械类别
            <i class="icon iconfont icon-xinghao"></i>
          </span>
          <span @click="chooseMachineType">
            {{ machineType ? machineType : "请选取" }}
            <i class="icon iconfont icon-arrow-left"></i>
          </span>
        </div>
        <div class="machineModel">
          <span>
            机械名称-型号
            <i class="icon iconfont icon-xinghao"></i>
          </span>
          <span @click="chooseMachineModel">
            {{ machineModel ? machineModel : "请选取" }}
            <i class="icon iconfont icon-arrow-left"></i>
          </span>
        </div>
        <div class="code">
          <span>
            项目设备编码
            <i class="icon iconfont icon-xinghao"></i>
          </span>
          <span>
            <input
              v-model="machineCode"
              type="text"
              placeholder="请填写"
              name
              id
            />
          </span>
        </div>
        <div class="machineSource">
          <span>
            机械来源
            <i class="icon iconfont icon-xinghao"></i>
          </span>
          <span @click="chooseMachineSource">
            {{ machineSource ? machineSource : "请选取" }}
            <i class="icon iconfont icon-arrow-left"></i>
          </span>
        </div>
        <div class="rightUnits">
          <span>
            产权单位
            <i class="icon iconfont icon-xinghao"></i>
          </span>
          <span @click="chooseRightUnits">
            {{ rightUnits ? rightUnits : "请选取" }}
            <i class="icon iconfont icon-arrow-left"></i>
          </span>
        </div>
        <div class="numberOfCar">
          <span>车牌号</span>
          <span>
            <input
              type="text"
              placeholder="请填写"
              v-model="numberOfCar"
              name
              id
            />
          </span>
        </div>
        <div class="sitePhotos">
          <span>现场照片</span>
        </div>
      </div>
      <div class="contentDate">
        <mt-field
          label="实际进场日期*"
          @change="actualDate"
          placeholder="请输入生日"
          type="date"
          v-model="actual"
        ></mt-field>
        <mt-field
          label="拟退场日期"
          placeholder="请输入生日"
          type="date"
          v-model="plan"
        ></mt-field>
        <div class="machineManager">
          <span>设备管理员</span>
          <span>
            {{ machineManager ? machineManager : "请选取" }}
            <i class="icon iconfont icon-arrow-left"></i>
          </span>
        </div>
        <div class="useUnits">
          <span>
            使用单位
            <i class="icon iconfont icon-xinghao"></i>
          </span>
          <span>
            {{ useUnits ? useUnits : "请选取" }}
            <i class="icon iconfont icon-arrow-left"></i>
          </span>
        </div>
        <div class="installUnits">
          <span>安装拆除单位</span>
          <span>
            {{ installUnits ? installUnits : "请选取" }}
            <i class="icon iconfont icon-arrow-left"></i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "BasisMes",
  data() {
    return {
      machineType: "",
      machineModel: "",
      machineCode: "",
      machineSource: "",
      rightUnits: "",
      numberOfCar: "",
      actual: "",
      plan: "",
      machineManager: "",
      useUnits: "",
      installUnits: ""
    };
  },

  methods: {
    chooseRightUnits() {
      this.$router.push({ path: "/rightUnits" });
    },
    chooseMachineSource() {
      if (this.machineType) {
        this.$router.push({ path: "/machineSource" });
      } else {
        alert("上边没写");
      }
    },
    actualDate() {
      console.log(this.actual);
    },
    chooseMachineType() {
      this.$router.push({ path: "/machineType" });
    },
    chooseMachineModel() {
      if (this.machineType) {
        this.$router.push({ path: "/machineModel" });
      } else {
        alert("上边没写");
      }
    }
  },
  updated() {
    // this.scroll.refresh();
  },
  mounted() {
    if (sessionStorage.getItem("machineSource")) {
      this.machineSource = sessionStorage.getItem("machineSource");
    }
    if (sessionStorage.getItem("rightUnits")) {
      this.rightUnits = sessionStorage.getItem("rightUnits");
    }

    if (
      sessionStorage.getItem("code") &&
      sessionStorage.getItem("machineModelName")
    ) {
      this.machineCode = sessionStorage.getItem("code");
      this.machineModel = sessionStorage.getItem("machineModelName");
    }
    if (sessionStorage.getItem("appendName")) {
      this.machineType = sessionStorage.getItem("appendName");
    }
    // console.log(this.actual)
    this.$nextTick(() => {
      this.scroll = new BScroll("#basisMes", {
        scrollY: true,
        click: true
      });
    });
  },
  watch: {
    actual(val) {
      sessionStorage.setItem("actual", val);
    },
    machineCode(val) {
      sessionStorage.setItem("machineCode", val);
    }
  }
};
</script>

<style lang="scss">
#basisMes {
  > .scroll {
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .icon-arrow-left {
      font-size: 25px;
    }
    .icon-xinghao {
      font-size: 20px;
      color: #ce393f;
      position: relative;
      top: -10px;
      left: -5px;
    }
    > .contentChoose {
      padding: 0 20px;
      box-sizing: border-box;
      background: #fff;
      width: 100%;

      > div {
        width: 100%;
        padding: 30px 15px;
        box-sizing: border-box;
        border-bottom: 1px solid #e0e2e1;
        display: flex;
        justify-content: space-between;
        input {
          border: none;
          // caret-color: transparent;
          outline: none;
        }
        input::-webkit-input-placeholder {
          /* placeholder颜色  */
          color: #aab2bd;
          /* placeholder字体大小  */
          font-size: 25px;
          /* placeholder位置  */
          text-align: right;
        }
        span {
          &:nth-child(2) {
            color: #a7a7a7;
          }
        }
      }
      .sitePhotos {
        border-bottom: none;
      }
    }
    > .contentDate {
      margin-top: 20px;
      background: #fff;
      box-sizing: border-box;
      padding: 0 20px;
      width: 100%;
      > div {
        width: 100%;
        height: 100px;
        line-height: 100px;
        border-bottom: 1px solid #e0e2e1;
        display: flex;
        justify-content: space-between;
        span {
          &:nth-child(2) {
            color: #a7a7a7;
          }
        }
      }
      .mint-cell {
        width: 100%;
        padding: 30px 15px;
        border-bottom: 1px solid #e0e2e1;
      }
      .mint-cell-title {
        width: 2rem;
      }
      .mintui-field-default {
      }
    }
  }
  overflow: hidden;
  width: 100%;
  margin-top: 5%;
  height: 95%;
}
</style>
