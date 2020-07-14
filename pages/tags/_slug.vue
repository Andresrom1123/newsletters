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
    <div class="row">
      <div
        class="col-md-6 col-lg-3 mb-4"
        v-for="newsletter in subscribed"
        :key="newsletter.id"
      >
        <inside suscribed :newsletter="newsletter" />
      </div>
    </div>
    <div v-if="subscribed == 0">
      <h2 class="text-danger text-center">
        <i class="far fa-times-circle"></i>
      </h2>
    </div>
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
    <div class="row">
      <div
        class="col-md-6 col-lg-3 mb-4"
        v-for="newsletter in vote"
        :key="newsletter.id"
      >
        <inside progress :newsletter="newsletter" />
      </div>
    </div>
    <div v-if="vote == 0">
      <h2 class="text-danger text-center">
        <i class="far fa-times-circle"></i>
      </h2>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Inside from '~/components/Inside.vue'
export default {
  components: {
    Inside
  },
  data() {
    return {
      urlApi: `https://newsletters.academlo.com/api/v1/tags/${this.$route.params.slug}?include=newsletters`,
      subscribed: [],
      vote: []
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
          this.filter(response.data.newsletters)
        })
        .catch(() => {
          alert('Tuvimos un error')
        })
    },
    filter(newsletters) {
      this.subscribed = newsletters.filter((newsletter) => {
        return newsletter.subscribed >= newsletter.target
      })
      this.vote = newsletters.filter((newsletter) => {
        return newsletter.subscribed < newsletter.target
      })
    }
  }
}
</script>
