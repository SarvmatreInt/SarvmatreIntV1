import React from 'react'
import { Outlet } from 'react-router-dom'
import NewCareersPage from './NewCareersPage'

const NewCareersLayout = () => {
  return (
    <>
        <Outlet />
        {/* <NewCareersPage /> */}
    </>
  )
}

export default NewCareersLayout