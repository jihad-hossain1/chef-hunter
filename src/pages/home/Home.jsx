import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCube } from "swiper";
import "swiper/swiper-bundle.min.css";
import ReviewsCard from "../../components/twoExtraComponents/reviews/ReviewsCard";
import ChefCard from "../../components/twoExtraComponents/reviews/chefCard/ChefCard";
import { AuthContext } from "../../provider/AuthProvider";
const Home = () => {
  const { chefData } = useContext(AuthContext);
  const [foodReview, setFoodReview] = useState([]);
  const [seeAll, setSeeAll] = useState();

  useEffect(() => {
    fetch("https://foodie-crush-hunter-server-jihad-hossain1.vercel.app/foods")
      .then((res) => res.json())
      .then((data) => setFoodReview(data));
  }, []);
  // console.log(chefData);

  const handleFeedbac = (e) => {
    e.preventDefault();
    const form = e.target;
    form.reset();
  };
  return (
    <div>
      <div className="">
        {/* carousel section  */}
        <div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <div className="card lg:card-side bg-base-100 shadow-xl mx-1 md:mx-56 ">
                <figure>
                  <img
                    src="https://i.ibb.co/1qHrv00/ahmed-Hossain2.png"
                    alt="Album"
                  />
                </figure>
                <div className="card-body flex items-center">
                  <h2 className="card-title">Chef Ahmed Hossain</h2>
                  <p>
                    Ahmed Hossain, a top-ranked chef in Bangladesh, changed the
                    taboo that cooking is only for females. He represented our
                    country's traditional food in different cooking shows and
                    recognised Bengali cuisine internationally.In 2006, he
                    joined Dhaka Regency in the post of kitchen organiser.
                  </p>
                  <div className="card-actions justify-end">
                    <button className="border border-warning rounded-md px-3 hover:font-semibold hover:bg-warning py-1">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card lg:card-side bg-base-100 shadow-xl mx-1 md:mx-56">
                <figure>
                  <img
                    src="https://i.ibb.co/1Q7PVjg/moniruzzamn.png"
                    alt="Album"
                  />
                </figure>
                <div className="card-body flex items-center">
                  <h2 className="card-title">Chef Moniruzzaman</h2>
                  <p>
                    We must have heard about Moniruzzaman's Biriyani and may
                    also have tasted the delicious biriyani of Haji Fakruddin.
                    He is also one of the top chefs in our country with his
                    unique recipes. Haji Fakruddin moved to Bangladesh in 1966
                    as he was facing severe financial issues
                  </p>
                  <button className="border border-warning rounded-md px-3 hover:font-semibold hover:bg-warning py-1">
                    Details
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card lg:card-side bg-base-100 shadow-xl mx-1 md:mx-56">
                <figure>
                  <img src="https://i.ibb.co/qxLCrSP/manikk.png" alt="Album" />
                </figure>
                <div className="card-body flex items-center">
                  <h2 className="card-title">Chef Manik Miah</h2>
                  <p>
                    Manik Miah is well known as the king of spices. He is the
                    chief culinary expert at Burbage's Windsor Tiffin eatery. He
                    cooked in a competition, 'Curry Chef Of The Year, ' which
                    the Bangladesh Caterers Association arranged.
                  </p>
                  <div className="card-actions justify-end">
                    <button className="border border-warning rounded-md px-3 hover:font-semibold hover:bg-warning py-1">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* main section  start*/}
        <h2 className="text-3xl md:text-5xl text-gray-600 underline font-bold text-center mt-16">
          Top Chef Of Bangladesh
        </h2>
        <div className="grid md:grid-cols-3 gap-3 py-8">
          {chefData.map((chef) => (
            <ChefCard key={chef.id} chef={chef}></ChefCard>
          ))}
        </div>
        {/* main section end  */}

        {/* extra components  section start */}
        <div className="py-10 mt-8">
          <h3 className="text-center text-2xl md:text-5xl font-semibold text-gray-600 underline">
            Top Tranding Food Review
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-2 mt-7">
            {foodReview.slice(0, seeAll ? foodReview.length : 8).map((food) => (
              <ReviewsCard key={food.id} food={food}></ReviewsCard>
            ))}
          </div>
          <div className="flex flex-col items-center my-4">
            {!seeAll && (
              <button
                onClick={setSeeAll}
                className="border border-warning rounded-md px-2 py-1  md:px-5 md:py-1 md:text-xl hover:bg-warning"
              >
                See All
              </button>
            )}
          </div>
        </div>
        <div className="mt-16">
          <div className="md:flex w-full md:justify-center">
            <div className="border-x-2 border-warning rounded  my-5 px-2 md:w-[50%]">
              <p className=" break-all">
                <span className="text-4xl">“</span>Chef Recipe Hunter is a
                platform that allows you to search for recipes based on
                ingredients you have on hand. It's a great tool for people who
                want to cook at home but may not have a specific recipe in mind
                or want to use up ingredients they already have. To use Chef
                Recipe Hunter, simply input the ingredients you have in your
                kitchen and the platform will provide you with a list of recipes
                that you can make with those ingredients. The platform also
                allows you to filter your search results by dietary
                restrictions, cuisine type, and other preferences. Overall, Chef
                Recipe Hunter is a useful tool for anyone who wants to get
                creative in the kitchen and make delicious meals using the
                ingredients they already have.
              </p>
            </div>
            <div className="hidden md:divider md:divider-horizontal">.</div>
            <div className="border-x-2 border-warning rounded  my-5 px-2">
              <form onSubmit={handleFeedbac}>
                <h3 className="text-xl">Leave us a feedback!</h3>
                <p>
                  Please provide your valuable feedback and something something
                  ...
                </p>
                <label htmlFor="" className="text-sm text-info">
                  Your Name
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="text"
                  id=""
                  className="border border-x-warning rounded-md bg-transparent px-1 my-1"
                />
                <br />
                <textarea
                  className="textarea textarea-warning"
                  placeholder="write something"
                ></textarea>
                <br />
                <input
                  type="submit"
                  value="Submit"
                  className="border border-warning px-2 hover:bg-warning rounded cursor-pointer"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
