<template>
  <div class="init-page">
    <div class="top-blank"></div>
    <div class="login">
      <img
        class="common-svg"
        :src="
          svgStatus == 'account'
            ? require('@/assets/image/account.svg')
            : svgStatus == 'password'
            ? require('@/assets/image/password.svg')
            : require('@/assets/image/common.svg')
        "
        alt=""
      />
      <div class="input-info">
        <h1 class="input-title">账 密 登 录</h1>
        <div class="account">
          <input
            @focus="svgStatus = 'account'"
            @blur="svgStatus = 'common'"
            type="text"
            :value="account"
            placeholder="邮箱/手机号"
          />
        </div>
        <div class="password">
          <input
            @focus="svgStatus = 'password'"
            @blur="svgStatus = 'common'"
            type="password"
            :value="password"
            placeholder="请输入密码"
          />
        </div>
        <button class="submit" @click="login">登 录</button>
      </div>
    </div>
    <!-- 底部svg效果 -->
    <LoginSvg />
  </div>
</template>

<script>
import LoginSvg from "@/components/loginSvg.vue";
import { isEmpty } from "@/utils/index.js";
export default {
  name: "InitPage",
  components: {
    LoginSvg,
  },
  data() {
    return {
      svgStatus: "common",
      account: "",
      password: "",
    };
  },
  methods:{
    login(){
      // if(isEmpty(this.account)){
      //   return 
      // }
    }
  }
};
</script>

<style lang="scss" scoped>
.init-page {
  width: 100%;
  min-height: 100vh;
  background-color: #004cd7;
  position: relative;
  .top-blank {
    width: 100%;
    height: 130px;
    background-color: #ffffff;
  }
  .login {
    width: 290px;
    padding: 30px 20px;
    box-sizing: border-box;
    border-radius: 10px;
    position: absolute;
    top: 130px;
    left: 50%;
    transform: translate(-50%);
    z-index: 2;
    .common-svg {
      position: absolute;
      top: -86px;
      right: 50%;
      transform: translate(50%);
    }
    .input-info {
      width: 100%;
      .input-title {
        font-size: 15px;
        margin: 0 0 20px;
        color: #fff;
        text-align: center;
      }
      .account {
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 24px;
        font-size: 11.67px;
        input {
          width: 100%;
          box-sizing: border-box;
          padding: 10px;
          outline: none;
          border: none;
          &::-webkit-input-placeholder {
            color: inherit;
            opacity: 0.54;
          }
        }
      }
      .password {
        width: 100%;
        display: flex;
        align-items: center;
        font-size: 11.67px;
        input {
          width: 100%;
          box-sizing: border-box;
          padding: 10px;
          outline: none;
          border: none;
          &::-webkit-input-placeholder {
            color: inherit;
            opacity: 0.54;
          }
        }
      }
      .submit {
        width: 100%;
        height: 35px;
        color: #fff;
        background: linear-gradient(145deg, #0051e6, #0044c2);
        box-shadow: 5px 5px 10px #003fb2, -5px -5px 10px #0059fc;
        border-radius: 100px;
        outline: none;
        box-sizing: border-box;
        cursor: pointer;
        margin-top: 24px;
        border: none;
        outline: none;
        &:active {
          background: linear-gradient(145deg, #0044c2, #0051e6);
          box-shadow: 5px 5px 10px #003fb2, -5px -5px 10px #0059fc;
        }
      }
    }
  }
}
</style>
