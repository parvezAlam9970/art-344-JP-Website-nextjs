import Image from "next/image"

export function Hero() {
  return (<>
    <section className="relative top-10 md:top-14 w-full h-[45vh] lg:h-[100vh]   ">
      <Image
        src="/hero-bg.png"
        alt="Background"
        fill
        className="object-cover object-center"
      />
      {/* Content can go here */}
    </section>
    


    </>
  )
}