<template>
  <div>
    <Header @sidenavToggle="showSideNav = !showSideNav"/>
    <SideNav :show="showSideNav" @close="showSideNav = false"/>
    <Nuxt />
  </div>
</template>

<script>
import Header from '../components/navigation/TheHeader.vue'
import SideNav from '../components/navigation/TheSidenav.vue'

export default {
  components : {Header, SideNav},

  data(){
    return {
      showSideNav : false
    }
  },

}
</script>

<style>

html{
    font-family: 'Open Sans', sans-serif
}

</style>