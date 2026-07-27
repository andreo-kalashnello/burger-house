import {
  Clock3,
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import { BrandLogo } from "@/components/ui/BrandLogo";

const quickLinks = [
  ["Home", "#home"],
  ["Menu", "#menu"],
  ["Promos", "#promos"],
  ["About Us", "#about"],
  ["Locations", "#contact"],
  ["Contact", "#contact"],
];

const supportLinks = [
  "FAQ",
  "Delivery Info",
  "Returns & Refunds",
  "Privacy Policy",
  "Terms of Service",
];

export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="site-footer__wave" aria-hidden="true">
        <Image src="/images/decor/footer-wave.svg" alt="" fill sizes="100vw" />
      </div>
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <BrandLogo inverse />
          <p>
            Big flavor. Big burgers. Big mood.
            <br />
            Thanks for being part of the Burger House family!
          </p>
          <div className="social-links" aria-label="Social media">
            <a className="focus-ring" href="https://instagram.com" aria-label="Instagram">
              <Instagram aria-hidden="true" />
            </a>
            <a className="focus-ring" href="https://facebook.com" aria-label="Facebook">
              <Facebook aria-hidden="true" />
            </a>
            <a className="focus-ring" href="https://youtube.com" aria-label="YouTube">
              <Youtube aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="site-footer__column">
          <h2>Quick Links</h2>
          <nav aria-label="Footer navigation">
            {quickLinks.map(([label, href]) => (
              <a className="focus-ring" href={href} key={label}>
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="site-footer__column">
          <h2>Support</h2>
          <nav aria-label="Support links">
            {supportLinks.map((label) => (
              <a className="focus-ring" href="#contact" key={label}>
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="site-footer__column site-footer__contact">
          <h2>Contact Us</h2>
          <address>
            <a className="focus-ring" href="https://maps.google.com/?q=123+Burger+St+Flavor+Town">
              <MapPin aria-hidden="true" />
              <span>
                123 Burger St.
                <br />
                Flavor Town, FT 12345
              </span>
            </a>
            <a className="focus-ring" href="tel:+15551234567">
              <Phone aria-hidden="true" />
              <span>(555) 123–4567</span>
            </a>
            <a className="focus-ring" href="mailto:hello@burgerhouse.com">
              <Mail aria-hidden="true" />
              <span>hello@burgerhouse.com</span>
            </a>
            <div>
              <Clock3 aria-hidden="true" />
              <span>Mon – Sun: 10:00 AM – 11:00 PM</span>
            </div>
          </address>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="container">
          <span>© 2024 Burger House. All rights reserved.</span>
          <span className="made-with">
            Made with <Heart aria-hidden="true" fill="currentColor" /> for burger lovers.
          </span>
        </div>
      </div>
    </footer>
  );
}
