<template>
      <div class="video">
          <header-bar>
          </header-bar>
           <bottom-nav></bottom-nav>
      </div>
</template>


<script>
import headerBar from '../components/Header-bar.vue'
import bottomNav from '../components/Bottom-nav.vue'

export default {
     components: {
        headerBar,
        bottomNav
    }
}
</script>

