<template>
   <div class="message">
    <p>{{message}}</p>
    <input v-model="message"/>
  </div> 
</template>

<script>
export default {
    name: "Message",
    data(){
        return{
            message:"My First Component"
        }
    }
}
</script>

<style scoped>
    .message {
        color: blueviolet
    }
</style>

