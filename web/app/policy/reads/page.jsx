import React from 'react'
import BreadCrumb from '@/components/reusable/BreadCrumb'
import Published from "@/components/policy-reads/published"
import IndiaToday from "@/components/policy-reads/india-today"
import Maverick from "@/components/policy-reads/maverick"
import ReadingList from "@/components/policy-reads/reading-list"
import Container from '@/components/ui/container'




const reads = () => {
  return (
    <>
    <BreadCrumb title="Reads" subTitle='Policy' desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum and scrambled it to make a type specimen book.'/>
    <Published/>
    <IndiaToday/>
    <Maverick/>
    <Container>
    <ReadingList/>
    </Container>
    </>
  )
}

export default reads