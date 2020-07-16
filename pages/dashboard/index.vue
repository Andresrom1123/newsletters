<template>
  <div class="container my-5">
    <b-table :items="newsletters" :fields="fields" striped dark bordered>
      <template v-slot:cell(Options)>
        <div class="text-center">
          <b-button
            @click="$bvModal.show('modal-delete')"
            class="p-0"
            variant="link"
          >
            <span>
              <i class="text-danger fas fa-trash-alt"></i>
            </span>
          </b-button>
          <b-button
            @click="$bvModal.show('modal-edit')"
            class="p-0"
            variant="link"
          >
            <span>
              <i class="text-info fas fa-edit"></i>
            </span>
          </b-button>
        </div>
      </template>
    </b-table>
    <c-modal-edit />
    <c-modal-delete />
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
      newsletters: [
        {
          image: '/favicon.ico',
          title: '123',
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
  }
}
</script>
