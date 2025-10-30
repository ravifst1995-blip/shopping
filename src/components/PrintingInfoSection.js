"use client";

export default function PrintingInfoSection({
  text = "Changing your print server for cloud printing services can solve some everyday problems you may experience when it comes to printing, such as enabling mobile printing, having cloud-based authentication and identity management, and reducing the need. It always has current multifunction printers and equipment, with the latest advances in the market, and adapted to the real needs of the company. With these printers, the time spent on printing is maximized and the space occupied and savings are minimized.",
  className = "",
  ...rest
}) {
  return (
    <section
      className={`bg-black bgBlcack py-12 px-6 ${className}`}
      {...rest}
    >
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-base leading-relaxed text-white md:text-lg">
          {text}
        </p>
      </div>
    </section>
  );
}
