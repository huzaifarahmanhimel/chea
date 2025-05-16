import React, { useState, useEffect } from 'react';

export default function ModernWellnessBlogSection() {
  const [hoveredPost, setHoveredPost] = useState(null);
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Set component visible after mount for animation
    setVisible(true);
  }, []);

  // Using the provided color palette
  const colors = {
    sand: "#f0d2ba",     // Soft sand/beige
    teal: "#19a9b4",     // Vibrant teal
    green: "#A3CB72"     // Fresh green
  };

  const blogPosts = [
    {
      id: 1,
      image: "https://i.pinimg.com/736x/6e/e7/7e/6ee77e26db1a5ba06a9a42e972088002.jpg",
      title: "ACE YOUR GAME: TENNIS TIPS FOR BEGINNERS",
      date: "JULY 2, 2021",
      categories: ["TENNIS", "FITNESS"],
      author: "Leslie Pickett",
      excerpt: "Learn essential tennis tips for beginners and improve your game with simple techniques and drills.",
      link: "https://tennispal.com/tennis-blog/"

    },
    {
      id: 2,
      image: "https://i.pinimg.com/736x/ac/89/7d/ac897d160821d43b9964706325787193.jpg",
       title: "AROMA SCENTED LOVELY CANDLE",
       date: "JULY 2, 2021",
       categories: ["MASSAGE PARLOUR", "RELAXATION"],
       author: "Leslie Pickett",
       excerpt: "Enhance your massage experience with aromatic candles designed to calm the senses and create a peaceful ambiance.",
       link: "https://www.massagemag.com/"
    },
    {
      id: 3,
      image: "https://i.pinimg.com/736x/90/6a/8b/906a8b6c4093a35673710f16fe4d721a.jpg",
      title: "NOURISHING AND DELICIOUS HEALTHY FOODS",
      date: "JULY 2, 2021",
       categories: ["NUTRITION", "WELLNESS"],
       author: "Leslie Pickett",
       excerpt: "Explore the benefits of clean eating and how wholesome foods can boost your energy, mood, and overall health.",
       link: "/blog/nourishing-and-delicious-healthy-foods"
    }
  ];

  const containerAnimation = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'all 0.8s ease-out'
  };

  const itemAnimation = (index) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    transition: `all 0.6s ease-out ${0.2 + (index * 0.1)}s`
  });

  return (
    <div className="py-16 px-4 min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Header Section with Animation */}
      <div 
        className="text-center mb-16 w-full max-w-4xl mx-auto"
        style={containerAnimation}
      >
        <h1 className="text-4xl md:text-6xl font-serif mb-6 tracking-wide">
          <span style={{ color: colors.teal }}>TRUE</span>{" "}
          <span className="text-gray-800">WELLNESS</span>
        </h1>
        
        <div 
          className="h-px w-16 mx-auto mb-6"
          style={{ backgroundColor: colors.green }}
        />
        
        <p className="text-gray-700 max-w-2xl mx-auto text-sm md:text-base font-light">
          Immerse yourself in our curated wellness experiences. Discover practices and products 
          that nurture your mind, body, and spirit for a more balanced lifestyle.
        </p>
      </div>

      {/* Blog Grid with Animations */}
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
        {blogPosts.map((post, index) => (
          <div 
            key={post.id} 
            className="flex flex-col bg-white rounded-lg overflow-hidden shadow-lg"
            style={itemAnimation(index)}
            onMouseEnter={() => setHoveredPost(post.id)}
            onMouseLeave={() => setHoveredPost(null)}
          >
            {/* Clickable Image with Hover Effect */}
            <a href={post.link} className="block relative overflow-hidden h-64">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                style={{ 
                  transition: 'transform 0.5s ease',
                  transform: hoveredPost === post.id ? 'scale(1.1)' : 'scale(1)'
                }}
              />
              <div 
                className="absolute inset-0 flex items-center justify-center"
                style={{ 
                  backgroundColor: 'rgba(25, 169, 180, 0.4)',
                  opacity: hoveredPost === post.id ? 1 : 0,
                  transition: 'opacity 0.3s ease'
                }}
              >
                <span 
                  className="text-white font-light text-sm border border-white px-4 py-2 rounded-full"
                  style={{ 
                    transform: hoveredPost === post.id ? 'translateY(0)' : 'translateY(20px)',
                    opacity: hoveredPost === post.id ? 1 : 0,
                    transition: 'all 0.3s ease 0.1s'
                  }}
                >
                  READ MORE
                </span>
              </div>
            </a>

            {/* Post Meta with Animations */}
            <div className="p-6 flex-grow flex flex-col">
              <div className="text-xs mb-3 font-light tracking-wider" style={{ color: colors.green }}>
                {post.date} • {post.categories.join(" • ")}
              </div>
              
              <h2 className="text-xl md:text-2xl font-serif mb-3 leading-tight text-gray-800">
                <a 
                  href={post.link} 
                  className="hover:text-teal-500 transition-colors duration-300"
                  style={{ 
                    transition: 'color 0.3s ease',
                    color: hoveredPost === post.id ? colors.teal : 'inherit' 
                  }}
                >
                  {post.title}
                </a>
              </h2>
              
              <p className="text-gray-600 text-sm mb-4 flex-grow">
                {post.excerpt}
              </p>
              
              <div className="pt-4 border-t border-gray-200 flex items-center mt-auto">
                <div className="w-8 h-8 rounded-full mr-3" style={{ backgroundColor: colors.sand }}></div>
                <span className="text-xs text-gray-500">
                  By {post.author}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* View All Posts Button */}
      <div
        className="mt-12 text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease-out 0.8s'
        }}
      >
        <a 
          href="/blog"
          className="inline-block px-8 py-3 rounded-full text-sm tracking-wide"
          style={{ 
            backgroundColor: 'transparent',
            color: colors.teal,
            border: `1px solid ${colors.teal}`,
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = colors.teal;
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = colors.teal;
          }}
        >
          VIEW ALL POSTS
        </a>
      </div>
    </div>
  );
}