"use client";

import { cghData } from "@/data/logos";
import { Container } from "../container/Container";
import Link from "next/link";
import { LogoCard } from "../cards/LogoCard";
import { useEffect, useState } from "react";
import { Loader } from "../loader/Loader";

export const HomeLogos = () => {
  const [logos, setLogos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getLogos = async () => {
      setIsLoading(true);
      const logoData = await cghData("home");
      setLogos(logoData);
      setIsLoading(false);
    };

    getLogos();
  }, []);

  return (
    <>
      <Container className="pb-[60px]">
        {isLoading ? (
          <>
            <Loader />
          </>
        ) : (
          <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {logos.length > 0 ? (
              logos.map((logo) => (
                <LogoCard
                  key={logo.slug}
                  imageSrc={logo.thumbnail.sizes[0][0]}
                  imageAlt={logo.title}
                  imageCaption={
                    <>
                      <span>{logo.title}</span> - {logo?.subtitle}
                    </>
                  }
                />
              ))
            ) : (
              <h2>No Logos Found</h2>
            )}
          </section>
        )}

        <div className="text-4xl py-[60px] flex justify-center">
          <Link href={"/work"}>View More Logos</Link>
        </div>
      </Container>
    </>
  );
};
