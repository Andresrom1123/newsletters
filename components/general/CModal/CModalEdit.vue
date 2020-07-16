<template>
  <div>
    <b-modal id="modal-edit" hide-footer>
      <template v-slot:modal-title>
        <p>
          <span class="text-info">Edit</span>
          123
        </p>
      </template>
      <ValidationObserver ref="observer" v-slot="{ passes }">
        <b-form @submit.prevent="passes(onSubmit)">
          <ValidationProvider v-slot="{ errors }" rules="required" name="title">
            <b-form-group id="title" label="Title:" class="text-muted">
              <div>
                <b-form-input
                  id="title"
                  :value="newsletters.title"
                  v-model="newsletters.title"
                  type="text"
                  class="col-10"
                >
                </b-form-input>
              </div>
              <small class="form-text text-danger">
                {{ errors[0] }}
              </small>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            name="description"
          >
            <b-form-group id="textarea" label="Description:" class="text-muted">
              <div>
                <b-form-textarea
                  id="textarea"
                  :value="newsletters.description"
                  v-model="newsletters.description"
                  rows="3"
                  max-rows="6"
                  class="col-10"
                ></b-form-textarea>
              </div>
              <small class="form-text text-danger">
                {{ errors[0] }}
              </small>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider v-slot="{ errors }" rules="required" name="image">
            <b-form-group id="image" class="text-muted" label="Image:">
              <div>
                <b-form-file
                  id="image"
                  :value="newsletters.image"
                  v-model="newsletters.image"
                  size="sm"
                >
                </b-form-file>
              </div>
              <small class="form-text text-danger">
                {{ errors[0] }}
              </small>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            name="subscribed"
          >
            <b-form-group label="Subscribed:" class="text-muted">
              <div>
                <b-form-input
                  id="subscribed"
                  v-model="newsletters.subscribed"
                  type="number"
                  class="col-3"
                >
                </b-form-input>
              </div>
              <small class="form-text text-danger">
                {{ errors[0] }}
              </small>
            </b-form-group>
          </ValidationProvider>
          <ValidationProvider
            v-slot="{ errors }"
            rules="required"
            name="target"
          >
            <b-form-group label="Target:" class="text-muted">
              <div>
                <b-form-input
                  id="target"
                  v-model="newsletters.target"
                  type="number"
                  class="col-3"
                >
                </b-form-input>
              </div>
              <small class="form-text text-danger">
                {{ errors[0] }}
              </small>
            </b-form-group>
          </ValidationProvider>
          <b-button class="btn-block text-white" type="submit" variant="info">
            Ok
          </b-button>
          <b-button
            @click="$bvModal.hide('modal-edit')"
            class="btn-block text-white"
            type="button"
            variant="danger"
          >
            Cancel
          </b-button>
        </b-form>
      </ValidationObserver>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newsletters: {
        title: '123',
        description: '123 ',
        image: null,
        subscribed: 50,
        target: 100
      }
    }
  },
  methods: {
    onSubmit() {
      alert('Te has registrado perfectamente')
    }
  }
}
</script>
