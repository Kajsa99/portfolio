import { Phone } from "lucide-react";

import {
  Item,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";

const PHONE_DISPLAY = "+46 739 47 46 47";
const PHONE_HREF = "+46739474647";

export function ContactPhone() {
  return (
    <Item variant="outline" asChild>
      <a href={`tel:${PHONE_HREF}`}>
        <ItemMedia variant="icon">
          <Phone aria-hidden />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="normal-case">{PHONE_DISPLAY}</ItemTitle>
        </ItemContent>
      </a>
    </Item>
  );
}
