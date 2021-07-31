<template>
    <section class="post-list">
      <PostPreview
        v-for="post of posts"
        :key="post.title"
        :is-admin="isAdmin"
        :title="post.title"
        :thumbnail="post.thumbnail"
        :content="post.content" />
    </section>
</template>

<script>
import PostPreview from '@/components/posts/postPreview.vue'
import axios from 'axios'

export default {
    components : {PostPreview},

    props : {
      isAdmin : {
        type : Boolean,
        default : false
      },
    },
  
    computed : {
      posts(){
        return this.$store.state.loadedPosts
      }
    },
    
}
</script>

<style>


.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}


</style>