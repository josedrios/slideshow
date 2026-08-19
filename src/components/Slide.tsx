import { slides } from "@/content";
import type { Dispatch, SetStateAction } from "react";

export default function Slide({ slideIndex, setSlideIndex }: { slideIndex: number, setSlideIndex: Dispatch<SetStateAction<number>> }) {

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
}
