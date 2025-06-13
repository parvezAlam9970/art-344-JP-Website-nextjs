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
    <div style={{ position: "relative", overflow: "hidden" }}>
  <div
    style={{
      position: "absolute",
      inset: 0,
      backgroundImage: "url('/parliament-bg.png')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      // opacity: 0.1,
      // transform: "rotate(0deg)",
      zIndex: 0,
      pointerEvents: "none",
      width: "100%"
    }}
  />
  <div style={{ position: "relative", zIndex: 1 }}>
    <Activities />
    <Speeches />
  </div>
</div>
    <Container>
    <Bills/>
    <Videos/>
    <Questions/>
    </Container>
    </>
  )
}

export default Parliament