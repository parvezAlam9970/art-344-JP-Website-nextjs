import BreadCrumb from '@/components/reusable/BreadCrumb'
import React from 'react'
import ContactComp from "@/components/conact/ContactComp"

const page = () => {
  return (
    <div>
        <BreadCrumb title="Ask your MP" subTitle="Kendrapara, Odisha" />
        <ContactComp/>
    </div>
  )
}

export default page