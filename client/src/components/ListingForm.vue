<template>

  <div class="question-form">
    <button class="ui button" @click="backToListing">
      Back
    </button>

    <h2>New Listing</h2>
    <form class="ui form" v-on:submit.prevent="createListing" >
      <div class="fields">
        <div class="ten wide field">
          <label>Title</label>
          <input type="text" name="username" v-model="postForm.title">
        </div>
      </div>
      <div class="fields">
        <div class="ten wide field">
          <label>Description</label>
          <textarea rows="2" v-model="postForm.description"></textarea>
        </div>
      </div>
      <div class="fields">
        <div class="ten wide field">
          <label>Price</label>
          <input type="text" name="username" v-model="postForm.price">
        </div>
      </div>
      <div class="fields">
        <div class="ten wide field">
          <label>Address</label>
          <input type="text" name="username" v-model="postForm.address">
        </div>
      </div>
      <div class="fields">
        <div class="ten wide field">
          <label>City</label>
          <input type="text" name="username" v-model="postForm.city">
        </div>
      </div>
      <div class="fields">
        <div class="ten wide field">
          <label>Country</label>
          <input type="text" name="username" v-model="postForm.country">
        </div>
      </div>

      <div class="fields">
        <div class="ten wide field">
          <button id="btnSubmitLogin" class="ui button green right floated" type="submit"> {{ postForm._id ? 'Update' : 'Post Listing' }} </button>
          <button id="btnSubmitLogin" v-if="postForm._id" class="ui button red right floated" type="submit" v-on:click.prevent="cancelUpdate"> Cancel </button>

        </div>
      </div>

    </form>

  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    postForm: 'getPosts'
  }),
  methods: {
    ...mapActions([
      'createPost'
    ]),
    createListing () {
      console.log('createListing')
      this.createPost(this.postForm)
      this.$router.push('/')
    },
    backToListing () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css">
</style>
