"use client";

import { Menu, ShoppingCart, X } from "lucide-react";
import Link from "next/link";


const Nav = () => {
  function openMenu() {
    document.body.classList.add("menu--open");
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <div>
      <div className="nav__container">
        <Link href="/" className="nav__link">
          <img src= "/Library.svg" alt="" className="logo" />
        </Link>

        <ul className="nav__links">
          <li className="nav__list">
            <Link href="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link href="/books" className="nav__link">
              Books
            </Link>
          </li>
          <button className="btn__menu" onClick={openMenu}>
            <Menu />
          </button>
          <li className="nav__icon">
            <Link href="/cart" className="nav__link">
              <ShoppingCart />
            </Link>
            <span className="cart__length">2</span>
          </li>
        </ul>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <X />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link href="/" className="menu__link">
                Home
              </Link>
            </li>
            <li className="menu__list">
              <Link href="/books" className="menu__link">
                Books
              </Link>
            </li>
            <li className="menu__list">
              <Link href="/cart" className="menu__link">
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;