import { Mail } from "lucide-react";

import {
  Item,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

const EMAIL = "kajsa.palmen@gmail.com";

export function ContactEmail() {
  return (
    <Item variant="outline" asChild>
      <a href={`mailto:${EMAIL}`}>
        <ItemMedia variant="icon">
          <Mail aria-hidden />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="normal-case">{EMAIL}</ItemTitle>
        </ItemContent>
      </a>
    </Item>
  );
}
