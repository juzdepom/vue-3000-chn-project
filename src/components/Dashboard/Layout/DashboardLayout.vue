<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/overview">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/admin/cards">
        <i class="nc-icon nc-layers-3"></i>
        <p>Cards</p>
      </sidebar-link>
      <sidebar-link to="/admin/learn">
        <i class="nc-icon nc-bulb-63"></i>
        <p>Learn</p>
      </sidebar-link>
      <sidebar-link to="/admin/roadtrip">
        <i class="nc-icon nc-bus-front-12"></i>
        <p>Roadtrip</p>
      </sidebar-link>
      <sidebar-link to="/admin/test">
        <i class="nc-icon nc-ruler-pencil"></i>
        <p>Test</p>
      </sidebar-link>
      <sidebar-link to="/admin/story">
        <i class="nc-icon nc-istanbul"></i>
        <p>Story</p>
      </sidebar-link>
      <sidebar-link to="/admin/entries">
        <i class="nc-icon nc-single-copy-04"></i>
        <p>Entries</p>
      </sidebar-link>
      <sidebar-link to="/admin/leaderboard">
        <i class="nc-icon nc-globe-2"></i>
        <p>Leaderboard</p>
      </sidebar-link>
      <sidebar-link to="/admin/icons">
        <i class="nc-icon nc-atom"></i>
        <p>Icons</p>
      </sidebar-link>
      <!-- <sidebar-link to="/admin/user">
        <i class="nc-icon nc-circle-09"></i>
        <p>User Profile</p>
      </sidebar-link> -->
      <!-- <sidebar-link to="/admin/overview">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Dashboard</p>
      </sidebar-link>

      <sidebar-link to="/admin/table-list">
        <i class="nc-icon nc-notes"></i>
        <p>Table list</p>
      </sidebar-link>
      <sidebar-link to="/admin/typography">
        <i class="nc-icon nc-paper-2"></i>
        <p>Typography</p>
      </sidebar-link> -->
      <!-- <sidebar-link to="/admin/maps">
        <i class="nc-icon nc-pin-3"></i>
        <p>Maps</p>
      </sidebar-link>
      <sidebar-link to="/admin/notifications">
        <i class="nc-icon nc-bell-55"></i>
        <p>Notifications</p>
      </sidebar-link> -->
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'
  import MobileMenu from './MobileMenu.vue'
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
      MobileMenu
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      }
    }
  }

</script>
