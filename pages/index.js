import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='overflow-x-hidden'>
      <Head>
        <title>DIS | Daily Work</title>
        <meta name="description" content="8th-Rose" />
        <link rel="icon" href="/ourgroupfavicon.png" />
        <body className='bg-[#d7f2f2]' />
      </Head>

      <section id="home">
      <h1 className="font-bold text-center text-6xl font-['Montserrat']">Welcome To Our Class</h1>
      <h1 className="font-bold text-center text-6xl font-['Montserrat']">8th Rose</h1>
      <img src="/Bookanimation.gif" alt="" id="bookanimation" className='block mx-auto my-[5px]'/>
    </section>
    </div>
  )
}
