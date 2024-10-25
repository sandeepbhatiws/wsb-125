import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import app from '../config/firebase';

export default function EnquiryData() {

    const [contactData, setContactData] = useState([]);

    useEffect(() => {
        const db = getDatabase(app);
        const starCountRef = ref(db, 'contact_enqirys/');
        onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        
        var finalData = [];

        for(var v in data){
            finalData.push(data[v]);
        }

        // console.log(finalData);
        setContactData(finalData);
        
        });
    },[]);

  return (
    <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
            <div>
            <h2 class="text-2xl text-center font-semibold leading-tight">Enquiry Data</h2>
            </div>
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
            >
                <table class="min-w-full leading-normal">
                <thead>
                    <tr>
                    <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >
                        Name
                    </th>
                    <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >
                        Email
                    </th>
                    <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >
                        Mobile Number
                    </th>
                    <th
                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                    >
                        Message
                    </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contactData.map((v,i) => {
                            return(
                                <tr>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">
                                            { v.first_name+' '+v.last_name } 
                                            </p>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">{v.email}</p>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">{v.mobile_number}</p>
                                    </td>
                                    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                        <p class="text-gray-900 whitespace-no-wrap">{v.message}</p>
                                    </td>
                                </tr>
                            )
                        })
                    }


                    
                </tbody>
                </table>
            </div>
            </div>
        </div>
    </div>
  )
}
