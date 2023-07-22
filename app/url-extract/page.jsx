import Link from "next/link"
import React from "react"

export default function page() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Link
          className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
          target="_blank"
          href="#"
          hidecircel="true"
          showhand="true"
        >
          Follow along on Github
        </Link>
        <h1
          className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          cursorincreasesize="true"
        >
          Showcasing various UI's and features i've built.
        </h1>
        <p className="mmax-w-[48rem] w-full leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          I&apos;m a <span className="dutch">dutch</span> front-end developer
          with a graphic design degree. Passionate about building beautifull
          applications. And lately features which help me be more productive.
        </p>
        <div className="space-x-4"></div>
      </div>
    </section>
  )
}
