import { ContactEmail } from "@/components/contact-email";
import { ContactPhone } from "@/components/contact-phone";

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Contact me!</h1>
      <p className="mt-2 text-muted-foreground">
        I&apos;m always looking for new opportunities to work on interesting projects. If you
        have any questions or would like to work together, please feel free to contact me.
      </p>
      <div className="mt-8 space-y-4 max-w-xs">
        <ContactEmail />
        <ContactPhone />
      </div>
    </div>
  );
}
