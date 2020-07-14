<template>
  <div>
    <b-modal id="bv-modal-example" hide-footer>
      <template v-slot:modal-title>
        <h3>
          Inise noc
        </h3>
      </template>
      <div>
        <div class="d-flex mb-3 justify-content-center">
          <div class="shadow rounded-circle overflow-hidden">
            <img src="/favicon.ico" class="img" alt="..." />
          </div>
        </div>
        <p class="text-muted m-0 text-center">lorem akjdkaf jka</p>
        <div class="position-relative">
          <input
            class="my-3 border pl-5 py-2 rounded btn-block"
            type="text"
            placeholder="Your Email"
          />
          <i class="-text-warning fas fa-envelope position-absolute ico"></i>
        </div>
      </div>
      <b-button
        class="d-flex pointer p-2 rounded justify-content-center align-items-center"
        variant="warning"
        block
        @click="$bvModal.hide('bv-modal-example')"
      >
        <span v-if="subscribe">Subscribe</span>
        <span v-if="vote">Vote</span>
      </b-button>
    </b-modal>
  </div>
</template>
<script>
export default {
  props: {
    vote: {
      type: Boolean,
      default: () => false
    },
    subscribe: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>
<style lang="sass">
.ico
  top: 0.8rem
  left: 1.5rem
  bottom: 0px
</style>
