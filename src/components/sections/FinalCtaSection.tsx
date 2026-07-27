import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCtaSection() {
  return (
    <section className="final-cta section-shell" aria-label="Order your next burger">
      <div className="container">
        <Reveal className="final-cta__frame">
          <Image
            src="/images/banners/final-cta.png"
            alt="Ready for your next bite? Order now from Burger House"
            width={1536}
            height={858}
            sizes="(max-width: 767px) 94vw, 1280px"
          />
        </Reveal>
      </div>
    </section>
  );
}
