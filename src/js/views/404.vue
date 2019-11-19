<template>
    <div class="notFound">
        <router-view ></router-view>
        <div class="notFound__content">
            404
        </div>
    </div>
</template>

<script>


    export default {
        name: 'notFound',
        components: {

        },

    };
</script>

<style>
    .notFound {
        height: 100vh;
        width: 100%;
    }
    .notFound__content{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10rem;
    }

</style>