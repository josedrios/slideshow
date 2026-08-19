import { slides } from "@/content";
import { useEffect, type Dispatch, type SetStateAction } from "react";

export default function Slide({ slideIndex, setSlideIndex }: { slideIndex: number, setSlideIndex: Dispatch<SetStateAction<number>> }) {

  // NOTE: slideIndex at -1 is the introduction slide
  // NOTE: slideIndex after -1 and before slides.length is a slide 
  // NOTE: slideIndex at slides.length is the fin slide
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" && slideIndex > -1) {
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
    console.log(slideIndex)

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }

  }, [slideIndex])

  // NOTE: introduction slide
  if (slideIndex === -1) {
    return <div className="slide">
      <h1>INTRODUCTION</h1>
    </div>
  }
  // NOTE: actual slides
  else if (slideIndex !== slides.length) {
    const text = slides[slideIndex].text
    const img = slides[slideIndex].img

    return <div className="slide">
      {text && (
        <h1>{text.toUpperCase()}</h1>
      )}
      {img && (
        <img src={'/images/' + img} />
      )}
    </div>
  }
  // NOTE: fin slide
  else if (slideIndex === slides.length) {
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
