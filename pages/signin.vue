<template>
  <v-btn @click.prevent="onSubmit">
    Google でログイン
  </v-btn>
</template>
<script>
export default {
  middleware: ["checkLogin"],
  methods: {
    onSubmit() {
      const provider = new this.$firebase.auth.GoogleAuthProvider();
      this.$fireAuth.signInWithRedirect(provider);
    }
  }
};
</script>
