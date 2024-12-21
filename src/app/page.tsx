import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Navbar */}
      <header className="bg-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold">allinevent</div>
          <ul className="flex space-x-6">
            <li><a href="#events" className="text-gray-700 hover:text-orange-500">Events</a></li>
            <li><a href="#projects" className="text-gray-700 hover:text-orange-500">Projects</a></li>
            <li><a href="#product-owners" className="text-gray-700 hover:text-orange-500">Product Owners</a></li>
            <li><a href="#blog" className="text-gray-700 hover:text-orange-500">Blog</a></li>
            <li><a href="#register" className="text-orange-500 font-semibold">Register</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-50">
        <h1 className="text-5xl font-extrabold mb-4">ALLIN EVENT</h1>
        <h2 className="text-2xl font-medium text-gray-700">MAGICAL MEETING PLACES</h2>
      </section>

      {/* Categories Section */}
      <section className="bg-yellow-100 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">CATEGORIES</h2>
          <div className="flex justify-center flex-wrap gap-4 mb-10">
            <button className="px-6 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100">All</button>
            <button className="px-6 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100">Business</button>
            <button className="px-6 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100">Branding</button>
            <button className="px-6 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100">Press</button>
            <button className="px-6 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100">Culture</button>
            <button className="px-6 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100">More</button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 container mx-auto">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="bg-white border rounded-lg shadow-md overflow-hidden">
              <img
                src="/path/to/image.jpg"
                alt="Event"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500">InnoLand Co-working Center</p>
                <h3 className="text-lg font-semibold mb-2">
                  The Job Hunting Accelerator Bootcamp – Land Your Dream Job
                </h3>
                <p className="text-orange-500 font-bold">$65 / per hour</p>
                <p className="text-sm text-gray-600">#wedding</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-6">
        <div className="text-2xl font-bold">allinevent</div>
        <ul className="flex justify-center space-x-6 mt-4">
          <li><a href="#privacy" className="hover:underline">Privacy & Policy</a></li>
          <li><a href="#terms" className="hover:underline">Terms & Conditions</a></li>
          <li><a href="#contact" className="hover:underline">Contact Us</a></li>
        </ul>
        <p className="text-sm mt-4">ALL IN FUND © 2023</p>
      </footer>
    </div>
  );
};

export default HomePage;
