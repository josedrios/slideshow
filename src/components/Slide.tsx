import { slides } from "@/content";
import { useEffect, type Dispatch, type SetStateAction } from "react";

export default function Slide({ slideIndex, setSlideIndex }: { slideIndex: number, setSlideIndex: Dispatch<SetStateAction<number>> }) {


  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" && slideIndex > 0) {
        setSlideIndex(prev => (prev - 1))
      }
      else if (event.key === "ArrowRight" && slideIndex < slides.length) {
        setSlideIndex(prev => (prev + 1))
      }
      else if (event.key === " ") {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else {
          document.documentElement.requestFullscreen();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }

  }, [slideIndex])

  if (slideIndex !== slides.length) {
    const text = slides[slideIndex].text
    const img = slides[slideIndex].img

    return <div className="slide">
      {text && (
        <h1>{text}</h1>
      )}
      {img && (
        <img src={'/images/' + img} />
      )}
    </div>
  } else {
    {/* NOTE: last "FIN" slide when all slides are done */ }
    return (
      <div className="slide">
        {slideIndex === slides.length && (
          <h1>FIN</h1>
        )
        }
      </div>
    )
  }

}
