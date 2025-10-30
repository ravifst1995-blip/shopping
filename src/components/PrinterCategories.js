// components/PrinterCategories.tsx
const categories = [
  "InkJet",
  "LaserJet",
  "OfficeJet",
  "Pixma",
  "Maxify",
  "XP",
  "EcoTank",
  "WorkForce",
];

export default function PrinterCategories() {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-4 text-gray-700">
      {categories.map((category) => (
        <span
          key={category}
          className="cursor-pointer hover:text-blue-600 transition-colors"
        >
          {category}
        </span>
      ))}
    </div>
  );
}
