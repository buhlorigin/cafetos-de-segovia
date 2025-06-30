
const InstagramFeed = () => {
  const instagramPosts = [
    {
      id: 1,
      image: "/lovable-uploads/5a536476-ea86-493a-98e6-c38d06565207.png",
      alt: "Coffee cupping session with flavor wheel"
    },
    {
      id: 2,
      image: "/lovable-uploads/4f1b14de-e1b1-4184-a29f-9dda463852cc.png",
      alt: "Woman harvesting green coffee cherries on the farm"
    },
    {
      id: 3,
      image: "/lovable-uploads/871d7efd-27b6-422f-a6bd-a039202b5433.png",
      alt: "Coffee beans being sorted and processed in wooden boxes"
    },
    {
      id: 4,
      image: "/lovable-uploads/f2d28250-0287-429f-92ac-2e47aa041d9d.png",
      alt: "Coffee beans drying on patios under the sun"
    },
    {
      id: 5,
      image: "/lovable-uploads/2d00b3b7-91dc-4caf-97e4-11d9cfd3f235.png",
      alt: "Fresh coffee cherries being sorted by hand"
    },
    {
      id: 6,
      image: "/lovable-uploads/92d114ce-8337-4d86-8541-4857717cc0c0.png",
      alt: "Lush coffee plantation forest with shade trees"
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {instagramPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 group"
              style={{
                animation: `float 6s ease-in-out infinite ${index * 0.5}s`
              }}
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(1deg);
          }
          50% {
            transform: translateY(-5px) rotate(-1deg);
          }
          75% {
            transform: translateY(-15px) rotate(0.5deg);
          }
        }
      `}</style>
    </section>
  );
};

export default InstagramFeed;
