<template>

  <nav class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item" href="#">
        DM Toolkit
      </a>
      <!-- Top Menu Items for mobile

      <a class="navbar-item is-hidden-desktop" href="https://github.com/jgthms/bulma" target="_blank">
        <span class="icon" style="color: #333;">
          <i class="fa fa-github"></i>
        </span>
      </a>

      -->
    </div>
    <div class="navbar-burger burger" data-target="navMenuExample">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item">
          Menu Item 1
        </a>
        <a class="navbar-item">
          Menu Item 2
        </a>
        <a class="navbar-item">
          Menu Item 3
        </a>
      </div>
    </div>

  </nav>

</template>

<script>
  export default {
    name: 'navbar'
  }
</script>
