function devsoraAuth(mode) {
  return {
    mode,
    loading: false,
    showPassword: false,
    form: {
      name: '',
      email: '',
      password: '',
      remember: true,
      terms: false,
    },
    errors: {},
    alert: {
      type: '',
      title: '',
      message: '',
    },
    validate() {
      const errors = {};
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (this.mode === 'register' && this.form.name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters.';
      }

      if (!this.form.email) {
        errors.email = 'Email is required.';
      } else if (!emailPattern.test(this.form.email)) {
        errors.email = 'Enter a valid email address.';
      }

      if (this.mode !== 'forgot') {
        if (!this.form.password) {
          errors.password = 'Password is required.';
        } else if (this.form.password.length < 8) {
          errors.password = 'Password must be at least 8 characters.';
        }
      }

      if (this.mode === 'register' && !this.form.terms) {
        errors.terms = 'You must accept the terms before creating an account.';
      }

      this.errors = errors;
      return Object.keys(errors).length === 0;
    },
    submit() {
      this.alert = { type: '', title: '', message: '' };

      if (!this.validate()) {
        this.alert = {
          type: 'error',
          title: 'Check your details',
          message: 'Some fields need attention before we can continue.',
        };
        return;
      }

      this.loading = true;

      window.setTimeout(() => {
        this.loading = false;

        if (this.mode === 'login') {
          this.alert = {
            type: 'success',
            title: 'Login ready',
            message: 'Frontend validation passed. Connect this action to your auth API.',
          };
        }

        if (this.mode === 'register') {
          this.alert = {
            type: 'success',
            title: 'Account flow ready',
            message: 'Registration UI is ready for backend integration.',
          };
        }

        if (this.mode === 'forgot') {
          this.alert = {
            type: 'success',
            title: 'Reset link queued',
            message: 'If an account exists, a password reset email will be sent.',
          };
        }
      }, 900);
    },
    socialLogin(provider) {
      this.alert = {
        type: 'success',
        title: `${provider} login selected`,
        message: 'Connect this button to your OAuth provider endpoint.',
      };
    },
  };
}

window.devsoraAuth = devsoraAuth;
