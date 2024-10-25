import React from 'react'
import { getDatabase, ref, set } from "firebase/database";
import app from '../config/firebase';
import EnquiryForm from './EnquiryForm';
import EnquiryData from './EnquiryData';

export default function Home() {

  return (
    <>
      <EnquiryForm/>
    </>
  )
}
