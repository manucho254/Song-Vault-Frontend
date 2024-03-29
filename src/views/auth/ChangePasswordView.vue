<script>
export default {
  name: 'changePassword',
  data() {
    return {
      token: '',
      password: '',
      confirm_password: ''
    }
  },
  mounted() {
    this.getToken()
  },
  methods: {
    getToken() {
      /** redirect user to login page if no token in query params */
      if (!this.$route.query.token) {
        this.$router.push('/login')
      } else {
        this.token = this.$route.query.token
      }
    }
  }
}
</script>

<template>
  <div class="auth d-flex justify-content-between flex-wrap">
    <div class="bg-light auth-form">
      <h3 class="auth-header">𝕊𝕠𝕟𝕘<span class="text-primary">𝕍𝕒𝕦𝕝𝕥</span></h3>
      <div class="card bg-light w-75 border-0 p-4">
        <div class="text-start mb-3">
          <h3 class="fw-bolder">Change Password</h3>
          <p class="fw-lighter text-grey">Fill the form below to change your password.</p>
        </div>
        <form class="d-flex flex-column gap-2">
          <div class="d-flex flex-column">
            <label>Password</label>
            <input required class="form-control" type="password" v-model="password" />
          </div>
          <div class="d-flex flex-column">
            <label>Confirm Password</label>
            <input
              required
              class="form-control"
              name="confirm_password"
              v-model="confirm_password"
            />
          </div>
          <div class="d-flex flex-column gap-3">
            <button class="btn bg-dark text-light fw-bold">Reset Password</button>
            <span class="text-center">
              <router-link class="text-decoration-underline text-primary" to="/login"
                >Back to login</router-link
              >
            </span>
          </div>
        </form>
      </div>
    </div>
    <div class="auth-image">
      <img class="img-fluid h-100" src="../../assets/images/auth-icon.jpg" alt="Auth image" />
    </div>
  </div>
</template>
