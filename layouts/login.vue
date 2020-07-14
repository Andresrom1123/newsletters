<template>
  <div>
    <header class="container-fluid pl-0 pr-0 border-bottom">
      <div class="d-flex m-3">
        <div class="col-6 d-flex justify-content-start align-items-center">
          <nuxt-link class="text-decoration-none" to="/">
            <h1 class="-text-warning mb-0">
              [ INSIDE ]
            </h1>
          </nuxt-link>
        </div>
        <div class="col-6 d-flex justify-content-end align-items-center">
          <p class="p-1 border border-warning rounded">
            <nuxt-link
              class="text-decoration-none -text-warning"
              to="/dashboard"
            >
              Sign Up
            </nuxt-link>
          </p>
        </div>
      </div>
    </header>
    <nuxt />
  </div>
</template>
