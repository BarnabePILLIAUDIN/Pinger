import Form from '@/components/Form'
import Listpings from '@/components/Listpings'
import Loader from '@/components/Loader'
import Navbar from '@/components/Navbar'
import Page from '@/components/Page'
import { useState } from 'react'


export default function Home() {

  const [submited,setSubmited] = useState(false)

  const formData = [
    {
      name: "ip",
      placeholder: "Ip you want to ping",
      type: "text",
      label: "Ip"
    },
    {
      name: "packetNumber",
      placeholder: "Number of packets you want to send",
      type: "number",
      label: "Number of packets"
    }, {
      name: "name",
      placeholder: "Enter a friendly name to help find this ping later",
      type: "text",
      label:"Friendly name"
    }
  ]

  const wait = (time) => new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ok")
    },time)
  })

  const removePage =  () => {
    const pageContainer = document.getElementById("page-container")
    console.log(pageContainer)
    pageContainer.classList.add("overflow-hidden")
    pageContainer.style.marginTop = "100%"
  }

  const handleSumbmit = async (e) => {
    e.preventDefault()
    removePage()
    await wait(1100)
    setSubmited(true)
    document.querySelector("form").submit()
    
  }


  if (submited) {
    return (
      <>
        <Page title="Pinger">
          <Loader></Loader>
        </Page>
      </>
    )
  }
  return (
    <>
      <Page title="Pinger">
        <div id="page-container" className='duration-1000'>
          <Navbar></Navbar>
          <Form action="/api/runping" method="post" formData={formData} submitInputValue="Let's ping" onClick={async (e)=>{await handleSumbmit(e)}}></Form>
          <Listpings limit={true}></Listpings>
        </div>
      </Page>
    </> 
    )
}
