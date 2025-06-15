import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Gallery from "./components/pages/Gallery";
import Plans from "./components/pages/Plans";
import Contact from "./components/pages/Contact";
import AdminPanel from "./components/admin/AdminPanel";
import { PageName } from "./types";

function App() {
  const [currentPage, setCurrentPage] = useState<PageName>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onPageChange={setCurrentPage} />;
      case "about":
        return <About />;
      case "gallery":
        return <Gallery />;
      case "plans":
        return <Plans />;
      case "contact":
        return <Contact />;
      case "admin":
        return <AdminPanel />;
      default:
        return <Home onPageChange={setCurrentPage} />;
    }
  };

  // Don't show navigation and footer for admin panel
  if (currentPage === "admin") {
    return <AdminPanel />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>{renderPage()}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">PosterCraft</h3>
              <p className="text-gray-400 mb-4">
                Creating beautiful posters for life's most meaningful moments
                since 2016.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">t</span>
                </div>
                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">in</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => setCurrentPage("gallery")}
                    className="hover:text-white transition-colors"
                  >
                    Birth Announcements
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage("gallery")}
                    className="hover:text-white transition-colors"
                  >
                    Memorial Posters
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage("gallery")}
                    className="hover:text-white transition-colors"
                  >
                    Festival Designs
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage("gallery")}
                    className="hover:text-white transition-colors"
                  >
                    Wedding Invitations
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button
                    onClick={() => setCurrentPage("about")}
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage("plans")}
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage("contact")}
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@postercraft.com"
                    className="hover:text-white transition-colors"
                  >
                    hello@postercraft.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PosterCraft Design Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
