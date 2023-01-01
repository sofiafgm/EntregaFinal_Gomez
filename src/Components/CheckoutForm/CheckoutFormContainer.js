import React from 'react';
import { useState } from 'react';
import CheckoutForm from './CheckoutForm';

const defaultFormValidationState = {
  formValidated: false,
  nameValid: false,
  lastNameValid: false,
  phoneValid: false,
  emailValid: false,
  emailTwoValid: false,
};

const CheckoutFormContainer = ({ onCeckout }) => {
  const [name, setName] = useState('');
  const [lastName, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [emailOne, setEmailOne] = useState('');
  const [emailTwo, setEmailTwo] = useState('');
  const [formValidation, setFormValidation] = useState(
    defaultFormValidationState
  );

  const setItemValue = (callback) => (event) => {
    setFormValidation(defaultFormValidationState);
    callback(event.target.value);
  };

  const onSubmit = (event) => {
    //validate form
    const isFormValid = {
      formValidated: true,
      nameValid: Boolean(name),
      lastNameValid: Boolean(name),
      phoneValid: Boolean(phone),
      emailValid: Boolean(emailOne),
      emailTwoValid: emailOne && emailOne == emailTwo,
    };

    if (
      Object.values(isFormValid).reduce(
        (isValidSoFar, isThisFieldValid) => isValidSoFar && isThisFieldValid,
        true
      )
    ) {
      onCeckout({ name, phone, email: emailOne });
    } else {
      setFormValidation(isFormValid);
    }

    event.preventDefault();
  };

  return (
    <CheckoutForm
      name={name}
      onNameChange={setItemValue(setName)}
      lastName={lastName}
      onLastNameChange={setItemValue(setLastname)}
      phone={phone}
      onPhoneChange={setItemValue(setPhone)}
      emailOne={emailOne}
      onEmailOneChange={setItemValue(setEmailOne)}
      emailTwo={emailTwo}
      onEmailTwoChange={setItemValue(setEmailTwo)}
      onSubmit={onSubmit}
      formValidation={formValidation}
    />
  );
};

export default CheckoutFormContainer;
