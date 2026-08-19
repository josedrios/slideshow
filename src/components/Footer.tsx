import { logNumber, slides } from '@/content.ts';
import { useEffect, useState } from 'react';

export default function Footer({ slideIndex }: { slideIndex: number }) {

  const now = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })

  const [time, setTime] = useState<Date>(new Date);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 750);
    return () => clearInterval(interval);
  }, [])

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // NOTE: index + 2 to fix offset from introduction slide and array indexing
  // NOTE: length + 2 to add INTRODUCTION/FIN slides

  return (
    <div className="footer">
      <p className="footer__slide-count">{slideIndex + 2}/{slides.length + 2}</p>
      <p>
        LOG {logNumber}
      </p>
      <p>|</p>
      <p>
        {now.toUpperCase()}
      </p>
      <p>|</p>
      <p>
        {formattedTime}
      </p>
    </div>
  )
}
