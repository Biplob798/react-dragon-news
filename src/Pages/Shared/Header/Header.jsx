import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center space-y-6">
      <img className="mx-auto" src={logo} alt="" />
      <p className="text-xl font-base">Journalism Without Fear or Favour</p>
      <p className="text-2xl">{moment().format("dddd, MMMM D YYYY")}</p>
    </div>
  );
};

export default Header;
