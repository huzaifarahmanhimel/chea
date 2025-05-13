import React from 'react';

const testimonials = [
  {
    name: 'Cameron Williamson',
    role: 'Medical Assistant',
    text: 'NutriPlates has been a game-changer for me. The meals are not only nutritious but also incredibly tasty. It\'s the perfect solution for my busy lifestyle.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Eleanor Pena',
    role: 'Busy Professional',
    text: 'NutriPlates has transformed my relationship with food. The Essential Plan is perfect for my busy lifestyle, providing three delicious and nutritious meals each week. I\'ve never felt better.',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    name: 'Devon Lane',
    role: 'Nursing Assistant',
    text: 'The convenience of NutriPlates is unmatched. Managing my subscription is a breeze and the meals are consistently tasty. It\'s a relief to have healthy options delivered right to my door.',
    image: 'https://randomuser.me/api/portraits/women/43.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-20">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Voices of Wellness</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <p className="text-gray-600 italic mb-6">“{item.text}”</p>
            <div className="flex items-center border-t pt-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
