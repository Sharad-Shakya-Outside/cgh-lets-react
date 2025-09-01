"use client";

import { cghData } from "@/data/logos";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { LogoCard } from "../cards/LogoCard";
import { Loader } from "../loader/Loader";

export const WorkLogos = () => {
  const [filter, setFilter] = useState("curated");
  const [logos, setLogos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const changeFilter = (e) => {
    const filterTab = e.target.closest(".tab");
    setFilter(filterTab.id);
    setIsLoading(true);
  };

  useEffect(() => {
    const getLogos = async () => {
      const logoData = await cghData(filter);
      setLogos(logoData);
      setIsLoading(false);
    };

    getLogos();
  }, [filter]);

  return (
    <>
      <div className="flex justify-between">
        <p className="logos relative">Logos</p>

        <ul className="flex gap-3" onClick={changeFilter}>
          <li
            id="curated"
            className={clsx(
              filter === "curated" ? "text-black" : "text-[#888]",
              "cursor-pointer tab"
            )}
          >
            Curated
          </li>
          <li
            id="alphabetical"
            className={clsx(
              filter === "alphabetical" ? "text-black" : "text-[#888]",
              "cursor-pointer tab"
            )}
          >
            A-Z
          </li>
          <li
            id="newest"
            className={clsx(
              filter === "newest" ? "text-black" : "text-[#888]",
              "cursor-pointer tab"
            )}
          >
            Newest
          </li>
        </ul>
      </div>

      {isLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6">
            {logos.length > 0 ? (
              logos?.map((logo) => (
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
        </>
      )}
    </>
  );
};
