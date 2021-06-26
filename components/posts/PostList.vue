<template>
<b-row>
    <b-col cols="12" md="4" v-for="post in posts" :key="post.id">
        <PostPreview :id="post.id" :author="post.author" :content="post.content" :email="post.email" :thumbnail="post.thumbnail" />
    </b-col>
</b-row>
</template>

<script>
import PostPreview from "./PostPreview";
export default {
    components: {
        PostPreview
    },
    props: ["posts"]
    // props: {
    //     posts: {
    //         type: Array,
    //         required: true
    //     }
    // }
};
</script>

<style scoped>
.post-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
</style>
