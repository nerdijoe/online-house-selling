<template>
  <div class="detail-container">
    <button class="ui button" @click="backToListing">
      Back
    </button>

    <h1>Listing Detail</h1>


    <div class="ui segments">
      <div class="ui segment">
        <h2>{{ post.title }}</h2>
        <img class="ui big centered bordered image" v-bind:src="post.picture">

      </div>
      <div class="ui segments">
        <div class="ui segment">
          <h4>Description</h4>
          <p>{{ post.description }}</p>
        </div>
      </div>
      <div class="ui segment">
        <h4>Price</h4>
        <p>$ {{ post.price }},-</p>
      </div>
      <div class="ui horizontal segments">
        <div class="ui segment">
          <h4>Address</h4>
          <p>{{ post.address }}</p>
        </div>
        <div class="ui segment">
          <h4>City</h4>
          <p>{{ post.city }}</p>
        </div>
        <div class="ui segment">
          <h4>Country</h4>
          <p>{{ post.country }}</p>
        </div>
      </div>
      <div class="ui segment">
        <h4>Map</h4>

        <gmap-map
          :center="center"
          :zoom="10"
          style="width: 500px; height: 300px"
        >
          <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="false"
            @click="center=m.position"
          ></gmap-marker>
        </gmap-map>

      </div>
    </div>




  </div>
</template>

<script>



import { mapGetters, mapActions } from 'vuex'


import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyAyPn_nD60WIRhX0ukbZIa_5KCQU83jAJA',
      v: 'OPTIONAL VERSION NUMBER',
      // libraries: 'places', //// If you need to use place input
    }
  });

export default {
  data () {
    return {
      post: {
        _id: null,
        title: '',
        description: '',
        price: null,
        address: '',
        city: '',
        country: '',
        picture: null,
        map_lat: null,
        map_lng: null
      },
      center: {lat: -6.264597, lng: 106.782843},
      markers: [

      ]
    }
  },
  methods: {
    ...mapGetters([
      'getPosts'
    ]),
    getPosition(){
      console.log(VueGoogleMaps.Map);
    },
    backToListing () {
      this.$router.push('/')
    }

  },
  created () {
    var post_id = this.$router.currentRoute.query.id


    if(post_id) {
      // this.postForm = this.getPostbyId(post_id)
      var posts = this.getPosts()
      // console.log(posts)
      var index = posts.findIndex( p => p._id == post_id )
      // console.log("post_id", post_id)
      // console.log(index)
      if(index != -1) {
        console.log("here")

        console.log(posts[index]);


        this.post = posts[index];
        console.log("typeof",typeof this.post.map_lat);
        console.log(this.post.map_lat)
        // for some reason this.post.map_lat and map_lng is an array
        //???
        var marker = { position: {lat: this.post.map_lat[0], lng: this.post.map_lng[0]} }
        this.markers.push(marker)
        this.center = {lat: this.post.map_lat[0], lng: this.post.map_lng[0]}
      }
    }
  }

}
</script>

<style scoped>
</style>
