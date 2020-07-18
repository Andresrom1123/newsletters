<template>
  <div>
    <b-modal id="bv-modal" hide-footer>
      <template v-slot:modal-title>
        <h3>
          Inise noc
        </h3>
      </template>
      <div class="mb-3">
        <div class="d-flex mb-3 justify-content-center">
          <div class="shadow rounded-circle overflow-hidden">
            <img src="/favicon.ico" class="-img" alt="..." />
          </div>
        </div>
        <p class="text-muted m-0 text-center">lorem akjdkaf jka</p>
      </div>
      <nuxt-link class="text-decoration-none" to="/login">
        <b-button class="btn-block" type="button" variant="success">
          Log in
        </b-button>
      </nuxt-link>
      <nuxt-link class="text-center text-decoration-none nav-item" to="/signup">
        <p class="mt-2 mb-0 text-primary">
          Sign up
        </p>
      </nuxt-link>
    </b-modal>
  </div>
</template>
