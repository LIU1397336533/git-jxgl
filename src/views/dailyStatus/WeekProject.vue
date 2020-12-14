<template>
  <div id="weekProject">
    <div class="scroll">
      <div class="topContent">
        <div class="title">
          <span class="thisWeek">&lt; 2020.12.14-2020.12.20(本周)&gt;</span>
          <span><input type="checkbox" name="" id="" />只看未完成</span>
        </div>
        <div class="checkList">
          <span>盾构机日常检查表</span>
          <span class="yellow">执行中(0/83)</span>
        </div>
        <div class="list">
          <div class="equipment">
            <div>
              <div>
                <span>日检</span
                ><span>2020.12.20土压平衡盾构机此处应有省略号</span>
              </div>
              <div>待查</div>
            </div>
            <div>项目设备编码DGJ-234-233-1</div>
          </div>
          <div class="equipment">
            <div>
              <div>
                <span>日检</span
                ><span>2020.12.20土压平衡盾构机此处应有省略号</span>
              </div>
              <div>待查</div>
            </div>
            <div>项目设备编码DGJ-234-233-1</div>
          </div>
          <div class="equipment">
            <div>
              <div>
                <span>日检</span
                ><span>2020.12.20土压平衡盾构机此处应有省略号</span>
              </div>
              <div>待查</div>
            </div>
            <div>项目设备编码DGJ-234-233-1</div>
          </div>
          <div class="equipment" v-show="todisplay">
            <div>
              <div>
                <span>日检</span
                ><span>2020.12.20土压平衡盾构机此处应有省略号</span>
              </div>
              <div>待查</div>
            </div>
            <div>项目设备编码DGJ-234-233-1</div>
          </div>
          <div class="equipment" v-show="todisplay">
            <div>
              <div>
                <span>日检</span
                ><span>2020.12.20土压平衡盾构机此处应有省略号</span>
              </div>
              <div>待查</div>
            </div>
            <div>项目设备编码DGJ-234-233-1</div>
          </div>
          <div class="equipment" v-show="todisplay">
            <div>
              <div>
                <span>日检</span
                ><span>2020.12.20土压平衡盾构机此处应有省略号</span>
              </div>
              <div>待查</div>
            </div>
            <div>项目设备编码DGJ-234-233-1</div>
          </div>
          <div class="toshow">
            <div @click="showmore">{{ more }}</div>
          </div>
        </div>
      </div>
      <div class="bottomContent">
        <div class="title">
          <span class="thisWeek">&lt; 2020.12.14-2020.12.20(本周)&gt;</span>
          <span><input type="checkbox" name="" id="" />只看未完成</span>
        </div>
        <div class="checkList">
          <span>盾构机日常检查表</span>
          <span class="yellow">执行中(0/83)</span>
        </div>
        <div class="list">
          <div class="equipment">
            <div>
              <div>
                <span>日检</span
                ><span>2020.12.20土压平衡盾构机此处应有省略号</span>
              </div>
              <div>待查</div>
            </div>
            <div>项目设备编码DGJ-234-233-1</div>
          </div>
          <div class="equipment">
            <div>
              <div>
                <span>日检</span
                ><span>2020.12.20土压平衡盾构机此处应有省略号</span>
              </div>
              <div>待查</div>
            </div>
            <div>项目设备编码DGJ-234-233-1</div>
          </div>
          <div class="equipment">
            <div>
              <div>
                <span>日检</span
                ><span>2020.12.20土压平衡盾构机此处应有省略号</span>
              </div>
              <div>待查</div>
            </div>
            <div>项目设备编码DGJ-234-233-1</div>
          </div>
          <div class="equipment" v-show="display1">
            <div>
              <div>
                <span>日检</span
                ><span>2020.12.20土压平衡盾构机此处应有省略号</span>
              </div>
              <div>待查</div>
            </div>
            <div>项目设备编码DGJ-234-233-1</div>
          </div>
          <div class="equipment" v-show="display1">
            <div>
              <div>
                <span>日检</span
                ><span>2020.12.20土压平衡盾构机此处应有省略号</span>
              </div>
              <div>待查</div>
            </div>
            <div>项目设备编码DGJ-234-233-1</div>
          </div>
          <div class="equipment" v-show="display1">
            <div>
              <div>
                <span>日检</span
                ><span>2020.12.20土压平衡盾构机此处应有省略号</span>
              </div>
              <div>待查</div>
            </div>
            <div>项目设备编码DGJ-234-233-1</div>
          </div>
          <div class="toshow1">
            <div @click="showmore1">{{ more1 }}</div>
          </div>
        </div>
      </div>
      <div class="last"></div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "WeekProject",
  data() {
    return {
      more: "查看更多",
      more1: "查看更多",
    todisplay:false,
      display1: false
    };
  },
  methods: {
    showmore() {
        console.log(90909);

      this.todisplay = !this.todisplay;
      if (this.todisplay) {
        this.more = "收起";
      } else {
        this.more = "查看更多";
      }
         console.log(this.todisplay);
    },
    showmore1() {
      this.display1 = !this.display1;
      if (this.display1) {
        this.more1 = "收起";
      } else {
        this.more1 = "查看更多";
      }
    }
  },
  updated(){
    //   this.scroll.refresh()
  },
  mounted() {
    this.scroll = new BScroll("#weekProject", {
 click:true
    });
  }
};
</script>

