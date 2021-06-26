<template>
<div class="admin-new-post-page">
    <section class="new-post-form">
        <h1 style="text-align: center">New Post</h1>
        <AdminPostForm @submitted="onSubmit" />
    </section>
</div>
</template>

<script>
import AdminPostForm from "@/components/admin/AdminPostForm";
import axios from "axios";

export default {
    components: {
        AdminPostForm
    },
    methods: {
        onSubmit(posts) {
            console.log(posts)
            this.$axios.$post(
                "https://first-nuxt-project-a269a-default-rtdb.firebaseio.com/posts.json", {
                    ...posts,
                    updatedDate: new Date()
                }
            );
        }
    }
};
</script>

<style scoped>
.new-post-form {
    width: 90%;
    margin: 20px auto;
}

@media (min-width: 768px) {
    .new-post-form {
        width: 500px;
    }
}
</style>
