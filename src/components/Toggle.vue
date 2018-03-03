<template>
    <div class="Toggle">
    <button class="btn" v-on:click="show = !show">
        Toggle
    </button>

    <transition name="fade">
        <p v-if="show">hello</p>
    </transition>
    
    <transition name="slide-fade">
      <p v-if="show">hello</p>
    </transition>
  
    <div id="example-2">
      <button @click="show = !show">Toggle show</button>
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
    <div class="test">

    </div>
    
    </div>

</template>

<script>
export default {
  name: "Toggle",
  data() {
    return {
      show: true
    };
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
.slide-fade-leave-to { /*注意都是一瞬间有用完成失效*/
  transform: rotate(30deg);
  opacity: 0;
}

.bounce-enter-active{
  animation: bounce-in 1s
}
.bounce-leave-active{
  animation: bounce-in 1s reverse 
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
</style>
