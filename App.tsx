import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StyleGuidePage from './pages/StyleGuidePage';
import TourDetailPage from './pages/TourDetailPage';
import { TOURS } from './constants';

const uniqueLocations = [...new Set(TOURS.map(tour => tour.location))];

const Header: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <NavLink to="/" className="text-2xl font-bold text-[#F24A09] hover:text-black transition-colors">
                    🚲 Ride Mexico
                </NavLink>
                <div className="hidden md:flex items-center space-x-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-gray-600 hover:text-[#F24A09] transition-colors ${isActive ? 'font-bold text-[#F24A09]' : ''}`
                        }
                    >
                        Home
                    </NavLink>
                    <div className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
                         <a href="/#tours" className="text-gray-600 hover:text-[#F24A09] transition-colors cursor-pointer">
                            Tours
                         </a>
                        {isDropdownOpen && (
                            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                {uniqueLocations.map(location => (
                                    <a key={location} href={`/#tours`} onClick={() => setIsDropdownOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{location} Tours</a>
                                ))}
                            </div>
                        )}
                    </div>
                    <NavLink
                        to="/style-guide"
                        className={({ isActive }) =>
                            `text-gray-600 hover:text-[#F24A09] transition-colors ${isActive ? 'font-bold text-[#F24A09]' : ''}`
                        }
                    >
                        Style Guide
                    </NavLink>
                    <a href="/#tours" className="bg-[#F24A09] text-white font-bold py-2 px-4 rounded-full hover:bg-black transition-all duration-300 ease-in-out transform hover:scale-105">
                        Book a Tour
                    </a>
                </div>
                 <div className="md:hidden">
                    {/* Mobile menu could be implemented here */}
                </div>
            </nav>
        </header>
    );
};

const Footer: React.FC = () => (
    <footer className="bg-gray-800 text-white pt-12 pb-8">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                    <h3 className="text-xl font-bold mb-4">Ride Mexico</h3>
                    <p className="text-gray-400">Discover the heart of Mexico, one pedal at a time. Offering unforgettable eBike adventures in stunning locations.</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">Get the Best Photo Spots Guide</h3>
                    <p className="text-gray-400 mb-4">Sign up for our newsletter to receive a free guide to the "Top 10 Photo Spots" on our tours!</p>
                    <form className="flex">
                        <input type="email" placeholder="Your email address" className="w-full p-2 rounded-l-md text-gray-800 focus:outline-none" />
                        <button type="submit" className="bg-[#F24A09] hover:bg-black transition-colors duration-300 text-white font-bold p-2 rounded-r-md">Sign Up</button>
                    </form>
                </div>
            </div>
            <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
                <p>&copy; {new Date().getFullYear()} Ride Mexico. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

const CookieBanner: React.FC = () => {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent');
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie_consent', 'true');
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center z-50">
            <p className="text-sm">We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</p>
            <button onClick={handleAccept} className="bg-[#F24A09] hover:bg-black transition-colors duration-300 text-white font-bold py-1 px-3 rounded-full text-sm">
                Accept
            </button>
        </div>
    );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
    return (
        <HashRouter>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/style-guide" element={<StyleGuidePage />} />
                        <Route path="/tours/:tourId" element={<TourDetailPage />} />
                    </Routes>
                </main>
                <Footer />
                <CookieBanner />
            </div>
        </HashRouter>
    );
}

export default App;