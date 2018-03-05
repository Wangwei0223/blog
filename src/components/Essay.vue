<template>
    <div class="essay">
    <hr>
    <p>Technology</p>
    <hr>
    <p>Essay</p>
    <hr>
    <p>Roast</p>
    <hr>
    </div>
</template>

<script>
export default {
    name: "Essay",
    data(){
        return{
            Tech_list:[],
            Essay_list:[],
            Roast_list:[]
        }
    }
}
</script>

<style scoped>
    hr{
        width:20%;
        align-self: center
    }
</style>
