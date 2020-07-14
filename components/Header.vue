<template>
  <header class="border-bottom pb-0 pl-3 pr-3 pt-3 container-fluid">
    <div class="d-flex justify-content-between align-items-center">
      <h1 class="-text-warning">
        [ INSIDE ]
      </h1>
      <div>
        <span class="-text-warning px-2"><i class="fas fa-search"></i></span>
        <nuxt-link to="/login" class="text-decoration-none">
          <span class="-text-warning px-2"><i class="fas fa-user "></i></span>
        </nuxt-link>
        <span class="border rounded -text-warning p-1 border-warning">
          SPORNSHIP
        </span>
      </div>
    </div>
    <div>
      <b-navbar class="py-0" toggleable="sm" type="light" variant="trasparent">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
        <b-collapse id="nav-text-collapse" is-nav>
          <b-navbar-nav class="p-0">
            <b-nav-text class="pb-0 px-3">
              <nuxt-link
                class="text-muted text-decoration-none nav-item"
                to="/"
              >
                All
              </nuxt-link>
            </b-nav-text>
            <b-nav-text
              v-for="category in categories"
              :key="category.id"
              class="pb-0 px-3"
            >
              <nuxt-link
                class="text-muted text-decoration-none nav-item"
                :to="'/tags/' + category.slug"
              >
                {{ category.name }}
              </nuxt-link>
            </b-nav-text>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </header>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      urlApi: 'https://newsletters.academlo.com/api/v1/tags',
      categories: []
    }
  },
  created() {
    this.getNewsletter()
  },
  methods: {
    getNewsletter() {
      axios
        .get(this.urlApi)
        .then((response) => {
          this.categories = response.data
        })
        .catch(() => {
          alert('Tuvimos un error')
        })
    }
  }
}
</script>
<style lang="sass">
.nav-item:hover
  color: #000!important
.nuxt-link-exact-active
  color: #000!important
</style>
