<template>
  <div class="shadow my-4 -login mx-auto p-3 border-warning border rounded">
    <b-alert :show="!$store.state.message == ''" dismissible fade>
      <small>
        {{ $store.state.message + ' ' + $store.state.user.username }}
      </small>
    </b-alert>
    <h3 class="text-center">Log In</h3>
    <ValidationObserver ref="observer" v-slot="{ passes }">
      <b-form @submit.prevent="passes(onSubmit)">
        <ValidationProvider
          v-slot="{ errors }"
          rules="required"
          name="username"
        >
          <b-form-group
            id="input-group-1"
            label="Username:"
            label-for="input-1"
            class="text-muted"
          >
            <div class="position-relative">
              <b-form-input
                id="input-1"
                v-model="form.username"
                type="text"
                placeholder="Enter username"
                class="col-11 ml-4"
              >
              </b-form-input>
              <i class="-ico2 position-absolute fas fa-user"></i>
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
          <b-form-group
            id="input-group-2"
            label="Password:"
            label-for="input-2"
            class="text-muted"
          >
            <div class="position-relative">
              <b-form-input
                id="input-2"
                v-model="form.password"
                type="password"
                placeholder="Enter password"
                class="col-11 ml-4"
              >
              </b-form-input>
              <i class="-ico2 position-absolute fas fa-key"></i>
            </div>
            <small class="form-text text-danger">
              {{ errors[0] }}
            </small>
          </b-form-group>
        </ValidationProvider>
        <b-button class="btn-block text-muted" type="submit" variant="light">
          Log in
        </b-button>
        <nuxt-link
          class="text-center text-decoration-none nav-item"
          to="/signup"
        >
          <p class="mt-2 mb-0 text-primary">
            Sign up
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
        password: ''
      }
    }
  },
  methods: {
    ...mapMutations({
      login: 'login'
    }),
    onSubmit() {
      alert('Te has registrado perfectamente')
      this.login(this.form)
      this.$router.push('/home')
    }
  }
}
</script>
