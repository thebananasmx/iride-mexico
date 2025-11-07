import { Tour, TourCategory } from './types';

export const TOURS: Tour[] = [
  {
    id: 1,
    name: 'Pyramids of Teotihuacán Sunrise Ride',
    location: 'Mexico City',
    description: 'Experience the ancient city of Teotihuacán like never before. Ride through the Avenue of the Dead and see the Pyramids of the Sun and Moon glow at sunrise.',
    usp: ['Beat the crowds with early access', 'Stunning sunrise views', 'Learn ancient history from a local guide'],
    image: 'https://picsum.photos/seed/mexicocity/600/400',
    category: TourCategory.SIGHTSEEING,
    duration: '6 Hours',
    skillLevel: 'Easy',
    included: ['eBike', 'Helmet', 'Bilingual Guide', 'Snacks & Water'],
    spotsLeft: 5,
    maxRiders: 8,
    meetingPointMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.218525287953!2d-98.8463836855938!3d19.66090198675669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1eab4334a4133%3A0x63b8e3926ac4f733!2sTeotihuac%C3%A1n!5e0!3m2!1sen!2smx!4v1620836514781!5m2!1sen!2smx',
    faqs: [
        { question: 'Is breakfast included?', answer: 'We provide light snacks and water, but a full breakfast is not included. We recommend eating before you arrive.' },
        { question: 'How early do we need to be there?', answer: 'Please arrive at the meeting point at least 15 minutes before the tour start time for check-in and bike fitting.' }
    ]
  },
  {
    id: 2,
    name: 'Cancun Jungle & Cenote Adventure',
    location: 'Cancun',
    description: 'Escape the beaches and dive into the Mayan jungle. This off-road tour takes you through lush trails to a breathtaking hidden cenote where you can swim.',
    usp: ['Swim in a crystal-clear cenote', 'Spot local wildlife', 'Off-road jungle trails'],
    image: 'https://picsum.photos/seed/cancun/600/400',
    category: TourCategory.ADVENTURE,
    duration: '4 Hours',
    skillLevel: 'Moderate',
    included: ['eBike', 'Helmet', 'Cenote Entrance Fee', 'Guide'],
    spotsLeft: 3,
    maxRiders: 10,
    meetingPointMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.578129959634!2d-86.8517646855646!3d21.12999998594418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2b89f5a7a7b7%3A0x8f7c3c2b8e8d8c9a!2sCanc%C3%BAn%2C%20Quintana%20Roo!5e0!3m2!1sen!2smx!4v1620836733451!5m2!1sen!2smx',
    faqs: [
        { question: 'Should I bring a swimsuit?', answer: 'Absolutely! You won\'t want to miss swimming in the beautiful cenote. Towels are not provided, so please bring your own.' },
        { question: 'Is this tour safe for kids?', answer: 'The trail can be bumpy. We recommend this tour for children aged 12 and up who are confident cyclists.' }
    ]
  },
  {
    id: 3,
    name: 'Oaxaca Culinary Colors Tour',
    location: 'Oaxaca',
    description: 'A feast for the senses! Cycle through Oaxaca\'s vibrant streets, stopping at local markets to sample traditional foods like mole, mezcal, and chapulines.',
    usp: ['Taste authentic Oaxacan cuisine', 'Visit bustling local markets', 'Explore colorful colonial architecture'],
    image: 'https://picsum.photos/seed/oaxaca/600/400',
    category: TourCategory.FAMILY,
    duration: '3 Hours',
    skillLevel: 'Easy',
    included: ['eBike', 'Helmet', 'Food & Drink Samples', 'Guide'],
    maxRiders: 12,
    meetingPointMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61049.58434239819!2d-96.75663363066406!3d17.06053499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x859599b5a036c0a3%3A0x3344b036e651268!2sOaxaca%20City%2C%20Oaxaca!5e0!3m2!1sen!2smx!4v1620836802146!5m2!1sen!2smx',
    faqs: [
        { question: 'Are there vegetarian options?', answer: 'Yes! Oaxaca has a rich culinary tradition with many delicious vegetarian dishes. Please let us know of any dietary restrictions beforehand.' },
        { question: 'How much food is included?', answer: 'We include several samples at different market stalls, which is typically enough to be considered a light lunch.' }
    ]
  },
  {
    id: 4,
    name: 'Guadalajara Art & Architecture Ride',
    location: 'Guadalajara',
    description: 'Discover the cultural heart of Jalisco. This urban tour explores Guadalajara\'s stunning cathedrals, historic plazas, and the vibrant street art of the Tlaquepaque district.',
    usp: ['See murals by José Clemente Orozco', 'Explore artisan shops in Tlaquepaque', 'Relaxed pace for city exploration'],
    image: 'https://picsum.photos/seed/guadalajara/600/400',
    category: TourCategory.SIGHTSEEING,
    duration: '4 Hours',
    skillLevel: 'Easy',
    included: ['eBike', 'Helmet', 'Water', 'Bilingual Guide'],
    spotsLeft: 8,
    maxRiders: 10,
    meetingPointMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119442.2618991404!2d-103.40541129526367!3d20.6737777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b18cb5541819%3A0x26d0a794b8a4f9a5!2sGuadalajara%2C%20Jalisco!5e0!3m2!1sen!2smx!4v1620836872509!5m2!1sen!2smx',
    faqs: [
        { question: 'Do we go inside the buildings?', answer: 'The tour focuses on the exterior architecture and history, but we will have a longer stop in Tlaquepaque where you can enter shops and galleries.' },
        { question: 'Is the tour mostly on streets?', answer: 'Yes, this is an urban tour. We use bike lanes where available and stick to less busy streets to ensure a safe and enjoyable ride.' }
    ]
  },
   {
    id: 5,
    name: 'Hierve el Agua Mountain Trail',
    location: 'Oaxaca',
    description: 'A challenging ride for the adventurous spirit. Climb through the mountains of Oaxaca to the stunning petrified waterfalls of Hierve el Agua.',
    usp: ['Spectacular mountain vistas', 'Swim in natural infinity pools', 'A true physical challenge with rewarding views'],
    image: 'https://picsum.photos/seed/hierveelagua/600/400',
    category: TourCategory.ADVENTURE,
    duration: '7 Hours',
    skillLevel: 'Challenging',
    included: ['High-performance eBike', 'Helmet', 'Lunch', 'Guide'],
    spotsLeft: 2,
    maxRiders: 6,
    meetingPointMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15494.67396658934!2d-96.39958933066406!3d16.86161499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x859566a555555555%3A0x8e8e8e8e8e8e8e8e!2sHierve%20el%20Agua!5e0!3m2!1sen!2smx!4v1620836938211!5m2!1sen!2smx',
    faqs: [
        { question: 'How difficult is the ride?', answer: 'This is our most challenging tour with significant elevation gain. It is recommended for experienced cyclists with a high level of fitness.' },
        { question: 'Is lunch provided?', answer: 'Yes, a hearty local lunch is included to refuel you after the challenging ride.' }
    ]
  },
  {
    id: 6,
    name: 'Mexico City Chapultepec Park Explorer',
    location: 'Mexico City',
    description: 'A relaxing ride perfect for the whole family. Explore the vast and beautiful Chapultepec Park, visiting its famous castle, lake, and botanical gardens.',
    usp: ['Safe, car-free bike paths', 'Visit Chapultepec Castle', 'Fun for all ages and fitness levels'],
    image: 'https://picsum.photos/seed/chapultepec/600/400',
    category: TourCategory.FAMILY,
    duration: '3 Hours',
    skillLevel: 'Easy',
    included: ['eBike', 'Helmet', 'Park Map', 'Guide'],
    maxRiders: 15,
    meetingPointMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.639433169213!2d-99.1819363855973!3d19.42847298688812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8ac3b38151d%3A0x7a3a93355520a7ab!2sChapultepec%20Castle!5e0!3m2!1sen!2smx!4v1620837000185!5m2!1sen!2smx',
    faqs: [
        { question: 'Is the entrance to the castle included?', answer: 'The tour rides by the castle, but the entrance fee to go inside is not included, allowing you to choose if you want to visit after the ride.' },
        { question: 'Are there bikes for small children?', answer: 'Yes, we have smaller eBikes and options for child seats. Please let us know the ages of any children when booking.' }
    ]
  },
];