<template>
  <form @submit.prevent="createBlog">
        <div class="input-control">
            <label for="author">Author name :</label>
            <input type="text" name="author" v-model="newBlog.author">
        </div>
        <div class="input-control">
            <label for="title">Title :</label>
            <input type="text" name="title" v-model="newBlog.title">
        </div>
        <div class="input-control">
            <label for="thumbnailLink">Thumbnail link :</label>
            <input type="text" name="thumbnailLink" v-model="newBlog.thumbnail">
        </div>
        <div class="input-control">
            <label for="content">Content :</label>
            <textarea name="content" cols="30" rows="10" v-model="newBlog.content"></textarea>
        </div>
        <div class="form-actions">
            <button class="btn" type="submit">create</button>
            <button type="button" class="btn btn-cancel" @click="goBack">cancel</button>
        </div>
    </form>
</template>


<script>
export default {
    props : {
        loadedBlog : {
            type : Object,
            required : false
        }
    },

    data(){
        return {
            newBlog : this.loadedBlog ? {...this.loadedBlog} : {
                author : '',
                title : '',
                thumbnail : '',
                content : '',
            }
        }
    },

    methods : {
        createBlog(){
            this.$emit('createBlog', this.newBlog)
        },

        goBack(){
            this.$router.push('/admin')
        }
    }
}
</script>

<style>

</style>