<template>
  <div class="">
    <h1>Listing</h1>
    <button class="ui green basic button" @click="createNewListing">New</button>

    <div class="ui card" v-for="post in posts">
      <div class="image">
        <img src="/images/avatar2/large/kristy.png">
      </div>
      <div class="content">
        <a class="header">{{ post.title }}</a>
        <div class="meta">
          <span class="date">Posted on {{ post.created_at }}</span>
        </div>
        <div class="description">
          {{ post.description }}
        </div>
      </div>
      <div class="extra content">
        <a>
          <i class="marker icon"></i>
          {{ post.city }}
        </a>
      </div>
    </div>


  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    count: 'getCount',
    posts: 'getPosts'
  }),
  methods: {
    ...mapActions([
      'increment',
      'getPostsfromDB'
    ]),
    createNewListing() {
      this.$router.push('/newlisting')
    }
  },
  created () {
    this.getPostsfromDB()
  }

}
</script>

<style lang="css">
</style>
