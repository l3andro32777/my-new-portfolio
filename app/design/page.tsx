import Image from "next/image"
import { Metadata } from "next"

import "@/styles/myStyles.css"

import { playerHome, playerReasons, uCareCreate, uCareType, uCareSuccess, uCareForum, uCareLive, uCareLiveOptions, streamingPlanetLogin, streamingPlanetRent, streamingPlanetResume } from "@/lib/design"

export const metadata: Metadata = {
  title: "UI/UX Design",
  description: "My UI/UX Design portfolio.",
}

export default function Design() {
    return (
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl times">
            UI/UX Design
          </h1>
          <p>
            Here, you can find my UI/UX Design portfolio with examples I created, during my degree.
          </p>
          <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl times">
            Player
          </h2>
          <p>
            A social media for gamers.
          </p>
          <section className="portfolio">
          <Image
            alt={'Player - Home'}
            src={playerHome}
          />
          <Image
            alt={'Player - Reasons to choose the website'}
            src={playerReasons}
          />
          </section>
          <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl times">
            uCare
          </h2>
          <p>
            A platform aimed at helping refugees from Ukraine.
          </p>
          <section className="portfolio">
          <Image
            alt={'uCare - Create account'}
            src={uCareCreate}
          />
          <Image
             alt={'uCare - Account type'}
             src={uCareType}
          />
          <Image
            alt={'uCare - Success'}
            src={uCareSuccess}
          />
          <Image
            alt={'uCare - Forum'}
            src={uCareForum}
          />
          <Image
            alt={'uCare - Live'}
            src={uCareLive}
          />
          <Image
            alt={'uCare - Live options'}
            src={uCareLiveOptions}
          />
        </section>
        <h2 className="text-2xl font-bold leading-tight tracking-tighter md:text-3xl times">
            Streaming Planet
          </h2>
          <p>
            A platform for the rental of cinema rooms, belonging to a fictitious company that provides Streaming services
          </p>
          <section className="portfolio">
          <Image
            alt={'Streaming Planet - Login'}
            src={streamingPlanetLogin}
          />
          <Image
            alt={'Streaming Planet - Rent'}
            src={streamingPlanetRent}
          />
          <Image
            alt={'Streaming Planet - Resume'}
            src={streamingPlanetResume}
          />
        </section>
      </section>
    )
  }
  