<template>
  <div :class="{'nav-open': $sidebar.showSidebar}">
    <notifications></notifications>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {}
</script>

<style>
/* custom pastel colors */

.pastel-gray {
    color: #B3B3B3
}

.pastel-red {
color: #DF92AA;
}

.pastel-orange {
color: #FCD18C;
}

.pastel-yellow {
color: rgb(253, 235, 117);
}

.pastel-green {
color: #CAE294;
}

.pastel-blue {
color: #90D7F3;
}

/* custom pastel colors */
</style>

<style lang="scss">
  .vue-notifyjs.notifications{
    .list-move {
      transition: transform 0.3s, opacity 0.4s;
    }
    .list-item {
      display: inline-block;
      margin-right: 10px;

    }
    .list-enter-active {
      transition: transform 0.2s ease-in, opacity 0.4s ease-in;
    }
    .list-leave-active {
      transition: transform 1s ease-out, opacity 0.4s ease-out;
    }

    .list-enter {
      opacity: 0;
      transform: scale(1.1);

    }
    .list-leave-to {
      opacity: 0;
      transform: scale(1.2, 0.7);
    }
  }
</style>
