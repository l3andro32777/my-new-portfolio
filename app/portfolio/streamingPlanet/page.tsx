import { Metadata } from "next"
import Image from "next/image"
import { Code, ExternalLink, MonitorSmartphone, User } from "lucide-react"

import {
  streamingPlanetAboutUs,
  streamingPlanetCreate,
  streamingPlanetEvent,
  streamingPlanetEvents,
  streamingPlanetFeedback,
  streamingPlanetFinal,
  streamingPlanetHBOMax,
  streamingPlanetHome,
  streamingPlanetLogin,
  streamingPlanetLogo,
  streamingPlanetNOS,
  streamingPlanetPayments,
  streamingPlanetPreview,
  streamingPlanetRent,
  streamingPlanetRents,
  streamingPlanetResume,
} from "@/lib/info"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Streaming Planet",
  description:
    "A platform for the rental of cinema rooms, belonging to a fictitious company that provides Streaming services.",
}

const project = {
  title: "Streaming Planet",
  href: "/portfolio/streamingPlanet",
  description:
    "A platform for the rental of cinema rooms, belonging to a fictitious company that provides Streaming services.",
  date: "2022",
  category: "Bachelor",
  company: "IPS",
  image: streamingPlanetPreview,
  public: "Lovers of Streaming, looking to experience a series in a cinema",
  language: "ASP.NET MVC and Bootstrap",
  platform: "Desktop",
  logo: streamingPlanetLogo,
  typography: "Roboto",
}

