<template>
    <div id="app">
        <router-view>
            <!--        <Login/>-->
            <NotFound/>
        </router-view>
    </div>
</template>

<script>
    // import Login from "./pages/login/Login";
    import NotFound from "./pages/NotFound";

    export default {
        name: 'App',
        components: {
            // Login,
            NotFound
        }
    }
</script>

<style>


</style>
