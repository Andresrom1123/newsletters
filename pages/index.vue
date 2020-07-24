<template>
  <div class="container-fluid my-5">
    <div class="text-center mb-5">
      <h2>
        Real news, curated by real humans
      </h2>
      <p class="text-muted">
        Packed with the trend, news &#38; links you need to be smart, ifrmoed,
        and ahead of the curve
      </p>
    </div>
    <div class="row mx-0">
      <div
        v-for="newsletter in newsletters"
        :key="newsletter.id"
        class="col-lg-3 col-sm-6"
      >
        <inside @selected="changeSelected" :newsletter="newsletter" suscribed />
      </div>
    </div>
    <!-- <h2 class="text-danger text-center">
      <i class="far fa-times-circle"></i>
    </h2> -->
    <div class="text-center my-5">
      <h2>
        Up-and-coming
      </h2>
      <p class="text-muted">
        If these newsletters reach their goals (or get a
        <span class="text-info">sponshorship</span>), we'll bring on expert
        writers and launch them. Vote for all your favorites:
      </p>
    </div>
    <!-- <h2 class="text-danger text-center">
      <i class="far fa-times-circle"></i>
    </h2> -->
    <div class="row mx-0">
      <div
        v-for="newsletter in newsletters"
        :key="newsletter.id"
        class="col-lg-3 col-sm-6"
      >
        <inside :newsletter="newsletter" progress />
      </div>
    </div>
    <c-modal :selectedNewsletter="selectedNewsletter" />
  </div>
</template>
<script>
import Inside from '@/components/general/CCard/CInside'
import CModal from '@/components/general/CModal/CModal'
export default {
  middleware: 'logged',
  layout: 'index',
  components: {
    Inside,
    CModal
  },
  data() {
    return {
      newsletters: [
        {
          image: '/favicon.ico',
          title: 'prueba',
          description: '123',
          subscribed: 50,
          target: 100
        }
      ],
      selectedNewsletter: {}
    }
  },
  methods: {
    changeSelected(selected) {
      this.selectedNewsletter = selected
    }
  }
}
</script>
