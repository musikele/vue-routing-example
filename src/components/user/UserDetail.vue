<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded has ID: {{ $route.params.id }}</p>
    <router-link class="btn btn-primary" tag="button" :to="link">
      Edit User</router-link>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        link: {
          name: 'userEdit',
          params: {
            id: this.$route.params.id
          },
          query: {
            locale: 'en',
            q: 100
          },
          hash: '#data'
        }
      }
    },
    // check if you can enter a route. Component has not been created 
    beforeRouteEnter(to, from, next) {
      // before creation of data(), too 
      console.log('before component creation');
      // console.log(this.link); // not work
      next();
    }
  }
</script>