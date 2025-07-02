
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
    <section className="py-20 bg-gradient-origin relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6">
            From Farm <span className="text-coffee-gold">to Cup</span>
          </h2>
          <p className="text-xl text-stone-200">
            Follow our coffee journey through authentic moments
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instagramPosts.map((post) => (
            <div 
              key={post.id} 
              className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
