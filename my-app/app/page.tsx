import Image from "next/image";

function HomeImageWithText({
  src,
  alt,
  children,
}: {
  src: string;
  alt: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="relative min-h-72 w-full overflow-hidden sm:min-h-80">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 768px"
      />
      <div
        className="absolute inset-0 bg-linear-to-l from-black/85 via-black/50 to-transparent"
        aria-hidden
      />
      <figcaption className="absolute inset-y-0 right-0 flex w-[58%] items-center p-4 sm:w-1/2 sm:p-6">
        <div className="text-sm leading-relaxed text-white">{children}</div>
      </figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Kajsa Palmén</h1>
      <p className="mt-2 text-muted-foreground">
        Hi and welcome to my portfolio! I&apos;m a UX-designer from Gothenburg who has a passion for
        problem solving and sharing my ideas with anyone that&apos;s listening! Have a look around and
        feel free to contact me!
      </p>

      <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          I&apos;m a person with many interests and many goals in life, which is why I try to do
          everything and then some more! What I&apos;m searching for is working with a variety of
          assignments to test myself and be able to grow as a designer. I search for work where I
          can evolve since I care about seeing myself progress and creating something of value. To
          me design is what creates better possibilities and more equality for all its users.
        </p>
        <HomeImageWithText
          src="/images/home-paintbrushes.png"
          alt="Paintbrushes standing upright in a clear glass jar."
        >
          <p>
            I&apos;ve grown up with a paintbrush in my hand and have always been interested in art
            since it&apos;s an interest I share with my whole family. I&apos;ve always been fond of
            sharing my interest and over the years I&apos;ve learned to paint, knit, sew amongst other things. What we create doesn&apos;t have to be pretty but it does have to be
            a fun process!
          </p>
        </HomeImageWithText>
        <HomeImageWithText
          src="/images/home-hiking.png"
          alt="Hikers walking along a grassy mountain trail with layered peaks in the distance."
        >
          <p>
            I&apos;ve always been an active person and being in the woods or by the sea is like a
            second home to me. I used to be a climber for several years and now I like going on trips
            or sailing with my friends.
          </p>
        </HomeImageWithText>
        <HomeImageWithText
          src="/images/home-laptop.png"
          alt="Black and white close-up of hands using a laptop."
        >
          <p>
            In my spare time I like to paint and create but somehow I end up most of the time just
            looking at my phone or watching TV for way too long. I like to call myself addicted to
            technology considering how much time I spend every day looking at different displays. This
            is maybe why I got so interested in the design of interfaces since I know how much it
            impacts its user.
          </p>
        </HomeImageWithText>
        <HomeImageWithText
          src="/images/home-castle.png"
          alt="Historic stone castle tower with crenellations against a cloudy sky."
        >
          <h2 className="text-lg font-semibold tracking-tight text-white">Fun facts</h2>
          <ul className="mt-2 list-inside list-disc">
            <li>I have family from Estonia, Poland, Sweden and Denmark</li>
            <li>I&apos;m was a climber for seven years</li>
            <li>For one year I lived in what used to be a prison that was built in 1858</li>
            <li>I&apos;m an unlicensed hairdresser</li>
            <li>My boyfriend&apos;s family live in Brazil so we visit them as often as we can</li>
          </ul>
        </HomeImageWithText>
      </div>
    </main>
  );
}
