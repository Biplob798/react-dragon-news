// import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const news = useLoaderData();
  console.log(news);

  return (
    <div>
      <Helmet>
        <title>Dragon News | Home</title>
      </Helmet>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        {/* News Container
         */}
        <div className="border text-4xl md:col-span-2">
          {news.map((aNews) => (
            <NewsCard key={news._id} news={aNews}></NewsCard>
          ))}
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;

// Home.propTypes = {
//   news: PropTypes.object,
// };
