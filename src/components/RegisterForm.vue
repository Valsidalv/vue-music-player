<!-- eslint-disable -->
<template>
    <!-- Registration Form -->
    <div class="text-center text-white font-bold p-5 mb-4" v-if="regShowAlert" v-bind:class="regAlertVariant">
    {{ regAlertMsg }}
    </div>
    <vee-form  v-bind:validation-schema="schema" v-bind:initial-values="userData"
    v-on:submit="register">
    <!-- Name -->
    <div class="mb-3">
        <label class="inline-block mb-2">Name</label>
        <vee-field type="text" name="name"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
            duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Name" />
        <ErrorMessage class="text-red-600" name="name"/>
    </div>
    <!-- Email -->
    <div class="mb-3">
        <label class="inline-block mb-2">Email</label>
        <vee-field type="email" name="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
            duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email" />
            <ErrorMessage class="text-red-600" name="email"/>
    </div>
    <!-- Age -->
    <div class="mb-3">
        <label class="inline-block mb-2">Age</label>
        <vee-field type="number" name="age"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
            duration-500 focus:outline-none focus:border-black rounded" />
        <ErrorMessage class="text-red-600" name="age"/>
    </div>
    <!-- Password -->
    <div class="mb-3">
        <label class="inline-block mb-2">Password</label>
        <vee-field type="password" name="password" v-bind:bales="false" v-slot="{ field, errors }">
        <input type="text" class="block w-full py-1.5 px-3 text-gray-800 border
        border-gray-300 transition
        duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password" v-bind="field">
        <div class="text-red-600" v-for="error in errors" v-bind:key="error">
            {{error}}
        </div>
        </vee-field>
        <ErrorMessage class="text-red-600" name="password"/>
    </div>
    <!-- Confirm Password -->
    <div class="mb-3">
        <label class="inline-block mb-2">Confirm Password</label>
        <vee-field type="password" name="confirm_password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
            duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Confirm Password" />
        <ErrorMessage class="text-red-600" name="confirm_password"/>
    </div>
    <!-- Country -->
    <div class="mb-3">
        <label class="inline-block mb-2">Country</label>
        <vee-field as="select" name="country"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition
            duration-500 focus:outline-none focus:border-black rounded">
        <option value="USA">USA</option>
        <option value="Mexico">Mexico</option>
        <option value="Germany">Germany</option>
        <option value="England">England</option>
        </vee-field >
        <ErrorMessage class="text-red-600" name="country"/>
    </div>
    <!-- TOS -->
    <div class="mb-3 pl-6">
        <vee-field name="tos" value="1" type="checkbox" 
        class="w-4 h-4 float-left -ml-6 mt-1 rounded" />
        <label class="inline-block">Accept terms of service</label><br>
        <ErrorMessage class="text-red-600" name="tos"/>
    </div>
    <button type="submit"
        class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition
        hover:bg-purple-700" v-bind:disabled="regInSubmission">
        Submit
    </button>
    </vee-form>
</template>

<script>
import firebase from '@/includes/firebase';

export default {
  name: 'RegisterForm',
  data() {
    return {
      schema: {
        name: 'required|min:3|max:50|alfaSpaces',
        email: 'required|min:3|max:50|email',
        age: 'required|min_value:18|max_value:100',
        password: 'required|min:3|max:20',
        confirm_password: 'password_mismatch:@password',
        country: 'required|country_excluded:England',
        tos: 'tos',
        logEmail: 'required|min:3|max:50|email',
        logPass: 'required|min:3|max:20'
      },
      userData: {
        country: 'Mexico'
      },
      regInSubmission: false,
      regShowAlert: false,
      regAlertVariant: 'bg-blue-500',
      regAlertMsg: 'Please wait.'
    };
  },
  methods: {
    async register(values) {
      this.regShowAlert = true;
      this.regInSubmission = true;
      this.regAlertVariant = 'bg-blue-500';
      this.regAlertMsg = 'Pliz vejt!';

      let userCred = null;
      try {
        userCred = await firebase
          .auth()
          .createUserWithEmailAndPassword(values.email, values.password);
        console.log(userCred);
      } catch (error) {
        this.regInSubmission = false;
        this.regAlertVariant = 'bg-red-500';
        this.regAlertMsg = 'Error occured. Try again.';
        return;
      }

      this.regAlertVariant = 'bg-green-500';
      this.regAlertMsg = 'Account created.';
      console.log(values);
    }
  }
};
</script>


