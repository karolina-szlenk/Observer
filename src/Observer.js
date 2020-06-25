import React, { useState, useEffect, useRef } from 'react'
import './Observer.css'

const Observer = ({ children }) => {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry)
        setVisible(entry.isIntersecting)
      },
      {
        root: null,
        threshold: 0.3,
        rootMargin: '0px',
      }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
  }, [ref])

  return (
    <div ref={ref} className={visible ? 'show' : 'hide'}>
      {children}
    </div>
  )
}

export default Observer
