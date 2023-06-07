import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "About me.",
}

export default function About() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl times">
          About Me
        </h1>
        <p>
          My name is <strong>Leandro</strong> and I belong to <strong>House Francisco</strong>. Many know me as <strong>leartizt</strong>, online!
        </p>
        <p>
          I’m a finalist of the degree in <strong>Informatic Engineering</strong>, at <strong>IPS</strong> of which I became a Face, in 2022.
          During my cource, I discovered the area of <strong>UI/UX Design</strong>, which made me very happy, due to my <strong>enormous taste for Art</strong>.
          So that, I can do my Art outside of my solid carreer and also apply my artistic skills on it!
        </p>
        <p>
          Currently, I’m the <strong>UI Jedi of the Order Build Up Labs</strong>, where I’m doing my intership.
        </p>
        <hr/>
        <p>
          I'm passionate about many <strong>creative pursuits</strong>, including drawing, music, photography, videography, acting and so many others!
        </p>
        <p>
        I think I’m able to say that I draw, <strong>since I was born</strong>, so that one day I got inspiration and started do share my artwork, on TikTok, as <strong>leartizt</strong>, my artistic name. 
        </p>
        <p>
          Due to my taste for cinema and streaming, I started to <strong>write critics on Instagram</strong> and I’ll be sharing it here, too!
        </p>
        <p>
          I also like to edit photos and create posts for social media.
        </p>
        <p>
        Fashion is also one of my favorite pursuits, so besides enjoying taking pictures, I love to create cool outfits and, of course, <strong>posing for the cameras</strong>!
        </p>
    </section>
  )
}
