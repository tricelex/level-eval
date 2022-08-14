import Head from 'next/head';
import { useState } from 'react';
import Cards from 'react-credit-cards';
import axios from 'axios';
import 'react-credit-cards/es/styles-compiled.css';
import Modal from '../components/Modal';

export default function Home() {
  const [card, setCard] = useState({
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  });
  const [status, setStatus] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCard((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  console.log('status: ', status);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/card/`,
        card
      );
      console.log(response.data);
      console.log(response.data.status);
      setStatus(response.data.status);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Head>
        <title>Card Verification API</title>
      </Head>
      <main className='lg:min-h-full lg:overflow-hidden lg:flex lg:flex-row-reverse'>
        <h1 className='sr-only'>Checkout</h1>
        {/* Checkout form */}
        <section
          aria-labelledby='payment-heading'
          className='flex-auto px-4 pt-12 pb-16 overflow-y-auto sm:px-6 sm:pt-16 lg:px-8 lg:pt-0 lg:pb-24'
        >
          <div className='max-w-lg mx-auto lg:pt-16'>
            <h2
              id='payment-heading'
              className='block w-full font-medium text-gray-700'
            >
              Payment and shipping details
            </h2>
          </div>
          <div className='max-w-lg mx-auto lg:pt-16'>
            <Cards
              cvc={card.cvc}
              expiry={card.expiry}
              focused={card.focus}
              name={card.name}
              number={card.number}
            />
          </div>

          <div className='max-w-lg mx-auto lg:pt-16'>
            <form className='mt-6'>
              <div className='grid grid-cols-12 gap-y-6 gap-x-4'>
                <div className='col-span-full'>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Name on card
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      id='name'
                      autoComplete='cc-name'
                      name='name'
                      required
                      onChange={handleChange}
                      className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div className='col-span-full'>
                  <label
                    htmlFor='number'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Card number
                  </label>
                  <div className='mt-1'>
                    <input
                      type='tel'
                      id='number'
                      name='number'
                      autoComplete='cc-name'
                      onChange={handleChange}
                      className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div className='col-span-8 sm:col-span-9'>
                  <label
                    htmlFor='expiry'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Expiration date (MM/YY)
                  </label>
                  <div className='mt-1'>
                    <input
                      type='tel'
                      id='expiry'
                      name='expiry'
                      autoComplete='cc-exp'
                      required
                      onChange={handleChange}
                      className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>

                <div className='col-span-4 sm:col-span-3'>
                  <label
                    htmlFor='cvc'
                    className='block text-sm font-medium text-gray-700'
                  >
                    CVC
                  </label>
                  <div className='mt-1'>
                    <input
                      type='tel'
                      name='cvc'
                      id='cvc'
                      autoComplete='csc'
                      required
                      onChange={handleChange}
                      className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    />
                  </div>
                </div>
              </div>

              <button
                type='submit'
                onClick={handleSubmit}
                className='w-full px-4 py-2 mt-6 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Submit
              </button>
            </form>
          </div>
        </section>
        {status && status == true ? (
          <Modal status={status} message={'Validation Successful'} />
        ) : (
          <Modal status={status} message={'Validation Failed'} />
        )}
      </main>
    </div>
  );
}
