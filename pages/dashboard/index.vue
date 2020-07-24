<template>
  <div class="container my-5">
    <b-table :items="newsletters" :fields="fields" striped dark bordered>
      <template v-slot:cell(Options)="data">
        <div class="text-center">
          <b-button @click="openModalDelete(data)" class="p-0" variant="link">
            <span>
              <i class="text-danger fas fa-trash-alt"></i>
            </span>
          </b-button>
          <b-button @click="openModalEdit(data)" class="p-0" variant="link">
            <span>
              <i class="text-info fas fa-edit"></i>
            </span>
          </b-button>
        </div>
      </template>
    </b-table>
    <c-modal-delete :selectedNewsletter="selectedNewsletter" />
    <c-modal-edit :selectedNewsletter="selectedNewsletter" />
  </div>
</template>
<script>
import CModalEdit from '@/components/general/CModal/CModalEdit'
import CModalDelete from '@/components/general/CModal/CModalDelete'
export default {
  middleware: 'authenticated',
  layout: 'admin',
  components: {
    CModalEdit,
    CModalDelete
  },
  data() {
    return {
      selectedNewsletter: {},
      newsletters: [
        {
          image: null,
          title: 'prueba',
          description: '123',
          subscribed: 50,
          target: 100
        },
        {
          image: null,
          title: '3',
          description: '123',
          subscribed: 50,
          target: 100
        }
      ],
      fields: [
        'title',
        'description',
        'image',
        {
          key: 'subscribed',
          sortable: true
        },
        {
          key: 'target',
          sortable: true
        },
        'Options'
      ]
    }
  },
  methods: {
    openModalDelete(data) {
      this.$bvModal.show('modal-delete')
      this.selectedNewsletter = data.item
    },
    openModalEdit(data) {
      this.$bvModal.show('modal-edit')
      this.selectedNewsletter = data.item
    }
  }
}
</script>
