import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { getDatabase } from "firebase/database";
import hvs from '../config/firbaseConfig';

export default function EnquiryForm() {

    const SubmitHndler = (event) =>{
        event.preventDefault();

        const contact = {
            first_name : event.target.first_name.value,
            Last_name : event.target.first_name.value,
            email : event.target.Email.value,
            Mobile_no : event.target.Mobile_no.value,
            Message: event.target.Message.value,

        }

        console.log(contact);

        // const db = getDatabase(hvs);
        // set(ref(db, 'contact/' + Date.now()), contact);


        // event.target.reset();
        
        toast.success('Submit successfully!!');
    }

  return (
   <>
   <ToastContainer
    position="top-left"
    autoClose={1000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
/>
    <div className="container-fluid">
    <div className="container">
        <div className="row justify-content-center">
            <div className="mt-3 col-6 ">
                <form action="get" className='form' onSubmit={SubmitHndler} autoComplete='off'>
                    <div className='p-3 justify-content-between row'>

                        <div className="border div firstname border-1 ms-2">
                            <input type="text" name='first_name' placeholder='FirstName' />
                        </div>

                        <div className="border div firstname border-1 me-2">
                            <input type="text" name='Last_name' placeholder='LastName' />
                        </div>
                    </div>
                    
                    <div className='p-3'>
                        <div className="border Email border-1">
                            <input type="email" name='Email' placeholder='Email' />
                        </div>
                    </div>

                    <div className='p-3'>
                        <div className="border Email border-1">
                            <input type="tel" name='Mobile_no' placeholder='Mobile_no' />
                        </div>
                    </div>
                    <div className='p-3'>
                        <div className="border Email border-1">
                        <textarea cols={10} rows={5} placeholder='Message' name='Message'></textarea>
                        </div>
                    </div>

                    <div className="p-3 text-center Email ">
                        <button type='Submit' className='border border-1 Email bg-danger '> Submit</button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
  </div>
   </>
  )
}
