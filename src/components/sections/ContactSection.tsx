import { Clock3, Heart, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const contactCards = [
  {
    icon: MapPin,
    label: "Address",
    value: "123 Burger St., Flavor Town, FT 12345",
    href: "https://maps.google.com/?q=123+Burger+St+Flavor+Town",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(555) 123–4567",
    href: "tel:+15551234567",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@burgerhouse.com",
    href: "mailto:hello@burgerhouse.com",
  },
  {
    icon: Clock3,
    label: "Hours",
    value: "Mon – Sun: 10:00 AM – 11:00 PM",
    href: undefined,
  },
];

export function ContactSection() {
  return (
    <section className="contact-section section-shell" id="contact" aria-labelledby="contact-title">
      <div className="section-decor" aria-hidden="true">
        <Heart className="section-decor__icon section-decor__icon--drift-c" style={{ top: "10%", left: "6%" }} size={72} />
        <Mail
          className="section-decor__icon section-decor__icon--drift-a"
          style={{ bottom: "12%", right: "8%" }}
          size={84}
        />
      </div>
      <div className="container contact-section__inner">
        <Reveal className="contact-section__intro">
          <span className="script-accent">Come Say Hi</span>
          <h2 id="contact-title">Get In Touch</h2>
          <p>
            Questions, catering requests, or just craving a burger? Reach out and the Burger House team
            will get right back to you.
          </p>
          <a className="call-button focus-ring" href="tel:+15551234567">
            <span className="call-button__icon">
              <Phone aria-hidden="true" size={19} />
            </span>
            <span className="call-button__text">
              <strong>Call the store</strong>
              <span>(555) 123–4567</span>
            </span>
          </a>
        </Reveal>
        <div className="contact-section__grid">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            const content = (
              <>
                <span className="contact-card__icon">
                  <Icon aria-hidden="true" size={22} />
                </span>
                <span className="contact-card__label">{card.label}</span>
                <span className="contact-card__value">{card.value}</span>
              </>
            );

            return (
              <Reveal className="contact-card" delay={index * 0.06} key={card.label}>
                {card.href ? (
                  <a className="contact-card__link focus-ring" href={card.href}>
                    {content}
                  </a>
                ) : (
                  <div className="contact-card__link">{content}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
