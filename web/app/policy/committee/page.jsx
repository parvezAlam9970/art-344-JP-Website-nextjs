import React from 'react'
import BreadCrumb from '@/components/reusable/BreadCrumb'
import Undertaking from '@/components/committee/public-undertaking'
import Container from "@/components/ui/container"
import IncomeTaxGridTwo from '@/components/committee/income-tax-grid-two'
import MemberCommerceCommittee from "@/components/about/profile/MemberCommerceCommittee";

const Committee = () => {
  return (
    <>
    <BreadCrumb title="Committee" subTitle='Policy' desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum and scrambled it to make a type specimen book.'/>
    <Container>
        <Undertaking/>
    </Container>
    <IncomeTaxGridTwo/>
    <Container>
    <MemberCommerceCommittee/>
    </Container>
    
    </>
  )
}

export default Committee