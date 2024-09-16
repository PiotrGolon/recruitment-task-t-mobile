"use client";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-indigo-500 to-indigo-400  text-white py-6">
      <div className="max-w-screen-2xl mx-auto lg:px-14 flex flex-col lg:flex-row justify-between items-center">
        {/* Navigation Links */}
        <div className="flex space-x-4 mb-4 lg:mb-0">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/feedback" className="hover:underline">
            Feedback
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-200">
          © {new Date().getFullYear()} THN Stories. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
