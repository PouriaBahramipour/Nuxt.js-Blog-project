<template>
  <b-container fluid class="bv-example-row px-0 mx-0">
    <b-container fluid class="bv-example-row px-0 mx-0">
      <b-row>
        <b-col cols="12">
          <div class="home-page">
            <section class="intro">
              <h1>Get the latest tech news!</h1>
            </section>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="mt-5">
      <post-list :posts="loadedPosts" />
    </b-container>
  </b-container>
</template>

<script>
import PostList from "@/components/posts/PostList";
export default {
  fetchOnServer: false,
  components: {
    PostList
  },
  fetch() {
    return this.$store.dispatch("setPosts");
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  }
};
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~assets/images/main-page-background.jpg");
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}
</style>
