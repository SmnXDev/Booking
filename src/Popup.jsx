import { X, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export default function Popup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative">
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-[#003580] mb-4 pr-8">
            Hilfe bei Flugreservierungen
          </h2>

          <p className="text-red-500 text-lg mb-4 text-center">
            Suchen Sie nach einer neuen Reservierung, Änderungen oder
            Stornierungen?
          </p>

          <p className="text-center font-semibold mb-6">
            Klicken Sie hier, um unseren kompetenten Agenten anzurufen
          </p>

          {/* Phone Number */}
          <a
            href="tel:+1 (463) 242-2670"
            className="flex items-center justify-center gap-2 text-[#003580] text-xl font-bold mb-6 hover:text-blue-700"
          >
            <Phone className="w-6 h-6" />
            +1 (463) 242-2670
          </a>

          {/* Agent Image */}
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100">
              <img
                src="/call.webp"
                alt="Customer Service Agent"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Special Offers */}
          <div className="text-center mb-6">
            <p className="font-semibold">Spezielle Rabattangebote</p>
            <p className="text-sm text-gray-600">Nur telefonisch erreichbar</p>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => (window.location.href = "tel:+1 (463) 242-2670")}
            className="w-full bg-[#003580] text-white py-3 px-4 rounded font-semibold hover:bg-blue-800 transition-colors"
          >
            RUFEN SIE UNS AN UND SPAREN SIE BIS ZU 60 %!
          </button>
        </div>
      </div>
    </div>
  );
}
