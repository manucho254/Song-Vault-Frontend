<!-- eslint-disable no-undef -->
<script>
export default {
  name: 'ChooseAccount',
  data() {
    return {
      isArtist: false
    }
  },
  methods: {
    chooseAccount(is_artist) {
      this.isArtist = is_artist
    },
    chosenRedirect() {
      if (this.isArtist) {
        this.$router.push('/artist-signup')
      } else {
        this.$router.push('/signup')
      }
    }
  }
}
</script>

<template>
  <div class="auth d-flex justify-content-between flex-wrap">
    <div class="bg-light auth-form">
      <h3 class="auth-header">𝕊𝕠𝕟𝕘<span class="text-primary">𝕍𝕒𝕦𝕝𝕥</span></h3>
      <div class="bg-light d-flex flex-column gap-3">
        <div>
          <h3 class="fw-bold text-dark">Choose Account Type</h3>
        </div>
        <div class="d-flex gap-3">
          <div
            :class="!isArtist ? 'account-type is_active' : 'account-type'"
            v-on:click="chooseAccount(false)"
          >
            <div class="d-flex flex-column align-items-center justify-content-center">
              <span class="text-center mt-5"><i class="fa fa-user h1"></i></span>
              <span>Normal Account</span>
            </div>
          </div>
          <div
            :class="isArtist ? 'account-type is_active' : 'account-type'"
            v-on:click="chooseAccount(true)"
          >
            <div class="d-flex flex-column align-items-center justify-content-center">
              <span class="text-center mt-5"><i class="bi bi-file-music h1"></i></span>
              <span>Artist Account</span>
            </div>
          </div>
        </div>
        <div>
          <button class="btn btn-dark w-100" v-on:click="chosenRedirect">Done</button>
        </div>
      </div>
    </div>
    <div class="auth-image">
      <img class="img-fluid h-100" src="../../assets/images/auth-icon.jpg" alt="Auth image" />
    </div>
  </div>
</template>
