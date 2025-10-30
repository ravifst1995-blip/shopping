"use client";

/**
 * Bringing New Concepts To Your Home Printing (JS, Next.js + Tailwind)
 * Matches the screenshot: blue background, centered white title and two paragraphs with comfortable width.
 */
export default function HomePrintingConcepts({
  title = "Bringing New Concepts To Your Home Printing",
  paragraphs = [
    "We offer managed printing services , which will allow you to improve the productivity of your equipment and reduce printing costs. The managed print services are much more than renting or leasing of printers. The managed print services offered by Print Management Software go beyond pay per use (PPU) or cost per copy.",
    "Our proposal is a value proposition, in which the monitoring service is real, which allows us to carry out printing audits so that your printing invoice is considerably reduced. Normally, companies do not have the costs associated with printing quantified, not knowing what they spend per year on these tasks (the amortization of machines, toner, paper). In addition, managing all this expense internally may not be efficient due to the lack of resources and/or knowledge."
  ],
  className = "",
  ...rest
}) {
  return (
    <section className={`bg-[#0f5f98] py-12 sm:py-16 md:py-20 ${className}`} {...rest}>
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
          {title}
        </h2>

        <div className="mt-8 space-y-8 text-white/95">
          {paragraphs.map((p, idx) => (
            <p key={idx} className="text-base leading-7 md:text-lg md:leading-8">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
