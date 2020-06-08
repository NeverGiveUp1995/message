<template>
    <div class="body">
        <div class="wrap">
            <div class="title">404</div>
            <div class="describe">拐求！找求不到页面咯</div>
            <Button class="backBtn" @click="goToLogin">滚回去重新登录</Button>
        </div>
    </div>
</template>

<script>
    import {Button} from 'vant'

    export default {
        name: "NotFound",
        components: {
            Button,
        },
        methods: {
            goToLogin() {
                this.$router.replace('/')
            }
        }
    }
</script>

<style scoped>
    .body {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .wrap {
        position: relative;
        top: -35px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .title {
        font-size: 52px;
        font-weight: bold;
        color: rgb(49, 194, 124);
        margin-bottom: 5px;
    }

    .describe {
        font-size: 12px;
        color: #ababab;
    }

    .backBtn {
        background: rgb(49, 194, 124);
        color: white;
        border-radius: 5px;
        margin-top: 15px;
    }
</style>
