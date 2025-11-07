import React, { useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { TOURS } from '../constants';
import Icon from '../components/Icon';
import Button from '../components/Button';

const TourDetailPage: React.FC = () => {
    const { tourId } = useParams<{ tourId: string }>();
    const tour = TOURS.find(t => t.id === parseInt(tourId || ''));

    useEffect(() => {
        if (tour) {
            document.title = `${tour.name} | Ride Mexico`;
        } else {
            document.title = 'Tour Not Found | Ride Mexico';
        }
    }, [tour]);

    if (!tour) {
        return (
            <div className="container mx-auto px-6 py-16 text-center">
                <h1 className="text-3xl font-bold">Tour Not Found</h1>
                <p className="mt-4">Sorry, we couldn't find the tour you're looking for.</p>
                <NavLink to="/" className="mt-8 inline-block">
                    <Button>Back to All Tours</Button>
                </NavLink>
            </div>
        );
    }
    
    const tourSchema = {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": tour.name,
      "startDate": new Date().toISOString().split('T')[0], // Placeholder for dynamic date
      "location": {
        "@type": "Place",
        "name": tour.location,
        "address": tour.location
      },
      "image": [
        tour.image
       ],
      "description": tour.description,
      "offers": {
        "@type": "Offer",
        "url": window.location.href,
        "price": "0", // Add pricing if available
        "priceCurrency": "MXN",
        "availability": "https://schema.org/InStock"
      }
    };

    return (
        <div>
            <script type="application/ld+json">
              {JSON.stringify(tourSchema)}
            </script>
            {/* Hero Section */}
            <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: `url(${tour.image})` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative container mx-auto px-6 h-full flex flex-col justify-end pb-12 text-white">
                    <span className="bg-yellow-500 text-gray-900 text-sm font-semibold mr-2 px-3 py-1 rounded-full self-start mb-2">{tour.category}</span>
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">{tour.name}</h1>
                    <div className="flex items-center text-gray-200 mt-2">
                        <Icon name="location" className="w-5 h-5 mr-2" />
                        <p className="text-lg">{tour.location}</p>
                    </div>
                </div>
            </section>
            
            <div className="container mx-auto px-6 py-16">
                 <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold mb-4">Tour Overview</h2>
                        <p className="text-gray-700 leading-relaxed">{tour.description}</p>

                        <h3 className="text-xl font-bold mt-8 mb-4">What's Included</h3>
                        <ul className="grid sm:grid-cols-2 gap-4">
                            {tour.included.map(item => (
                                <li key={item} className="flex items-center text-gray-700">
                                    <Icon name="check" className="w-6 h-6 mr-3 text-[#F24A09]" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <h3 className="text-xl font-bold mt-8 mb-4">Frequently Asked Questions</h3>
                        <div className="space-y-4">
                            {tour.faqs.map((faq, index) => (
                                <div key={index} className="bg-gray-100 p-4 rounded-lg">
                                    <h4 className="font-semibold text-gray-800">{faq.question}</h4>
                                    <p className="text-gray-600 mt-1">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Sidebar */}
                     <aside className="lg:col-span-1">
                        <div className="bg-white p-6 rounded-lg shadow-lg sticky top-28">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between pb-4 border-b">
                                    <div className="flex items-center">
                                        <Icon name="clock" className="w-6 h-6 mr-3 text-[#F24A09]" />
                                        <span className="font-semibold">Duration</span>
                                    </div>
                                    <span className="text-gray-700">{tour.duration}</span>
                                </div>
                                <div className="flex items-center justify-between pb-4 border-b">
                                     <div className="flex items-center">
                                        <Icon name="level" className="w-6 h-6 mr-3 text-[#F24A09]" />
                                        <span className="font-semibold">Skill Level</span>
                                    </div>
                                    <span className="text-gray-700">{tour.skillLevel}</span>
                                </div>
                                 <div className="flex items-center justify-between pb-4 border-b">
                                     <div className="flex items-center">
                                        <Icon name="users" className="w-6 h-6 mr-3 text-[#F24A09]" />
                                        <span className="font-semibold">Group Size</span>
                                    </div>
                                    <span className="text-gray-700">Max {tour.maxRiders} riders</span>
                                </div>
                            </div>
                             <Button variant="primary" className="w-full mt-6">Book Your Adventure</Button>
                             {tour.spotsLeft && tour.spotsLeft <= 5 && (
                                <p className="text-center mt-4 text-yellow-600 font-bold">
                                    Only {tour.spotsLeft} spots left for this week!
                                </p>
                             )}
                        </div>
                    </aside>
                 </div>

                 {/* Map Section */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold mb-4 text-center">Meeting Point</h2>
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                         <iframe 
                            src={tour.meetingPointMap}
                            width="100%" 
                            height="450" 
                            style={{border:0}} 
                            allowFullScreen={false}
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TourDetailPage;