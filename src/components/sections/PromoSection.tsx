import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function PromoSection() {
  return (
    <section className="promo-section section-shell" id="promos" aria-label="Tuesday promotion">
      <div className="container">
        <Reveal className="promo-frame">
          <Image
            src="/images/banners/tuesday-promo.png"
            alt="Limited time 2-for-1 Tuesday promotion: buy any burger and get one free"
            width={1536}
            height={864}
            sizes="(max-width: 767px) 94vw, 1280px"
          />
        </Reveal>
      </div>
    </section>
  );
}
