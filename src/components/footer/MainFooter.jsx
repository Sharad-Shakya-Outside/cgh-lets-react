import { navItems } from "@/data/navItems";
import { Container } from "../container/Container";
import Link from "next/link";
import { socialLinks } from "@/data/socialLinks";

export const MainFooter = () => {
  return (
    <footer className="bg-white">
      <Container>
        <div className="grid md:grid-cols-4 gap-[30px] py-[60px] md:py-[120px] grid-cols-1">
          <nav>
            <ul className="flex flex-col gap-3">
              {navItems?.map((navItem) => (
                <li key={navItem.id}>
                  <Link href={navItem.slug}>{navItem.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <section>
            <p className="font-semibold">Chermayeff & Geismar & Haviv</p>
            <p>27 West 24th Street, Suite 900</p>
            <p>New York, NY 10010</p>
            <p>212.532.4595</p>
          </section>

          <section className="flex flex-col gap-3">
            <div>
              <p>
                <strong>Work Inquiries</strong>
              </p>
              <Link href={"mailto:info@cghnyc.com"}>info@cghnyc.com</Link>
            </div>

            <div>
              <p>
                <strong>Press Inquiries</strong>
              </p>
              <p>Christopher Nutter</p>
              <p>917.770.0350</p>
              <Link href={"mailto:press@cghnyc.com"}>press@cghnyc.com</Link>
            </div>
          </section>

          <section>
            <ul className="flex flex-col gap-3">
              {socialLinks?.map((socialItem) => (
                <li key={socialItem.id}>
                  <Link href={socialItem.url}>{socialItem.label}</Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </Container>
    </footer>
  );
};
