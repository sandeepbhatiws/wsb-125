import axios, { toFormData } from 'axios'
import React, { useEffect, useState } from 'react'
import { Pagination } from "flowbite-react";
import { Link } from 'react-router-dom'

export default function ViewSubCategory() {
  let [subcategory, setsubcategory] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page) => setCurrentPage(page);
  let [imageurl, setimageurl] = useState('')
  let [render, setrender] = useState(true)
  let [checkedvalue, setcheckedvalue] = useState([])
  useEffect(() => {
    axios.post('http://localhost:5555/api/admin/sub-categories', {
      page: currentPage,
      limit: 10
    })
      .then((response) => {
        setimageurl(response.data.base_url)
        setrender(!render)
        setsubcategory(response.data.data)
      })
      .catch((error) => {
        alert('something went wrong')
      })
  }, [render])

  let singlecheck = (event) => {
    if (event.target.checked == true) {
      checkedvalue.push(event.target.id)
      setcheckedvalue(checkedvalue)
      setrender(!render)
    } else {
      if (checkedvalue.includes(event.target.id)) {
        let data = checkedvalue.filter((v, i) => {
          if (v != event.target.id) {
            return v;

          }
        })
        setcheckedvalue(data)
      }
    }
    console.log(checkedvalue)
  }
  let SelectAll = (event) => {
    if (event.target.checked == true) {
      let data = [];
      subcategory.forEach((v) => {
        data.push(v._id)
      })
      setcheckedvalue(data)
      // console.log(data)
    } else {
      setcheckedvalue([])
    }
    console.log(checkedvalue)
  }
  let deleteall = () => {
    if (checkedvalue.length > 0) {
      if (confirm('are u sure to delete items')) {
        axios.post('http://localhost:5555/api/admin/sub-categories/delete', toFormData({
          id: checkedvalue,
        }))
          .then((response) => {
            if (response.data.status == true) {
              setcheckedvalue([])
              setrender(!render)
            } else {
              alert('something went wrong')
            }
          }).catch((error) => {

          })
      }
    }


  }
  let changeStatus = () => {
    axios.post('http://localhost:5555/api/admin/sub-categories/change-status', toFormData({
      id: checkedvalue,
    }))
      .then((response) => {
        if (response.data.status == true) {
          setcheckedvalue([])
          setrender(!render)
        } else {
          alert('something went wrong')
        }
      }).catch((error) => {

      })
  }

  return (
    <>

      <section class="w-full">
        <nav class="flex border-b-2" aria-label="Breadcrumb">
          <ol class="p-3 px-6 inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li class="inline-flex items-center">
              <a href="#" class="inline-flex items-center text-md font-medium text-gray-700 hover:text-blue-600">Home</a>
            </li>
            <li>
              <div class="flex items-center">/
                <a href="#" class="ms-1 text-md font-medium text-gray-700 hover:text-blue-600 md:ms-2">Sub Category</a>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">/
                <span class="ms-1 text-md font-medium text-gray-500 md:ms-2">View Sub Category</span>
              </div>
            </li>
          </ol>
        </nav>

        <div class="w-full min-h-[610px]">
          <div class="max-w-[1220px] mx-auto py-5">
            <div className=' bg-slate-100 flex justify-between py-3 px-4  rounded-t-md border border-slate-400'>
              <div class="text-[26px] font-semibold ">View Sub Category</div>
              <div className='flex gap-3'>
                <button

                  onClick={deleteall}
                  class="focus:outline-none  text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  Delete All
                </button>
                <button
                  onClick={changeStatus}
                  class="focus:outline-none  text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  Select All
                </button>
              </div>
            </div>
            <div class="border border-t-0 rounded-b-md border-slate-400">
              <div class="relative overflow-x-auto">
                <table class="w-full text-left rtl:text-right text-gray-500">
                  <thead class="text-sm text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" class="px-6 w-[150px] py-3">
                        {
                          (subcategory.length > 0)
                            ?
                            <input name="deleteCheck" onClick={SelectAll} id="purple-checkbox"
                              type="checkbox"
                              checked={
                                (subcategory.length == checkedvalue.length) ? true : false}
                              class="mr-2 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500" value="" />
                            :
                            <input name="deleteCheck" id="purple-checkbox"
                              type="checkbox"
                              class="mr-2 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500" value="" />
                        }

                        Select All</th>
                      <th scope="col" class="px-6 w-[90px] py-3">S. No.</th>
                      <th scope="col" class="px-6 py-3">Parent Category Name</th>
                      <th scope="col" class="px-6 py-3">name</th>
                      <th scope="col" class="px-6 py-3">Image</th>
                      <th scope="col" class="px-6 w-[100px] py-3">Featured Category</th>
                      <th scope="col" class="px-6 w-[100px] py-3">Order</th>
                      <th scope="col" class="px-6 w-[100px] py-3">Status</th>
                      <th scope="col" class="px-6 w-[100px] py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>{

                    (subcategory.length != 0)
                      ?
                      subcategory.map((v, i) => {
                        return (
                          <tr class="bg-white border-b">
                            <th scope="row" class="px-6 py-4 text-[18px] font-semibold text-gray-900 whitespace-nowrap">
                              <input name="deleteCheck" onClick={() => singlecheck(event)} id={v._id} type="checkbox" class="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500" value=""
                                checked={(checkedvalue.includes(v._id)) ? true : ''} />
                            </th>
                            <td class="px-6 py-4">{i + 1}</td>
                            <td class="px-6 py-4">{v.root_id.name}</td>
                            <td class="px-6 py-4">
                              {
                                v.name
                              }
                            </td>
                            <td class="px-6 py-4">
                              <img class="w-16 h-16 rounded-md object-cover" src={imageurl + v.image} alt="" />
                            </td>
                            <td class="px-6 py-4">
                              {
                                v.featured_categories
                              }
                            </td>
                            <td class="px-6 py-4">{v.order}</td>
                            <td class="px-6 py-4">{(v.status == true) ? 'Active' : 'Inactive'}</td>
                            <td class="px-6 py-4 flex gap-3 mt-6">
                              <svg fill="red" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M170.5 51.6L151.5 80l145 0-19-28.4c-1.5-2.2-4-3.6-6.7-3.6l-93.7 0c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80 368 80l48 0 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-8 0 0 304c0 44.2-35.8 80-80 80l-224 0c-44.2 0-80-35.8-80-80l0-304-8 0c-13.3 0-24-10.7-24-24S10.7 80 24 80l8 0 48 0 13.8 0 36.7-55.1C140.9 9.4 158.4 0 177.1 0l93.7 0c18.7 0 36.2 9.4 46.6 24.9zM80 128l0 304c0 17.7 14.3 32 32 32l224 0c17.7 0 32-14.3 32-32l0-304L80 128zm80 64l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0l0 208c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-208c0-8.8 7.2-16 16-16s16 7.2 16 16z"></path>
                              </svg> |
                              <Link to={`/sub-category/update/${v._id}`}>
                                <svg fill="gold" class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                  <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"></path>
                                </svg>
                              </Link>
                            </td>

                          </tr>
                        )
                      })
                      :
                      <tr>
                        <td class="px-6 text-center py-4" colSpan={7}>No record found</td>
                      </tr>
                  }


                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="flex overflow-x-auto sm:justify-center">
            <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} showIcons />
          </div>
        </div>
      </section>

    </>
  )
}
