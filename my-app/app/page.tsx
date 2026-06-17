import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Kajsa Palmén</h1>
      <p className="mt-2 text-muted-foreground">
        Hi and welcome to my portfolio! I&apos;m a Fullstack-developer and UX-designer from Gothenburg who has a passion for
        problem solving and sharing my ideas with anyone that&apos;s listening! Have a look around and
        feel free to contact me!
      </p>

      <div className="mt-8 mb-8 flex flex-col gap-6 text-sm leading-relaxed text-muted-foreground sm:flex-row sm:items-start sm:gap-10">
        <figure className="relative aspect-3/4 w-full shrink-0 overflow-hidden sm:w-72 md:w-80 lg:w-96">
          <Image
            src="/images/IMG_0272.jpeg"
            alt="Sandy beach with dunes and grass under a clear blue sky."
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 384px"
          />
        </figure>

        <div className="min-w-0 flex-1 space-y-4">
          <h2 className="text-lg font-semibold tracking-tight">About Me</h2>
          <p>
            I&apos;ve never been good at picking just one thing. I grew up with a paintbrush in hand,
            learned to paint, knit, and sew alongside my family, and I&apos;m still chasing that same
            feeling: doing something just because it&apos;s fun, not because it has to be perfect.
          </p>
          <p>
            That curiosity is exactly why I design. Good design opens doors: it makes things more
            usable, more accessible, more equal for the people who rely on it. I want work that keeps
            challenging me, because growth only happens when I&apos;m slightly out of my depth.
          </p>
          <p>
            Outside of screens, you&apos;ll find me in the woods, by the sea, or out sailing with
            friends, a former climber of seven years who still can&apos;t sit still. Ironically, that
            restlessness is also why I ended up fascinated by interface design: I spend an embarrassing
            number of hours staring at displays every day, so I&apos;ve seen firsthand just how much
            that experience can shape or wreck someone&apos;s day.
          </p>
        </div>
      </div>

      <figure className="relative mt-8 min-h-80 w-full overflow-hidden sm:min-h-96">
        <Image
          src="/images/IMG_1268.jpeg"
          alt="Sheep gathered in a sunny green field under a clear blue sky."
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
        <div
          className="absolute inset-0 bg-linear-to-b from-black/70 via-black/30 to-transparent"
          aria-hidden
        />
        <figcaption className="absolute inset-x-0 top-0 p-6 sm:p-8">
          <h2 className="text-lg font-semibold tracking-tight text-white">Fun facts</h2>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm leading-relaxed text-white/95">
            <li>Family roots in Estonia, Poland, Sweden, and Denmark</li>
            <li>All animals love me</li>
            <li>Once lived in a former prison, built in 1858</li>
            <li>Unlicensed hairdresser (ask my friends, they trust me anyway)</li>
            <li>My boyfriend&apos;s family lives in Brazil, so we visit as often as we can</li>
          </ul>
        </figcaption>
      </figure>
    </main>
  );
}
