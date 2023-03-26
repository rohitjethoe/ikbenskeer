<template>
  <header>
    <div class="logo">
        <h1>
            ik ben <strong>skeer</strong>.
        </h1>
        <p>
            Collectief om scholieren te helpen met besparen, omdat elke euro telt. 
        </p>
    </div>
  </header>
</template>

<script>
export default {
    name: 'HeaderComponent',
}
</script>

<style lang="scss" scoped>
header {
    .logo {
        padding-top: 60px;
        padding-bottom: 10px;
        text-align: center;
        h1 {
            color: #282828;
            font-weight: 400;
            font-size: 42px;
            font-family: 'Playfair-Display', serif;
        }
        p {
            padding: 15px 0px;
            width: 300px;
            margin: 0 auto;
            font-size: 16px;
            font-family: 'Sarabun', sans-serif;
        }
    }
}

@media only screen and (min-width: 600px) {
    header {
        .logo {
            h1 {
                font-size: 56px;
            }
            p {
                font-size: 20px;
                width: 400px;
            }
        }
    }
}

</style>