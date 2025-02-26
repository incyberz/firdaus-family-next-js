"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[var(--background-color)] shadow-md z-50 bg-black">
      <div className="container mx-auto flex justify-between items-center p-4 text-[var(--text-color)]">
        <Link href="/">
          <span className="text-2xl font-bold text-green-600 cursor-pointer">
            Firdaus Family
          </span>
        </Link>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        <ul className="md:flex space-x-6 hidden font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/About">Tentang</Link>
          </li>
          <li>
            <Link href="/layanan">Layanan</Link>
          </li>
          <li>
            <Link href="/stories">Stories</Link>
          </li>
          {/* <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li> */}
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="focus:outline-none"
            >
              Latihan
            </button>
            {isDropdownOpen && (
              <ul className="absolute bg-[var(--background-color)] text-[var(--text-color)] shadow-md mt-2 py-2 w-48 rounded-md">
                <li>
                  <Link
                    href="/latihan/lat41"
                    className="block px-4 py-2"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Lat41 Styling Image
                  </Link>
                </li>
                <li>
                  <Link
                    href="/latihan/lat42"
                    className="block px-4 py-2"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Lat42 Sticky Heading
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>

        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <Link href="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/stories" onClick={() => setIsOpen(false)}>
                  Stories
                </Link>
              </li>
              <li>
                <Link href="/events" onClick={() => setIsOpen(false)}>
                  Events
                </Link>
              </li>
              <li>
                <Link href="/gallery" onClick={() => setIsOpen(false)}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" onClick={() => setIsOpen(false)}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/tentang" onClick={() => setIsOpen(false)}>
                  Tentang
                </Link>
              </li>
              <li>
                <Link href="/layanan" onClick={() => setIsOpen(false)}>
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="focus:outline-none"
                >
                  Latihan
                </button>
                {isDropdownOpen && (
                  <ul className="bg-white shadow-md mt-2 py-2 w-48 rounded-md text-center">
                    <li>
                      <Link
                        href="/latihan/4.1"
                        className="block px-4 py-2"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          setIsOpen(false);
                        }}
                      >
                        Latihan 4.1 - Styling Foto Profil
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/latihan/4.2"
                        className="block px-4 py-2"
                        onClick={() => {
                          setIsDropdownOpen(false);
                          setIsOpen(false);
                        }}
                      >
                        Latihan 4.2 - Styling CV Online
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
