<template>
  <div>
    <c-header />
    <nuxt />
    <c-footer />
  </div>
</template>
<script>
import CHeader from '~/components/general/CHeader/CHeader.vue'
import CFooter from '~/components/general/CFooter/CFooter'
export default {
  components: {
    CHeader,
    CFooter
  }
}
</script>
