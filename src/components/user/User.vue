<template>
    <div><h1>The User Page</h1>
    <hr>
    <button @click="navigateToHome" class="btn btn-default">Go to Home</button>
    <hr>
    <router-view></router-view>
    </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      this.$router.push({name: 'home'}); //to navigate to another page via js 
      //this.$router.push('/');
    }
  }
};
</script>
