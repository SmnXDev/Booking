import { Plane, Hotel, Package, Car, HeadphonesIcon } from "lucide-react";

const services = [
  {
    icon: <Plane className="w-8 h-8 text-[#003580]" />,
    title: "Flugbuchungen",
    description:
      "Wir bieten Ihnen die besten Angebote für Flugreisen weltweit. Egal, ob Sie einen Last-Minute-Flug oder einen luxuriösen Langstreckenflug benötigen, wir sind für Sie da.",
  },
  {
    icon: <Hotel className="w-8 h-8 text-[#003580]" />,
    title: "Hotelreservierungen",
    description:
      "Planen Sie Ihre Reise mit Leichtigkeit und buchen Sie Hotels in jeder Preisklasse. Genießen Sie den Komfort und die Bequemlichkeit, die Sie verdienen.",
  },
  {
    icon: <Package className="w-8 h-8 text-[#003580]" />,
    title: "Reisepakete",
    description:
      "Entdecken Sie unsere maßgeschneiderten Reisepakete für beliebte Reiseziele in Deutschland und darüber hinaus. Perfekt für Familien, Paare und Alleinreisende.",
  },
  {
    icon: <Car className="w-8 h-8 text-[#003580]" />,
    title: "Autovermietung",
    description:
      "Erkunden Sie Ihr Reiseziel in Ihrem eigenen Tempo mit unseren günstigen und zuverlässigen Autovermietungsservices.",
  },
  {
    icon: <HeadphonesIcon className="w-8 h-8 text-[#003580]" />,
    title: "Kundenservice",
    description:
      "Unser erfahrenes Team ist 24/7 für Sie da, um Fragen zu beantworten, Buchungen zu ändern oder bei Stornierungen zu helfen.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#003580] mb-12">
          Unsere Dienstleistungen
        </h1>

        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">{service.icon}</div>
                <div>
                  <h2 className="text-xl font-semibold text-[#003580] mb-2">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