export default function StreamingPlanet() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col pb-2 md:flex-row justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl times">
            {project.title}
          </h1>
          <div className="flex items-center py-4 gap-x-4 text-sm">
            <span className="font-bold">{project.date}</span>
            <Badge className="">{project.category}</Badge>
            <Badge variant={"outlineReverse"} className="">
              {project.company}
            </Badge>
          </div>
          <p className="text-muted-foreground">{project.description}</p>
          <div className="my-4 flex flex-col py-4 gap-4 font-semibold rounded-md">
            <div className="flex items-center gap-4">
              <Badge className="p-2">
                <User />
              </Badge>
              {project.public}
            </div>
            <div className="flex items-center gap-4">
              <Badge className="p-2">
                <Code />
              </Badge>
              {project.language}
            </div>
            <div className="flex items-center gap-4">
              <Badge className="p-2">
                <MonitorSmartphone />
              </Badge>
              {project.platform}
            </div>
          </div>
        </div>
        <Image
          src={project.image}
          alt="Preview"
          className="w-[40rem] rounded-md"
        />
      </div>
      <hr />

      <div className="py-4">
        <h2 className="text-2xl font-bold leading-tight tracking-tighter py-2 md:text-4xl times">
          Branding
        </h2>
        <p className="text-muted-foreground">
          Explore the essence of {project.title}&apos;s branding, where
          creativity merges seamlessly with purpose, crafting a distinctive
          identity.
        </p>
        <div className="pb-4">
          <h3 className="text-xl font-bold leading-tight tracking-tighter py-4 md:text-3xl times">
            Logo
          </h3>
          <div className="flex items-center justify-center w-[12rem] h-[12rem] bg-black p-4 rounded-3xl shadow-md">
            <Image
              src={project.logo}
              alt="Streaming Planet logo"
              className="w-[8rem]"
            />
          </div>
          <p className="pt-4">
            The logo blends the icon of a{" "}
            <span className="font-semibold">popcorn bucket</span> with the shape
            of <span className="font-semibold">Saturn&apos;s rings</span>. This
            fusion represents{" "}
            <span className="font-semibold">
              the duality between entertainment and the fascination with the
              cosmos
            </span>
            .
          </p>
        </div>
        <div className="pb-4">
          <h3 className="text-xl font-bold leading-tight tracking-tighter pt-4 pb-2 md:text-3xl times">
            Colors
          </h3>
          <div className="block md:flex">
            <div style={{ display: "flex" }}>
              <div className="w-12 h-12 bg-[#000000]"></div>
              <div className="w-12 h-12 bg-[#DC143C]"></div>
              <div className="w-12 h-12 bg-[#00BFFF]"></div>
              <div className="w-12 h-12 bg-[#707070]"></div>
              <div className="w-12 h-12 bg-[#FFFFFF] border"></div>
            </div>
          </div>
          <p className="pt-4">
            The choice of a color scheme inspired by cinema, specifically{" "}
            <span className="font-semibold">
              the iconic blue and red from 3D glasses
            </span>
            , adds a visually dynamic touch to the design while paying homage to
            cinematic experiences.
          </p>
        </div>
        <div className="pb-4">
          <h3 className="text-xl font-bold leading-tight tracking-tighter py-4 md:text-3xl times">
            Typography
          </h3>
          <p>
            The choice of the{" "}
            <span className="font-semibold">{project.typography}</span> font is
            grounded in its versatility,{" "}
            <span className="font-semibold">
              ensuring a crisp and legible appearance
            </span>
            , across various platforms and screen sizes.
          </p>
        </div>
      </div>
      <hr />
      <div className="py-4">
        <h2 className="text-2xl font-bold leading-tight tracking-tighter py-2 md:text-4xl times">
          Concept
        </h2>
        <p className="text-muted-foreground">
          Delve into the conceptual realm of {project.title}, where innovative
          ideas converge to shape a unique and visionary identity.
        </p>
        <div className="py-4">
          <div className="grid gap-y-2">
            <p>
              The {project.title} project originated from a group collaboration,
              during my Bachelor&apos;s degree, in the Applied Software
              Engineering course.
            </p>
            <p>
              Our challenge was to create a platform for something
              unconventional, yet practical. Inspired by the concept of Cinema,
              we envisioned a unique service &#45; {project.title}.
            </p>
            <p>
              {project.title} is not your typical streaming service. It&apos;s a
              cinematic experience brought to your fingertips. Imagine a
              platform that offers cinema room rentals and streaming services
              combined. With {project.title}, users can rent private cinema
              rooms to watch their favorite shows and films with friends or
              immerse themselves in a cinematic experience for series like
              &quot;Game of Thrones&quot;.
            </p>
            <p>
              Our platform caters to those who want more than just a regular
              streaming subscription. It&apos;s for individuals seeking a grand
              film night, groups craving an immersive TV series marathon, or
              anyone looking to enjoy a cinematic experience in the comfort of
              their own rented cinema room. Please, note that while the cinema
              rooms are described as physical spaces, they are purely fictional
              and part of the imaginative concept.
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="pt-4 pb-8">
        <h2 className="text-2xl font-bold leading-tight tracking-tighter py-2 md:text-4xl times">
          Unleashing UX Magic
        </h2>
        <p className="text-muted-foreground">
          Dive deep into the heart of the project ideation.
        </p>
        <div className="py-4">
          <div className="grid gap-y-2">
            <p>
              Although low-fidelity prototypes were not part of the scope, due
              to the condensed project duration, the concept for {project.title}{" "}
              drew inspiration from two main sources: the{" "}
              <span className="font-semibold">HBO Max</span> website and the{" "}
              <span className="font-semibold">Cinemas NOS</span> website. The
              fusion of these influences helped shape a unique and visionary
              user experience.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-[24rem]">
            <h4 className="text-lg font-semibold">Concept #1: HBO Max</h4>
            <p className="text-muted-foreground pb-2">
              HBO Max&apos;s visual allure.
            </p>
            <Image
              src={streamingPlanetHBOMax}
              alt="HBO Max website"
              className="md:w-full rounded-md shadow-lg"
            />
          </div>
          <div className="md:w-[24rem]">
            <h4 className="text-lg font-semibold">Concept #2: Cinemas NOS</h4>
            <p className="text-muted-foreground pb-2">
              Empowering functionality, akin to Cinemas NOS.
            </p>
            <Image
              src={streamingPlanetNOS}
              alt="Cinemas NOS website"
              className="w-full rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="pt-4 pb-8">
        <h2 className="text-2xl font-bold leading-tight tracking-tighter py-2 md:text-4xl times">
          High-Fidelity prototypes
        </h2>
        <div className="grid gap-y-4">
          <p className="text-muted-foreground">
            Explore detailed and refined prototypes that capture the essence of
            the envisioned user experience.
          </p>
        </div>
        <div className="flex flex-col gap-8 pt-6 mb-2 md:mb-4">
          <div>
            <h4 className="text-lg font-semibold">Introduction and About us</h4>
            <p className="text-muted-foreground pb-2">
              Welcome to {project.title}! Learn about us and our advantages.
            </p>
            <div className="md:column-layout">
              <Image
                src={streamingPlanetHome}
                alt="Home"
                className="rounded-md shadow-lg mb-2"
              />
              <Image
                src={streamingPlanetAboutUs}
                alt="About us"
                className="rounded-md shadow-lg mb-2"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <div>
            <h4 className="text-lg font-semibold">Authentication</h4>
            <p className="text-muted-foreground pb-2">
              Login, registration, and account creation feedback pages.
            </p>
          </div>
          <div className="md:column-layout">
            <Image
              src={streamingPlanetLogin}
              alt="Login page"
              className="rounded-md shadow-lg mb-2"
            />
            <Image
              src={streamingPlanetCreate}
              alt="Registration page"
              className="rounded-md shadow-lg mb-2"
            />
            <Image
              src={streamingPlanetFeedback}
              alt="Account creation feedback page"
              className="rounded-md shadow-lg mb-2"
            />
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <div>
            <h4 className="text-lg font-semibold">Rentals</h4>
            <p className="text-muted-foreground pb-2">
              Explore the cinema room rental experience.
            </p>
          </div>
          <div className="md:column-layout">
            <Image
              src={streamingPlanetRent}
              alt="New rent"
              className="rounded-md shadow-lg mb-2"
            />
            <Image
              src={streamingPlanetRents}
              alt="Rents"
              className="rounded-md shadow-lg mb-2"
            />
          </div>
        </div>
        <div className="flex flex-col mb-2">
          <div>
            <h4 className="text-lg font-semibold">Events</h4>
            <p className="text-muted-foreground pb-2">
              Event organization and viewing pages.
            </p>
          </div>
          <div className="md:column-layout">
            <Image
              src={streamingPlanetEvent}
              alt="Login page"
              className="rounded-md shadow-lg mb-2"
            />
            <Image
              src={streamingPlanetEvents}
              alt="Registration page"
              className="rounded-md shadow-lg mb-2"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div>
            <h4 className="text-lg font-semibold">Payments</h4>
            <p className="text-muted-foreground pb-2">
              Simulated payment experiences for testing.
            </p>
          </div>
          <div className="md:column-layout">
            <Image
              src={streamingPlanetPayments}
              alt="Login page"
              className="rounded-md shadow-lg mb-2"
            />
            <Image
              src={streamingPlanetResume}
              alt="Registration page"
              className="rounded-md shadow-lg mb-2"
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="pt-4 pb-8">
        <h2 className="text-2xl font-bold leading-tight tracking-tighter py-2 md:text-4xl times">
          Final version
        </h2>
        <div className="grid gap-y-4">
          <p className="text-muted-foreground">
            See how results transform, from concept to final version.
          </p>
        </div>
        <div className="flex flex-col gap-8 pt-2 mb-4">
          <div className="md:flex gap-4">
            <a
              href="https://streaming-planet-djlr.azurewebsites.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative"
            >
              <Image
                src={streamingPlanetFinal}
                alt=""
                className="rounded-t-md shadow-lg mb-2 md:mb-0"
              />
              <Button variant="reverse" className="absolute top-2 right-2">
                Test it yourself! <ExternalLink className="w-4" />
              </Button>
              <div className="bg-primary text-primary-foreground text-sm p-2 rounded-b-md">
                streaming-planet-djlr.azurewebsites.net
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
