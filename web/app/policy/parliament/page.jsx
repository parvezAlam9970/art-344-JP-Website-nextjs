'use client'
import React from 'react'
import BreadCrumb from '../../../components/reusable/BreadCrumb'
import Activities from '@/components/policy/parliamentry-activities'
import Speeches from '@/components/policy/updated-speeches'
import Videos from '@/components/policy/parliament-videos'
import Bills from "@/components/policy/member-bills"
import Questions from "@/components/policy/questions-raised"
import Container from '@/components/ui/container'

const Parliament = () => {
  return (
    <>
    <BreadCrumb title="Parliament" subTitle='Policy' desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum and scrambled it to make a type specimen book.'/>
    <Container>
    <Activities/>
    <Speeches/>
    <Bills/>
    <Videos/>
    <Questions/>
    </Container>
    </>
  )
}

export default Parliament