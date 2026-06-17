import type { StaticImageData } from "next/image";

import { projectImages } from "@/lib/project-images";

export type ProjectImage = {
  src: string | StaticImageData;
  alt: string;
  size?: "sm" | "md" | "lg" | "full";
  orientation?: "wide" | "long" | "square";
  row?: string;
};

export type ProjectContentBlock =
  | {
    type: "text";
    text: string;
  }
  | ({
    type: "image";
  } & ProjectImage);

export type Project = {
  slug: string;
  title: string;
  headerImage?: ProjectImage;
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
  images?: ProjectImage[];
  /** Ordered blocks for project detail pages. */
  content?: ProjectContentBlock[];
  /** Each string is one paragraph on the case page. */
  description: string[];
};

export const projects: Project[] = [
  {
    slug: "bovision",
    title: "Case Bovision",
    headerImage: {
      src: projectImages.bovisionHeader,
      alt: "Modern rooftops against a clear blue sky.",
      size: "full",
      orientation: "wide",
    },
    content: [
      {
        type: "text",
        text: "I've worked at Bovision as a freelance UX-designer and my work has consisted of diffrent areas of design while working with redesigning their platform to expanding their Graphic Manual. The company is a digital property platform and mainly has three types of users; real estate agents, users who are selling their properties and users who are looking for properties. Most of their users (up to 70%) use their website mainly from their phone which has lead the current design to only be designed for mobile use and not much for desktops. ",
      },
      {
        type: "text",
        text: "I worked at Bovision as a freelance UX-designer for about two months and had three main tasks that concluded my project working there. As a freelancer I had full responsibility for how and why I chose my designs to present to my client which was both exciting and a challenge. This entire project was completely up to me and my own ability to create without much to go on. I was instructed to both present something that could be used today that would also be totally crazy and out of the box. Someone could say that's the definition of not knowing what you're looking for but I was determined to find out exactly what that was! My main three tasks were designing mockups, creating two chapters for their Graphic Manual and lastly designing a Press Kit.",
      },
      {
        type: "image",
        src: projectImages.bovisionDesktop,
        alt: "Bovision desktop search with property type filters.",
        size: "full",
        orientation: "wide",
        row: "bovision-button",
      },
      {
        type: "image",
        src: projectImages.bovisionSearch,
        alt: "Bovision desktop search with property type filters.",
        size: "full",
        orientation: "wide",
        row: "bovision-button",
      },
      {
        type: "image",
        src: projectImages.bovisionRedesignDesktop,
        alt: "Bovision redesign desktop listings with filter sidebar.",
        size: "full",
        orientation: "wide",

      },
      {
        type: "image",
        src: projectImages.bovisionListings,
        alt: "Bovision redesign desktop listings with filter sidebar.",
        size: "full",
        orientation: "wide",

      },
      {
        type: "text",
        text: "I designed a couple of different mockups for the search engine for the house advertisements and for the inspiration page that contained articles. I started off doing a simple analysis of the current design by using Nielsen's 10 heuristics to look for potential problems and user errors. From my results I then designed a simple but improved search engine that wouldn't be too difficult to implement.I created my own icons for the different types of houses since this also was a part of their rebranding and was a specific request to redesign. The feedback I got was that it was boring and looked too much like Hemnet, their biggest competitor.",
      },
      {
        type: "image",
        src: projectImages.bovisionInspiration,
        alt: "Bovision inspiration page for vacation homes.",
        size: "full",
        orientation: "wide",
      },
      {
        type: "text",
        text: "I made a second design where I made bigger changes, for example I moved the search filter to the left to make it more visible yet take up less space. I chose bigger icons for the types of houses and changed the colours to a more subtle and warm tone. Since they also offer rentals I chose to change the colour to green when you switched to look at them to make it more obvious for the user. When I presented this I was given the feedback that this was too different and would be hard to implement currently. After discussing the design we decided to at least implement the new house icons which I would say was a win!",
      },
      {
        type: "image",
        src: projectImages.bovisionListingCards,
        alt: "Bovision property listing cards with status badges.",
        size: "full",
        orientation: "wide",
      },
      {
        type: "text",
        text: "The Graphic Manual needed a chapter about their icons, both new and current ones, and a chapter about their design systems. With this task I quickly ran into trouble as I realised there wasn't much information about what icons were needed and what they would be used for and just the entire idea of creating a design system by myself. I explained my concerns to my client and we discussed what icons were needed and how they would be used. Since Bovision was currently under the process of rebranding it was important that the icons served a purpose and looked somewhat more modern and different from the current ones. Some of the icons were part of new functions that were not yet implemented. The design system that I created was only the very basics of what a design system can entail. Since the company was in the beginning of a rebranding it meant that almost everything of their current web design would soon be replaced. This meant that I couldn't put much content into the chapter since it wasn't yet decided. What I managed to gather was that the layout of articles and advertisements would stay the same so that's all I did.",
      },
      {
        type: "image",
        src: projectImages.bovisionAdLayouts,
        alt: "Bovision housing ad layout specifications.",
        size: "full",
        orientation: "wide",
      },
      {
        type: "text",
        text: "My last task during the project was designing a Press Kit that would be available on their website. This task started off strong with me misunderstanding what my client wanted the Press Kit to contain. I had to find the content myself which led to me making the best out of the situation and was then given feedback that it was the wrong content and had to be redone. Because of this misunderstanding, what I ended up creating was a Media Kit and a Press Kit even though I was only supposed to make the Press Kit.",
      },
      {
        type: "image",
        src: projectImages.bovisionPressKit,
        alt: "Bovision press kit with logo and brand guidelines.",
        size: "full",
        orientation: "wide",
        row: "bovision-kits",
      },
      {
        type: "image",
        src: projectImages.bovisionMediaKit,
        alt: "Bovision media kit with statistics and advertising prices.",
        size: "full",
        orientation: "wide",
        row: "bovision-kits",
      },
      {
        type: "text",
        text: "My conclusion of this project was that I learned a lot the hard way. It's hard to know what you want and even harder designing for someone that doesn't know what they want. Most of what I made during this project was as a graphic designer rather than a UX designer. I was very optimistic when starting this project and what I think was to my best advantage is that I ask the questions that are important to me and my process. This doesn't mean they'll always have an answer but I know my efforts will eventually pay off.",
      },
    ],
    description: [
      "I've worked at Bovision as a freelance UX-designer and my work has consisted of diffrent areas of design while working with redesigning their platform to expanding their Graphic Manual. The company is a digital property platform and mainly has three types of users; real estate agents, users who are selling their properties and users who are looking for properties. Most of their users (up to 70%) use their website mainly from their phone which has lead the current design to only be designed for mobile use and not much for desktops. ",
      "I worked at Bovision as a freelance UX-designer for about two months and had three main tasks that concluded my project working there. As a freelancer I had full responsibility for how and why I chose my designs to present to my client which was both exciting and a challenge. This entire project was completely up to me and my own ability to create without much to go on. I was instructed to both present something that could be used today that would also be totally crazy and out of the box. Someone could say that's the definition of not knowing what you're looking for but I was determined to find out exactly what that was! My main three tasks were designing mockups, creating two chapters for their Graphic Manual and lastly designing a Press Kit.",
      "I designed a couple of different mockups for the search engine for the house advertisements and for the inspiration page that contained articles. I started off doing a simple analysis of the current design by using Nielsen's 10 heuristics to look for potential problems and user errors. From my results I then designed a simple but improved search engine that wouldn't be too difficult to implement.I created my own icons for the different types of houses since this also was a part of their rebranding and was a specific request to redesign. The feedback I got was that it was boring and looked too much like Hemnet, their biggest competitor.",
      "I made a second design where I made bigger changes, for example I moved the search filter to the left to make it more visible yet take up less space. I chose bigger icons for the types of houses and changed the colours to a more subtle and warm tone. Since they also offer rentals I chose to change the colour to green when you switched to look at them to make it more obvious for the user. When I presented this I was given the feedback that this was too different and would be hard to implement currently. After discussing the design we decided to at least implement the new house icons which I would say was a win!",
      "The Graphic Manual needed a chapter about their icons, both new and current ones, and a chapter about their design systems. With this task I quickly ran into trouble as I realised there wasn't much information about what icons were needed and what they would be used for and just the entire idea of creating a design system by myself. I explained my concerns to my client and we discussed what icons were needed and how they would be used. Since Bovision was currently under the process of rebranding it was important that the icons served a purpose and looked somewhat more modern and different from the current ones. Some of the icons were part of new functions that were not yet implemented. The design system that I created was only the very basics of what a design system can entail. Since the company was in the beginning of a rebranding it meant that almost everything of their current web design would soon be replaced. This meant that I couldn't put much content into the chapter since it wasn't yet decided. What I managed to gather was that the layout of articles and advertisements would stay the same so that's all I did.",
      "My last task during the project was designing a Press Kit that would be available on their website. This task started off strong with me misunderstanding what my client wanted the Press Kit to contain. I had to find the content myself which led to me making the best out of the situation and was then given feedback that it was the wrong content and had to be redone. Because of this misunderstanding, what I ended up creating was a Media Kit and a Press Kit even though I was only supposed to make the Press Kit.",
      "My conclusion of this project was that I learned a lot the hard way. It's hard to know what you want and even harder designing for someone that doesn't know what they want. Most of what I made during this project was as a graphic designer rather than a UX designer. I was very optimistic when starting this project and what I think was to my best advantage is that I ask the questions that are important to me and my process. This doesn't mean they'll always have an answer but I know my efforts will eventually pay off.",
    ],
  },
  {
    slug: "e-jalakas",
    title: "Case E. Jalakas",
    headerImage: {
      src: projectImages.eJalakasHeader,
      alt: "Artist painting outdoors at an easel on a sunny patio.",
      size: "full",
      orientation: "long",
    },
    content: [
      {
        type: "text",
        text: "This project is a custom website built for an artist, designed to showcase and sell their work while giving them full control to manage content independently. The goal was a site that felt personal and professional, supported direct communication between the artist and potential buyers, and could grow over time as new content types, like blog posts, were added. You can visit the website at www.jalakasart.se",
      },
      {
        type: "text",
        text: "I chose this stack deliberately: Next.js, TypeScript, and ShadCN built on the JavaScript foundation from my education, while Supabase and Vercel let me handle the database, authentication, and deployment within one connected ecosystem.",
      },
      {
        type: "text",
        text: "Rather than jumping straight into code, I started with design, building wireframes in Figma and defining a color and typography system before writing a single line of the actual site. This let me test UI and UX early, when changes are cheap, rather than after development.",
      },
      {
        type: "text",
        text: "I grounded the visual design in core design principles (contrast, balance, repetition, emphasis, and spacing) to guide readability and focus. For the interactive layer, I applied UX principles: simplicity, consistency, clear navigation and feedback, accessibility, and user control (making sure people could always step back or cancel an action).",
      },
      {
        type: "text",
        text: "The project includes an admin dashboard with secure authentication and file upload, letting the artist add and edit content without touching code. I built scalable, reusable components for both the admin menu and content forms, designed so new categories or content types, like a future blog, can be added without restructuring the system. The content structure uses menu subcategories that mirror how the artist organizes their work, balancing flexibility with simplicity. A communication channel between visitors and the artist supports the core business goal of converting interest into sales.",
      },
      {
        type: "text",
        text: "The biggest technical challenge was the admin system itself: combining authentication, file handling, and a content structure flexible enough to scale, while still matching the custom design. I solved this by designing components to be reusable from the start, rather than building one-off solutions for each content type.",
      },
      {
        type: "text",
        text: "The bigger lesson came from process, not code. I invested more time than planned perfecting the design before development began, because I wanted it to feel genuinely personal rather than templated. Some of those design choices turned out to be costly: when I tested the site with real users, the feedback was clear: simplify, move toward a more minimal and standard layout. I took that feedback seriously and revised the design, but only after sinking significant time into details that should have been validated earlier.",
      },
      {
        type: "text",
        text: "That experience reinforced something I now build into every project: test early, test often. Getting design and functionality in front of real users before committing to full development saves time and leads to a result that actually feels natural to the people using it, not just to the person who built it.",
      },
      {
        type: "text",
        text: "Full-stack development with Next.js, TypeScript, and Supabase; UI/UX design grounded in established design and usability principles; building scalable, maintainable component architecture; and iterating based on real user feedback rather than assumptions.",
      },
    ],
    description: [
      "This project is a custom website built for an artist, designed to showcase and sell their work while giving them full control to manage content independently. The goal was a site that felt personal and professional, supported direct communication between the artist and potential buyers, and could grow over time as new content types, like blog posts, were added.",
      "I chose this stack deliberately: Next.js, TypeScript, and ShadCN built on the JavaScript foundation from my education, while Supabase and Vercel let me handle the database, authentication, and deployment within one connected ecosystem.",
      "Rather than jumping straight into code, I started with design, building wireframes in Figma and defining a color and typography system before writing a single line of the actual site. This let me test UI and UX early, when changes are cheap, rather than after development.",
      "I grounded the visual design in core design principles (contrast, balance, repetition, emphasis, and spacing) to guide readability and focus. For the interactive layer, I applied UX principles: simplicity, consistency, clear navigation and feedback, accessibility, and user control (making sure people could always step back or cancel an action).",
      "The project includes an admin dashboard with secure authentication and file upload, letting the artist add and edit content without touching code. I built scalable, reusable components for both the admin menu and content forms, designed so new categories or content types, like a future blog, can be added without restructuring the system. The content structure uses menu subcategories that mirror how the artist organizes their work, balancing flexibility with simplicity. A communication channel between visitors and the artist supports the core business goal of converting interest into sales.",
      "The biggest technical challenge was the admin system itself: combining authentication, file handling, and a content structure flexible enough to scale, while still matching the custom design. I solved this by designing components to be reusable from the start, rather than building one-off solutions for each content type.",
      "The bigger lesson came from process, not code. I invested more time than planned perfecting the design before development began, because I wanted it to feel genuinely personal rather than templated. Some of those design choices turned out to be costly: when I tested the site with real users, the feedback was clear: simplify, move toward a more minimal and standard layout. I took that feedback seriously and revised the design, but only after sinking significant time into details that should have been validated earlier.",
      "That experience reinforced something I now build into every project: test early, test often. Getting design and functionality in front of real users before committing to full development saves time and leads to a result that actually feels natural to the people using it, not just to the person who built it.",
      "Full-stack development with Next.js, TypeScript, and Supabase; UI/UX design grounded in established design and usability principles; building scalable, maintainable component architecture; and iterating based on real user feedback rather than assumptions.",
    ],
  },
  {
    slug: "inlandstag",
    title: "Case Inlandståg",
    headerImage: {
      src: projectImages.inlandstagHeader,
      alt: "A passenger train traveling beside a forest and river.",
      size: "full",
      orientation: "wide",
    },
    content: [
      {
        type: "text",
        text: "During the summer of 2021 I took an internship at Inlandståg that was a project with Öresund Universitet. The project was based around having real design cases within interface and development and while doing the project you would also be taking a summer course connected to design research. I applied for the project and chose between the different cases and got hired by Inlandståg to design online courses for their employees. I worked independently with the project and did a design research process that was also part of the summer course criteria. I worked with the project for two and a half months at 75% while the other 25% was studying for the summer course.",
      },
      {
        type: "image",
        src: projectImages.inlandstagCourseEditor,
        alt: "Makemycourse editor view for Inlandståg training modules.",
        size: "full",
        orientation: "wide",
      },
      {
        type: "text",
        text: "The process for this project started with identifying the main challenge. For this project the main challenge was to understand how different material should be presented to be the most informative. I conducted workshops where we went through existing courses and answered the questions. We then discussed what they're opinions were and how they compared the different formats in perspective on how much they learned. The conclusion was that manual labour was better to show with a video while rules and facts were better with text and pictures. I used this information while designing the layout.",
      },
      {
        type: "image",
        src: projectImages.inlandstagIntroduction,
        alt: "Inlandståg course page showing introductory track safety content.",
        size: "full",
        orientation: "wide",
      },
      {
        type: "text",
        text: "I created the courses using Makemycourse which is a web tool for creating digital courses. This was the tool chosen by the company and they had existing courses created with this tool. The challenge for this project was both understanding how the material should be presented as well as collecting the right material. My assignments were to both search for relevant material from previous lectures and create new material. The courses had to contain material and tests so the management could see if the participants were able to passed the courses. The users were new employees and employees who worked with the train maintenance.",
      },
      {
        type: "image",
        src: projectImages.inlandstagSafetyRules,
        alt: "Inlandståg course page with safety rules and spacing guidelines.",
        size: "full",
        orientation: "wide",
      },
      {
        type: "text",
        text: "The results of the project was courses both with text, pictures as well as videos. I didn't have much control over the visual design since it follows the format chosen by the company, but I had control over the layout of the information and tests. Since this was a project focused around the design research process it was important that my contribution was more than a simple design and more focused around the research I conducted. It was a very interesting project which I learned a lot from since I worked on it independently and was my very first paid project.",
      },
      {
        type: "image",
        src: projectImages.inlandstagTrainLandscape,
        alt: "Freight train moving through a forested mountain landscape.",
        size: "full",
        orientation: "long",
      },
    ],
    description: [
      "During the summer of 2021 I took an internship at Inlandståg that was a project with Öresund Universitet. The project was based around having real design cases within interface and development and while doing the project you would also be taking a summer course connected to design research. I applied for the project and chose between the different cases and got hired by Inlandståg to design online courses for their employees. I worked independently with the project and did a design research process that was also part of the summer course criteria. I worked with the project for two and a half months at 75% while the other 25% was studying for the summer course.",
      "The process for this project started with identifying the main challenge. For this project the main challenge was to understand how different material should be presented to be the most informative. I conducted workshops where we went through existing courses and answered the questions. We then discussed what they're opinions were and how they compared the different formats in perspective on how much they learned. The conclusion was that manual labour was better to show with a video while rules and facts were better with text and pictures. I used this information while designing the layout.",
      "I created the courses using Makemycourse which is a web tool for creating digital courses. This was the tool chosen by the company and they had existing courses created with this tool. The challenge for this project was both understanding how the material should be presented as well as collecting the right material. My assignments were to both search for relevant material from previous lectures and create new material. The courses had to contain material and tests so the management could see if the participants were able to passed the courses. The users were new employees and employees who worked with the train maintenance.",
      "The results of the project was courses both with text, pictures as well as videos. I didn't have much control over the visual design since it follows the format chosen by the company, but I had control over the layout of the information and tests. Since this was a project focused around the design research process it was important that my contribution was more than a simple design and more focused around the research I conducted. It was a very interesting project which I learned a lot from since I worked on it independently and was my very first paid project.",
    ],
  },
  {
    slug: "club-campus",
    title: "Case Club Campus",
    headerImage: {
      src: projectImages.clubCampusHeader,
      alt: "Notebook and coffee on a table by a sunny window.",
      size: "full",
      orientation: "wide",
    },
    imageSrc: projectImages.clubCampus,
    imageAlt: "A notebook and coffee on a wooden table by a window.",
    images: [
      {
        src: projectImages.clubCampus,
        alt: "A notebook and coffee on a wooden table by a window.",
      },
      {
        src: projectImages.clubCampusPicnic,
        alt: "Students socializing outside on the grass.",
      },
      {
        src: projectImages.clubCampusTeam,
        alt: "Two students presenting the Club Campus project.",
      },
      {
        src: projectImages.clubCampusSketch,
        alt: "Early hand-drawn wireframe sketch for Club Campus.",
      },
      {
        src: projectImages.clubCampusLogin,
        alt: "Club Campus mobile login screen mockup.",
      },
      {
        src: projectImages.clubCampusEvents,
        alt: "Club Campus events feed interface mockup.",
      },
      {
        src: projectImages.clubCampusMembers,
        alt: "Club Campus active members screen mockup.",
      },
    ],
    content: [
      {
        type: "text",
        text: "This was my final design-project in my education. Together with my student colleague we contacted Campus Ljungby which is a college in Ljungby. We came to an agreement of what me and my colleague would research about which was how to make the students socialise with each other and be more comfortable at campus. We had a great relationship with our client and we came and visited their campus during the project. Since we were only two students in this project we were very invested in all parts of the project.",
      },
      {
        type: "image",
        src: projectImages.clubCampusPicnic,
        alt: "Students socializing outside on the grass.",
        size: "lg",
        orientation: "wide",
      },
      {
        type: "text",
        text: "For this project we focused on gathering data by using a lot of different methods. We conducted interviews, workshops, focus groups as well as a literature review. The fous for the research was to understand how the students socialise and also to understand what they need in order to build relationships. We conducted a workshop with a speculative critical design scenario where students discussed how they would react if they didn't have any opportunity to get to know any of their student colleagues or even meet them. The result gave us concrete data about what students need in order to even start talking with each other and what could happen if they feel like they have any friends in school. Turns out the importance of friendship in learning environments was much more important than what we originaly thought.",
      },
      {
        type: "image",
        src: projectImages.clubCampusTeam,
        alt: "Two students presenting the Club Campus project.",
        size: "sm",
        orientation: "wide",
      },
      {
        type: "text",
        text: "We started to design a platform for meeting students as a new student. The platform was designed to push new students to start talking to each other by showing up to events and happenings. By creating a space where the students could create and see events it would help the students to get to know students in their class but also other students. Since the school doesn't have the resources to organize events themselves it's easier to let the students create their own. This solution was inspired by how other universities have student associations that organize events but since Ljungby Campus doesn't have one anymore they can instead make this platform.",
      },
      {
        type: "image",
        src: projectImages.clubCampusSketch,
        alt: "Early hand-drawn wireframe sketch for Club Campus.",
        size: "sm",
        orientation: "square",
      },
      {
        type: "text",
        text: "One thing that was purposely left out in the design was being able to send private messages between students. This was left out to further push the students to attend events and befriend each other outside of the platform. It's easier for people to start talking online if they have met in person before.",
      },
      {
        type: "image",
        src: projectImages.clubCampusLogin,
        alt: "Club Campus mobile login screen mockup.",
        size: "sm",
        orientation: "long",
        row: "club-campus-ui",
      },
      {
        type: "image",
        src: projectImages.clubCampusEvents,
        alt: "Club Campus events feed interface mockup.",
        size: "sm",
        orientation: "long",
        row: "club-campus-ui",
      },
      {
        type: "image",
        src: projectImages.clubCampusMembers,
        alt: "Club Campus active members screen mockup.",
        size: "sm",
        orientation: "long",
        row: "club-campus-ui",
      },

      {
        type: "text",
        text: "We did an evaluation and used tasks and finished with a couple of questions. The evaluation showed that the design gave its purpose by creating a place for new students to get in contact with other students. Something that was pointed out as missing was a list of active members. By adding this list the students could get easier start to associate faces and their names which hopefully leads them talking to each other. We iterated the design and corrected other smaller things that had importance such as making the names more visible and a simple tutorial of the different functions on the platform.  This design wasn't about creating a new way of living or interacting but creating a way for people to get to know each other. There's no actual way to design friendships but you can design a tool for them and that's what this design solution was made to do.",
      },
    ],
    description: [
      "This was my final design-project in my education. Together with my student colleague we contacted Campus Ljungby which is a college in Ljungby. We came to an agreement of what me and my colleague would research about which was how to make the students socialise with each other and be more comfortable at campus. We had a great relationship with our client and we came and visited their campus during the project. Since we were only two students in this project we were very invested in all parts of the project.",
      "For this project we focused on gathering data by using a lot of different methods. We conducted interviews, workshops, focus groups as well as a literature review. The fous for the research was to understand how the students socialise and also to understand what they need in order to build relationships. We conducted a workshop with a speculative critical design scenario where students discussed how they would react if they didn't have any opportunity to get to know any of their student colleagues or even meet them. The result gave us concrete data about what students need in order to even start talking with each other and what could happen if they feel like they have any friends in school. Turns out the importance of friendship in learning environments was much more important than what we originaly thought.",
      "We started to design a platform for meeting students as a new student. The platform was designed to push new students to start talking to each other by showing up to events and happenings. By creating a space where the students could create and see events it would help the students to get to know students in their class but also other students. Since the school doesn't have the resources to organize events themselves it's easier to let the students create their own. This solution was inspired by how other universities have student associations that organize events but since Ljungby Campus doesn't have one anymore they can instead make this platform.",
      "One thing that was purposely left out in the design was being able to send private messages between students. This was left out to further push the students to attend events and befriend each other outside of the platform. It's easier for people to start talking online if they have met in person before.",
      "We did an evaluation and used tasks and finished with a couple of questions. The evaluation showed that the design gave its purpose by creating a place for new students to get in contact with other students. Something that was pointed out as missing was a list of active members. By adding this list the students could get easier start to associate faces and their names which hopefully leads them talking to each other. We iterated the design and corrected other smaller things that had importance such as making the names more visible and a simple tutorial of the different functions on the platform.  This design wasn't about creating a new way of living or interacting but creating a way for people to get to know each other. There's no actual way to design friendships but you can design a tool for them and that's what this design solution was made to do.",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function projectHref(slug: string) {
  return `/project/${slug}`;
}
