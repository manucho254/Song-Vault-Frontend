<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AccountView',
  data() {
    return {
      form_data: {
        email: {
          ref: 'email',
          name: 'Email',
          value: ''
        },
        username: {
          ref: 'username',
          name: 'Username',
          value: ''
        },
        first_name: {
          ref: 'first_name',
          name: 'First Name',
          value: ''
        },
        last_name: {
          ref: 'last_name',
          name: 'Last Name',
          value: ''
        },
        country: {
          ref: 'country',
          name: 'Country',
          value: ''
        },
        gender: {
          ref: 'gender',
          name: 'Gender',
          value: ''
        }
      }
    }
  },
  mounted () {
    console.log(this.GET_USER)
  },
  methods: {
    updateProfile() {
      console.log(this.form_data)
    }
  },
  computed: {
    ...mapGetters({
      GET_USER: 'auth/GET_USER'
    })
  }
}
</script>

<template>
  <div class="account-update w-100 mb-4 pb-4">
    <h4 class="fw-bold mb-3">Update Profile</h4>
    <form class="row" @submit.prevent="updateProfile">
      <div class="mb-3">
        <div class="d-flex align-items-end gap-2">
          <img class="rounded img-fluid" />
          <input type="file" />
        </div>
      </div>
      <div class="col-md-6 mb-3" v-for="(field, index) of form_data" :key="index">
        <label>{{ field.name }}</label>
        <input
          :type="field.name === 'Email' ? 'email' : 'text'"
          class="form-control"
          v-model="field.value"
          :placeholder="GET_USER[field.ref]"
        />
      </div>
      <button type="submit" class="btn btn-primary">Update</button>
    </form>
  </div>
</template>
