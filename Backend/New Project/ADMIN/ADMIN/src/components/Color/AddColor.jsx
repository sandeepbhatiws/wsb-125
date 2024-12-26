import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
export default function AddColor() {
    let navigation = useNavigate();
    let [colorstate,setcolorstate]=useState('')
        let params = useParams();
    let colorset = (event)=>{
        setcolorstate(event.target.value)
    }
    console.log(colorstate)
    let [colordetails,setcolordetails]=useState('')
    console.log(colorstate)
    useEffect(()=>{
        if(params.id!=null){
            axios.post(`http://localhost:5555/api/admin/color/detail/${params.id}`)
            .then((response)=>{
                setcolordetails(response.data.data)
            }).catch((error)=>{
                alert('something went wrong ')
            })
        }
    },[])
   
    let formhandle = (event)=>{
        event.preventDefault();
       
       
       if(params.id!=null){
            axios.put(`http://localhost:5555/api/admin/color/update/${params.id}`,event.target)
            .then((response)=>{
                navigation(`/color/update/${params.id}`)
            }).catch((error)=>{
                alert('something went wrong')
            })
       }else{
        axios.post(`http://localhost:5555/api/admin/color/add`,event.target)
        .then((response)=>{
            event.target.reset();
            setcolorstate('')
        }).catch((error)=>{
            alert('something went wrong ')
        })
       }

            
    }

    return (
        
        <>
            <section class="w-full">
                <nav class="flex border-b-2" aria-label="Breadcrumb">
                    <ol class="p-3 px-6 inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li class="inline-flex items-center"><a href="#" class="inline-flex items-center text-md font-medium text-gray-700 hover:text-blue-600">Home</a></li>
                        <li>
                            <div class="flex items-center">/<a href="#" class="ms-1 text-md font-medium text-gray-700 hover:text-blue-600 md:ms-2">Color</a></div>
                        </li>
                        <li aria-current="page">
                            <div class="flex items-center">/<span class="ms-1 text-md font-medium text-gray-500 md:ms-2">
                                {
                                    (params.id!=null)? 'Update color' : ' Add Color'
                                }
                               
                                </span></div>
                        </li>
                    </ol>
                </nav>
                <div class="w-full min-h-[610px]">
                    <div class="max-w-[1220px] mx-auto py-5">
                        <h3 class="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">{
                                    (params.id!=null)? 'Update color' : ' Add Color'
                                }</h3>
                        <form onSubmit={formhandle} class="border border-t-0 p-3 rounded-b-md border-slate-400">
                            <div class="mb-5">
                                <label for="base-input" class="block mb-5 text-md font-medium text-gray-900"> Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={colordetails.name}
                                    id="base-input"
                                    class="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                                    placeholder="Category Name"
                                />
                            </div>
                            <div class="mb-5">
                                <label for="base-input" class="block mb-5 text-md font-medium text-gray-900"> Choose Color</label>
                                <div className='flex'>
                                    <input
                                    onChange={colorset}
                                        type="color"
                                        placeholder='choose Color'
                                        defaultValue={colordetails.code}
                                        className=' placeholder:text-white h-10'
                                        name='colorbox' />
                                    <input
                                        type="text"
                                        name="code"

                                        value={
                                            (colorstate!='')?
                                                        colorstate
                                            :
                                            colordetails.code}
                                        id="base-input"
                                        class="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                                        placeholder="Category Name"
                                    />
                                </div>

                            </div>
                            <div class="mb-5">
                                <label for="base-input" class="block mb-5 text-md font-medium text-gray-900"> order</label>
                                <input
                                    type="text"
                                    name="order"
                                    defaultValue={colordetails.order}
                                    id="base-input"
                                    class="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                                    placeholder="Category Name"
                                />
                            </div>
                            <div>


                            </div>



                            <button
                                type="submit"
                                class="focus:outline-none my-10 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )


}
