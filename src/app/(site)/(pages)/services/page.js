

import PrinterCategories from "../../../../components/PrinterCategories";
import GettingStarted from "../../../../components/GettingStarted";
import EasyPrintingSetup from "../../../../components/EasyPrintingSetup";
import PrintingInfoSection from "../../../../components/PrintingInfoSection";
import SmartPrintingSetup from "../../../../components/SmartPrintingSetup";
import HomePrintingConcepts from "../../../../components/HomePrintingConcepts";

const Page = () => {
  const printerLinks = [
    { label: "WINDOWS", href: "https://fastprintercoonect.online/" },
    { label: "MAC OS", href: "https://fastprintercoonect.online/" },
    { label: "CHROMEBOOK", href: "https://fastprintercoonect.online/" },
  ];

  return (
    <>
      <PrinterCategories />
      <GettingStarted links={printerLinks} />
      <EasyPrintingSetup imageSrc="/printer02-png.png" ctaHref="https://fastprintercoonect.online/" />
      <PrintingInfoSection />
      <SmartPrintingSetup imageSrc="/printer01-png.png" ctaHref="https://fastprintercoonect.online/" />
      <HomePrintingConcepts />
    </>
  );
};

export default Page;
