<template>
   <div class="message">
    <p>{{message}}</p>
    <p>{{reversed}}</p>
    <input v-bind:title="input_title" v-model="message"/>
    <span id="info" v-bind:title="info">
        鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </span>
    <p v-if="seen">You see me!</p>
    <ul>
    <li v-for="todo in todos" v-bind:key="todo.id">
        {{todo.text}}
    </li>
    </ul>
    <button :disabled="isDisabled" class="btn" @click="reverseMessage">逆转消息</button>
    <!-- 双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，你需要使用 v-html 指令： -->
    <p>Using mustaches {{rawHtml}}</p>
    <p>Using v-html <span v-html="rawHtml"></span></p>
    <!-- 对象语法 -->
    <div class="static" :class="classObj"></div>
    <div class="classList" :class="[{active: isActive}, hasError]"></div>
    <div :style="styleObj">v-bind:style</div>
    <!-- <div :style="{color:'red', display: ['-webkit-box', '-ms-flexbox', 'flex']}">绑定多个style</div> -->
    <div v-if="Math.random() > 0.5">
        Now you see me
    </div>
    <div v-else>
        Now you don't
    </div>

    <div id="todo-list-example">
        <input v-model="newTodoText" v-on:keyup.enter="addNewTodo" placeholder="Add a todo">
    </div>

    <div>
        <ul>
            <li v-for="(todo, index) of todos" 
            v-bind:key="todo.id" >
            <span>{{todo.text}}</span><button class="btn" v-on:click="remove(index)">x</button>
            </li>
        </ul>
    </div>

    <div v-on:scroll.passive="onScroll">...</div>

    <div>
        <span>Multiline message is:</span>
        <p style="white-space: pre-line;">{{ message }}</p>
        <textarea v-model="message" placeholder="add multiple lines"></textarea>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label>
    </div>
    
    <div id='example-3'>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
        <br>
        <span>Checked names: {{ checkedNames }}</span>
    </div>

    <div id="example-4">
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <br>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br>
        <span>Picked: {{ picked }}</span>
    </div>

    <div id="example-5">
        <select v-model="selected">
            <option disabled value="">请选择</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
        <span>Selected: {{ selected }}</span>
    </div>

    <select v-model="selected1"> <!--select 绑定的是value option没写value默认test-->
        <option disabled value="">请选择</option>
        <option v-for="option in options" v-bind:key="option.text" v-bind:value="option.value">
            {{ option.text }}
        </option>
    </select>
    <span>Selected: {{ selected1 }}</span>
    
  </div>

</template>

<script>
export default {
  name: "Message",
  data() {
    return { //每次使用组件的时候都是return一个新对象！ 对象里面的所有属性都不共享
      toggle:"",
      selected: "", // 默认值就是selected = "selected"
      selected1: "",
      options: [
        { value: 0, text: "A" },
        { value: 1, text: "B" },
        { value: 2, text: "C" }
      ],
      picked: "",
      checkedNames: [],
      checked: true,
      message: "My First Component",
      info: "页面加载于" + new Date().toLocaleString(),
      input_title: "请输入",
      seen: true,
      todos: [
        { id: 0, text: "学习JS" },
        { id: 1, text: "学习Vue" },
        { id: 2, text: "学习脚手架" }
      ],
      rawHtml: '<span style="color:red">This should be red.</span>',
      isDisabled: false,
      // v-bind:class 是 类名 + boolean
      // v-bind:style 是 style + 值
      classObj: {
        active: true,
        "text-danger": false
      },
      styleObj: {
        color: "purple",
        fontSize: "18px"
      },
      isActive: true,
      hasError: "hasError",
      newTodoText: ""
    };
  },
  computed: {
    reversed: function() {
      return Date.now();
    }
  },
  methods: {
    reversed1: function() {
      return Date.now();
    },
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    },
    remove: function(index) {
      this.todos.splice(index, 1);
    },
    addNewTodo: function() {
      if (this.newTodoText) {
        this.todos.push({ id: this.todos.length - 1, text: this.newTodoText });
        this.newTodoText = "";
      }
    }
  },
  created() {
    console.log(this.info);
  }
};
</script>

<style scoped>
.message {
  color: #42b983;
}
</style>

