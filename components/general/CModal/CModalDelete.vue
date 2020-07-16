<template>
  <div>
    <b-modal id="modal-delete" hide-footer>
      <template v-slot:modal-title>
        <p>
          <span class="text-danger">Delete</span>
          123
        </p>
      </template>
      <div class="d-block text-center">
        <h3>Confirm delete this newsletter</h3>
      </div>
      <div class="d-flex justify-content-center">
        <b-button
          @click="$bvModal.hide('modal-delete')"
          class="mt-2 mr-2"
          variant="outline-danger"
        >
          Yes
        </b-button>
        <b-button
          @click="$bvModal.hide('modal-delete')"
          class="mt-2"
          variant="outline-success"
        >
          No
        </b-button>
      </div>
    </b-modal>
  </div>
</template>
