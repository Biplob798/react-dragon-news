import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div className="border space-y-6">
      <div className="p-4 space-y-4">
        <h2 className="text-2xl font-bold">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle>
          Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          Github
        </button>
      </div>
      <div className="p-4">
        <h2 className="text-2xl  font-bold mb-4">Find Us On</h2>
        <a
          className="p-4 flex items-center text-lg border rounded-t-lg"
          href=""
        >
          <FaFacebook className="mr-3"></FaFacebook>
          <span>Facebook</span>
        </a>
        <a className="p-4 flex items-center text-lg border-x" href="">
          <FaTwitter className="mr-3"></FaTwitter>
          <span>Twitter</span>
        </a>
        <a
          className="p-4 flex items-center text-lg border rounded-b-lg"
          href=""
        >
          <FaInstagram className="mr-3"></FaInstagram>
          <span>Instagram</span>
        </a>
      </div>
      {/* q zone  */}

      <div className="p-4 space-y-4 bg-[#F3F3F3]">
        <h2 className="text-2xl font-bold">Q Zone</h2>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
      <div className="bg-[#05001DCC] p-4 space-y-4 text-center">
        <h2 className="text-white text-4xl font-bold">
          Create an Amazing Newspaper
        </h2>
        <p className="text-white font-normal text-sm">
          Discover thousands of options, easy to customize layouts, one-click to
          import demo and much more.
        </p>
        <button className="text-white btn btn-secondary bg-[#D72050]">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default RightSideNav;
