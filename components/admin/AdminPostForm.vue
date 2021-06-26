<template>
<form class="mt-5" @submit.prevent="onSave">
    <div>
        <label for="name">Name:</label>
        <b-form-input id="name" type="text" v-model="editedPost.author" placeholder="Enter Name" required></b-form-input>
    </div>
    <div>
        <label for="name">Email:</label>
        <b-form-input id="email" type="email" v-model="editedPost.email" placeholder="Enter email" required></b-form-input>
    </div>
    <div>
        <label for="Thumbnail">Thumbnail Link:</label>
        <b-form-input id="Thumbnail" type="text" placeholder="Enter URl" v-model="editedPost.thumbnail" required></b-form-input>
    </div>
    <div>
        <label for="Content">Content:</label>
        <b-textarea id="Content" placeholder="Enter Content" v-model="editedPost.content" required rows="10"></b-textarea>
    </div>
    <b-button variant="outline-primary" type="submit">Submit</b-button>
</form>
</template>

<script>
export default {
    data() {
        return {
            editedPost: {
                author: "",
                email: "",
                thumbnail: "",
                content: ""
            }
        };
    },
    methods: {
        onSave() {
            this.$emit("submitted", this.editedPost);
        }
    }
};
</script>
