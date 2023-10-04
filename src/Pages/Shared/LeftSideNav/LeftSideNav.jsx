import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="space-y-6 p-4 border">
      <h2 className="text-2xl">All Categories</h2>
      <p className="text-2xl w-full bg-[#E7E7E7] text-black p-4 text-center">
        National News
      </p>
      {categories.map((category) => (
        <Link
          to={`/category/${category.id}`}
          className="block ml-4 font-semibold text-xl text-[#E7E7E7]"
          key={category.id}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;
