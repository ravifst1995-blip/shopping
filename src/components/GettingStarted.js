'use client';

export default function GettingStarted({ links }) {
  return (
   <div className="relative bg-blue-900 bgop text-white">
      {/* Background Image */}
      <div
      className="absolute inset-0 bg-blue-900  bg-opacity-50 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('./bg1.jpg')", 
        }}
      ></div>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-60">
        <h2 className="text-3xl md:text-6xl font-bold mb-4">
          Getting Started With Printing
        </h2>
        <p className="text-sm md:text-2xl mb-8 max-w-2xl">
          Select the operating system from below options to start the right printer driver installation of your product.
        </p>

        {/* Anchor Buttons (dynamic) */}
        <div className="flex flex-wrap justify-center gap-4">
          {links?.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="bg-white buttonHoverStyle text-black px-10 py-5 rounded-full font-semibold hover:bg-gray-200 transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
