import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

export default function AddProduct() {
    let params = useParams();
    let [render, setrender] = useState(true)
    let [categories, SetCategories] = useState([])
    let [subcategory, setsubcategory] = useState([])
    let [size, setsize] = useState([])
    let [color, setcolor] = useState([])
    let [rootid, setrootid] = useState('')


    let id = (event) => {
        setrootid(event.target.value)
    }


    let formHandle = (event) => {

        event.preventDefault();
        console.log(event.target)
        if (params.id != null) {
            axios.put(`http://localhost:5555/api/admin/products/update/${params.id}`, event.target)
                .then((response) => {
                    navigation(`/color/update/${params.id}`)
                }).catch((error) => {
                    toast.error('something went wrong')
                })
        } else {
            axios.post(`http://localhost:5555/api/admin/products/add`, event.target)
                .then((response) => {
                    toast.success('Product Submitted !!')
                    event.target.reset();
                })
                .catch((error) => {
                    toast.error('something went wrong')
                   
                })
        }



    }
    useEffect(() => {
        axios.post('http://localhost:5555/api/admin/categories', {
            page: 1,
            limit: 200,
            status: true
        }).then((response) => {
            SetCategories(response.data.data)
        }).catch((error) => {
            console.log('something went wrong')
        })
    }, [render])
    useEffect(() => {
        axios.post('http://localhost:5555/api/admin/sub-categories', {
            //   page:currentPage,
            limit: 200,
            root_id: rootid
        })
            .then((response) => {
                setrender(!render)
                setsubcategory(response.data.data)
            })
            .catch((error) => {
                alert('something went wrong')
            })
    }, [render])
    useEffect(() => {
        axios.post('http://localhost:5555/api/admin/size', {
            status: true
        })
            .then((response) => {
                setsize(response.data.data)

            })
            .catch((error) => {
                alert('something went wrong')
            })
    }, [render])
    useEffect(() => {
        axios.post(`http://localhost:5555/api/admin/color`, {
            status: true
        })
            .then((response) => {
                setcolor(response.data.data)
            }).catch((error) => {
                alert('something went wrong ')
            })
    }, [render])

    return (
        <>
            <section class="w-full">
                <nav class="flex border-b-2" aria-label="Breadcrumb">
                    <ol class="p-3 px-6 inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                        <li class="inline-flex items-center"><a href="#" class="inline-flex items-center text-md font-medium text-gray-700 hover:text-blue-600">Home</a></li>
                        <li>
                            <div class="flex items-center">/<a href="#" class="ms-1 text-md font-medium text-gray-700 hover:text-blue-600 md:ms-2">Product</a></div>
                        </li>
                        <li aria-current="page">
                            <div class="flex items-center">/<span class="ms-1 text-md font-medium text-gray-500 md:ms-2">Product Details</span></div>
                        </li>
                    </ol>
                </nav>
                <div class="w-full min-h-[610px]">
                    <div class="max-w-[1220px] mx-auto py-5">
                        <h3 class="text-[26px] font-semibold bg-slate-100 py-3 px-4 rounded-t-md border border-slate-400">Add Product </h3>
                        <form onSubmit={formHandle} class="border border-t-0 p-3 rounded-b-md border-slate-400">
                            <div class="mb-5">
                                <label for="base-input" class="block mb-5 text-md font-medium text-gray-900">Select Parent Category</label>
                                <select id="default" name="category_id" onChange={id} class="border-2 border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3">
                                    <option value={''}>--Select Parent Category--</option>
                                    {
                                        categories.map((v, i) => {
                                            return (
                                                <option value={v._id}>{v.name}</option>
                                            )
                                        })
                                    }


                                </select>
                            </div>

                            <div class="mb-5">
                                <label for="base-input" class="block mb-5 text-md font-medium text-gray-900">Select Sub Category</label>
                                <select id="default" name="sub_category_id" class="border-2 border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3">
                                    <option value={''}>--Select Sub Category--</option>
                                    {
                                        subcategory.map((v, i) => {
                                            return (
                                                <option value={v._id}>{v.name}</option>
                                            )
                                        })
                                    }

                                </select>
                            </div>
                            <div class="mb-5">
                                <div class="grid sm:grid-cols-2 gap-8">
                                    <div>
                                        <label class="block mb-5 text-md font-medium text-gray-900">Size</label>
                                        <select id="default" name="size_id" class="border-2 border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3">
                                            <option value={''}>--Select Size--</option>
                                            {
                                                size.map((v, i) => {
                                                    return (
                                                        <option value={v._id}>{v.name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div>
                                        <label class="block mb-5 text-md font-medium text-gray-900">Color</label>
                                        <select id="default" name="color_id" class="border-2 border-gray-300 text-gray-900 mb-6 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3">
                                            <option value={''}>--Select Color--</option>
                                            {
                                                color.map((v, i) => {
                                                    return (
                                                        <option value={v._id}>{v.name}</option>
                                                    )
                                                })
                                            }

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-5">
                                <label for="base-input" class="block mb-5 text-md font-medium text-gray-900">Product Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="base-input"
                                    class="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                                    placeholder="Product Name"
                                />
                            </div>
                            <div class="mb-5">
                                <label for="base-input" class="block mb-5 text-md font-medium text-gray-900">Product Description</label>
                                <textarea
                                    name="description"
                                    id="message"
                                    rows="3"
                                    class="resize-none block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Add Product Description....."
                                ></textarea>
                            </div>
                            <div class="mb-5">
                                <label for="base-input" class="block mb-5 text-md font-medium text-gray-900">Short Description</label>
                                <textarea
                                    name="short_description"
                                    id="message"
                                    rows="3"
                                    class="resize-none block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Add Product Short Description.....">

                                </textarea>
                            </div>
                            <div class="mb-5">
                                <label for="base-input" class="block mb-5 text-md font-medium text-gray-900">Product Image</label>
                                <div class="max-w-full">
                                    <label for="file-input" class="sr-only">Choose file</label>
                                    <input
                                        type="file"
                                        name="image"
                                        id="file-input"
                                        class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4"
                                    />
                                </div>
                            </div>
                            <div class="mb-5">
                                <label for="base-input" class="block mb-5 text-md font-medium text-gray-900">Image Animation</label>
                                <div class="max-w-full">
                                    <label for="file-input" class="sr-only">Choose file</label>
                                    <input
                                        type="file"
                                        name="animation_image"
                                        id="file-input"
                                        class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4"
                                    />
                                </div>
                            </div>
                            <div class="mb-5">
                                <label for="base-input" class="block mb-5 text-md font-medium text-gray-900">Product Gallery</label>
                                <div class="max-w-full">
                                    <label for="file-input" class="sr-only">Choose file</label>
                                    <input
                                        type="file"
                                        name="pdGalleryImg-input"
                                        id="file-input"
                                        class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4"
                                        multiple
                                    />
                                </div>
                            </div>
                            <div class="mb-5">
                                <div class="grid sm:grid-cols-2 gap-8">
                                    <div>
                                        <label class="block mb-5 text-md font-medium text-gray-900">Price</label>
                                        <input
                                            type="text"
                                            name="sale_price"
                                            id="base-input"
                                            class="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                                            placeholder="Product Price"
                                        />
                                    </div>
                                    <div>
                                        <label class="block mb-5 text-md font-medium text-gray-900">MRP</label>
                                        <input
                                            type="text"
                                            name="actual_price"
                                            id="base-input"
                                            class="text-[19px] border-2 shadow-sm border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3"
                                            placeholder="Product MRP"
                                        />
                                    </div>
                                </div>
                            </div>


                            <button
                                type="submit"
                                class="focus:outline-none my-10 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}
