<template>
    <div class="home-outter">
        <HomeCarousel/>
        <HomeBanner/>
        <HomeGalery/>
        <HomeFooter/>
    </div>
  
</template>

<script>
import HomeGalery from './../components/homeComponents/HomeGalery'
import HomeBanner from './../components/homeComponents/HomeBanner'
import HomeCarousel from './../components/homeComponents/HomeCarousel'
import HomeFooter from './../components/homeComponents/HomeFooter'
export default {
    components: {
        HomeGalery,
        HomeBanner,
        HomeCarousel,
        HomeFooter
    },
}

</script>

<style>

</style>