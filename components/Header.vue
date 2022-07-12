<template lang="">
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <nuxt-link to="/" class="nav-link"
              >Home <span class="sr-only">(current)</span></nuxt-link
            >
          </li>
          <li class="nav-item">
            <nuxt-link to="/users" class="nav-link">Users</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/about" class="nav-link">About me</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/posts" class="nav-link">Articles</nuxt-link>
          </li>
          <li class="nav-item dropdown">
            <nuxt-link
              to="/users"
              class="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown link</nuxt-link
            >

            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <nuxt-link class="dropdown-item" to="">Action</nuxt-link>
              <nuxt-link class="dropdown-item" to="">Another action</nuxt-link>
              <nuxt-link class="dropdown-item" to=""
                >Something else here</nuxt-link
              >
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style lang=""></style>
