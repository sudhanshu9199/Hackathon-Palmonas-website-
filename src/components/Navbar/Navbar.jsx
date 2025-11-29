import style from "./Navbar.module.scss";
import { NavLink } from "react-router";
import { User, Search, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
const Navbar = ({ activePage, setactivePage }) => {
  const [isScrolled, setisScrolled] = useState(false);

  // Handle Scroll Event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setisScrolled(true);
      } else {
        setisScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLogoLeft = isScrolled || activePage === "product";
  return (
    <nav className={`${style.navbarClass} ${isScrolled ? "scrolled" : ""}`}>
      <div className={style.navbarContainer}>
        <NavLink
          to="/"
          className={`${style.logoClass} ${isLogoLeft ? "left" : "center"}`}
          onClick={() => setactivePage("home")}
        >
          <span className={style.logoText}>PALMONAS</span>
        </NavLink>

        <div
          className={`${style.searchClass} ${
            activePage === "product" ? "active" : "inactive"
          }`}
          data-active="product"
        >
          <div className={style.searchbar}>
            <input
              type="text"
              placeholder="Search products..."
            />
            <Search className={style.searchIcon} />
          </div>
        </div>

        <div className={style.userAction}>
          {/* Navigation Links (Desktop) */}
          <div className={style.navLink}>
            <NavLink
              onClick={() => setactivePage("home")}
              className={`hover:text-black transition-colors ${
                activePage === "home" ? "text-black" : ""
              }`}
            >
              Heirlooms
            </NavLink>
            <NavLink className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <User className="w-5 h-5" />
            </NavLink>
            <NavLink className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <ShoppingBag className={style.icon} />
              <span className={style.dot}></span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
