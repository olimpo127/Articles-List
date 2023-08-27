<template>
      <p class="footer">
      &copy; {{ currentYear }} Creado por Felipe Ojeda, contáctame a través de
      <a href="https://github.com/olimpo127" target="_blank">GitHub</a>.
    </p>
  </template>
  
  <script>
  import "./MyFooter.css";
  export default {
    name: 'MyFooter',
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
  };
  </script>
  
 