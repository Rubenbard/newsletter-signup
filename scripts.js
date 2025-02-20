const validator = new JustValidate('#before-submit_form', {
    validateBeforeSubmitting: true,
  });
  
  validator.addField('#before-submit_email', [
    {
      rule: 'required',
    },
    {
      rule: 'email',
    },
  ]);