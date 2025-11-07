import React from 'react';
import { useState } from 'react';
import { TOURS } from '../constants';
import { TourCategory } from '../types';
import TourCard from '../components/TourCard';
import Icon from '../components/Icon';
import { getTourRecommendation } from '../services/geminiService';
import Button from '../components/Button';

const tourCategories = Object.values(TourCategory);

const HomePage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<TourCategory | 'All'>('All');
    const [userPreferences, setUserPreferences] = useState('');
    const [recommendation, setRecommendation] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const filteredTours = selectedCategory === 'All' ? TOURS : TOURS.filter(tour => tour.category === selectedCategory);

    const handleRecommendation = async () => {
        if (!userPreferences.trim()) return;
        setIsLoading(true);
        setRecommendation('');
        try {
            const result = await getTourRecommendation(userPreferences, TOURS);
            setRecommendation(result);
        } catch (error) {
            setRecommendation('An error occurred while getting your recommendation.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: `url('https://res.cloudinary.com/dg4wbuppq/image/upload/v1762524949/bhargava-marripati-7LDBKPWAHJ4-unsplash_xnvhry.jpg')` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Mexico's Best Scenic & City eBike Tours</h1>
                    <p className="mt-4 text-lg md:text-xl max-w-2xl">Discover Mexico's breathtaking landscapes and vibrant cities on two wheels. Unforgettable adventures await!</p>
                    <a href="#tours" className="mt-8">
                        <Button variant="primary">Explore Tours</Button>
                    </a>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-2">How It Works</h2>
                    <p className="text-gray-600 mb-12">Your adventure is just 3 simple steps away.</p>
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="flex flex-col items-center">
                            <div className="bg-[#F24A09] text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold">1</div>
                            <h3 className="text-xl font-bold mt-4">Arrive</h3>
                            <p className="text-gray-600 mt-2">Meet us at the designated location with a smile. We'll handle the rest!</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-[#F24A09] text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold">2</div>
                            <h3 className="text-xl font-bold mt-4">Choose Bike</h3>
                            <p className="text-gray-600 mt-2">Get fitted for your premium eBike and receive a quick safety briefing.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-[#F24A09] text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold">3</div>
                            <h3 className="text-xl font-bold mt-4">Ride</h3>
                            <p className="text-gray-600 mt-2">Enjoy a guided tour full of amazing sights, stories, and photo opportunities.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Tour Recommender Section */}
            <section className="py-16 bg-orange-50">
                 <div className="container mx-auto px-6 text-center">
                    <div className="max-w-2xl mx-auto">
                        <Icon name="sparkles" className="w-12 h-12 mx-auto text-yellow-500" />
                        <h2 className="text-3xl font-bold mt-4">Plan Your Perfect Ride</h2>
                        <p className="text-gray-600 mt-2 mb-6">Tell us what you love, and our AI guide will suggest the perfect tour for you!</p>
                        <div className="flex flex-col sm:flex-row gap-2">
                             <input
                                type="text"
                                value={userPreferences}
                                onChange={(e) => setUserPreferences(e.target.value)}
                                placeholder="e.g., 'I love history, food, and easy rides'"
                                className="flex-grow p-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#F24A09] focus:outline-none"
                            />
                            <Button onClick={handleRecommendation} disabled={isLoading}>
                                {isLoading ? 'Thinking...' : 'Get Suggestion'}
                            </Button>
                        </div>
                       {recommendation && (
                           <div className="mt-6 p-6 bg-white rounded-lg shadow-md text-left">
                               <p className="text-gray-700 whitespace-pre-wrap">{recommendation}</p>
                           </div>
                       )}
                    </div>
                </div>
            </section>


            {/* Tours Section */}
            <section id="tours" className="py-16">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Tours</h2>
                    <div className="flex justify-center flex-wrap gap-2 mb-8">
                        <button onClick={() => setSelectedCategory('All')} className={`px-4 py-2 rounded-full font-semibold transition-colors ${selectedCategory === 'All' ? 'bg-[#F24A09] text-white' : 'bg-gray-200 text-gray-700'}`}>All Tours</button>
                        {tourCategories.map(cat => (
                            <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-4 py-2 rounded-full font-semibold transition-colors ${selectedCategory === cat ? 'bg-[#F24A09] text-white' : 'bg-gray-200 text-gray-700'}`}>{cat}</button>
                        ))}
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredTours.map(tour => <TourCard key={tour.id} tour={tour} />)}
                    </div>
                </div>
            </section>

             {/* Sticky CTA */}
            <div className="sticky bottom-0 bg-white bg-opacity-90 backdrop-blur-sm p-4 shadow-2xl-top md:hidden">
                 <a href="#tours" className="w-full block">
                    <Button variant="primary" className="w-full">Book Your Tour Now</Button>
                </a>
            </div>
        </div>
    );
};

export default HomePage;