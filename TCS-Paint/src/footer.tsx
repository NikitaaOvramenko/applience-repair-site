import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
        <div className="flex gap-6 flex-row md:flex-col  text-lg md:text-base font-semibold">
          <a
            href="https://wa.me/14243464307"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-yellow-400 transition"
          >
            <FaPhoneAlt className="mb-1 text-md" />
            <span>+1 (424)-346-4307</span>
          </a>

          <a
            href="mailto:tcspaintsfl@gmail.com"
            className="flex items-center gap-1 hover:text-yellow-400 transition"
          >
            <MdOutlineEmail className="mb-1 text-lg" />
            <span>tcspaintsfl@gmail.com</span>
          </a>
        </div>
        {/* Left section */}
        <div className="flex flex-col  md:items-start text-sm md:text-base gap-1">
          <p>
            &copy; {new Date().getFullYear()} Technological Construction Service
          </p>
          <p>All rights reserved.</p>
          <p>Los Angeles, CA</p>
        </div>

        {/* Right section */}
      </div>
    </footer>
  );
}
