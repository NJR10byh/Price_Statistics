<template>
  <t-form
      ref="form"
      :class="['item-container', 'login-password']"
      :data="loginData"
      :rules="FORM_RULES"
      label-width="0"
      @submit="onSubmit"
  >
    <t-form-item name="phoneNum">
      <t-input
          v-model="loginData.userName"
          size="large"
          placeholder="请输入账号"
      >
        <template #prefix-icon>
          <t-icon name="user"/>
        </template>
      </t-input>
    </t-form-item>
    <t-form-item name="password">
      <t-input
          v-model="loginData.passWord"
          size="large"
          type="password"
          clearable
          placeholder="请输入登录密码"
      >
        <template #prefix-icon>
          <t-icon name="lock-on"/>
        </template>
        <template #suffix-icon>
          <t-icon
              :name="showPsw ? 'browse' : 'browse-off'"
              @click="showPsw = !showPsw"
          />
        </template>
      </t-input>
    </t-form-item>
    <t-form-item style="width: 100%;">
      <t-checkbox style="width: 20%;" v-model="rememberMe">记住我</t-checkbox>
      <t-button style="width: 80%;" block size="large" type="submit" :loading="loginBtnLoading">登 录</t-button>
    </t-form-item>
  </t-form>
</template>

<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import {useRouter} from "vue-router";
import {Base64} from 'js-base64';
import {checkAuth, userInfoToCache} from "@/utils/auth";
import {request} from "@/utils/request";
import {BASE_URL} from "@/pages/login/components/constants";
import {MessagePlugin} from "tdesign-vue-next";

const FORM_RULES = {
  userName: [{required: true, message: "账号必填", type: "error"}],
  passWord: [{required: true, message: "密码必填", type: "error"}]
};

const loginData = reactive({
  userName: "",
  passWord: ""
});
const rememberMe = ref(false);
const showPsw = ref(false);

const loginBtnLoading = ref(false);
const router = useRouter();

onMounted(() => {
  const localForm = localStorage.getItem('LOCAL_KEY');
  if (localForm) {
    rememberMe.value = true;
    try {
      const {phoneNum, password} = JSON.parse(localForm)
      Object.assign(loginData, {
        userName: Base64.decode(phoneNum),
        passWord: Base64.decode(password)
      })
    } catch (error) {
      console.error('本地数据解析失败~', error)
    }
  } else {
    rememberMe.value = false;
  }
})

const onSubmit = async ({validateResult}) => {
  if (validateResult === true) {
    loginBtnLoading.value = true;
    if (!checkAuth()) {
      await request.post({
        url: BASE_URL.login,
        data: loginData
      }).then(async res => {
        console.log(res)
        if (rememberMe.value) {
          const localForm = {
            phoneNum: Base64.encode(loginData.userName),
            password: Base64.encode(loginData.passWord)
          }
          localStorage.setItem("LOCAL_KEY", JSON.stringify(localForm));
        } else {
          localStorage.removeItem("LOCAL_KEY");
        }
        await userInfoToCache(res);
      }).catch(err => {
        MessagePlugin.error(err.message);
      }).finally(() => {
        loginBtnLoading.value = false;
      });
    } else {
      loginBtnLoading.value = false;
    }
  }
};
</script>

<style lang="less" scoped>
@import url("../index.less");
</style>
