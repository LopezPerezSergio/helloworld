<template>
    <div class="post-card">
        <h3>TITULO</h3>
        <P>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error nisi consectetur provident autem libero illo eius voluptatum excepturi, earum, eum sunt. Veniam placeat numquam unde quod! Fugiat corrupti facere possimus.</P>
        <PostButton/>
    </div>
    
</template>

<script lang="ts" setup>
    import PostButton from './PostButton.vue'
</script>

<style scoped>
    .post-card{
        border-radius: 15px;
        border: 1px solid gray;
        padding: 10px;
        margin: 5px;
    }
</style>