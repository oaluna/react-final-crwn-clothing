import React, { useState } from 'react';
import styled from 'styled-components';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const CARD_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: 'Arial, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#a0aec0'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  }
};

const StripeCheckoutContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem auto;
  width: 100%;
  max-width: 540px;
`;

const PaymentForm = styled.form`
  width: 100%;
  padding: 24px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FieldGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #334155;
  gap: 8px;
`;

const Input = styled.input`
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 12px 14px;
  font-size: 16px;
  color: #0f172a;
  background: #f8fafc;

  &:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.12);
  }
`;

const PaymentButton = styled.button`
  border: none;
  border-radius: 8px;
  background: #4f46e5;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 14px 18px;
  transition: background 150ms ease;

  &:disabled {
    background: #c7d2fe;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  color: #dc2626;
  background: #fee2e2;
  border: 1px solid #fecaca;
  padding: 12px 14px;
  border-radius: 8px;
  font-size: 14px;
`;

const StripeCheckoutButton = ({ price }) => {
  const stripe = useStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY || '');
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    billingLine1: '',
    billingCity: '',
    billingState: '',
    billingPostalCode: '',
    billingCountry: '',
    shippingLine1: '',
    shippingCity: '',
    shippingState: '',
    shippingPostalCode: '',
    shippingCountry: ''
  });

  const priceForStripe = Math.round(price * 100);

  const handleChange = event => {
    const { name, value } = event.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const requiredFields = [
      'name',
      'email',
      'billingLine1',
      'billingCity',
      'billingState',
      'billingPostalCode',
      'billingCountry',
      'shippingLine1',
      'shippingCity',
      'shippingState',
      'shippingPostalCode',
      'shippingCountry'
    ];

    return requiredFields.every(field => formValues[field].trim() !== '');
  };

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    if (!validateForm()) {
      setErrorMessage('Please complete all required fields.');
      return;
    }

    setProcessing(true);
    setErrorMessage('');

    try {
      const response = await axios.post('/create-payment-intent', {
        amount: priceForStripe
      });

      const clientSecret = response.data.clientSecret;
      const cardElement = elements.getElement(CardElement);

      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: formValues.name,
            email: formValues.email,
            address: {
              line1: formValues.billingLine1,
              city: formValues.billingCity,
              state: formValues.billingState,
              postal_code: formValues.billingPostalCode,
              country: formValues.billingCountry
            }
          }
        },
        shipping: {
          name: formValues.name,
          address: {
            line1: formValues.shippingLine1,
            city: formValues.shippingCity,
            state: formValues.shippingState,
            postal_code: formValues.shippingPostalCode,
            country: formValues.shippingCountry
          }
        }
      });

      if (payload.error) {
        setErrorMessage(payload.error.message);
        setProcessing(false);
      } else if (payload.paymentIntent && payload.paymentIntent.status === 'succeeded') {
        alert('Payment successful!');
        setProcessing(false);
      } else {
        setErrorMessage('Payment failed. Please try again.');
        setProcessing(false);
      }
    } catch (error) {
      console.error('Payment Error: ', error);
      setErrorMessage('There was an issue with your payment. Please try again.');
      setProcessing(false);
    }
  };

  return (
    <StripeCheckoutContainer>
      <PaymentForm onSubmit={handleSubmit}>
        <FieldGroup>
          <Label>
            Name
            <Input
              name='name'
              value={formValues.name}
              onChange={handleChange}
              placeholder='Full name'
              required
            />
          </Label>
          <Label>
            Email
            <Input
              type='email'
              name='email'
              value={formValues.email}
              onChange={handleChange}
              placeholder='email@example.com'
              required
            />
          </Label>
        </FieldGroup>

        <Label>
          Billing Address
          <Input
            name='billingLine1'
            value={formValues.billingLine1}
            onChange={handleChange}
            placeholder='Street address'
            required
          />
        </Label>

        <FieldGroup>
          <Label>
            City
            <Input
              name='billingCity'
              value={formValues.billingCity}
              onChange={handleChange}
              placeholder='City'
              required
            />
          </Label>
          <Label>
            State
            <Input
              name='billingState'
              value={formValues.billingState}
              onChange={handleChange}
              placeholder='State'
              required
            />
          </Label>
        </FieldGroup>

        <FieldGroup>
          <Label>
            Postal Code
            <Input
              name='billingPostalCode'
              value={formValues.billingPostalCode}
              onChange={handleChange}
              placeholder='Postal code'
              required
            />
          </Label>
          <Label>
            Country
            <Input
              name='billingCountry'
              value={formValues.billingCountry}
              onChange={handleChange}
              placeholder='Country'
              required
            />
          </Label>
        </FieldGroup>

        <Label>
          Shipping Address
          <Input
            name='shippingLine1'
            value={formValues.shippingLine1}
            onChange={handleChange}
            placeholder='Street address'
            required
          />
        </Label>

        <FieldGroup>
          <Label>
            City
            <Input
              name='shippingCity'
              value={formValues.shippingCity}
              onChange={handleChange}
              placeholder='City'
              required
            />
          </Label>
          <Label>
            State
            <Input
              name='shippingState'
              value={formValues.shippingState}
              onChange={handleChange}
              placeholder='State'
              required
            />
          </Label>
        </FieldGroup>

        <FieldGroup>
          <Label>
            Postal Code
            <Input
              name='shippingPostalCode'
              value={formValues.shippingPostalCode}
              onChange={handleChange}
              placeholder='Postal code'
              required
            />
          </Label>
          <Label>
            Country
            <Input
              name='shippingCountry'
              value={formValues.shippingCountry}
              onChange={handleChange}
              placeholder='Country'
              required
            />
          </Label>
        </FieldGroup>

        <Label>
          Card details
          <CardElement options={CARD_OPTIONS} />
        </Label>

        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <PaymentButton type='submit' disabled={!stripe || processing}>
          {processing ? 'Processing…' : `Pay $${price.toFixed(2)}`}
        </PaymentButton>
      </PaymentForm>
    </StripeCheckoutContainer>
  );
};

export default StripeCheckoutButton;
