import { Container } from "../container/Container";
import Link from "next/link";
import { socialLinks } from "@/data/socialLinks";

export const ContactFooter = () => {
  return (
    <section className="bg-white">
      <Container className={"py-[60px]"}>
        <div className="flex flex-col md:flex-row gap-4 md:justify-between">
          <div className="flex flex-col gap-8 w-full md:w-[28%]">
            <h1 className="text-4xl">Contact</h1>

            <div>
              <p className="font-semibold">Chermayeff & Geismar & Haviv</p>
              <p>27 West 24th Street, Suite 900</p>
              <p>New York, NY 10010</p>
              <p>212.532.4595</p>
            </div>

            <div>
              <p>
                <strong>Work Inquiries</strong>
              </p>
              <Link href={"mailto:info@cghnyc.com"}>info@cghnyc.com</Link>
              <p>212.532.4595</p>
            </div>

            <div>
              <p>
                <strong>Press Inquiries</strong>
              </p>
              <p>Christopher Nutter</p>
              <p>917.770.0350</p>
              <Link href={"mailto:press@cghnyc.com"}>press@cghnyc.com</Link>
            </div>

            <div>
              <p>
                <strong>Chermayeff & Geismar & Haviv</strong>
              </p>
              <p>27 West 24th Street, Suite 900</p>
              <p>New York, NY 10010</p>
            </div>

            <div>
              <ul className="flex flex-col gap-3">
                {socialLinks?.map((socialItem) => (
                  <li key={socialItem.id}>
                    <Link href={socialItem.url}>{socialItem.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <figure className="w-full md:w-[70%]">
            <img src="https://hw2l96z9d4lmwrzcpyznvzxnw.js.wpenginepowered.com/img/contact-collage.jpg" alt="Ivan Chermayeff - Il Furioso" className="w-full h-full object-contain" />
          </figure>
        </div>
      </Container>
    </section>
  );
};
