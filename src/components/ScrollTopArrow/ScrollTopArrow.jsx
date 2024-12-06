import React, { useEffect, useState } from 'react'
import './ScrollTopArrow.scss'

const ScrollTopArrow = () => {
    const handleScrollTop = () => {
		window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })

	}

        const [scroll, setScroll] = useState(400);

        useEffect(() => {
            document.addEventListener('scroll', () => {
                const scrollCheck = window.scrollY < 400;
                if (scrollCheck !== scroll) {
                    setScroll(scrollCheck);
                }
            });
        });
  return (
    <span className={`scrollTopArrow ${scroll ? 'displayNone' : ''}`} title='do góry' onClick={handleScrollTop}></span>
  )
}

export default ScrollTopArrow