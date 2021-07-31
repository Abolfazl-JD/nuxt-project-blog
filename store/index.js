import axios from 'axios'

export const state = () => ({
    loadedPosts: []
})

export const mutations = {
    setPosts(state, posts) {
        state.loadedPosts = posts
    }
}