<template>
  <div class="admin-post-page">
      <section class="update-form">
          <BlogForm :loadedBlog="loadedBlog" />
      </section>
  </div>
</template>

<script>

export default {
  layout: 'admin',

  data(){
      return {
          loadedBlog : {
              author : 'Abolfazl',
              title : 'Game',
              thumbnailLink : 'https://files.techmahindra.com/static/img/hi-tech-enterprise-smart-assistant.jpg',
              content : 'Red dead 2 is the best game ever nothing can be like that !'
          }
      }
  }
}
</script>

<style>

.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}

</style>