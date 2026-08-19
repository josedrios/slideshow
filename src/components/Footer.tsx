import { logNumber, slides } from '@/content.ts';
import { useEffect, useState } from 'react';

export default function Footer({ slideIndex }: { slideIndex: number }) {

  const thing = new Date().toLocaleDateString("en-US", {
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

  return (
    <div className="footer">
      <p className="footer__log">LOG {logNumber}</p>
      <p className="footer__date">{thing.toUpperCase()}</p>
      <p className="footer__time">{formattedTime}</p>
      <p className="footer__slide-count">{slideIndex + 1}/{slides.length}</p>
    </div>
  )
}
