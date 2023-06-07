import { Metadata } from "next"

import "@/styles/myStyles.css"

export const metadata: Metadata = {
  title: "Videos",
  description: "The videos I have created.",
}

export default function Videos() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl times">
        Videos
      </h1>
      <p>
        Here, you’ll be able to watch the videos I could create to simulate the marketing of the projects I carried out.
      </p>
      <div className="video-container">
        <div className="video-item">
          <div style={{ paddingBottom: "56.25%" }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/YSlvaSeU4q8/"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="video-item">
          <div style={{ paddingBottom: "56.25%" }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/_r0_okUj9qs/"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="video-item">
          <div style={{ paddingBottom: "56.25%" }}>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/H_g6QruwXpU/"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
