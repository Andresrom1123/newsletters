<template>
  <div class="shadow my-4 login bg mx-auto p-3 rounded">
    <h3 class="text-center text-white">Log In</h3>
    <ValidationObserver ref="observer" v-slot="{ passes }">
      <b-form @submit.prevent="passes(onSubmit)">
        <ValidationProvider
          rules="required"
          name="username"
          v-slot="{ errors }"
        >
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            class="text-muted"
          >
            <div class="position-relative">
              <b-form-input
                id="input-1"
                v-model="form.username"
                type="email"
                placeholder="Enter username"
                class="col-11 ml-4"
              >
              </b-form-input>
              <i class="ico2 position-absolute text-white fas fa-envelope"></i>
            </div>
            <small class="form-text text-danger">
              {{ errors[0] }}
            </small>
          </b-form-group>
        </ValidationProvider>
        <ValidationProvider
          rules="required"
          name="password"
          v-slot="{ errors }"
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
              <i class="ico2 position-absolute text-white fas fa-key"></i>
            </div>
            <small class="form-text text-danger">
              {{ errors[0] }}
            </small>
          </b-form-group>
        </ValidationProvider>
        <b-button class="btn-block text-muted" type="submit" variant="light">
          Log in
        </b-button>
      </b-form>
    </ValidationObserver>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
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
    ...mapMutations(['login']),
    onSubmit() {
      this.$router.push('/dashboard')
      alert('Te has registrado perfectamente')
    }
  }
}
</script>
<style>
.login {
  width: 40%;
}
.bg {
  background-color: rgba(255, 193, 7, 0.68);
}
.form {
  width: 100%;
}
.ico2 {
  top: 0.5rem;
}
</style>
