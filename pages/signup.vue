<template>
  <div class="shadow my-4 -login mx-auto p-3 border-warning border rounded">
    <h3 class="text-center">Sign up</h3>
    <ValidationObserver ref="observer" v-slot="{ passes }">
      <b-form @submit.prevent="passes(onSubmit)">
        <ValidationProvider
          v-slot="{ errors }"
          rules="required"
          name="username"
        >
          <b-form-group id="input-group-1" class="text-muted">
            <div class="position-relative">
              <b-form-input
                id="input-1"
                v-model="form.username"
                type="text"
                placeholder="Username"
                class="col-12"
              >
              </b-form-input>
            </div>
            <small class="form-text text-danger">
              {{ errors[0] }}
            </small>
          </b-form-group>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          rules="required"
          name="first name"
        >
          <b-form-group id="input-group-2" class="text-muted">
            <div class="position-relative">
              <b-form-input
                v-model="form.fists_name"
                type="text"
                placeholder="First name"
                class="col-12"
              >
              </b-form-input>
            </div>
            <small class="form-text text-danger">
              {{ errors[0] }}
            </small>
          </b-form-group>
        </ValidationProvider>
        <ValidationProvider
          v-slot="{ errors }"
          rules="required"
          name="last name"
        >
          <b-form-group class="text-muted">
            <div class="position-relative">
              <b-form-input
                v-model="form.last_name"
                type="text"
                placeholder="Last name"
                class="col-12"
              >
              </b-form-input>
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
          <b-form-group class="text-muted">
            <div class="position-relative">
              <b-form-input
                v-model="form.password"
                type="password"
                placeholder="Password"
                class="col-12"
              >
              </b-form-input>
            </div>
            <small class="form-text text-danger">
              {{ errors[0] }}
            </small>
          </b-form-group>
        </ValidationProvider>
        <b-button class="btn-block text-muted" type="submit" variant="light">
          Sign up
        </b-button>
        <nuxt-link
          class="text-center text-decoration-none nav-item"
          to="/login"
        >
          <p class="mt-2 mb-0 text-primary">
            Log in
          </p>
        </nuxt-link>
      </b-form>
    </ValidationObserver>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'login',
  middleware: 'logged-dashboard',
  data() {
    return {
      form: {
        username: '',
        fists_name: '',
        last_name: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapMutations({
      signUp: 'signUp'
    }),
    onSubmit() {
      alert('Te has registrado perfectamente')
      this.$router.push('/login')
      this.signUp(this.form)
    }
  }
}
</script>
