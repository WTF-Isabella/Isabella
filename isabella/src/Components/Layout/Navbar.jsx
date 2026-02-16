// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { ShoppingCart, Heart, User, ChevronDown } from 'lucide-react';

// export default function Header() {
//   const [isProfileOpen, setIsProfileOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full py-4 px-6 z-50 transition-all duration-300 ${
//         isScrolled
//           ? 'bg-white/70 backdrop-blur-md shadow-lg'
//           : 'bg-transparent'
//       } text-white`}
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         <div className="shrink-0">
//           <Link href="/" className="text-3xl font-serif tracking-wider hover:opacity-80 transition-opacity">
//             ISABELLA
//           </Link>
//         </div>

//         <nav className="hidden md:flex items-center space-x-8">
//           <Link href="/Shopping" className="text-sm uppercase tracking-wide hover:text-gray-300 transition-colors">
//             Shop
//           </Link>
//           <Link href="/new-in" className="text-sm uppercase tracking-wide hover:text-gray-300 transition-colors">
//             New In
//           </Link>
//           <Link href="/collections" className="text-sm uppercase tracking-wide hover:text-gray-300 transition-colors">
//             Collections
//           </Link>
//         </nav>

//         <div className="flex items-center space-x-6">
//           <Link href="/cart" className="relative hover:text-gray-300 transition-colors">
//             <ShoppingCart size={22} />
//           </Link>

//           <Link href="/wishlist" className="relative hover:text-gray-300 transition-colors">
//             <Heart size={22} />
//           </Link>

//           <div className="relative">
//             <button
//               onClick={() => setIsProfileOpen(!isProfileOpen)}
//               className="flex items-center space-x-1 hover:text-gray-300 transition-colors"
//             >
//               <User size={22} />
//               <ChevronDown size={16} />
//             </button>

//             {isProfileOpen && (
//               <>
//                 <div
//                   className="fixed inset-0 z-10"
//                   onClick={() => setIsProfileOpen(false)}
//                 />

//                 <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-20 overflow-hidden">
//                   <Link
//                     href="/profile"
//                     className="block px-4 py-3 text-sm hover:bg-gray-100 transition-colors"
//                     onClick={() => setIsProfileOpen(false)}
//                   >
//                     Profile
//                   </Link>
//                   <Link
//                     href="/order-history"
//                     className="block px-4 py-3 text-sm hover:bg-gray-100 transition-colors"
//                     onClick={() => setIsProfileOpen(false)}
//                   >
//                     Order History
//                   </Link>
//                   <button
//                     className="w-full text-left px-4 py-3 text-sm hover:bg-gray-100 transition-colors border-t border-gray-200"
//                     onClick={() => setIsProfileOpen(false)}
//                   >
//                     Logout
//                   </button>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>

//       <nav className="md:hidden flex items-center justify-center space-x-6 mt-4 pt-4 border-t border-gray-800">
//         <Link href="/Shopping" className="text-xs uppercase tracking-wide hover:text-gray-300 transition-colors">
//           Shop
//         </Link>
//         <Link href="/new-in" className="text-xs uppercase tracking-wide hover:text-gray-300 transition-colors">
//           New In
//         </Link>
//         <Link href="/collections" className="text-xs uppercase tracking-wide hover:text-gray-300 transition-colors">
//           Collections
//         </Link>
//       </nav>
//     </header>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  X,
  Search,
  User,
  ChevronRight,
} from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full py-4 px-6 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/70 backdrop-blur-md shadow-lg text-black"
            : "bg-transparent text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button className="cursor-pointer" onClick={() => setIsMenuOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 7.5h16" />
              <path d="M4 12h16" />
              <path d="M4 16.5h16" />
            </svg>
          </button>

          <Link href="/" className="text-3xl font-serif tracking-wider">
            ISABELLA
          </Link>

          <Link href="/cart">
            <ShoppingCart size={24} />
          </Link>
        </div>
      </header>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 backdrop-blur-md bg-black/20 z-40"
            onClick={() => setIsMenuOpen(false)}
          />

          <div className="fixed top-0 left-0 h-full w-[40%] min-w-[320px] bg-[#f5f3f1] z-50 shadow-2xl flex flex-col">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-300">
              <Link href="/profile">
                <User size={20} />
              </Link>
              <button className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="px-6 py-4 border-b border-gray-300 flex items-center justify-between">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none w-full italic text-lg font-serif"
              />
              <Search size={20} />
            </div>

            <nav className="flex flex-col text-sm tracking-widest font-medium">
              <Link
                href="/shop"
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-5 border-b border-gray-300"
              >
                SHOP
              </Link>

              <Link
                href="/new-in"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between px-6 py-5 border-b border-gray-300"
              >
                <span>NEW IN</span>
                <ChevronRight size={18} />
              </Link>

              <Link
                href="/collections"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between px-6 py-5 border-b border-gray-300"
              >
                <span>COLLECTIONS</span>
                <ChevronRight size={18} />
              </Link>
            </nav>
          </div>
        </>
      )}
    </>
  );
}
