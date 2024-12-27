export default function Footer() {
  return (
    <footer className="bg-[#003580] text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Disclaimer Column */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Haftungsausschluss</h3>
          <p className="text-sm leading-relaxed opacity-90">
            Wir sind ein unabhängiges Online-Reisebüro und keiner
            Fluggesellschaft angeschlossen. Unser Ziel ist es, Reisende mit
            Anbietern für die Reservierung und Ausstellung von Flugtickets zu
            verbinden. Die auf unserer Website angezeigten Preise basieren auf
            historischen Daten und können sich ohne vorherige Ankündigung
            ändern. Die Tarife unterliegen Gültigkeitsbedingungen und
            Verkaufsbeschränkungen. Alle Flugpreise unterliegen der
            Sitzplatzverfügbarkeit zum Zeitpunkt der Buchung.
          </p>
        </div>

        {/* Quick Links Column */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Schnelllinks</h3>
          <nav className="flex flex-col space-y-2">
            <a href="/" className="text-sm hover:underline">
              Startseite
            </a>
            <a href="/dienstleistungen" className="text-sm hover:underline">
              Dienstleistungen
            </a>
            <a href="/ueber-uns" className="text-sm hover:underline">
              Über uns
            </a>
            <a href="/reisefuehrer" className="text-sm hover:underline">
              Reiseführer
            </a>
          </nav>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Kontakt</h3>
          <div className="text-sm space-y-2">
            <p>Telefon: +49 76151563190</p>
            <a
              href="mailto:kontakt@beispiel.de"
              className="hover:underline block"
            >
              E-Mail: kontakt@beispiel.de
            </a>
            <address className="not-italic mt-2">
              Musterstraße 123
              <br />
              12345 Berlin
              <br />
              Deutschland
            </address>
            <p className="mt-4 text-xs opacity-75">
              © {new Date().getFullYear()} Ihr Reisebüro. Alle Rechte
              vorbehalten.
            </p>
          </div>
        </div>
      </div>

      {/* Additional German Legal Requirements */}
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-white/20">
        <div className="text-xs opacity-75 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p>USt-IdNr: DE123456789</p>
            <p>Handelsregister: HRB 12345 B</p>
            <p>Amtsgericht Berlin-Charlottenburg</p>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <a href="/impressum" className="hover:underline">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:underline">
              Datenschutz
            </a>
            <a href="/agb" className="hover:underline">
              AGB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
