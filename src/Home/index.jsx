export function Home() {
  const currentYear = new Date().getFullYear()
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-rose-600">
                Aesthetic Salon
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-rose-600 transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-rose-600 transition-colors font-medium"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-rose-600 transition-colors font-medium"
              >
                Privacy Policy
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-rose-600">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Beauty
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience luxury aesthetic treatments in our state-of-the-art
            salon. We offer premium beauty services to enhance your natural
            radiance.
          </p>
          <button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 text-lg rounded-md font-medium transition-colors">
            Book Appointment
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Premium Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our range of professional aesthetic treatments designed
              to enhance your natural beauty
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="text-center group">
              <div className="mb-6 overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/image2.png?height=300&width=400"
                  alt="Facial Treatments"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Facial Treatments
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Rejuvenate your skin with our advanced facial treatments. From
                deep cleansing to anti-aging therapies, our expert aestheticians
                use premium products to give you a radiant, youthful glow.
                Experience the ultimate in skincare luxury with personalized
                treatments tailored to your skin type.
              </p>
            </div>

            {/* Service 2 */}
            <div className="text-center group">
              <div className="mb-6 overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/image.png?height=300&width=400"
                  alt="Body Contouring"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Body Contouring
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sculpt and tone your body with our non-invasive contouring
                treatments. Using cutting-edge technology, we help you achieve
                your desired silhouette safely and effectively. Our certified
                professionals provide customized treatment plans to target
                specific areas and deliver remarkable results.
              </p>
            </div>

            {/* Service 3 */}
            <div className="text-center group">
              <div className="mb-6 overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/image3.png?height=300&width=400"
                  alt="Laser Treatments"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Laser Treatments
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Experience the power of advanced laser technology for hair
                removal, skin resurfacing, and pigmentation correction. Our
                state-of-the-art equipment ensures safe, precise, and effective
                treatments with minimal downtime. Achieve smooth, flawless skin
                with our comprehensive laser solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Info & Map */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Visit Our Salon</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <svg
                    className="h-5 w-5 text-rose-400 mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-300">123 Beauty Avenue</p>
                    <p className="text-gray-300">Luxury District, City 12345</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 text-rose-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <p className="text-gray-300">(555) 123-4567</p>
                </div>
                <div className="flex items-center space-x-3">
                  <svg
                    className="h-5 w-5 text-rose-400 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-gray-300">Mon-Sat: 9AM-7PM</p>
                </div>
              </div>

              {/* Google Maps Placeholder */}
              <div className="bg-gray-800 rounded-lg p-4 text-center">
                <svg
                  className="h-12 w-12 text-rose-400 mx-auto mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-gray-400 text-sm">Interactive Google Maps</p>
                <p className="text-gray-500 text-xs">Click to view location</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent resize-vertical"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-2 rounded-md font-medium transition-colors flex items-center"
                >
                  <svg
                    className="h-4 w-4 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400">
                <p>
                  &copy; {currentYear} Aesthetic Salon. All rights reserved.
                </p>
                <p className="text-sm">Last updated: {currentDate}</p>
              </div>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-rose-400 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-rose-400 transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-rose-400 transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
