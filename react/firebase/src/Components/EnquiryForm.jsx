import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { getDatabase, ref, set } from "firebase/database";
import app from '../config/firebase';

export default function EnquiryForm() {

    const submitHandler = (event) => {
        event.preventDefault();

        const contact = {
            first_name : event.target.first_name.value,
            last_name : event.target.last_name.value,
            mobile_number : event.target.mobile_number.value,
            email : event.target.email.value,
            message : event.target.message.value,
        }

        const db = getDatabase(app);
        set(ref(db, 'contact_enqirys/' + Date.now()), contact);

        event.target.reset();
        toast.success('Data submitted successfully !!');
    }

  return (
    <>
    <ToastContainer/>
    <div class="container mx-auto my-20 w-1/3 border border-purple-500 bg-white">
        <div class="p-5 space-y-5 shadow-xl">
            <h4 class="text-center text-3xl">Contact Us</h4>

            <form onSubmit={ submitHandler } autoComplete='off'>
            <div class="grid grid-cols-2 gap-5">
                <input
                type="text" name='first_name'
                class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                placeholder="First Name"
                />
                <input
                type="text" name='last_name'
                class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                placeholder="Last Name"
                />
                <input
                type="email" name='email'
                class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                placeholder="Email"
                />
                <input
                type="tel" name='mobile_number'
                class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                placeholder="Mobile Number"
                />
                <textarea
                cols="10" name='message'
                rows="5"
                class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                placeholder="Write your message..."
                ></textarea>
            </div>
            <input
                type="submit"
                value="Send Message"
                class="focus:outline-none mt-5 bg-purple-500 px-4 py-2 text-white font-bold w-full"
            />
            </form>
        </div>
        </div>
    </>
  )
}
