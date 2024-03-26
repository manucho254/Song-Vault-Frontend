<script>
export default {
  name: 'LoginUser',
  data() {
    return {
      email: '',
      password: '',
      remember_me: ''
    }
  }
}
</script>

<template>
  <div class="auth d-flex justify-content-between flex-wrap">
    <div class="bg-light auth-form">
      <div class="card bg-light w-75 border-0 p-4">
        <div class="text-start mb-3">
          <h3 class="fw-bolder">Welcome Back</h3>
          <p class="fw-lighter text-grey">Welcome back! Please enter your details</p>
        </div>
        <div class="d-flex flex-column gap-2">
          <div class="d-flex flex-column">
            <label>Email</label>
            <input required class="form-control" type="email" name="email" v-model="email" />
          </div>
          <div class="d-flex flex-column">
            <label>Password</label>
            <input
              required
              class="form-control"
              type="password"
              name="password"
              placeholder="password(6-16 characters)"
              v-model="password"
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
            <button class="btn bg-dark text-light fw-bold">Log in</button>
            <button class="btn bg-dark text-light fw-bold">Log in with Google</button>
            <span class="text-center">
              Don't have an account<router-link
                class="text-decoration-underline text-primary"
                to="/choose-account-type"
                >Sign up.</router-link
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
