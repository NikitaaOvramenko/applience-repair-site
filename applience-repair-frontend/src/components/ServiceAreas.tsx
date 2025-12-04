const areas = [
  "Toronto",
  "Vaughan",
  "North York",
  "Richmond Hill",
  "Markham",
  "Etobicoke",
  "Mississauga",
  "Scarborough",
];

export default function ServiceAreas() {
  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold mb-8 text-gray-800">Service Areas</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="bg-white text-gray-600 px-4 py-2 rounded-full shadow-sm border border-gray-200 text-sm font-medium"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
