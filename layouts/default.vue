<template>
  <div>
    <c-header />
    <nuxt />
    <c-footer />
  </div>
</template>
<script>
import CHeader from '~/components/general/CHeader/Header.vue'
import CFooter from '~/components/general/CFooter/Footer'
export default {
  components: {
    CHeader,
    CFooter
  }
}
</script>
