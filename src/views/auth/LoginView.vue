<script>
export default {
  name: 'LoginUser',
  data() {
    return {
      form_data: {
        email: '',
        password: ''
      },
      remember_me: false
    }
  },
  methods: {
    loginUser() {
      for (let [key, val] of Object.entries(this.form_data)) {
        if (val == '') {
          this.notification('error', `${key} missing!`)
        }
      }
      this.$store
        .dispatch('auth/authenticateUser', this.form_data)
        .then((res) => {
          console.log(res.data)
          this.notification('success', 'User loggedIn successfully.')
          this.$router.push({ name: 'dashboard' })
        })
        .catch((err) => {
          console.log(err)
          if (err.response) this.notification('error', err.response.data.error)
        })
    },
    notification(type, message) {
      this.$toast.open({ message, type, duration: 3000, position: 'top-right' })
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
          <h3 class="fw-bolder">Welcome Back</h3>
          <p class="fw-lighter text-grey">Welcome back! Please enter your details</p>
        </div>
        <form class="d-flex flex-column gap-2" @submit.prevent="loginUser">
          <div class="d-flex flex-column">
            <label>Email</label>
            <input required class="form-control" type="email" v-model="form_data.email" />
          </div>
          <div class="d-flex flex-column">
            <label>Password</label>
            <input
              required
              class="form-control"
              type="password"
              placeholder="password(6-16 characters)"
              v-model="form_data.password"
            />
          </div>
          <div class="d-flex justify-content-between">
            <div class="d-flex align-items-center gap-2">
              <input type="checkbox" v-model="remember_me" />
              <label>Remember me</label>
            </div>
            <router-link class="text-decoration-underline text-primary" to="/reset-password"
              >Forgot password</router-link
            >
          </div>
          <div class="d-flex flex-column gap-3">
            <button class="btn bg-dark text-light fw-bold" type="submit">Log in</button>
            <button class="btn bg-dark text-light fw-bold">Log in with Google</button>
            <span class="text-center">
              Don't have an account<router-link
                class="text-decoration-underline text-primary"
                to="/choose-account-type"
                >Sign up.</router-link
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
