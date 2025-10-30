"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";

/**
 * EasyPrintingSetup section (Next.js + Tailwind, JavaScript version)
 *
 * Usage:
 * <EasyPrintingSetup
 *   imageSrc="/printer.jpg"
 *   title="Easy Printing Setup"
 *   description="Install printer in few easy steps. Just click the button to get started with setting up the printer."
 *   ctaText="PRINTER SETUP"
 *   ctaHref="#"
 * />
 */
export default function SmartPrintingSetup({
  imageSrc,
  title = "Smart Printing Setup",
  description =
    "Download the printer setup to start installing your product. First unpack it, Install ink and paper. Then start setting it up. Click below to get started",
  ctaText = "Download Driver",
  ctaHref,
  onCtaClick,
  className = "",
  ...rest
}) {
  const handleClick = useCallback((e) => {
    if (typeof onCtaClick === "function") onCtaClick(e);
  }, [onCtaClick]);

  return (
    <section
      aria-labelledby="eps-title"
      className={`relative isolate w-full overflow-hidden bg-white py-10 sm:py-16 ${className}`}
      {...rest}
    >
      {/* Decorations to mimic the small solid + ring dots */}
      <span className="pointer-events-none absolute right-8 top-6 hidden h-2 w-2 rounded-full bg-blue-400 md:block" />
      <span className="pointer-events-none absolute right-16 top-24 hidden h-7 w-7 rounded-full ring-2 ring-blue-200 md:block" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        

        <div className="mt-8 grid items-center gap-10 md:mt-12 md:grid-cols-2">
        
      

          {/* Copy + CTA */}
          <div className="mx-auto w-full max-w-xl text-center md:text-left">
            <h2
          id="eps-title"
          className="text-center  text-3xl font-bold tracking-tight text-gray-900 mb-[40px] sm:text-4xl lg:text-5xl"
        >
          {title}
        </h2>
            <p className="text-center  leading-7 text-gray-700">
              {description}
            </p>

            <div className="mt-8 text-center ">
              {ctaHref ? (
                <Link
                  href={ctaHref}
                  className="inline-flex buttonHoverStyle items-center justify-center rounded-full px-8 py-4 text-3xl font-semibold text-white shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                  style={{ background: "#5fa0ff" }}
                >
                  {ctaText}
                </Link>
              ) : (
                <button
                  onClick={handleClick}
                  className="inline-flex items-center justify-center rounded-full bg-blue-500 px-8 py-4 text-3xl font-semibold text-white shadow-sm transition hover:bg-blue-600 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"
                >
                  {ctaText}
                </button>
              )}
            </div>
          </div>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 md:aspect-[4/3]">
            <Image
              src={imageSrc}
              alt="Printer on a desk with a printed photo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
