<template>
  <div class="admin-page">
      <section class="new-post">
          <button class="btn" @click="$router.push('/admin/new-post')">Create post</button>
      </section>
      <section class="existing-posts">
          <h1>Existing posts</h1>
          <PostList :isAdmin="admin" />
      </section>
  </div>
</template>

<script>

export default {
  layout: 'admin',

  data(){
    return {
      admin : true
    }
  }

}
</script>

<style>

.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}

</style>