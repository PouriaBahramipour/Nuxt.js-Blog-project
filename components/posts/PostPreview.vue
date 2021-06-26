<template>
<nuxt-link :to="postLink">
    <article>
        <div class="post-thumbnail" :style="{backgroundImage: 'url('+ thumbnail +')'}"></div>
        <div class="post-content">
            <h1>{{ author }}</h1>
            <p>{{ content }}</p>
        </div>
    </article>
</nuxt-link>
</template>

<script>
export default {
  props: ['id', 'author', 'content', 'email', 'thumbnail'],
    // props: {
    //     id: {
    //         type: String,
    //         required: true
    //     },
    //     author: {
    //         type: String,
    //         required: true
    //     },
    //     content: {
    //         type: String,
    //         required: true
    //     },
    //     email: {
    //         type: String,
    //         required: true
    //     },
    //     thumbnail: {
    //         type: String,
    //         required: true
    //     }
    // },
    computed: {
      postLink(){
        return "/posts/"+ this.id
      }
    }
}
</script>

<style scoped>
.post-preview {
    border: 1px solid #ccc;
    box-shadow: 0 2px 2px #ccc;
    background-color: white;
    width: 90%;
}

a {
    text-decoration: none;
    color: black;
}

@media (min-width: 850px) {
    .post-preview {
        width: 400px;
        margin: 10px;
    }
}

.post-thumbnail {
    width: 100%;
    height: 200px;
    background-position: center;
    background-size: cover;
}

.post-content {
    padding: 10px;
    text-align: center;
}

a:hover .post-content,
a:active .post-content {
    background-color: #ccc;
}
</style>
