import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Navbar scroll effect
    const handleScroll = () => setScrolled(window.scrollY > 20);

    // Active section highlighting
    const sections = document.querySelectorAll("section[id]");
    const handleActiveSection = () => {
      const scrollY = window.pageYOffset;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleActiveSection);
    };
  }, []);

  // Smooth scroll handler
  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  const navItems = ["Home", "Dashboard", "Analytics", "Reports", "Contact"];

  return (
    <nav
      className={`fixed top-0 w-full z-[1000] border-b border-white/10 transition-all duration-300 backdrop-blur-md ${
        scrolled ? "bg-[#0a0e27]/95 py-3" : "bg-[#0a0e27]/90 py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 no-underline"
          onClick={() => setIsOpen(false)}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-[#00ffcc] to-[#00ccff] rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(0,255,204,0.3)]">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#0a0e27]">
              <path d="M3 13h2v8H3zm4-8h2v13H7zm4-2h2v15h-2zm4 4h2v11h-2zm4-2h2v13h-2z" />
            </svg>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-white to-[#00ffcc] bg-clip-text text-transparent">
            Graph Page
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-10 list-none">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleSmoothScroll(e, item.toLowerCase())}
                className={`relative text-white text-[16px] transition-colors duration-300 hover:text-[#ff8e53] hover:[text-shadow:0_0_10px_rgba(255,107,107,0.5)]
                  ${
                    activeSection === item.toLowerCase()
                      ? "after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-[#00ffcc] after:to-[#00ccff] after:rounded after:shadow-[0_0_15px_rgba(0,255,204,0.6)]"
                      : ""
                  }
                  before:content-[''] before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-[3px] before:bg-gradient-to-r before:from-[#ff6b6b] before:to-[#ff8e53] before:rounded before:transition-all before:duration-300 hover:before:w-full`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Search Icon */}
        <a
          href="https://www.google.com/search"
          target="_blank"
          rel="noopener noreferrer"
          title="Search"
          className="hidden md:block"
        >
          <svg
            className="w-6 h-6 cursor-pointer transition-transform duration-300 hover:scale-110"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </a>

        {/* Hamburger */}
        <div
          className="md:hidden flex flex-col gap-[6px] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="block w-6 h-[2px] bg-white"></span>
          <span className="block w-6 h-[2px] bg-white"></span>
          <span className="block w-6 h-[2px] bg-white"></span>
        </div>
      </div>

      {/* Mobile Links */}
      <ul
        className={`md:hidden flex flex-col items-center gap-6 bg-[#0a0e27]/95 backdrop-blur-md border-t border-white/10 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 py-6" : "max-h-0"
        }`}
      >
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              onClick={(e) => handleSmoothScroll(e, item.toLowerCase())}
              className={`text-white text-lg hover:text-[#ff8e53] transition-colors duration-300 ${
                activeSection === item.toLowerCase() ? "font-bold" : ""
              }`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
