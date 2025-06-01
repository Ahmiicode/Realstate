import { useState, useEffect } from 'react';
import logo from '../assets/logo-blue-stiky.png';
import { SlArrowDown } from "react-icons/sl";
import { CiCirclePlus } from "react-icons/ci";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigation = {
    items: [
      {
        name: "Home",
        link: "/home",
        subItems: [
          { name: "Home Version One", link: "/" },
          { name: "Home Version Two", link: "/home2" },
          { name: "Home Version Three", link: "/home3" },
          { name: "Home Version Four", link: "/home/section-4" },
          { name: "Home Version Five", link: "/home/section-5" }
        ]
      },
      {
        name: "PAGES",
        link: "/pages",
        subItems: [
          {
            name: "Property Listings",
            link: "/page1",
            subSections: [
              { name: "Style", link: "/listing" },
              { name: "Style2", link: "/listing2" },
              { name: "By Price", link: "/page1/section3" },
              { name: "With Map", link: "/page1/section4" },
              { name: "With Filters", link: "/page1/section5" },
              { name: "Featured", link: "/page1/section6" },
              { name: "Recently Added", link: "/page1/section7" },
              { name: "Favorites", link: "/page1/section8" }
            ]
          },
          {
            name: "Property Single Details",
            link: "/page2",
            subSections: [
              { name: "Overview", link: "/page2/section1" },
              { name: "Gallery", link: "/page2/section2" },
              { name: "Location", link: "/page2/section3" },
              { name: "Agent Info", link: "/page2/section4" },
              { name: "Reviews", link: "/page2/section5" }
            ]
          },
          {
            name: "Agent",
            link: "/page3",
            subSections: [
              { name: "All Agents", link: "/page3/section1" },
              { name: "Top Rated", link: "/page3/section2" },
              { name: "Contact Agent", link: "/page3/section3" }
            ]
          },
          {
            name: "Agency",
            link: "/page4",
            subSections: [
              { name: "Agency List", link: "/page4/section1" },
              { name: "Featured Agencies", link: "/page4/section2" },
              { name: "Join Us", link: "/page4/section3" }
            ]
          },
          { name: "About Us", link: "/page5" },
          { name: "Login", link: "/page6" },
          { name: "Register", link: "/page7" },
          { name: "Contact", link: "/page8" },
          { name: "404 Error", link: "/page9" }
        ]
      },
      {
        name: "BLOGS",
        link: "/blog",
        subItems: [
          { name: "Blog", link: "/blog/post-1" },
          { name: "Blog Single", link: "/blog/post-2" }
        ]
      },
      { name: "CONTACT", link: "/contact" }
    ],
    rightButton: { name: "Add Property", link: "/add-listing" }
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`pt-6 pb-6 shadow-lg ${isScrolled ? 'bg-white' : 'bg-transparent'} fixed top-0 left-0 w-full z-50 transition-all ease-in-out duration-300`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative flex items-center justify-between h-16 w-full px-4">
          <a href="/" className="text-2xl font-bold text-gray-800 lg:block">
            <img src={logo} alt="Logo" width={170} height={100} />
          </a>

          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 space-x-8 items-center">
            {navigation.items.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.subItems && setActiveMenu(index)}
                onMouseLeave={() => {
                  setActiveMenu(null);
                  setActiveSubMenu(null);
                }}
              >
                <a
                  href={item.link}
                  className={`px-3 py-2 text-xl flex font-bold ${item.subItems ? 'hover:text-gray-600' : 'text-gray-800 hover:text-gray-600'}`}
                  onClick={(e) => item.subItems && e.preventDefault()}
                >
                  {item.name} {item.subItems && <SlArrowDown className='mt-3 font-bold ml-2 text-sm' />}
                </a>

                {item.subItems && activeMenu === index && (
                  <div className="absolute top-full left-0 w-64 text-xl bg-white shadow-lg py-2 rounded-lg z-50">
                    <hr />
                    {item.name === 'PAGES' ? (
                      item.subItems.map((page, pageIndex) => (
                        <div
                          key={pageIndex}
                          className="relative group"
                          onMouseEnter={() => page.subSections && setActiveSubMenu(pageIndex)}
                          onMouseLeave={() => setActiveSubMenu(null)}
                        >
                          <a
                            href={page.link}
                            className="flex justify-between items-center px-4 py-2 text-xl hover:bg-gray-100"
                            onClick={(e) => {
                              if (page.subSections) e.preventDefault();
                            }}
                          >
                            {page.name} {page.subSections && <span>›</span>}
                          </a>
                          {page.subSections && activeSubMenu === pageIndex && (
                            <div className="absolute left-full top-0 ml-1 w-64 text-xl bg-white shadow-lg py-2 rounded-lg z-50">
                              {page.subSections.map((section, secIndex) => (
                                <a
                                  key={secIndex}
                                  href={section.link}
                                  className="block px-4 py-2 text-xl hover:bg-gray-100"
                                >
                                  {section.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))
                    ) : (
                      item.subItems.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.link}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {subItem.name}
                        </a>
                      ))
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex">
            <a
              href={navigation.rightButton.link}
              className="bg-blue-600 font-bold  text-white flex px-4 py-2 rounded-lg hover:bg-blue-700"
            >
             <CiCirclePlus className='text-2xl mr-2 font-bold'  /> {navigation.rightButton.name }
            </a>
          </div>

          <button
            className="lg:hidden text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            {navigation.items.map((item, index) => (
              <div key={index} className="border-t pt-2">
                <button
                  className="w-full flex justify-between items-center px-4 py-3"
                  onClick={() => setActiveMenu(activeMenu === index ? null : index)}
                >
                  {item.name} {item.subItems && <span>▼</span>}
                </button>

                {item.subItems && activeMenu === index && (
                  <div className="ml-4 mt-1">
                    {item.name === "Pages" ? (
                      item.subItems.map((page, pageIndex) => (
                        <div key={pageIndex} className="py-1">
                          <div className="flex justify-between items-center">
                            <a
                              href={page.link}
                              className="px-4 py-2"
                              onClick={(e) => {
                                if (page.subSections) e.preventDefault();
                                setActiveSubMenu(activeSubMenu === pageIndex ? null : pageIndex);
                              }}
                            >
                              {page.name}
                            </a>
                            {page.subSections && (
                              <button
                                className="px-4"
                                onClick={() => setActiveSubMenu(activeSubMenu === pageIndex ? null : pageIndex)}
                              >
                                ▼
                              </button>
                            )}
                          </div>
                          {page.subSections && activeSubMenu === pageIndex && (
                            <div className="ml-4">
                              {page.subSections.map((section, secIndex) => (
                                <a
                                  key={secIndex}
                                  href={section.link}
                                  className="block px-4 py-2 text-sm text-gray-600"
                                >
                                  {section.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))
                    ) : (
                      item.subItems.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.link}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {subItem.name}
                        </a>
                      ))
                    )}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 px-4">
              <a
                href={navigation.rightButton.link}
                className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                {navigation.rightButton.name}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
