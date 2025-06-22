import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import CountdownTimer from './components/CountdownTimer';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#080a15] text-white overflow-hidden">
      <div className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <div className="max-w-5xl w-full bg-[#0b0e1c] text-white rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {/* Left Section */}
          <div className="p-10 flex flex-col justify-center">
            <h1 className="text-5xl font-bold leading-tight mb-4">We are <br /> Coming soon</h1>
            <p className="text-gray-400 mb-4">
              <strong className="text-orange-500 text-xl">Amit Tiwari</strong> — Real Estate Sales Representative at 82 Realty, serving Brampton and surrounding areas. Providing clients with professional, honest, and top-tier service in the GTA real estate market.
            </p>

            <div className="text-sm text-gray-300 mb-6 space-y-2">
              <p className="flex items-center gap-2">
                <FaPhone className="text-orange-500" />
                <a href="tel:4168582564" className="text-white hover:underline">(416) 858-2564</a>
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-orange-500" />
                <a href="mailto:amit@82realty.ca" className="text-white hover:underline">amit@82realty.ca</a>
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-orange-500" />
                Brampton, Ontario
              </p>
            </div>

            {/* <form className="flex mb-6">
              <input
                type="email"
                placeholder="Enter email address"
                className="flex-grow p-3 rounded-l-md border-none bg-[#1f1f1f] text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="bg-orange-500 text-white px-5 py-3 rounded-r-md hover:bg-orange-600"
              >
                NOTIFY ME
              </button>
            </form> */}

            <div className="text-sm text-gray-500 flex items-center gap-3">
              Stay Connect:
              <a href="https://www.facebook.com/amit.tiwari.3958914" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400 text-lg">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/amit.realtor82" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400 text-lg">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/amit-tiwari-796b42271/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400 text-lg">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Right Section with Transparent Image - Hidden on Mobile */}
          <div className="relative w-full h-96 md:h-auto hidden md:block">
            <Image
              src="/amit-tiwari.png"
              alt="Amit Tiwari"
              layout="fill"
              objectFit="contain"
              objectPosition="right center"
              className="object-cover"
            />
            {/* Countdown Timer */}
            {/* <div className="absolute bottom-6 left-6 w-40 h-40 bg-orange-500 text-white rounded-full flex flex-col items-center justify-center shadow-xl">
              <p className="text-sm mb-1">Launching in.</p>
              <div className="text-center">
                <p className="text-lg font-bold">451 : 04 : 54 : 56</p>
                <p className="text-xs">Days Hours Mins Secs</p>
              </div>
            </div> */}
            <CountdownTimer />
          </div>
        </div>
      </div>
    </main>
  );
}
