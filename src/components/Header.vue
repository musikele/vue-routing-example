<template>
  <ul class="nav nav-pills">
    <!-- serve a dire di mettere la classe "active" solo se il path è esattamente / -->
    <router-link to="/" tag="li" active-class="active" exact>
        <a>Home</a>
      </router-link>
    <router-link to="/user" tag="li" active-class="active">
      <a>User</a>
    </router-link>
  </ul>
</template>
