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
    <h2 class="text-danger text-center">
      <i class="far fa-times-circle"></i>
    </h2>
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
    <h2 class="text-danger text-center">
      <i class="far fa-times-circle"></i>
    </h2>
  </div>
</template>
<script>
export default {
  middleware: 'authenticated'
}
</script>
