import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='copyRight'>
        Copyright &copy; {new Date().getFullYear()} VentusDev
        </div>
    </footer>
  )
}

export default Footer