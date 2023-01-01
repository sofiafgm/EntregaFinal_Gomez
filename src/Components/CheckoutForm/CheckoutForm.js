import React from 'react';

const FormValidation = ({ valid, invalid }) => (
  <>
    <div className="valid-feedback">{valid}</div>
    <div className="invalid-feedback">{invalid}</div>
  </>
);

const CheckoutForm = ({
  name,
  onNameChange,
  lastName,
  onLastNameChange,
  phone,
  onPhoneChange,
  emailOne,
  onEmailOneChange,
  emailTwo,
  onEmailTwoChange,
  onSubmit,
  formValidation: {
    formValidated,
    nameValid,
    phoneValid,
    emailValid,
    emailTwoValid,
  },
}) => {
  return (
    <form className="row g-3" onSubmit={onSubmit} novalidate>
      <div className="col-md-6">
        <label for="name" className="form-label">
          Nombre
        </label>

        <input
          value={name}
          onChange={onNameChange}
          type="text"
          className={`form-control ${
            formValidated ? (nameValid ? 'is-valid' : 'is-invalid') : ''
          }`}
          id="name"
        />

        <FormValidation valid={'chido!'} invalid={'hay que llenar esto...'} />
      </div>

      <div className="col-md-6">
        <label for="lastName" className="form-label">
          Apellido
        </label>

        <input
          value={lastName}
          onChange={onLastNameChange}
          type="text"
          className={`form-control ${
            formValidated ? (lastName ? 'is-valid' : 'is-invalid') : ''
          }`}
          id="lastName"
        />

        <FormValidation valid={'chido!'} invalid={'hay que llenar esto...'} />
      </div>

      <div className="col-md-7">
        <label for="phone" className="form-label">
          Teléfono
        </label>

        <input
          value={phone}
          onChange={onPhoneChange}
          type="phone"
          className={`form-control ${
            formValidated ? (phoneValid ? 'is-valid' : 'is-invalid') : ''
          }`}
          id="phone"
        />

        <FormValidation valid={'chido!'} invalid={'hay que llenar esto...'} />
      </div>

      <div className="col-md-6">
        <label for="email" className="form-label">
          E-mail
        </label>

        <input
          value={emailOne}
          onChange={onEmailOneChange}
          type="email"
          className={`form-control ${
            formValidated ? (emailValid ? 'is-valid' : 'is-invalid') : ''
          }`}
          id="email"
        />

        <FormValidation valid={'chido!'} invalid={'hay que llenar esto...'} />
      </div>

      <div className="col-md-6">
        <label for="email-confirm" className="form-label">
          Confirma tu E-mail
        </label>

        <input
          value={emailTwo}
          onChange={onEmailTwoChange}
          type="email"
          className={`form-control ${
            formValidated ? (emailTwoValid ? 'is-valid' : 'is-invalid') : ''
          }`}
          id="email-confirm"
        />

        <FormValidation valid={'chido!'} invalid={'los e-mail no coinciden'} />
      </div>

      <div className="col-12">
        <button className="btn btn-secondary btn-lg w-100" type="submit">
          Realizar compra
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
