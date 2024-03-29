<script>
import countries from '../../utils/countries'
import { mapGetters } from 'vuex'

export default {
  name: 'AccountView',
  data() {
    return {
      form_data: {
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        country: '',
        gender: ''
      },
      image: {},
      genders: ['Male', 'Female', 'Prefer Not To Say'],
      countries: countries
    }
  },
  mounted() {
    try {
      this.form_data = JSON.parse(this.GET_USER)
    } catch (err) {
      this.form_data = { ...this.GET_USER }
    }
  },
  methods: {
    updateProfile() {
      this.$store
        .dispatch('auth/updateProfile', this.form_data)
        .then((res) => {
          this.form_data = res.data
          this.$toast.open({
            message: 'Account updated successfully.',
            type: 'success',
            duration: 3000,
            position: 'top-right'
          })
        })
        .catch((err) => console.log(err))
    },
    getFile(e) {
      const { files } = e.target
      if (files && files[0]) {
        if (this.image.src) {
          URL.revokeObjectURL(this.image.src)
        }
        const blob = URL.createObjectURL(files[0])
        const reader = new FileReader()

        reader.onload = () => {
          this.image = {
            src: blob,
            type: files[0].type
          }
        }
        const file = new File([blob], "new_file", { type: 'image/png' })
        const formData = new FormData()
        formData.append('file', file)
        this.form_data["files"] = formData
        console.log(formData)
        reader.readAsArrayBuffer(files[0])
      }
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
          <img :src="image.src" class="rounded img-fluid" />
          <input type="file" @change="getFile" accept="image/jpeg, image/png" />
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <label>Email</label>
        <input type="email" class="form-control" v-model="form_data.email" required />
      </div>
      <div class="col-md-6 mb-3">
        <label>Username</label>
        <input type="text" class="form-control" v-model="form_data.username" required />
      </div>
      <div class="col-md-6 mb-3">
        <label>First Name</label>
        <input type="text" class="form-control" v-model="form_data.first_name" required />
      </div>
      <div class="col-md-6 mb-3">
        <label>Last Name</label>
        <input type="text" class="form-control" v-model="form_data.last_name" required />
      </div>
      <div class="col-md-6 mb-3">
        <label>gender</label>
        <select required class="form-select" v-model="form_data.gender" @change="getGender">
          <option v-for="item in genders" :value="item" :key="item">
            {{ item }}
          </option>
        </select>
      </div>
      <div class="col-md-6 mb-3">
        <label>Country</label>
        <select required class="form-select" v-model="form_data.country" @change="getCountry">
          <option v-for="item in countries" :value="item.name" :key="item.code">
            {{ item.name }}
          </option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Update</button>
    </form>
  </div>
</template>
