<template>
    <div class="Toggle">
    <button class="btn" v-on:click="show = !show">
        Toggle
    </button>

    <router-link to="../index.html">index</router-link>
    <router-view/>

    <transition name="fade">
        <p v-if="show">hello</p>
    </transition>
    
    <transition name="slide-fade">
      <p v-if="show">hello</p>
    </transition>
  
    <div id="example-2">
      <button class="btn" @click="show = !show">Toggle show</button>
      <transition name="bounce">
          <p v-if="show">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
      </transition>
    </div>

    <transition
    name="custom-classes-transition"
    enter-active-class="animated tada"
    leave-active-class="animated zoomOutUp"
    >
     <p v-if="show">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
    </transition>
    <!-- <div class="test">

    </div> -->
    <div id="example-3">
    <button class="btn" @click="docState = 'editing'">switch</button>
    <transition name="switchbtn" mode="out-in">
      <button class="btn" @click="docState = 'edited'" :key='docState'>
        {{buttonMessage}} <!-- 只要是DOM发生(重绘)变化就会触发animation/transition -->
      </button>
      <!-- 当有相同标签名的元素切换时，需要通过 key 特性设置唯一的值来标记以让 Vue 区分它们-->
    </transition>
    </div>

    <!-- 列表过渡 -->
    <div id="list-demo" class="demo">
      <button class="btn" v-on:click="add">Add</button>
      <button class="btn" v-on:click="remove">Remove</button>
      <transition-group name="list" tag="p"> <!--相当于把transition-group标签替换成 p-->
        <span v-for="item of items" v-bind:key="item" class="list-item">
          {{ item }}
        </span>
      </transition-group>
    </div>
    

    </div>

</template>

<script>
export default {
  name: "Toggle",
  data() {
    return {
      show: true,
      docState: "saved",
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    };
  },
  methods:{
    randomIndex: function(){
      return Math.floor(Math.random()*this.items.length);
    },
    add:function(){
      return this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove:function(){
      return this.items.splice(this.randomIndex, 1);
    },
    shuffle:function(){
      this.items = _shuffle(this.items)
    },
  },
  computed: {
    buttonMessage: function() {
      switch (this.docState) {
        case "saved":
          return "Edit";
        case "edited":
          return "Save";
        case "editing":
          return "Cancel";
      }
    }
  }
};
</script>

<style scoped>
/*vue中的transiton 必须和 v-if v-show 动态组件 组件根节点之一一起使用*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s linear;
}
.fade-enter,
/*enter就是加入新元素时的初始值 比如v-if="show" p标签的初始opacity为0*/
  .fade-leave-to {
  /*fade-leave-to就是移除元素时的最后值 比如v-if="show" p标签移除后opacity为0*/
  opacity: 0;
}

.test {
  margin-left: auto;
  margin-right: auto;
  height: 100px;
  width: 100px;
  background-color: pink;
  transition-duration: 3s;
  /*     以下三值为默认值，稍后会详细介绍 */
  transition-property: all;
  transition-timing-function: ease;
  transition-delay: 0s;
}
.test:hover {
  background-color: blueviolet;
  width: 500px;
  height: 500px;
}

.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  /*注意都是一瞬间有用完成失效*/
  transform: rotate(30deg);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 1s;
}
.bounce-leave-active {
  animation: bounce-in 1s reverse;
}
@keyframes bounce-in {
  0% {
    transform: rotate(5deg) scale(0); /*空格隔开*/
  }
  50% {
    transform: rotate(-5deg) scale(1.5);
  }
  100% {
    transform: rotate(5deg) scale(1);
  }
}

.switchbtn-enter-active,
.switchbtn-leave-active {
  transition: opacity, 1s, linear;
  /* animation: bounce-in 1s; */
}

.switchbtn-enter,
.switchbtn-leave-to {
  opacity: 0;
}

.list-item{
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active{
  transition: all 1s;
}
.list-enter, .list-leave-to{
  opacity: 0;
  transform: translateY(30px);
}
.flip-list-move {
  transition: transform 1s;
}

</style>
