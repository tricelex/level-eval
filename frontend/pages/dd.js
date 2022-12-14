// /*
//   This example requires Tailwind CSS v2.0+

//   This example requires some changes to your config:

//   ```
//   // tailwind.config.js
//   module.exports = {
//     // ...
//     plugins: [
//       // ...
//       require('@tailwindcss/forms'),
//     ],
//   }
//   ```
// */
// import { LockClosedIcon } from '@heroicons/react/solid';

// const subtotal = '$108.00';
// const discount = { code: 'CHEAPSKATE', amount: '$16.00' };
// const taxes = '$9.92';
// const shipping = '$8.00';
// const total = '$141.92';
// const products = [
//   {
//     id: 1,
//     name: 'Mountain Mist Artwork Tee',
//     href: '#',
//     price: '$36.00',
//     color: 'Birch',
//     size: 'L',
//     imageSrc:
//       'https://tailwindui.com/img/ecommerce-images/checkout-form-04-product-01.jpg',
//     imageAlt:
//       'Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade.',
//   },
//   // More products...
// ];

// export default function Example() {
//   return (
//     <>
//       {/*
//         This example requires updating your template:

//         ```
//         <html class="h-full bg-white">
//         <body class="h-full">
//         ```
//       */}
//       <main className='lg:min-h-full lg:overflow-hidden lg:flex lg:flex-row-reverse'>
//         <h1 className='sr-only'>Checkout</h1>

//         {/* Checkout form */}
//         <section
//           aria-labelledby='payment-heading'
//           className='flex-auto px-4 pt-12 pb-16 overflow-y-auto sm:px-6 sm:pt-16 lg:px-8 lg:pt-0 lg:pb-24'
//         >
//           <h2 id='payment-heading' className='sr-only'>
//             Payment and shipping details
//           </h2>

//           <div className='max-w-lg mx-auto lg:pt-16'>
//             <button
//               type='button'
//               className='flex items-center justify-center w-full py-2 text-white bg-black border border-transparent rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
//             >
//               <span className='sr-only'>Pay with Apple Pay</span>
//               <svg
//                 className='w-auto h-5'
//                 fill='currentColor'
//                 xmlns='http://www.w3.org/2000/svg'
//                 viewBox='0 0 50 20'
//               >
//                 <path d='M9.536 2.579c-.571.675-1.485 1.208-2.4 1.132-.113-.914.334-1.884.858-2.484C8.565.533 9.564.038 10.374 0c.095.951-.276 1.884-.838 2.579zm.829 1.313c-1.324-.077-2.457.751-3.085.751-.638 0-1.6-.713-2.647-.694-1.362.019-2.628.79-3.323 2.017-1.429 2.455-.372 6.09 1.009 8.087.676.99 1.485 2.075 2.552 2.036 1.009-.038 1.409-.656 2.628-.656 1.228 0 1.58.656 2.647.637 1.104-.019 1.8-.99 2.475-1.979.771-1.122 1.086-2.217 1.105-2.274-.02-.019-2.133-.828-2.152-3.263-.02-2.036 1.666-3.007 1.742-3.064-.952-1.408-2.437-1.56-2.951-1.598zm7.645-2.76v14.834h2.305v-5.072h3.19c2.913 0 4.96-1.998 4.96-4.89 0-2.893-2.01-4.872-4.885-4.872h-5.57zm2.305 1.941h2.656c2 0 3.142 1.066 3.142 2.94 0 1.875-1.142 2.95-3.151 2.95h-2.647v-5.89zM32.673 16.08c1.448 0 2.79-.733 3.4-1.893h.047v1.779h2.133V8.582c0-2.14-1.714-3.52-4.351-3.52-2.447 0-4.256 1.399-4.323 3.32h2.076c.171-.913 1.018-1.512 2.18-1.512 1.41 0 2.2.656 2.2 1.865v.818l-2.876.171c-2.675.162-4.123 1.256-4.123 3.159 0 1.922 1.495 3.197 3.637 3.197zm.62-1.76c-1.229 0-2.01-.59-2.01-1.494 0-.933.752-1.475 2.19-1.56l2.562-.162v.837c0 1.39-1.181 2.379-2.743 2.379zM41.1 20c2.247 0 3.304-.856 4.227-3.454l4.047-11.341h-2.342l-2.714 8.763h-.047l-2.714-8.763h-2.409l3.904 10.799-.21.656c-.352 1.114-.923 1.542-1.942 1.542-.18 0-.533-.02-.676-.038v1.779c.133.038.705.057.876.057z' />
//               </svg>
//             </button>

//             <div className='relative mt-8'>
//               <div
//                 className='absolute inset-0 flex items-center'
//                 aria-hidden='true'
//               >
//                 <div className='w-full border-t border-gray-200' />
//               </div>
//               <div className='relative flex justify-center'>
//                 <span className='px-4 text-sm font-medium text-gray-500 bg-white'>
//                   or
//                 </span>
//               </div>
//             </div>

