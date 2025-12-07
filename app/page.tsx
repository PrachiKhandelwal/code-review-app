"use client";
import Editor from "@/components/Editor";
import Markdown from "@/components/Markdown";
import { useState } from "react";

export default function Home() {

  const [review, setReview] = useState('# Review');
  const generateReviewHandler = async (code: string) => {
    const res = await fetch('http://localhost:8000/api/v1/reviews', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ code })
    });
    const json = await res.json();
    setReview(json?.review);
  }
  return (
    <div className="min-h-screen flex overflow-hidden">
      <Editor generateReviewHandler={generateReviewHandler} />
      <Markdown review={review} />
    </div>
  );
}
