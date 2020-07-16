<template>
  <div class="card shadow border px-3 py-4">
    <div v-if="suscribed" class="d-flex mb-3 justify-content-center">
      <div class="shadow rounded-circle overflow-hidden">
        <img :src="newsletter.image" class="-img" alt="..." />
      </div>
      <span class="-text-warning">
        DAYLI
      </span>
    </div>
    <div v-if="progress" class="d-flex mb-3">
      <div class="shadow rounded-circle overflow-hidden -img">
        <img :src="newsletter.image" width="100%" alt="..." />
      </div>
      <div class="col-lg-8 col-6">
        <h5 class="">{{ newsletter.title }}</h5>
        <p class="text-muted">{{ newsletter.description }}</p>
      </div>
    </div>
    <div class="card-body p-0">
      <div v-if="suscribed">
        <h5 class="text-center">{{ newsletter.title }}</h5>
        <p class="text-muted">{{ newsletter.description }}</p>
        <div
          @click="$bvModal.show('bv-modal-suscribe')"
          class="d-flex -pointer border p-2 rounded justify-content-between align-items-center"
        >
          <div>
            <i class="-text-warning fas fa-envelope"></i>
            <span class="text-muted">Suscribe</span>
          </div>
          <i class="text-muted fas fa-chevron-right"></i>
        </div>
      </div>
      <div v-if="progress">
        <div
          @click="$bvModal.show('bv-modal-progress')"
          class="d-flex -pointer border p-2 rounded justify-content-between align-items-center"
        >
          <div>
            <i class="-text-warning fas fa-envelope"></i>
            <span class="text-muted">Vote</span>
          </div>
          <i class="text-muted fas fa-chevron-right"></i>
        </div>
        <b-progress
          :value="newsletter.subscribed"
          :max="newsletter.target"
          variant="warning"
          class="my-3"
          animated
        ></b-progress>
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <span class="d-block text-center">
              {{ newsletter.subscribed }}
            </span>
            <span class="text-muted">Subscribed</span>
          </div>
          <div>
            <span class="d-block text-center">
              {{ newsletter.target }}
            </span>
            <span class="text-muted">Target</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    progress: {
      type: Boolean,
      default: () => false
    },
    suscribed: {
      type: Boolean,
      default: () => false
    },
    newsletter: {
      type: Object,
      default: () => []
    }
  }
}
</script>
