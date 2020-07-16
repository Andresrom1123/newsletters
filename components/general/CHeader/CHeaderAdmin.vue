<template>
  <header class="border-bottom pb-0 pl-3 pr-3 pt-3 container-fluid">
    <div class="d-flex justify-content-between align-items-center">
      <h1 class="-text-warning">
        NEWSLETTER ADMIN
      </h1>
      <div>
        <nuxt-link to="/">
          <span @click="logOut()" class="-text-warning pt-2 px-3">
            <i class="fas fa-arrow-left"></i>
          </span>
        </nuxt-link>
        <button
          @click="$bvModal.show('modal-create')"
          class="btn btn-success text-decoration-none"
        >
          <i class="text-white fas fa-plus"></i>
        </button>
      </div>
    </div>
    <c-modal-create />
  </header>
</template>
<script>
import CModalCreate from '@/components/general/CModal/CModalCreate'
export default {
  components: {
    CModalCreate
  },
  data() {
    return {
      logOut() {
        localStorage.removeItem('vuex')
      }
    }
  }
}
</script>
