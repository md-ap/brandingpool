import React, { useState, useEffect } from 'react';
import { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';
import Select from 'react-select';
import { CSSProperties } from 'react';

export type FormData = {
  name: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  contactMethod: string;
  project: string;
};

const options = [
  { value: 'video-call', label: 'By video call' },
  { value: 'in-person', label: 'In-person meeting' },
  { value: 'phone-call', label: 'By phone call' },
];

const customStyles = {
  control: (provided: CSSProperties, state: any) => ({
    ...provided,
    border: '1px solid black',
    borderRadius: '2rem',
    padding: '6px',
    fontSize: '.8rem',
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
  }),
  menu: (provided: CSSProperties, state: any) => ({
    ...provided,
    borderRadius: '0rem',
    fontSize: '.8rem',
  }),
} as any;

const Contact: FC = () => {
  const { register, handleSubmit, control, reset } = useForm<FormData>();
  const [emailSent, setEmailSent] = useState(false);
  const [emailIsSending, setEmailIsSending] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);


  async function onSubmit(data: FormData) {
    try {
      setEmailIsSending(true);
      await sendEmail(data);
      setEmailIsSending(false);
      setEmailSent(true);
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }


  return (
    <div className="w-full flex flex-col px-0 md:px-6 py-20">
      <div className="flex w-full justify-center items-center mb-6">
        <h2 className="text-2xl text-center">BOOK A <br />DISCOVERY<br />CALL</h2>
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

        <div className='w-full md:w-1/3 mb-5 px-2 relative uppercase'>
          {isMounted ?
          <Controller
            name="contactMethod"
            control={control}
            defaultValue={options[0].value}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <Select
                options={options}
                styles={customStyles}
                value={options.find(c=> c.value === value)}
                isSearchable={false}
                onChange={val => onChange(val?.value || '')}
              />
            )}
          />: ''}
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
            <button
              type="submit"
              disabled={emailIsSending}
              className="bg-black hover:bg-[#2473FF] text-[#EBEBEB] py-3 px-12 rounded-full disabled:opacity-50 disabled:hover:bg-black"
            >
              Contact me
            </button>
            {emailSent &&
              <p className="pt-10">Sent! We&apos;ll reach out shortly.</p>
            }
        </div>

      </form>
    </div>
  );
};

export default Contact;
