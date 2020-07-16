<template>
  <div>
    <c-header-admin />
    <nuxt />
    <c-footer />
  </div>
</template>
<script>
import CHeaderAdmin from '@/components/general/CHeader/CHeaderAdmin'
import CFooter from '@/components/general/CFooter/CFooter'
export default {
  components: {
    CHeaderAdmin,
    CFooter
  }
}
</script>
