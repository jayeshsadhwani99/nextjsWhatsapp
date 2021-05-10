import Head from 'next/head'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Whatsapp</title>
        <meta name="description" content="This is a whatsapp clone made by Jayesh Sadhwani" />
      </Head>

      <Sidebar />
    </div>
  )
}
