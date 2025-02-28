import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

interface NavbarProps {
  // Remove the showJoinBeta prop since the button will always be visible
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('/');
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Scroll to top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabClick = (tab: string): void => {
    setActiveTab(tab);
    setIsOpen(false); // Close mobile menu when a tab is clicked

    if (tab === '/') {
      scrollToTop(); // Scroll to top when "Home" is clicked
    }
  };

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isOpen) {
        mobileMenuRef.current.style.maxHeight = `${mobileMenuRef.current.scrollHeight}px`;
      } else {
        mobileMenuRef.current.style.maxHeight = '0';
      }
    }
  }, [isOpen]);

  return (
    <nav className="bg-[#6B5B95] bg-opacity-50 backdrop-blur-lg shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Text */}
          <Link
            to="/"
            className="flex items-center space-x-3"
            onClick={() => handleTabClick('/')}
          >
            {/* Logo */}
            <img
              src="/images/LOGO.png" // Path to your logo image
              alt="Readaroo Logo"
              className="h-12 w-auto" // Adjust size as needed
            />
            {/* Text */}
            <span className="text-3xl font-extrabold text-[#FFD700] tracking-wide">
              Readaroo
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12 transition-all duration-300 ease-in-out">
            {/* Home Tab */}
            <a
              href="#"
              className={`relative text-[#FFD700] hover:text-[#FFA500] transition-colors ease-in-out duration-200 ${
                activeTab === '/' ? 'text-[#FFA500]' : ''
              }`}
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                handleTabClick('/'); // Scroll to top and update active tab
              }}
            >
              Home
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-[#FFA500] transition-all duration-300 ${
                  activeTab === '/' ? 'w-full' : 'w-0'
                }`}
              ></span>
            </a>

            {/* Features Tab */}
            <a
              href="#features"
              className={`relative text-[#FFD700] hover:text-[#FFA500] transition-colors ease-in-out duration-200 ${
                activeTab === '/features' ? 'text-[#FFA500]' : ''
              }`}
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                scrollToSection('features'); // Scroll to the features section
                handleTabClick('/features');
              }}
            >
              Features
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-[#FFA500] transition-all duration-300 ${
                  activeTab === '/features' ? 'w-full' : 'w-0'
                }`}
              ></span>
            </a>

            {/* Team Tab */}
            <a
              href="#team"
              className={`relative text-[#FFD700] hover:text-[#FFA500] transition-colors ease-in-out duration-200 ${
                activeTab === '/#team' ? 'text-[#FFA500]' : ''
              }`}
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                scrollToSection('team'); // Scroll to the team section
                handleTabClick('/#team');
              }}
            >
              Team
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-[#FFA500] transition-all duration-300 ${
                  activeTab === '/#team' ? 'w-full' : 'w-0'
                }`}
              ></span>
            </a>

            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#FFD700] hover:text-[#FFA500] focus:outline-none"
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className="md:hidden overflow-hidden transition-all duration-500 ease-in-out max-h-0"
        >
          <div className="px-6 pt-6 pb-4 space-y-4">
            <a
              href="#"
              className={`block px-4 py-2 text-xl font-medium rounded-md hover:bg-[#F4E8C1] hover:text-[#6B5B95] transition duration-200 ${
                activeTab === '/' ? 'bg-[#F4E8C1] text-[#6B5B95]' : 'text-[#FFD700]'
              }`}
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                handleTabClick('/'); // Scroll to top and update active tab
              }}
            >
              Home
            </a>
            <a
              href="#features"
              className={`block px-4 py-2 text-xl font-medium rounded-md hover:bg-[#F4E8C1] hover:text-[#6B5B95] transition duration-200 ${
                activeTab === '/features' ? 'bg-[#F4E8C1] text-[#6B5B95]' : 'text-[#FFD700]'
              }`}
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                scrollToSection('features'); // Scroll to the features section
                handleTabClick('/features');
              }}
            >
              Features
            </a>
            <a
              href="#team"
              className={`block px-4 py-2 text-xl font-medium rounded-md hover:bg-[#F4E8C1] hover:text-[#6B5B95] transition duration-200 ${
                activeTab === '/#team' ? 'bg-[#F4E8C1] text-[#6B5B95]' : 'text-[#FFD700]'
              }`}
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                scrollToSection('team'); // Scroll to the team section
                handleTabClick('/#team');
              }}
            >
              Team
            </a>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;