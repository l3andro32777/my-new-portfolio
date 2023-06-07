import Link from "next/link";
import Image from 'next/image';

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { name, avatar } from 'lib/info';

export default function Home() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl times">
          Hello! <br className="hidden sm:inline" />
          <em className="font-normal">I&apos;m</em> Leandro of House Francisco.
        </h1>
        <Image
          alt={name}
          className="rounded-full w-40 md:w-96"
          src={avatar}
        />
      </div>
      <p>
        I’m a <strong>UI Jedi (aka UI/UX Designer)</strong>, but my skills are not just focused on that.
      </p>
      <p>
        This is my portfolio, where I’ll be sharing my work with you. Enjoy it and may the Force be with you!
      </p>
      <div className="flex gap-6">
        <Link href={siteConfig.links.cv} target="_blank" rel="noreferrer" className={buttonVariants()}>
          Download CV
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href="mailto:leartizt.contacto@gmail.com"
          className={buttonVariants({ variant: "link" })}
        >
          Send e-mail
        </Link>
      </div>
    </section>
  );
}
