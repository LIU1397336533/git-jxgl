<template>
  <!-- m1 -->
  <div>
    <div v-for="(item, index) in title" :key="item.fullId">
      <div v-if="item.childNodes||item.children&&item.children.length" class="wrapper">
        <div class="titleName">
          <span
            :class="'iconfont ' + iconName[index]"
            @click="partShow(index, title)"
          ></span>
          <span class="project">{{ item.name }}</span>
        </div>
        <div v-show="iconName[index]==='icon-shangjiantou'">
          <ConstructorPage :whichUse='whichUse' :title="item.childNodes||item.children" />
        </div>
      </div>
      <div v-else >
        <div class="event" @click="changePages(item.name,whichUse)" >
          <span  :style="val===item.name?'color:blue':''"  class='projectlist'>
            {{ item.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
  <!-- m2 -->
  <!-- <div>
    <div v-for="item in title" :key="item.fullId">
      <div  class="wrapper">
        <div>{{ item.name }}</div>
        <div v-if="item.childNodes">
          <ConstructorPage :title="item.childNodes" />
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  showThisPart: true,
  name: "ConstructorPage",
  props: {
    title: Array,
    allData:Array,
    whichUse:Number

  },
  data() {
    return {
      val:'',
        showThisPart:[],
      iconName: [

      ],
      indexVal: -1
    };
  },
  methods: {
    changePages(val,whichUse){

      if(whichUse===1){
            localStorage.setItem('systemName',val)
      this.$router.push({path:'/machineSystem'})
      }else if(whichUse===2){
      this.$router.push({path:'/append'})
      this.val=val
       sessionStorage.setItem('appendName',val)
       sessionStorage.setItem('id','1230029003514249217')
      }

    },
    partShow(val, title) {
      this.indexVal = val;
    if( this.showThisPart[val]){
        this.$set(this.iconName,val,'icon-shangjiantou')
        this.$emit('showOrNot',this.showThisPart)
    }else{
      this.$set(this.iconName,val,'icon-xiajiantou')
      this.$emit('showOrNot',this.showThisPart)
    }
      this.showThisPart[val] = !this.showThisPart[val];
    }
  },
  mounted() {
   console.log(this.whichUse)

  }
};
</script>

<style></style>
