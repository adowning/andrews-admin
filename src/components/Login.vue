<template>
<q-layout >
	<q-page-container>
    <q-page padding class="row justify-center ">
    <div style="width: 600px; max-width: 90vw; ">
      <div class="flex-row-docs q-al-xl">
			
        <div class="doc-container q-pa-xl">
          <div class="row justify-center ">
							<img style="width: 300px; height: 280px;" src="../statics/logo.png" size= />
        <div class="input-group ">
          <span class="input-group-addon "><i class="fa fa-envelope"></i></span>
          <input class="form-control " name="email" placeholder="Email" type="email" v-model="email"><br>
        <!-- </div>
        <div class="input-group  "> -->
          <span class="input-group-addon"><i class="fa fa-lock"></i></span>
          <input class="form-control" name="password" placeholder="Password" type="password" v-model="pass">
        </div>
		<div class="q-pa-sm">
           <q-btn  color="primary" @click="onSignin(email, pass)">Submit</q-btn>
		</div>
			<div class="q-pa-sm" v-if="devMode == 'development'">
           <q-btn  color="primary" @click="onSignin('d@d.com', 'asdfasdf', 'dname')">D Submit</q-btn>
           <q-btn  color="primary" @click="onSignin('a@a.com', 'asdfasdf', 'aname')">A Submit</q-btn>
           <q-btn  color="primary" @click="onSignin('b@b.com', 'asdfasdf', 'bname')">B Submit</q-btn>
           <q-btn  color="primary" @click="onSignin('c@c.com', 'asdfasdf', 'cname')">C Submit</q-btn>
           <q-btn  color="primary" @click="onSignin('john.w@andrewscarpetcleaning.com', 'Andrews1', 'cname')">john weldon</q-btn>
		</div>
				<div class="q-pa-sm" v-if="devMode == 'development'">
					 <!-- <input class="form-control " name="email" placeholder="Email" type="text" v-model="newemail"><br>
          <span class="input-group-addon"><i class="fa fa-lock"></i></span>
          <input class="form-control" name="password" placeholder="Password" type="password" v-model="newpass">
           <q-btn  color="primary" @click="onSignUp('d@d.com', 'asdfasdf')">Signu p new user</q-btn> -->
		</div>
          </div>
            </div>
        <h4>Andrews Administration Application</h4>
						
          </div>
		       <div class="row justify-center">
        <q-alert
          color="warning"
          inline
          class="q-mb-lg"
        > Any links in the menu to the left that are grey is becuase I only want to test just a few features at a time, I will turn on the other features after the bugs are worked out of what I have open now </q-alert>
     </div> 
        </div>
      </div>
    </q-page>
    </q-page-container>
</q-layout>
</template>
<script>
import { required, email } from "vuelidate/lib/validators";
import { Notify } from "quasar";
import router from "../router";
// import firebase from "./firebaseInit";

import axios from "axios";
// var humanityService = axios.create({
//   baseURL: "http://47.219.112.177:8000/api",
//   timeout: 8000
// });

export default {
  data() {
    return {
      email: "",
      pass: "",
      newpass: "",
      newemail: "",
      username: "",
      form: {},
      login: true,
      devMode: process.env.NODE_ENV
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    error() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("/profile");
        console.log(value);
      }
    }
  },
  methods: {
    onSignin(email, pass) {
      // if (!username) {
      //   username = "none";
      // }

      var vm = this;
      window.localStorage.clear();
      window.sessionStorage.clear();
      this.$store
        .dispatch("signUserIn", {
          email: email,
          password: pass
        })
        .then(() => {
          console.log("back");
        });
    },
    onDismissed() {
      this.$store.dispatch("clearError");
    },
    onSignUp(email, pass, username) {
      var vm = this;
      window.localStorage.clear();
      window.sessionStorage.clear();
      this.$store
        .dispatch("signUserUp", {
          email: email,
          pass: pass,
          username: username
        })
        .then(() => {
          //	this.$store.dispatch("loadMyData", {})
          console.log("signed up!");
        });
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
.logo {
  height: 100px;
  width: 50%;
}
</style>
