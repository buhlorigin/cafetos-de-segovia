
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
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {instagramPosts.map((post) => (
            <div key={post.id} className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
