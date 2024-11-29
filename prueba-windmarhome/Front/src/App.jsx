import { useEffect, useState } from "react"
import { Banner } from "./components/Banner"
import { Forms } from "./components/Forms"

function App() {
  const [data, setData] = useState([])
  const url = {
    url: 'https://gateway.marvel.com:443/v1/public/comics',
    ts: 1,
    PublicKey: 'ae02ddb647daf394f123af64932b6487',
    hash: '088e69f02fad9ef7465686e1299263ca'
  }

  useEffect( ()=>{
    const handleFetch = async () =>{
      const result = await fetch(`${url.url}?ts=${url.ts}&apikey=${url.PublicKey}&hash=${url.hash}`).then(data=>data.json()).then(data=>setData(data.data.results))
      console.log(result.data.results);
    }
    handleFetch()
  })

  return (
    <>
    <Banner data={data}/>
      <Forms/>
    </>
  )
}

export default App
