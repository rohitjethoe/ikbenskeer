<template>
    <div class="news">
        <img src="assets/cat.png" alt="">
        <div class="news-headline">
            <a 
            class="news-url" 
            :href="news[current].link" 
            target="_blank">
                <h5>{{ news[current].source }}</h5>
                <p>"{{  news[current].title }}"</p>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "NewsComponent",
    data() {
        return {
            current: 0,
            news: {
                0: {
                    title: "Stijgende prijzen raken jongeren hard: veel vaker problemen met rondkomen",
                    source: "RTL Nieuws",
                    link: "https://www.rtlnieuws.nl/economie/artikel/5346356/jongeren-nibud-rondkomen-inflatie-betalingsproblemen"
                },
                1: {
                    title: "Studenten vertellen over hun rottige woonsituaties",
                    source: "VICE",
                    link: "https://www.vice.com/nl/article/g5v8xq/studenten-internationals-wooncrisis-kamer"
                },
                2: {
                    title: "Jongeren komen niet goed rond: 'Ik moet schrappen eind van de maand'",
                    source: "NOS",
                    link: "https://nos.nl/video/2466495-jongeren-komen-niet-goed-rond-ik-moet-schrappen-eind-van-de-maand"
                },
                3: {
                    title: "6 op 10 jongeren bezorgd over stijgende prijzen en geldproblemen",
                    source: "UNICEF",
                    link: "https://www.unicef.nl/nieuws/2022-11-14-6-op-10-jongeren-bezorgd-over-stijgende-prijzen-en-geldproblemen"
                }
            }
        }
    },
    mounted() {
        setInterval(() => {
            this.current = this.current + 1;
            if (this.current > Object.keys(this.news).length - 1) {
                this.current = 0;
            }
        }, 5000);
    }
}
</script>

<style lang="scss" scoped>
    .news {
        user-select: none;
        -webkit-user-select: none;
        width: 300px;
        margin: 5px auto;
        position: relative;
        img {
            width: 100%;
        }
        .news-headline {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 90%;
            padding: 20px;
            a {
                transition: 0.5s;
                color: white;
                text-decoration: none;
                h5 {
                    font-size: 14px;
                    margin: 0;
                }
                p {
                    font-size: 14px;
                    font-weight: 400;
                    margin: 0;
                    color: #dbdbdb;
                }
            }
        }
    }

    @media only screen and (min-width: 600px) {
        .news {
            width: 400px;
        }
    }
</style>