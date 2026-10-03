const footerLinks = {
  shop: ['Charging & Power', 'Audio', 'Cases & Protection', 'Cables', 'Deals'],
  support: [
    'Track my order',
    'Returns & warranty',
    'Shipping info',
    'Contact us',
  ],
  company: ['About Xeronics', 'Sustainability', 'Careers', 'Press'],
}

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#15181c] px-6 pt-12 sm:px-8 lg:px-10 lg:pt-16">
      <div className="mx-auto max-w-7xl">
        {/* Main footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-(--accent) shadow-[0_0_12px_var(--accent)]" />

              <span className="text-xl font-bold tracking-tight text-zinc-100">
                XERONICS
              </span>
            </div>

            <p className="mt-6 max-w-sm text-base leading-relaxed text-zinc-400">
              Electronics accessories built for people who don't want to think
              twice about their gear.
            </p>
          </div>

          {/* Shop */}
          <FooterColumn title="SHOP" links={footerLinks.shop} />

          {/* Support */}
          <FooterColumn title="SUPPORT" links={footerLinks.support} />

          {/* Company */}
          <FooterColumn title="COMPANY" links={footerLinks.company} />
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-zinc-800 py-6 text-sm sm:flex-row sm:items-center sm:justify-between lg:mt-20">
          <p className="font-mono text-zinc-600">© 2026 Xeronics Inc.</p>

          <p className="font-mono tracking-wide text-zinc-600">
            VISA · MASTERCARD · AMEX · PAYPAL · APPLE PAY
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }: any) {
  return (
    <div>
      <h3 className="text-sm font-medium tracking-wide text-zinc-500">
        {title}
      </h3>

      <ul className="mt-5 space-y-3">
        {links.map((link: any) => (
          <li key={link}>
            <a
              href="#"
              className="text-base text-zinc-400 transition-colors hover:text-zinc-100"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
