export default function Footer() {
  return (
    <footer className="bg-[#f6f9fc] pt-20 pb-20 text-[#425466] mt-0 relative z-20">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-4 mb-16">

          <div className="col-span-2 lg:col-span-1 pr-4">
            <a href="#" className="mb-6 block text-[1.6rem] font-bold tracking-[-0.07em] text-[#0a2540] hover:opacity-70 transition-opacity">
              stripe
            </a>
            <div className="flex items-center gap-3 text-[15px] font-medium hover:text-[#0a2540] transition-colors cursor-pointer mb-3">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0a5.5 5.5 0 0 0-5.5 5.5c0 3.85 5 9.5 5.5 10.05.12.13.34.13.46 0 .5-.55 5.5-6.2 5.5-10.05A5.5 5.5 0 0 0 8 0zm0 8.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" fill="currentColor"/>
              </svg>
              India (English)
            </div>
            <div className="flex items-center gap-3 text-[15px] font-medium hover:text-[#0a2540] transition-colors cursor-pointer mb-6">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M14 2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM2 4h12v.5L8 8.5 2 4.5V4zm12 8H2V6l6 4 6-4v6z" fill="currentColor"/>
              </svg>
              Contact
            </div>
            <p className="text-[15px] font-medium">© 2026 Stripe, Inc.</p>
          </div>

          <div>
            <h4 className="font-semibold text-[#0a2540] mb-4 text-[15px]">Products</h4>
            <ul className="space-y-[10px] text-[15px] font-medium">
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Atlas</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Billing</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Capital</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Checkout</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Connect</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Custom Invoicing</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Data Pipeline</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Elements</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Financial Connections</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Identity</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Invoicing</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Issuing</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Link</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Payment Links</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Payments</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Radar</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Revenue Recognition</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Sigma</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Tax</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Terminal</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Treasury</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#0a2540] mb-4 text-[15px]">Solutions</h4>
            <ul className="space-y-[10px] text-[15px] font-medium mb-10">
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">E-commerce</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">SaaS</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Marketplaces</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Embedded Finance</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Platforms</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Creator Economy</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Crypto</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Global Businesses</a></li>
            </ul>

            <h4 className="font-semibold text-[#0a2540] mb-4 text-[15px]">Integrations & Custom</h4>
            <ul className="space-y-[10px] text-[15px] font-medium">
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">App Marketplace</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Partner Directory</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Professional Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#0a2540] mb-4 text-[15px]">Developers</h4>
            <ul className="space-y-[10px] text-[15px] font-medium mb-10">
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Documentation</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">API reference</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">API status</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">API changelog</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Build a Stripe App</a></li>
            </ul>

            <h4 className="font-semibold text-[#0a2540] mb-4 text-[15px]">Resources</h4>
            <ul className="space-y-[10px] text-[15px] font-medium">
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Support Center</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Support plans</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Guides</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Customer stories</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Blog</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Annual conference</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Contact sales</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#0a2540] mb-4 text-[15px]">Company</h4>
            <ul className="space-y-[10px] text-[15px] font-medium">
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">About</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Customers</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Newsroom</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Careers</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Legal</a></li>
              <li><a href="#" className="hover:text-[#0a2540] transition-colors block">Privacy Center</a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
