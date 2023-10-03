import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex p-4 border bg-[#F3F3F3] my-6">
      <button className="btn btn-secondary flex justify-center bg-[#D72050]">
        Braking News
      </button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-12" to="/">
          {" "}
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link className="mr-12" to="/">
          {" "}
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
        <Link className="mr-12" to="/">
          {" "}
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
