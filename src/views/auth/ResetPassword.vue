<script>
export default {
  name: 'resetPassword',
  data() {
    return {
      email: ''
    }
  }
}
</script>

<template>
  <div class="auth d-flex justify-content-between flex-wrap">
    <div class="bg-light auth-form">
      <div class="card bg-light w-75 border-0 p-4">
        <div class="text-start mb-3">
          <h3 class="fw-bolder">Reset Password</h3>
          <p class="fw-lighter text-grey">Fill the form below to reset your password.</p>
        </div>
        <div class="d-flex flex-column gap-2">
          <div class="d-flex flex-column">
            <label>Email</label>
            <input required class="form-control" type="email" name="email" v-model="email" />
          </div>
          <div class="d-flex flex-column gap-3">
            <button class="btn bg-dark text-light fw-bold">Reset Password</button>
            <span class="text-center"><router-link class="text-decoration-underline text-primary" to="/login"
                >Back to login</router-link
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
