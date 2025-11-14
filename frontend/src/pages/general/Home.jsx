import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../../styles/reels.css'
import axios from 'axios'

// Videos are fetched from backend /api/food


const Home = () => {
  const navigate = useNavigate()
  const videoRefs = useRef({})
  const containerRef = useRef(null)
  const [videos, setVideos] = useState([])

  useEffect(() => {
    if (!containerRef.current) return
    const options = { threshold: 0.6 }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target
        const video = el.querySelector('video')
        if (!video) return
        if (entry.isIntersecting) {
          // Autoplay when in view
          video.play().catch(() => {/* autoplay may be blocked; ignore */ })
        } else {
          // Pause when out of view
          video.pause()
        }
      })
    }, options)

    const slides = containerRef.current.querySelectorAll('.reel')
    slides.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [videos])

  const handleVisit = (id) => {
    // Placeholder route; adjust when store routes exist
    navigate('/food-partner/profile/' + id)
  }

  useEffect(() => {
    axios.get('http://localhost:3000/api/food', { withCredentials: true })
      .then(response => {
        const items = Array.isArray(response.data?.foodItems) ? response.data.foodItems : []
        setVideos(items)
      })
      .catch(() => {
        setVideos([])
      })
  }, [])
  const togglePlay = (_id) => {
    const video = videoRefs.current[_id]
    if (!video) return
    if (video.paused) video.play().catch(() => { })
    else video.pause()
  }

  return (
    <div className="reels-root" ref={containerRef}>
      {videos.map((item) => (
        <section className="reel" key={item._id}>
          <div className="reel-stage">
            <button className="reel-hitbox" onClick={() => togglePlay(item._id)} aria-label="Toggle video play/pause" />
            <video
              ref={(el) => { if (el) videoRefs.current[item._id] = el }}
              className="reel-video"
              src={item.video}
              playsInline
              muted
              loop
              preload="metadata"
              aria-label="Promotional video"
            />
            <div className="reel-overlay">
              <p className="reel-desc" title={item.description}>{item.description}</p>
              <div className="reel-cta-row">
                <button className="reel-btn" onClick={() => handleVisit(item.foodPartner)}>Visit store</button>
                <Link to={"/food-partner/profile/" + item.foodPartner} className="reel-btn_2">View Details</Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

export default Home