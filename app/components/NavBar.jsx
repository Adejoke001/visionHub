"use client";
import { usePathname } from 'next/navigation';
import { assets } from "@/assets/assets";
import Image from "next/image";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

const NavBar = () => {
  const pathname = usePathname();
  const sideMenuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(0)";
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(100%)";
    setIsMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  // Close menu when clicking escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logoLink}>
          <Image
            src={assets.visionLogo}
            alt="Vision Hub Logo"
            className={styles.logo}
            priority={true}
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className={styles.desktopNav}>
          <li className={styles.navItem}>
            <Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" className={`${styles.navLink} ${pathname === '/about' ? styles.active : ''}`}>
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/services" className={`${styles.navLink} ${pathname === '/services' ? styles.active : ''}`}>
              Services
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/blogs" className={`${styles.navLink} ${pathname === '/blogs' ? styles.active : ''}`}>
              Blogs
            </Link>
          </li>
          <li className={styles.contactNavItem}>
            <Link href="/contact" className={`${styles.contactNavLink} ${pathname === '/contact' ? styles.active : ''}`}>
              Contact <Icon.PhoneCall className={styles.contactIcon} />
            </Link>
          </li> 
        </ul>

        {/* Desktop Book Button */}
        <div className={styles.desktopBookBtn}>
          <Link href="/booking" className={styles.bookButton}>
            <Icon.CalendarCheck
              weight="bold"
              size={20}
              className={styles.bookIcon}
            />
            <span>Book Now</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.menuButton}
          onClick={openMenu}
          aria-label="Open menu"
        >
          <Icon.List className={styles.menuIcon} weight="bold" />
        </button>
      </nav>

      {/* Mobile Menu Overlay - Fixed hydration issue */}
      {isMenuOpen && (
        <div className={styles.mobileOverlay} onClick={closeMenu}></div>
      )}

      {/* Mobile Side Menu */}
      <ul ref={sideMenuRef} className={styles.mobileMenu}>
        <div className={styles.mobileMenuHeader}>
          <button
            className={styles.closeButton}
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <Icon.XIcon className={styles.closeIcon} weight="bold" />
          </button>
        </div>

        <li className={styles.mobileNavItem} onClick={closeMenu}>
          <Link href="/" className={styles.mobileNavLink}>
            Home
          </Link>
        </li>
        <li className={styles.mobileNavItem} onClick={closeMenu}>
          <Link href="/about" className={styles.mobileNavLink}>
            About
          </Link>
        </li>
        <li className={styles.mobileNavItem} onClick={closeMenu}>
          <Link href="/services" className={styles.mobileNavLink}>
            Services
          </Link>
        </li>
        <li className={styles.mobileNavItem} onClick={closeMenu}>
          <Link href="/blogs" className={styles.mobileNavLink}>
            Blogs
          </Link>
        </li>
        <li className={styles.mobileNavItem} onClick={closeMenu}>
          <Link href="/contact" className={styles.mobileNavLink}>
            Contact
          </Link>
        </li>

        {/* Mobile Book Button */}
        <li className={styles.mobileBookItem} onClick={closeMenu}>
          <Link href="/booking" className={styles.mobileBookButton}>
            <Icon.CalendarCheck
              weight="bold"
              size={20}
              className={styles.mobileBookIcon}
            />
            <span>Book Now</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
