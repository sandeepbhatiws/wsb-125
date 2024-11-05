import React from 'react'

export default function ProductCard() {
  return (
    <div class="grow max-w-[20%] inline-flex px-2 pb-4 min-w-[20%]">
        <a href="#" class="relative bg-white inline-flex items-stretch w-full h-full p-0 box-border">
          
          <div class="absolute top-[4px] right-[4px] w-[28px] h-[28px] text-center z-10 rounded-full">
            <div>
              <span class="absolute top-[4px] right-[4px] w-[24px] h-[24px] text-center z-10 rounded-full bg-gray-200">
                <div class="absolute top-0 left-0 right-0 bottom-0 m-auto">
                  <i class="fa-solid fa-heart"></i>
                </div>
              </span>
            </div>
          </div>
          
          <div class="relative shadow-md rounded-lg min-w-full flex flex-col">
           
            <div class="relative">
              <div class="relative h-0 rounded-t-lg pb-[100%] w-full bg-white text-ellipsis	overflow-hidden"> 
                <div class="bg-no-repeat bg-cover inline-block my-0 mx-auto text-center w-full h-full absolute">
                  <img src="https://fakeimg.pl/400x400/a5edc0/616161?text=product" alt=""/>
                </div>
              </div>
            </div>
            
            <div class="relative p-2 box-border overflow-hidden grow">
              
              <span class="text-gray-800 max-h-[38px] text-sm font-semibold leading-5 overflow-hidden whitespace-normal break-words		">
                iPhone 14 Pro Max
              </span>
              
              <div>
                <div class="block w-full text-sm font-bold text-amber-700">
                  $ 1900
                </div>
              </div>
             
              <div class="flex align-items-center text-xs leading-6 mx-0 my-1 text-gray-600">
                iBox
              </div>
              
              <div class="min-h-[14px] text-xs">
                <div class="align-items-center my-1 mx-0">
                  
                  <span class="align-midle ml-1 text-gray-600">
                    (1400)
                  </span>
                </div>
              </div>
              
            </div>
          </div>
        </a>
      </div>
  )
}