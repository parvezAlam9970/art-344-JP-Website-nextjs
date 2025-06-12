import React from 'react'
import NewsCard from '../../../components/reusable/news-card'
import Container from '@/components/ui/container'
import BreadCrumb from '@/components/reusable/BreadCrumb'
import Heading from '@/components/reusable/heading'
import Description from '@/components/reusable/description'



const Editorials = () => {
  return (
    <>
    <section>
    <BreadCrumb title="Opinion Editorials" subTitle='Policy' desc='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum and scrambled it to make a type specimen book.'/>
    <Container className=" my-16">
    <div className="flex flex-col items-center gap-6 ">
        <h2 className='font-normal  text-wrap text-2xl lg:text-2xl xl:text-4xl font-pt-serif text-center capitalize max-w-[1034px]'>
              from the beginning- 
                  <span className="text-primary font-bold">
                    hindustan time , times of india,
                  </span> Week till today every piece of content consolidated
            </h2>
        <Description
          className="text-center font-inter"
          descriptionOne="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, it to make a type specimen book."
        />
      </div>
    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 px-0 xl:px-16">
      {Array.from({ length: 6 }).map((_, i) => (
        <NewsCard
          key={i}
          image="/editorial.jpg" // Use public folder or local images
          date="16 May 2025"
          title="Lorem Ipsum is simply"
          description="Lorem ipsum is simply dummy text of the printing and typesetting industry..."
        />
      ))}
    </div>
    </Container>
    </section>
    
    
    </>
  )
}

export default Editorials