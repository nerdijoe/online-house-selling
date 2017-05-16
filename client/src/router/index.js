import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Test from '@/components/Test'
import Listing from '@/components/Listing'
import ListingForm from '@/components/ListingForm'
import ListingDetail from '@/components/ListingDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Listing',
      component: Listing
    },
    {
      path: '/listingform',
      name: 'ListingForm',
      component: ListingForm
    },
    {
      path: '/detail',
      name: 'ListingDetail',
      component: ListingDetail
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
