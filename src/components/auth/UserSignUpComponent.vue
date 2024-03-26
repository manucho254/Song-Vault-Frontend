<script>
export default {
  name: 'registerUser',
  data() {
    return {
      form_data: {
        username: '',
        email: '',
        password: '',
        confirm_password: ''
      },
      message: ''
    }
  },
  methods: {
    signUpUser() {
      for (let [key, val] of Object.entries(this.form_data)) {
        if (val == '') {
          this.notification('error', `${key} missing!`)
        }
      }
      this.$store
        .dispatch('auth/signUpUser', this.form_data)
        .then((res) => {
          this.notification('success', res.data.message)
          this.$router.push('/login')
        })
        .catch((err) => {
          this.notification('error', err.response.data.error)
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
      <div class="card bg-light w-75 border-0 p-4">
        <div class="text-start mb-3">
          <h3 class="fw-bolder">Welcome!</h3>
          <p class="fw-lighter text-grey">
            Create an account and listen to your favorite music tracks.
          </p>
        </div>
        <form class="d-flex flex-column gap-2" @submit.prevent="signUpUser">
          <div class="d-flex flex-column">
            <label>Username</label>
            <input required class="form-control" type="text" v-model="form_data.username" />
          </div>
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
          <div class="d-flex flex-column">
            <label>Confirm Password</label>
            <input
              required
              class="form-control"
              type="password"
              v-model="form_data.confirm_password"
            />
          </div>
          <div class="d-flex flex-column gap-3">
            <button class="btn bg-dark text-light fw-bold">Sign up</button>
            <!--<button class="btn bg-dark text-light fw-bold">Sign up with Google</button> -->
            <span class="text-center">
              Got an account<router-link class="text-decoration-underline text-primary" to="/login"
                >log in.</router-link
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
