<template>
    <div class="exercise">
    <hr>
    <p>Articles</p>
    <div v-for="article in article_list" :key="article.name">
    <router-link :to="article.path">
        {{article.name}}
    </router-link>
    </div>
    <hr>
    </div>
</template>

<script>
import Articles from "@/assets/js/Articles.js";
export default {
    name: "Essay",
    data(){
        return{
            article_list:Articles,
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
