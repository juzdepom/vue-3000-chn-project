<template>
  <div class="sidebar"
      :style="sidebarStyle"
      :data-color="backgroundColor"
      :data-image="backgroundImage">
    <div class="sidebar-wrapper">
      <div class="logo">
        <a href="#" class="simple-text">
          <!-- <i class="nc-icon nc-circle-09"></i> -->
            <!-- <div class="logo-img">
                <img src="static/img/vue-logo.png" alt="">
            </div> -->
          {{title}}
        </a>
      </div>

      <slot name="content"></slot>
      <ul class="nav">
        <!--By default vue-router adds an active class to each route link. This way the links are colored when clicked-->
        <slot>
          <sidebar-link v-for="(link,index) in sidebarLinks"
                        :key="link.name + index"
                        :to="link.path"
                        @click="closeNavbar"
                        :link="link">
            <i :class="link.icon"></i>
            <p>{{link.name}}</p>
          </sidebar-link>
        </slot>
      </ul>
    </div>
  </div>
</template>
<script>
  import SidebarLink from './SidebarLink.vue'

  export default {
    components: {
      SidebarLink
    },
    props: {
      title: {
        type: String,
        default: 'Julia G.'
      },
      backgroundColor: {
        type: String,
        default: 'brown',
        validator: (value) => {
          let acceptedValues = ['', 'blue', 'azure', 'green', 'orange', 'red', 'purple', 'black', 'brown']
          return acceptedValues.indexOf(value) !== -1
        }
      },
      backgroundImage: {
        type: String,
        default: 'static/img/sidebar-7.jpg'
        // default: 'static/img/sidebar-5.jpg'
      },
      activeColor: {
        type: String,
        default: 'success',
        validator: (value) => {
          let acceptedValues = ['primary', 'info', 'success', 'warning', 'danger']
          return acceptedValues.indexOf(value) !== -1
        }
      },
      sidebarLinks: {
        type: Array,
        default: () => []
      },
      autoClose: {
        type: Boolean,
        default: true
      }
    },
    provide () {
      return {
        autoClose: this.autoClose
      }
    },
    computed: {
      sidebarStyle () {
        return {
          backgroundImage: `url(${this.backgroundImage})`
        }
      }
    }
  }

</script>
<style>

</style>
