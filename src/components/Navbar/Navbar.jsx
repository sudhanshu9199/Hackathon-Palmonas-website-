import style from "./Navbar.module.scss";
import { NavLink, useLocation } from "react-router";
import { User, Search, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [isScrolled, setisScrolled] = useState(false);
  const location = useLocation();
  const isProductPage = location.pathname === "/products";

  const isLogoLeft = isScrolled || isProductPage;

  // Handle Scroll Event
  useEffect(() => {
    const handleScroll = () => {
      setisScrolled(window.scrollY > 50); // what is this line means? -> It sets isScrolled to true if the vertical scroll position is greater than 50 pixels, otherwise it sets it to false.
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${style.navbarClass} ${isScrolled ? style.scrolled : ""}`}>
      <div className={style.navbarContainer}>
        <NavLink
          to="/"
          className={`${style.logoClass} ${
            isLogoLeft ? style.left : style.center
          }`}
        >
          <span className={style.logoText}>PALMONAS</span>
        </NavLink>

        <div
          className={`${style.searchClass} ${
            isProductPage ? style.active : style.inactive
          }`}
        >
          <div className={style.searchbar}>
            <input type="text" placeholder="Search products..." />
            <Search className={style.searchIcon} />
          </div>
        </div>

        <div className={style.userAction}>
          <div className={style.navLink}>
            <NavLink
              to="/products"
              className={`${style.productLink} ${
                isProductPage ? style.activeLink : ""
              }`}
            >
              Heirlooms
            </NavLink>
            <NavLink className={style.iconBtn}>
              <User className={style.icon} />
            </NavLink>
            <NavLink className={style.iconBtn}>
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
