<template>
    <div class="post-container">
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
    </div>
</template>

<script lang="ts" setup>
    import PostCard from './PostCard.vue';
</script>

<style scoped>
    .post-container{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        border-radius: 15px;
        border: 1px solid gray;
    }
</style>