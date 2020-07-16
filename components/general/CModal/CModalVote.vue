<template>
  <div>
    <b-modal id="bv-modal-progress" hide-footer>
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
      <ValidationObserver ref="observer" v-slot="{ passes }">
        <b-form @submit.prevent="passes(onSubmit)">
          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            name="username"
          >
            <b-form-group id="input-group-1" class="-text-warning">
              <div class="position-relative">
                <b-form-input
                  id="input-1"
                  v-model="form.username"
                  type="text"
                  placeholder="Username"
                  class="col-11 ml-4"
                >
                </b-form-input>
                <i class="-ico position-absolute fas fa-user"></i>
              </div>
              <small class="form-text text-danger">
                {{ errors[0] }}
              </small>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            name="password"
          >
            <b-form-group id="input-group-2" class="-text-warning">
              <div class="position-relative">
                <b-form-input
                  id="input-2"
                  v-model="form.password"
                  type="password"
                  placeholder="Password"
                  class="col-11 ml-4"
                >
                </b-form-input>
                <i class="-ico position-absolute fas fa-key"></i>
              </div>
              <small class="form-text text-danger">
                {{ errors[0] }}
              </small>
            </b-form-group>
          </ValidationProvider>
          <b-button class="btn-block" type="submit" variant="warning">
            Vote
          </b-button>
        </b-form>
      </ValidationObserver>
      <nuxt-link class="text-center text-decoration-none nav-item" to="/signup">
        <p class="mt-2 mb-0 text-primary">
          Sign up
        </p>
      </nuxt-link>
    </b-modal>
  </div>
</template>
<script>
export default {
  layout: 'login',
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      alert('Te haz logeado perfectamente')
    }
  }
}
</script>
