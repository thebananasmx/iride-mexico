import React from 'react';
import Button from '../components/Button';
import Icon from '../components/Icon';
import TourCard from '../components/TourCard';
import { Tour, TourCategory } from '../types';


const StyleGuidePage: React.FC = () => {
    const brandColors = [
        { name: 'Primary Orange', hex: '#F24A09', className: 'bg-[#F24A09]' },
        { name: 'Accent Yellow', hex: '#f59e0b', className: 'bg-yellow-500' },
        { name: 'Dark Gray', hex: '#1f2937', className: 'bg-gray-800' },
        { name: 'Light Gray', hex: '#f9fafb', className: 'bg-gray-50' },
    ];
    
    // FIX: Explicitly type `sampleTour` with the `Tour` interface to ensure `skillLevel`
    // is correctly typed as a string literal union ('Easy' | 'Moderate' | 'Challenging')
    // instead of being inferred as a general `string`.
    const sampleTour: Tour = {
        id: 99,
        name: 'Sample Adventure Tour',
        location: 'Styleguide Ville',
        description: 'This is a sample description for a tour card to demonstrate its appearance and layout.',
        usp: ['Unique Selling Point 1', 'USP 2'],
        image: 'https://picsum.photos/seed/styleguide/600/400',
        category: TourCategory.ADVENTURE,
        duration: '5 Hours',
        skillLevel: 'Moderate',
        included: ['eBike', 'Helmet', 'Guide'],
        meetingPointMap: '',
        faqs: [],
    };


    return (
        <div className="container mx-auto px-6 py-12">
            <h1 className="text-4xl font-extrabold border-b pb-4 mb-8">Brand Style Guide</h1>

            {/* Colors Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Color Palette</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {brandColors.map(color => (
                        <div key={color.name} className="shadow rounded-lg">
                            <div className={`${color.className} h-24 rounded-t-lg`}></div>
                            <div className="p-4 bg-white rounded-b-lg">
                                <p className="font-bold">{color.name}</p>
                                <p className="text-gray-600">{color.hex}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Typography Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Typography</h2>
                <div className="space-y-4 bg-white p-6 rounded-lg shadow">
                    <h1 className="text-5xl font-extrabold">Heading 1</h1>
                    <h2 className="text-4xl font-bold">Heading 2</h2>
                    <h3 className="text-3xl font-bold">Heading 3</h3>
                    <h4 className="text-2xl font-semibold">Heading 4</h4>
                    <p className="text-base">This is a paragraph of body text. It's used for descriptions and general content. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="#" className="text-[#F24A09] hover:underline">This is a link</a>
                </div>
            </section>
            
            {/* Buttons Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Buttons</h2>
                <div className="space-y-4 md:space-y-0 md:space-x-4 bg-white p-6 rounded-lg shadow flex flex-wrap items-center">
                    <Button variant="primary">Primary Button</Button>
                    <Button variant="secondary">Secondary Button</Button>
                    <Button variant="outline">Outline Button</Button>
                </div>
                 <div className="mt-4 space-y-4 md:space-y-0 md:space-x-4 bg-white p-6 rounded-lg shadow flex flex-wrap items-center">
                    <button className="px-4 py-2 rounded-full font-semibold transition-colors bg-[#F24A09] text-white">Active Filter</button>
                    <button className="px-4 py-2 rounded-full font-semibold transition-colors bg-gray-200 text-gray-700">Inactive Filter</button>
                </div>
            </section>
            
             {/* Icons Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold mb-4">Icons</h2>
                <div className="bg-white p-6 rounded-lg shadow flex flex-wrap items-center gap-6">
                    <div className="flex flex-col items-center gap-2"><Icon name="clock" className="w-8 h-8 text-[#F24A09]" /><span>clock</span></div>
                    <div className="flex flex-col items-center gap-2"><Icon name="level" className="w-8 h-8 text-[#F24A09]" /><span>level</span></div>
                    <div className="flex flex-col items-center gap-2"><Icon name="check" className="w-8 h-8 text-[#F24A09]" /><span>check</span></div>
                    <div className="flex flex-col items-center gap-2"><Icon name="sparkles" className="w-8 h-8 text-yellow-500" /><span>sparkles</span></div>
                    <div className="flex flex-col items-center gap-2"><Icon name="location" className="w-8 h-8 text-[#F24A09]" /><span>location</span></div>
                </div>
            </section>

            {/* Components Section */}
            <section>
                <h2 className="text-3xl font-bold mb-4">Components</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Tour Card</h3>
                        <TourCard tour={sampleTour} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default StyleGuidePage;