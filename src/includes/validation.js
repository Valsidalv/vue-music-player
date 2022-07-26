/* eslint-disable */
import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure
} from 'vee-validate';
import {
  required,
  min,
  max,
  alpha_spaces as alfaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal,
  confirmed,
  not_one_of as excluded
} from '@vee-validate/rules';

export default {
  install(app) {
    app.component('VeeForm', VeeForm);
    app.component('VeeField', VeeField);
    app.component('ErrorMessage', ErrorMessage);

    defineRule('required', required);
    defineRule('tos', required);
    defineRule('min', min);
    defineRule('max', max);
    defineRule('alfaSpaces', alfaSpaces);
    defineRule('email', email);
    defineRule('min_value', minVal);
    defineRule('max_value', maxVal);
    defineRule('password_mismatch', confirmed);
    defineRule('excluded', excluded);
    defineRule('country_excluded', excluded);

    configure({
      generateMessage: (context) => {
        const messages = {
          required: `Field ${context.field} is required.`,
          min: `Field ${context.field} is too short.`,
          max: `Field ${context.field} is too long.`,
          alfaSpaces: `Field ${context.field} can only contain letters and spaces.`,
          email: `Field ${context.field} must be valid email.`,
          min_value: `Field ${context.field} is too low.`,
          max_value: `Field ${context.field} is too high.`,
          excluded: `You are not allowed to use this value for field ${context.field}.`,
          country_excluded: "We do not accept users from this country.",
          password_mismatch: "Passwords do not match.",
          tos: "You must accept the terms of service."
        };

        let message = messages[context.rule.name] ? messages[context.rule.name] :
          `Field ${context.field} is invalid.`;

        return message;
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true
    });
  }
}
