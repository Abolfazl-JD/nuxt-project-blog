<template>
  <nuxt-link  class="post-preview" :to="link">
    <article>
        <div class="post-thumbnail" id="tech1" :style="{backgroundImage : 'url(' + thumbnail + ')'}"></div>
        <div class="post-content">
            <h1>{{ title }}</h1>
            <p>{{ content }}</p>
        </div>
    </article>
    </nuxt-link>
</template>

<script>
export default {
    name : 'post-preview',

    props : [ 'title', 'content', 'thumbnail', 'isAdmin'],

    computed : {
      link(){
        return this.isAdmin ? '/admin/' + this.title : '/posts/' + this.title
      }
    }
}
</script>

<style>


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

#tech1{
  background-image: url('https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2020/07/06/Pictures/_efc67d54-bf62-11ea-9738-294dc8afd766.jpg');
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