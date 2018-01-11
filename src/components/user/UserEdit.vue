<template>
  <div>
    <h3>Edit the User</h3>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Analytics: {{ $route.query.q }}</p>
    <hr>
    <button class="btn btn-primary" @click="confirmed=true">Confirm</button>
    <div style="height: 1000px"></div>
    <p id="data">prova</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        confirmed: false
      }
    },
    // method to check if we can leave the component. The component exists
    beforeRouteLeave(to, from, next) {
      if (this.confirmed) {

        next();
      }
      else {
        if (confirm('Are you sure?')) {
          next();
        }else {
          next(false);
        }
      }
    }
  }
</script>