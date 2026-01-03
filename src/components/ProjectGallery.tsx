import { useEffect, useState } from 'react'

type ProjectGalleryProps = {
  images: string[]
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0)

  const isCarousel = images.length > 1

  useEffect(() => {
    if (!isCarousel) return

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [images.length, isCarousel])

  return (
    <div className="project-gallery">
      <div
        className="gallery-track"
        style={{
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Project visual ${i + 1}`}
            className="gallery-image"
          />
        ))}
      </div>
    </div>
  )
}
