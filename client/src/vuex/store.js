import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex, VueAxios, axios)

// const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  state: {
    count: 0,
    posts: [],
    postForm: {
      _id: null,
      title: '',
      description: '',
      price: null,
      address: '',
      city: '',
      country: ''
    }
  },
  getters: {
    getCount (state) {
      return state.count
    },
    getPosts (state) {
      return state.posts
    },
    getPostForm (state) {
      return state.postForm
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    assignPostsfromDB (state, data) {
      state.posts = data
      console.log('assignPostsfromDB', state.posts)
    },
    createNewPost (state, newPost) {
      state.posts.push(newPost)
      console.log('createNewPost', state.posts)
    }
  }, // end of mutations
  actions: {
    increment ({ commit }) {
      commit('increment')
    },
    getPostsfromDB ({ commit }) {
      axios.get('http://localhost:3000/api/posts')
      .then(response => {
        commit('assignPostsfromDB', response.data )
      })
      .catch(err => {
        console.log(err)
      })
    },
    createPost ({ commit }, newPost ) {
      console.log('createPost', newPost)

      axios.post('http://localhost:3000/api/posts', {
        title: newPost.title,
        description: newPost.description,
        price: newPost.price,
        address: newPost.address,
        city: newPost.city,
        country: newPost.country
      })
      .then(response => {
        console.log(response.data)
        commit('createNewPost', response.data)
      })
      .catch(err => {
        console.log(err)
      })

    }
  }
})

export default store
