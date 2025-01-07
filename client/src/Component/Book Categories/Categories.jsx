import { Link } from "react-router-dom";

const categories = [
  {
    img: 'https://images.pexels.com/photos/904620/pexels-photo-904620.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Drama',
    link: '/dramabooks'
  },
  {
    img: 'https://images.pexels.com/photos/2090104/pexels-photo-2090104.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'History',
    link: "/historybooks"
  },
  {
    img: 'https://images.pexels.com/photos/4238507/pexels-photo-4238507.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Novel',
    link: "/novelbooks"
  },
  {
    img: 'https://images.pexels.com/photos/1666320/pexels-photo-1666320.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'SciFi',
    link: "/scifibooks"
  },
  {
    img: 'https://images.pexels.com/photos/5095897/pexels-photo-5095897.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Thriller',
    link: "/thrillerbooks"
  },
  {
    img: 'https://images.pexels.com/photos/3747497/pexels-photo-3747497.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Religious',
    link: "/religiousbooks"
  },
];

const Categories = () => {
  return (
    <div className="flex flex-col my-[30px] md:my-[80px] px-[20px] md:px-[50px] lg:px-[100px]">
      <h1 className="text-4xl md:text-6xl text-center font-bold font-serif bg-gradient-to-r from-purple-700 to-blue-300 text-transparent bg-clip-text text-4xl font-bold w-fit mx-auto pb-4">Book Categories</h1>
      <p className="text-lg text-center font-bold font-serif pb-6">Choose from different types of books</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories?.map((category, idx) => (
          <div key={idx} className="hero relative overflow-hidden rounded-xl">
            <div
              className="hero-image w-full h-80 bg-cover bg-center"
              style={{ backgroundImage: `url(${category.img})` }}
            ></div>
            <div className="hero-content z-0 text-center text-neutral-content absolute inset-0 opacity-0 transition-opacity duration-200 hover:opacity-80 bg-gradient-to-r from-purple-700 to-blue-300 bg-opacity-60 p-6">
              <div className="text-white flex flex-col justify-center items-center h-full">
                <div className="text-content z-20">
                  <h1 className="mb-5 text-5xl font-bold">{category.title}</h1>
                  <p className="mb-5">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                  </p>
                  <button className="btn bg-gradient-to-r from-purple-700 to-blue-300 text-white text-lg font-bold border-2 border-white"><Link to={category.link}>See Category</Link></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
