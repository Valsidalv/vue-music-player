<!-- eslint-disable -->
<template>
    <div class="text-white text-center font-bold p-5 mb-4" v-if="loginShowAlert" v-bind:class="loginAlertVariant">
        {{ loginAlertMsg }}
    </div>
<!-- Login Form -->
    <vee-form  v-bind:validation-schema="loginSchema" v-on:submit="login">
    <!-- Email -->
    <div class="mb-3">
        <label class="inline-block mb-2">Email</label>
        <vee-field type="email" name="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
            duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email" />
        <ErrorMessage class="text-red-600" name="email"/>
    </div>
    <!-- Password -->
    <div class="mb-3">
        <label class="inline-block mb-2">Password</label>
        <vee-field type="password" name="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
            duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password" />
        <ErrorMessage class="text-red-600" name="password"/>
    </div>
    <button type="submit" 
        class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition
        hover:bg-purple-700" v-bind:disabled="loginInSubmission">
        Submit
    </button>
    </vee-form>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      loginSchema: {
        email: 'required|email',
        password: 'required|min:3|max:20'
      },
      loginInSubmission: false,
      loginShowAlert: false,
      loginAlertVariant: 'bg-blue-500',
      loginAlertMsg: 'Please wait, logging in.'
    };
  },
  methods: {
    login(values) {
      this.loginInSubmission = true;
      this.loginShowAlert = true;
      this.loginAlertVariant = 'bg-blue-500';
      this.loginAlertMsg = 'Please wait, logging in.';

      this.loginAlertVariant = 'bg-green-500';
      this.loginAlertMsg = 'Logged in.';
      console.log(values);
    }
  }
};
</script>

