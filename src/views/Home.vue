<template>
    <div class="home-outter">
        <HomeCarousel/>
        <HomeBanner/>
        <HomeGalery/>
    </div>
  
</template>

<script>
import HomeGalery from './../components/homeComponents/HomeGalery'
// import HomeBanner from './../components/homeComponents/HomeBanner'
import HomeCarousel from './../components/homeComponents/HomeCarousel'
export default {
    components: {
        HomeGalery,
        // HomeBanner,
        HomeCarousel
    },
}

</script>

<style>

</style>