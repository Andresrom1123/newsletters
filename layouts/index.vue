<template>
  <div>
    <c-header-index />
    <nuxt />
    <c-footer />
  </div>
</template>
<script>
import CHeaderIndex from '@/components/general/CHeader/CHeaderIndex'
import CFooter from '@/components/general/CFooter/CFooter'
export default {
  components: {
    CHeaderIndex,
    CFooter
  }
}
</script>
