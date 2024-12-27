import { useState } from "react";
import {
  Phone,
  Bed,
  Plane,
  Car,
  Ship,
  Landmark,
  CarTaxiFrontIcon as Taxi,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#003580] text-white">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-tight">
          Booking.com
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+4976151563190"
            className="flex items-center gap-2 hover:text-blue-200 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>+49 76151563190</span>
          </a>
          <button className="bg-white text-[#003580] px-4 py-2 rounded hover:bg-blue-50 transition-colors">
            Registrieren
          </button>
          <button className="bg-transparent border border-white px-4 py-2 rounded hover:bg-white/10 transition-colors">
            Anmelden
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Navigation Links */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4">
          <div className="hidden md:flex items-center gap-6 py-3 text-sm">
            <a
              href="/"
              className="flex items-center gap-2 hover:text-blue-200 transition-colors"
            >
              <Bed className="w-4 h-4" />
              Unterkünfte
            </a>
            <a
              href="/"
              className="flex items-center gap-2 hover:text-blue-200 transition-colors"
            >
              <Plane className="w-4 h-4" />
              Flüge
            </a>
            <a
              href="/"
              className="flex items-center gap-2 hover:text-blue-200 transition-colors"
            >
              <Car className="w-4 h-4" />
              Mietwagen
            </a>
            <a
              href="/"
              className="flex items-center gap-2 hover:text-blue-200 transition-colors"
            >
              <Ship className="w-4 h-4" />
              Kreuzfahrten
            </a>
            <a
              href="/"
              className="flex items-center gap-2 hover:text-blue-200 transition-colors"
            >
              <Landmark className="w-4 h-4" />
              Sehenswürdigkeiten
            </a>
            <a
              href="/"
              className="flex items-center gap-2 hover:text-blue-200 transition-colors"
            >
              <Taxi className="w-4 h-4" />
              Flughafen-Taxis
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/20">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a
              href="tel:+4976151563190"
              className="flex items-center gap-2 hover:text-blue-200 transition-colors"
            >
              <Phone className="w-4 h-4" />
              +49 76151563190
            </a>
            <div className="flex flex-col gap-2">
              <a
                href="/"
                className="flex items-center gap-2 py-2 hover:text-blue-200 transition-colors"
              >
                <Bed className="w-4 h-4" />
                Unterkünfte
              </a>
              <a
                href="/"
                className="flex items-center gap-2 py-2 hover:text-blue-200 transition-colors"
              >
                <Plane className="w-4 h-4" />
                Flüge
              </a>
              <a
                href="/"
                className="flex items-center gap-2 py-2 hover:text-blue-200 transition-colors"
              >
                <Car className="w-4 h-4" />
                Mietwagen
              </a>
              <a
                href="/"
                className="flex items-center gap-2 py-2 hover:text-blue-200 transition-colors"
              >
                <Ship className="w-4 h-4" />
                Kreuzfahrten
              </a>
              <a
                href="/"
                className="flex items-center gap-2 py-2 hover:text-blue-200 transition-colors"
              >
                <Landmark className="w-4 h-4" />
                Sehenswürdigkeiten
              </a>
              <a
                href="/"
                className="flex items-center gap-2 py-2 hover:text-blue-200 transition-colors"
              >
                <Taxi className="w-4 h-4" />
                Flughafen-Taxis
              </a>
            </div>
            <div className="flex flex-col gap-2 pt-4">
              <button className="bg-white text-[#003580] px-4 py-2 rounded hover:bg-blue-50 transition-colors">
                Registrieren
              </button>
              <button className="bg-transparent border border-white px-4 py-2 rounded hover:bg-white/10 transition-colors">
                Anmelden
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
