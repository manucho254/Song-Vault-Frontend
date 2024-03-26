<script>
import countries from '../../utils/countries'

export default {
  name: 'registerArtist',
  data() {
    return {
      form_data: {
        username: '',
        email: '',
        phone_number: '',
        country: '',
        gender: '',
        password: '',
        confirm_password: '',
      },
      genders: ['Male', 'Female', 'Prefer Not To Say'],
      selected: '',
      countries: countries
    }
  },
  methods: {
    getCountry() {
      console.log(this.form_data.country)
    }
  }
}
</script>
<template>
  <div class="auth d-flex justify-content-between flex-wrap">
    <div class="bg-light auth-form">
      <div class="card bg-light w-75 border-0 p-4">
        <div class="text-start mb-3">
          <h3 class="fw-bolder">Welcome!</h3>
          <p class="fw-lighter text-grey">Create an account and share your music.</p>
        </div>
        <div class="d-flex flex-column gap-2">
          <div class="d-flex flex-column">
            <label>Artist/Group Name</label>
            <input
              required
              class="form-control"
              type="text"
              name="username"
              v-model="form_data.username"
            />
          </div>
          <div class="d-flex flex-column">
            <label>Email</label>
            <input
              required
              class="form-control"
              type="email"
              name="email"
              v-model="form_data.email"
            />
          </div>
          <div class="d-flex flex-column">
            <label>Phone Number</label>
            <input
              required
              class="form-control"
              type="text"
              name="username"
              v-model="form_data.phone_number"
            />
          </div>
          <div class="d-flex flex-column">
            <label>Country</label>
            <select  required class="form-select" v-model="form_data.country" @change="getCountry">
              <option v-for="item in countries" :value="item.name" :key="item.code">
                {{ item.name }}
              </option>
            </select>
          </div>
          <div class="d-flex flex-column">
            <label>Gender</label>
            <select required class="form-select" v-model="form_data.gender" @change="getGender">
              <option  v-for="item in genders" :value="item" :key="item">
                {{ item }}
              </option>
            </select>
          </div>
          <div class="d-flex flex-column">
            <label>Password</label>
            <input
              required
              class="form-control"
              type="password"
              name="password"
              placeholder="password(6-16 characters)"
              v-model="form_data.password"
            />
          </div>
          <div class="d-flex flex-column">
            <label>Confirm Password</label>
            <input
              required
              class="form-control"
              type="password"
              name="Confirm-password"
              v-model="form_data.confirm_password"
            />
          </div>
          <div class="d-flex flex-column gap-3">
            <button class="btn bg-dark text-light fw-bold">Sign up</button>
            <!--<button class="btn bg-dark text-light fw-bold">Sign up with Google</button> -->
            <span class="text-center">
              Got an account<router-link
                class="text-decoration-underline text-primary"
                to="/login"
                >log in.</router-link
              >
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="auth-image">
      <img class="img-fluid h-100" src="../../assets/images/auth-icon.jpg" alt="Auth image" />
    </div>
  </div>
</template>
