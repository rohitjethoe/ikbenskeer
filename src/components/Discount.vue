<template>
    <a class="discount" :href="details.data.url" target="_blank">
        <div class="logo">
            <img :src="details.data.logo" alt="IKEA" />
        </div>
        <div class="name">
            <h3>{{ details.data.company }}</h3>
            <p>{{ details.data.name }}</p>
        </div>
        <div class="price">
            <div v-if="details.data.isFree">
                <p class="originalPrice">€{{ details.data.originalPrice }}</p>
                <p>GRATIS</p>
            </div>
            <div v-else-if="details.data.isPercentage">
                <p>-{{ details.data.price }}%</p>
            </div>
            <div v-else>
                <p class="originalPrice">€{{ details.data.originalPrice }}</p>
                <p>€{{ details.data.price }}</p>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    name: "DiscountComponent",
    props: {
        details: JSON
    }
}
</script>

<style lang="scss" scoped>
    a:link, a:visited {
        text-decoration: none;
        color: #282828;
    }

    .discount {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 86%;
        margin: 0 auto;
        border: 2px solid #282828;
        .logo {
            width: 20%;
            padding: 10px;
            img {
                width: 48px;
                height: 48px;
            }
        }
        .name {
            width: 60%;
            padding: 10px;
            h3 {
                font-size: 16px;
                font-weight: 500;
                margin: 0;
            }
            p {
                font-size: 12px;
                font-weight: 400;
                margin: 0;
            }
        }
        .price {
            width: 20%;
            padding: 10px;
            p {
                color: #6a55c6;
                font-weight: 500;
                text-align: center;
            }
            .originalPrice {
                text-decoration: line-through;
                color: #444444;
            }
        }
    }
</style>