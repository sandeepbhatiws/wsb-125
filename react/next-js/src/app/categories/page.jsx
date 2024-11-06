import React from 'react'
import Header from '../Components/Header'
import CategorySection from '../Components/CategorySection'

export const metadata = {
  title: 'Category',
  description: 'Category Page',
}

export default function page() {
  return (
    <div>
      <Header/>
      <CategorySection/>
    </div>
  )
}