//             <form className='mt-6'>
//               <div className='grid grid-cols-12 gap-y-6 gap-x-4'>
//                 <div className='col-span-full'>
//                   <label
//                     htmlFor='email-address'
//                     className='block text-sm font-medium text-gray-700'
//                   >
//                     Email address
//                   </label>
//                   <div className='mt-1'>
//                     <input
//                       type='email'
//                       id='email-address'
//                       name='email-address'
//                       autoComplete='email'
//                       className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
//                     />
//                   </div>
//                 </div>

//                 <div className='col-span-full'>
//                   <label
//                     htmlFor='name-on-card'
//                     className='block text-sm font-medium text-gray-700'
//                   >
//                     Name on card
//                   </label>
//                   <div className='mt-1'>
//                     <input
//                       type='text'
//                       id='name-on-card'
//                       name='name-on-card'
//                       autoComplete='cc-name'
//                       className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
//                     />
//                   </div>
//                 </div>

//                 <div className='col-span-full'>
//                   <label
//                     htmlFor='card-number'
//                     className='block text-sm font-medium text-gray-700'
//                   >
//                     Card number
//                   </label>
//                   <div className='mt-1'>
//                     <input
//                       type='text'
//                       id='card-number'
//                       name='card-number'
//                       autoComplete='cc-number'
//                       className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
//                     />
//                   </div>
//                 </div>

//                 <div className='col-span-8 sm:col-span-9'>
//                   <label
//                     htmlFor='expiration-date'
//                     className='block text-sm font-medium text-gray-700'
//                   >
//                     Expiration date (MM/YY)
//                   </label>
//                   <div className='mt-1'>
//                     <input
//                       type='text'
//                       name='expiration-date'
//                       id='expiration-date'
//                       autoComplete='cc-exp'
//                       className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
//                     />
//                   </div>
//                 </div>

//                 <div className='col-span-4 sm:col-span-3'>
//                   <label
//                     htmlFor='cvc'
//                     className='block text-sm font-medium text-gray-700'
//                   >
//                     CVC
//                   </label>
//                   <div className='mt-1'>
//                     <input
//                       type='text'
//                       name='cvc'
//                       id='cvc'
//                       autoComplete='csc'
//                       className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
//                     />
//                   </div>
//                 </div>

//                 <div className='col-span-full'>
//                   <label
//                     htmlFor='address'
//                     className='block text-sm font-medium text-gray-700'
//                   >
//                     Address
//                   </label>
//                   <div className='mt-1'>
//                     <input
//                       type='text'
//                       id='address'
//                       name='address'
//                       autoComplete='street-address'
//                       className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
//                     />
//                   </div>
//                 </div>

//                 <div className='col-span-full sm:col-span-4'>
//                   <label
//                     htmlFor='city'
//                     className='block text-sm font-medium text-gray-700'
//                   >
//                     City
//                   </label>
//                   <div className='mt-1'>
//                     <input
//                       type='text'
//                       id='city'
//                       name='city'
//                       autoComplete='address-level2'
//                       className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
//                     />
//                   </div>
//                 </div>

//                 <div className='col-span-full sm:col-span-4'>
//                   <label
//                     htmlFor='regino'
//                     className='block text-sm font-medium text-gray-700'
//                   >
//                     State / Province
//                   </label>
//                   <div className='mt-1'>
//                     <input
//                       type='text'
//                       id='regino'
//                       name='regino'
//                       autoComplete='address-level1'
//                       className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
//                     />
//                   </div>
//                 </div>

//                 <div className='col-span-full sm:col-span-4'>
//                   <label
//                     htmlFor='postal-code'
//                     className='block text-sm font-medium text-gray-700'
//                   >
//                     Postal code
//                   </label>
//                   <div className='mt-1'>
//                     <input
//                       type='text'
//                       id='postal-code'
//                       name='postal-code'
//                       autoComplete='postal-code'
//                       className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className='flex mt-6 space-x-2'>
//                 <div className='flex items-center h-5'>
//                   <input
//                     id='same-as-shipping'
//                     name='same-as-shipping'
//                     type='checkbox'
//                     defaultChecked
//                     className='w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
//                   />
//                 </div>
//                 <label
//                   htmlFor='same-as-shipping'
//                   className='text-sm font-medium text-gray-900'
//                 >
//                   Billing address is the same as shipping address
//                 </label>
//               </div>

//               <button
//                 type='submit'
//                 className='w-full px-4 py-2 mt-6 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
//               >
//                 Pay {total}
//               </button>

//               <p className='flex justify-center mt-6 text-sm font-medium text-gray-500'>
//                 <LockClosedIcon
//                   className='w-5 h-5 text-gray-400 mr-1.5'
//                   aria-hidden='true'
//                 />
//                 Payment details stored in plain text
//               </p>
//             </form>
//           </div>
//         </section>
//       </main>
//     </>
//   );
// }
