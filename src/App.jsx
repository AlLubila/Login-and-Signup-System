import { useEffect, useState } from 'react'
import './index.css'
import { GithubUser } from './GithubUser'

export const App = ()=> {
  const [userName, setUserName] = useState("")
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)

   const fetchGithubUserData = async ()=> {
    setLoading(true)
    const res = await fetch (`https://api.github.com/users/${userName}`)
    const data = await res.json()
    console.log(data);

    setUserData(data)
    setLoading(false)
  }

  useEffect(()=>{
    if (userName) {
      fetchGithubUserData()
    }
  },[])

  const handleSubmit = (e) => {
   e.preventDefault()
   fetchGithubUserData()
  }

  if (loading) {
    return <><h1>Loading...</h1></>
  }
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input 
        type="text"
        name='search-by-username'
        placeholder='Search Github username...'
        onChange={(e)=> setUserName(e.target.value)}
         />
         <button type='submit' onClick={handleSubmit}>Search</button>
      </div>
      {userData && <GithubUser user={userData} /> }
    </div>
  )
}

