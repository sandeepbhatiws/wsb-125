import React from 'react'

export default function EnquiryData() {
  return (
  <>
  <div class="overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-300">
              <tr>
                  <th scope="col" class="px-3 py-3">
                      Name
                  </th>
                  <th scope="col" class="px-3 py-3">
                      Email
                  </th>
                  <th scope="col" class="px-3 py-3">
                      Phone
                  </th>
                  <th scope="col" class="px-6 py-3">
                      mesaage
                  </th>
              </tr>
          </thead>
          <tbody>
              <tr class="bg-white border-b">
                  <th scope="row" class="px-3 py-4 font-medium text-gray-900 whitespace-nowrap DataEmail">
                    Rajah Armstrong
                  </th>
                  <td class="px-3 py-4 DataEmail">
                    rajah.armstrong@yahoo.com
                  </td>
                  <td class="px-3 py-4">
                    1-636-140-1210
                  </td>
                  <td class="px-6 py-4 MessageData">
                    Feb 26, 2022
                  </td>
              </tr>
              <tr class="bg-white border-b">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Ira Parker
                  </th>
                  <td class="px-6 py-4">
                    parker58@gmail.com
                  </td>
                  <td class="px-6 py-4">
                    1-636-140-1110
                  </td>
                  <td class="px-6 py-4">
                    Mar 15, 2022
                  </td>
              </tr>
              <tr class="bg-white">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Nathan Bernard
                  </th>
                  <td class="px-6 py-4">
                    nathan.ber47@yourmail.com
                  </td>
                  <td class="px-6 py-4">
                    1-636-841-6210
                  </td>
                  <td class="px-6 py-4">
                    Dec 25, 2022
                  </td>
              </tr>
          </tbody>
      </table>
    </div>
  </>
  )
}
