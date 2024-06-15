import React from 'react'
import HashLoader from "react-spinners/HashLoader";
import './LoadingPage.css';

const LoadingPage = () => {
  return (
    <div className='loadingPage-container'>
      <HashLoader color="#36d7b7" />
    </div>
  )
}

export default LoadingPage