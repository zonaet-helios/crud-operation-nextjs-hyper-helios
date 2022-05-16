import React from 'react'
import NavbarFirst from '../components/common/navbarFirst/NavbarFirst'
import Banner from '../components/page/Home/Banner'
import Services from '../components/page/Home/Services'

const home = ({users}) => {
  return (
    <div>
        <NavbarFirst></NavbarFirst>
        <Banner></Banner>
        <Services users={users}></Services>
    </div>
  )
}

export default home;


export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    console.log(users)
  
    return {
      props: {
        users,
      },
    }
}