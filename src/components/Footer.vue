<template>
  <footer>
    <div class="github">
      Zie je een probleem op de pagina? Fix het op onze open source 
      <a href="https://github.com/rohitjethoe/ikbenskeer">Github Repository</a>.
    </div>
    <div class="copyright">
      Made with <span>❤</span> by <a target="_blank" href="http://tiktok.com/@h3nkkr0l">@h3nkkr0l</a>
    </div>
  </footer>
</template>

<script>
export default {
    name: 'FooterComponent'
}
</script>

<style lang="scss" scoped>
footer {
    margin-top: 60px;
    text-align: center;
    font-size: 14px;
    color: #282828;
    padding-top: 20px;
    .github {
      width: 320px;
      margin: 0 auto;
      padding: 10px 0px;
      a {
          color: #282828;
          text-decoration: none;
          transition: 0.25s;
          font-weight: 500;
          &:hover {
              color: #fabafa;
          }
      }
    }
    .copyright {
      padding: 10px 0px;
      a:link, a:visited {
        color: #282828;
        text-decoration: none;
      }
      span {
        color: #fabafa;
      }
    }
}
</style>