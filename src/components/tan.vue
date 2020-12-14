<template>
  <div class="tan" v-if="show6">
      <ul>
          <p>状态</p>
          <dl class="zh" >
              <li class="tai">
                  <span>未申报</span>
              <span> 待审核</span>
              <span> 使用中 </span>
              </li>
              <li class="tai">
                    <span>已停用</span>
              <span>正在维护</span>
              <span>已退场</span>
              </li>
              
            
          </dl>
      </ul>
    <dl class="xuan">
       <li>重置</li>
       <li @click="que">确认</li>
    </dl>
      
  </div>
</template>

<script>
export default {
    name:'tan',
    props:{ show6:Number},
    data(){
        return{
            

        }
    },
    methods:{
        que(){
            this.$emit('que',0)

        }
    }
    

}
</script>

<style>
*{
    list-style: none;
}
.tan{
    position: absolute;
    width: 50%;
    height: 80%;
    background: wheat;
    right: 0;
    top: 12%;
}
.tai{
    display: flex;
    justify-content: space-evenly;
}
.zh{
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.tai>span{
    width: 30%;
    height: 30px;
    background: silver;
    text-align: center;
    line-height: 30px;
}
.xuan{
    
   margin-top: 230%;
    display: flex;
    justify-content: space-evenly;

}
.xuan>li{
    height: 50px;
  
    width: 40%;
    line-height: 50px;
    text-align: center;
    background: cyan;
}

</style>