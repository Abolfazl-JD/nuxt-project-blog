<template>
  <div class="admin-new-post-page">
      <section class="new-post-form">
          <BlogForm @createBlog="createBlog" />
      </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  layout: 'admin',

  methods : {
    createBlog(blog){
       axios.post('https://nuxt-blog-3aa73-default-rtdb.firebaseio.com/posts.json', blog)
    }
  }
}
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