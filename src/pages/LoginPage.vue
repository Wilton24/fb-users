<script setup lang="ts">
import { reactive } from 'vue';
import { logInFn } from '../controller/logIn';

interface IUserInfo {
    id: number,
    username: string,
    password: string

}

const state = reactive({
    userInfo: {} as IUserInfo
})


function logIn(){
    console.log(`Yes! Log in baby!`); 
    logInFn(state.userInfo)

}

</script>

<template>
    <div class="wrapper">

        <div class="login-left-side">
            <h1>Facebook</h1>
            <h2>Connect with friends and the world around you on Facebook. Nice ka!</h2>
        </div>


        <div class="login-right-side">
            <div class="log-in-wrapper">
                <input type="text" placeholder="Email or phone number" v-model="state.userInfo.username">
                <input type="password" name="" id="" placeholder="Password" v-model="state.userInfo.password">
                <button id="log-in-btn" @click="logIn">Log in</button>
                <div class="fogot-password"><a href="pornhub.com">Forgot Password?</a></div>
                <button class="create-account-btn">Create new Account</button>
            </div>
        </div>
    </div>

</template>

<style>
.wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    width: 100%;
    padding: 350px 300px;
}
.log-in-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
}

.login-left-side h1{
    color: #0866ff;
    font-size: 70px
}
.login-left-side h2{
    font-size: 28px;
    font-weight: normal;
    line-height: 32px;
    width: 500px;
}
.log-in-wrapper{
    box-shadow: 2px 2px 8px rgba(0,0,0, 0.5);
    padding:20px;
    border-radius: 20px;
}
.log-in-wrapper input{
    width: 363px;
    height: 51px;
    border:1px solid gray;
    padding: 14px 16px;     
    background: #FFFFFF;
    line-height: 16px;
    vertical-align: middle;
    font-size: 17px;
    border-radius: 5px;
}
#log-in-btn{
    background-color: #1877f2;
    border: none;
    border-radius: 6px;
    font-size: 20px;
    line-height: 48px;
    padding: 0 16px;
    width: 363px;
    color: #fff;
    cursor:pointer;
    font-weight: bold;
}
.forgot-password{
    color: #0866ff;
    font-size: 14px;
    font-weight: 500;
}

.forgot-password::before{
    position:absolute;
    bottom:0;
    left:0;
    right:0;
    content: '';
    height: 1px;
    background-color: grey;
    width: 100%;
}
.create-account-btn{
    color: #fff;
    background-color: #42b72a;
    border: none;
    border-radius: 6px;
    font-size: 17px;
    line-height: 48px;
    padding: 0 16px;

}
</style>