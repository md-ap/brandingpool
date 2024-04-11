import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';
import Select from 'react-select';
import { CSSProperties } from 'react';

export type FormData = {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  videoCall: string;
  project: string;
};

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const uppercaseOptions = options.map(option => ({
  ...option,
  label: option.label.toUpperCase()
}));

const defaultOption = { value: uppercaseOptions[0].value, label: uppercaseOptions[0].label };

const customStyles = {
  control: (provided: CSSProperties, state: any) => ({
    ...provided,
    border: '1px solid black',
    borderRadius: '2rem',
    padding: '6px',
    '&:hover': {
      borderColor: '#2473FF',
    },
  }),
  dropdownIndicator: (provided: CSSProperties, state: any) => ({
    ...provided,
    padding: '4px',
    color: 'white',
    backgroundColor: 'black',
    borderRadius: '2rem',
    fontSize: '0.8rem',
  }),
  menu: (provided: CSSProperties, state: any) => ({
    ...provided,
    borderRadius: '0rem',
  }),
} as any;

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [emailSent, setEmailSent] = useState(false); // State to track email sent status
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  async function onSubmit(data: FormData) {
    try {
      await sendEmail(data); // Assuming sendEmail is an asynchronous function
      setEmailSent(true); // Set emailSent state to true if email is sent successfully
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }


  return (
    <div className="flex justify-center items-center">
      <div className="w-full px-0 md:px-16 py-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl w-[8.8125rem] mx-auto">BOOK A DISCOVERY CALL</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap">
          <div className='w-full md:w-1/3 mb-5 px-2'>
            <input
              type='text'
              className='w-full border-b border-black py-2 text-base font-medium text-gray-700 outline-none focus:border-[#2473FF] focus:shadow-md'
              {...register('name', { required: true })}
            />
            <label
              htmlFor='name'
              className='mb-3 block text-left uppercase pt-4 text-sm'
            >
              Name
            </label>
          </div>

          <div className='w-full md:w-1/3 mb-5 px-2'>
            <input
              type='email'
              className='w-full border-b border-black py-2 text-base font-medium text-gray-700 outline-none focus:border-[#2473FF] focus:shadow-md'
              {...register('email', { required: true })}
            />
            <label
              htmlFor='email'
              className='mb-3 block text-left uppercase pt-4 text-sm'
            >
              Email Address
            </label>
          </div>

          <div className='w-full md:w-1/3 mb-5 px-2'>
            <input
              type='tel'
              className='w-full border-b border-black py-2 text-base font-medium text-gray-700 outline-none focus:border-[#2473FF] focus:shadow-md'
              {...register('phone')}
            />
            <label
              htmlFor='phone'
              className='mb-3 block text-left uppercase pt-4 text-sm'
            >
              Phone
            </label>
          </div>

          <div className='w-full md:w-1/3 mb-5 px-2'>
            <input
              type='text'
              className='w-full border-b border-black py-2 text-base font-medium text-gray-700 outline-none focus:border-[#2473FF] focus:shadow-md'
              {...register('preferredDate')}
            />
            <label
              htmlFor='preferredDate'
              className='mb-3 block text-left uppercase pt-4 text-sm'
            >
              DD/MM/YY
            </label>
          </div>

          <div className='w-full md:w-1/3 mb-5 px-2'>
            <input
              type='text'
              className='w-full border-b border-black py-2 text-base font-medium text-gray-700 outline-none focus:border-[#2473FF] focus:shadow-md'
              {...register('preferredTime')}
            />
            <label
              htmlFor='preferredTime'
              className='mb-3 block text-left uppercase pt-4 text-sm'
            >
              Preferred Time
            </label>
          </div>

          <div className='w-full md:w-1/3 mb-5 px-2 relative'>
          {isMounted ?
            <Select
              options={uppercaseOptions}
              styles={customStyles}
              defaultValue={defaultOption}
            />: ''
          }
          </div>

          <div className='w-full mb-5 px-2'>
            <input
              type='text'
              className='w-full border-b border-black py-2 text-base font-medium text-gray-700 outline-none focus:border-[#2473FF] focus:shadow-md'
              {...register('project')}
            />
            <label
              htmlFor='project'
              className='mb-3 block text-left uppercase pt-4 text-sm'
            >
              Project
            </label>
          </div>

          <div className='mx-auto pt-12'>
            {emailSent ? ( // Conditional rendering based on email sent status
              <p className="text-2xl text-center mb-4">
                Sent! We&apos;ll reach out shortly.
              </p>
            ) : (
              <button
                type="submit"
                className="bg-black hover:bg-[#2473FF] text-[#EBEBEB] py-3 px-12 rounded-full"
              >
                Contact me
              </button>
            )}
          </div>

        </form>
      </div>
    </div>
  );
};

export default Contact;
