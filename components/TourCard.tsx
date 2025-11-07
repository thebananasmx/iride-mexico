import React from 'react';
import { NavLink } from 'react-router-dom';
import { Tour } from '../types';
import Icon from './Icon';

interface TourCardProps {
  tour: Tour;
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <NavLink to={`/tours/${tour.id}`} className="group block">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full transform group-hover:-translate-y-2 transition-transform duration-300">
        <div className="relative">
            <img className="w-full h-48 object-cover" src={tour.image} alt={`eBike tour in ${tour.location}`} loading="lazy" />
            {tour.spotsLeft && tour.spotsLeft <= 5 && (
                 <div className="absolute top-0 right-0 bg-yellow-500 text-gray-900 text-xs font-bold px-3 py-1 m-2 rounded-full shadow-md">
                    Only {tour.spotsLeft} spots left!
                </div>
            )}
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <span className="bg-yellow-200 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full self-start">{tour.category}</span>
          <h3 className="mt-2 text-xl font-bold text-gray-900 group-hover:text-[#F24A09] transition-colors">{tour.name}</h3>
          <div className="flex items-center text-gray-500 mt-1">
              <Icon name="location" className="w-4 h-4 mr-1" />
              <p>{tour.location}</p>
          </div>
          <p className="mt-2 text-gray-600 flex-grow">{tour.description}</p>
          <div className="mt-4 pt-4 border-t border-gray-200">
             <div className="flex justify-between text-sm text-gray-700">
                 <div className="flex items-center">
                     <Icon name="clock" className="w-5 h-5 mr-2 text-[#F24A09]" />
                     <span>{tour.duration}</span>
                 </div>
                 <div className="flex items-center">
                     <Icon name="level" className="w-5 h-5 mr-2 text-[#F24A09]" />
                     <span>{tour.skillLevel}</span>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default TourCard;