<template>
    <div class="body">
        <Overlay v-bind="!!loading">
            <Loading class="loading" size="35px" color="rgb(49,194,124)">表慌，我们吹哈牛批都...</Loading>
        </Overlay>
        <div class="wrap">
            <div class="headerImage"></div>
            <Field class="loginItem" clearable placeholder="账号" v-model="username"/>
            <Field class="loginItem" clearable placeholder="密码" type="password" v-model="password"/>
            <Button class="loginItem loginBtn" @click="login">搞他！</Button>
        </div>

    </div>
</template>

<script>
    import {Field, Button, Notify, Loading, Overlay} from 'vant'

    export default {
        name: "Login",
        data() {
            return {
                username: '',
                password: '',
                loading: false,
            }
        },
        components: {
            Field,
            Button,
            Loading,
            Overlay,
        },
        methods: {
            login() {
                const {username, password} = this.$data
                if (username === 'root' && password == 123456) {
                    setTimeout(() => {
                        this.$router.push('/home')
                    }, 3000)
                    Notify({
                        type: 'success',
                        message: '整起整起',
                        duration: 1000,
                    })
                } else {
                    Notify({
                        type: 'warning',
                        message: '不晓得你是哪样记性!\n一个账号密码都记不到',
                        duration: 3000,
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .loading {
        position: absolute;
    }

    .wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 60%;
        min-width: 300px;
        margin: 0 auto;
        transform: translateY(-50px);
    }

    .headerImage {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background: url("../../assets/login.jpg") -7px 0px no-repeat;
        background-size: cover;
    }


    .loginItem {
        margin: 5px 0;
    }

    .loginBtn {
        width: 100%;
        margin-top: 25px;
        background: #31C27C;
        color: white;
        border-radius: 5px;
    }
</style>
