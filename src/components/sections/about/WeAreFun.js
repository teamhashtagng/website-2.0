import React from 'react'
import WeFun from '../../../assets/images/section/AboutPage/we-are-fun.jpg'

const WeAreFun = () => {
  return (
    <div style={{marginTop: '-60px'}}>
        <div style={{backgroundImage: `url(${WeFun})`, backgroundSize: 'cover', height: '1000px'}} className='we-fun-bg' >
            <h1 className='we-are-fun'>We Are <br/>Fun</h1>
        </div>
    </div>
  )
}

export default WeAreFun