<style lang="scss">
#weekProject {
  width: 100%;
  height: 100%;
  background: #f3f5f4;
  overflow: hidden;
  > .scroll {
    width: 100%;
    > .topContent {
      width: 100%;
      padding: 0 15px;
      box-sizing: border-box;
      background: #fff;
      > .title {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 60px;
        line-height: 60px;
        border-bottom: 2px solid #f3f5f4;
        input {
          vertical-align: middle;
        }
        > .thisWeek {
          vertical-align: middle;
          color: #2988fc;
        }
      }
      > .checkList {
        width: 100%;
        height: 60px;
        background: #fff;
        line-height: 60px;
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
        box-sizing: border-box;
        > .yellow {
          color: #e17103;
        }
      }
      > .list {
        width: 100%;
        padding: 0 15px;
        box-sizing: border-box;
        background: #fff;
        border-bottom: 3px solid #f3f5f4;
        > .toshow {
          border-bottom: #f3f5f4 10px solid;
          background: #fff;
          width: 100%;
          height: 70px;
          display: flex;
          justify-content: center;
          align-items: center;
          > div {
            padding: 5px 25px;
            color: #717171;
            background: #f2f2f2;
          }
        }
        > .equipment {
          width: 100%;
          height: 180px;
          display: flex;
          flex-direction: column;

          > div {
            &:nth-child(1) {
              margin-bottom: 40px;
              > div {
                &:nth-child(2) {
                  color: #de5658;
                }
                &:nth-child(1) {
                  > span {
                    height: 30px;
                    line-height: 30px;
                    &:nth-child(1) {
                      margin-right: 10px;
                      padding: 5px 5px;
                      border-radius: 5px;
                      color: #2988fc;
                      background: #d9e7f2;
                    }
                    vertical-align: middle;
                    display: inline-block;
                    &:nth-child(2) {
                      width: 280px;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                    }
                  }
                }
              }
              display: flex;
              justify-content: space-between;
            }
          }
        }
      }
    }
    > .bottomContent {
      width: 100%;
      padding: 0 15px;
      box-sizing: border-box;
      background: #fff;
      > .title {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 60px;
        line-height: 60px;
        border-bottom: 2px solid #f3f5f4;
        input {
          vertical-align: middle;
        }
        > .thisWeek {
          vertical-align: middle;
          color: #2988fc;
        }
      }
      > .checkList {
        width: 100%;
        height: 60px;
        background: #fff;
        line-height: 60px;
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
        box-sizing: border-box;
        > .yellow {
          color: #e17103;
        }
      }
      > .list {
        width: 100%;
        padding: 0 15px;
        box-sizing: border-box;
        background: #fff;
        border-bottom: 3px solid #f3f5f4;
        > .toshow1 {
          background: #fff;
          width: 100%;
          height: 70px;
          display: flex;
          justify-content: center;
          align-items: center;
          > div {
            padding: 5px 25px;
            color: #717171;
            background: #f2f2f2;
          }
        }
        > .equipment {
          width: 100%;
          height: 180px;
          display: flex;
          flex-direction: column;

          > div {
            &:nth-child(1) {
              margin-bottom: 40px;
              > div {
                &:nth-child(2) {
                  color: #de5658;
                }
                &:nth-child(1) {
                  > span {
                    height: 30px;
                    line-height: 30px;
                    &:nth-child(1) {
                      margin-right: 10px;
                      padding: 5px 5px;
                      border-radius: 5px;
                      color: #2988fc;
                      background: #d9e7f2;
                    }
                    vertical-align: middle;
                    display: inline-block;
                    &:nth-child(2) {
                      width: 280px;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                    }
                  }
                }
              }
              display: flex;
              justify-content: space-between;
            }
          }
        }
      }
    }
    >.last{
        width: 100%;
        height: 100px;
    }
  }
}
</style>
