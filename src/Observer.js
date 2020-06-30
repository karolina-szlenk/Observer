import React, { useState, useEffect } from 'react'
import './Observer.css'

const useObserver = (options) => {
  const [visible, setVisible] = useState(false)
  const [ref, setRef] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      console.log(entry)
      setVisible(entry.isIntersecting)
    }, options)
    if (ref) {
      observer.observe(ref)
    }

    return () => {
      if (ref) {
        observer.unobserve(ref)
      }
    }
  }, [ref, options])

  return [setRef, visible]
}

const Observer = ({ children }) => {
  const [setRef, visible] = useObserver({ threshold: 0.3 })
  return (
    <div ref={setRef} className={visible ? 'show' : 'hide'}>
      {children}
    </div>
  )
}

export default Observer
