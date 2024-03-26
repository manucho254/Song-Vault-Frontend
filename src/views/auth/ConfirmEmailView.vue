<script>
export default {
  name: 'confirmEmail',
  data() {
    return {
      token: ''
    }
  }
}
</script>

<template>
  <div>
    <input type="email" name="email" v-model="email" />
    <input type="password" name="password" v-model="password" />
  </div>
</template>
