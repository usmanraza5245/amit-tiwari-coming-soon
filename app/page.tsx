import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
// import CountdownTimer from './components/CountdownTimer';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#080a15] text-white overflow-hidden">
      <div className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <div className="max-w-5xl w-full bg-[#0b0e1c] text-white rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
          {/* Left Section */}
          <div className="p-10 flex flex-col justify-center">
            <h1 className="text-5xl font-bold leading-tight mb-4">
              We are <br /> Coming soon
            </h1>
            <p className="text-gray-400 mb-4">
              <strong className="text-orange-500 text-xl">Amit Tiwari</strong> —
              broker at Gold Estate Realty inc, serving Brampton and surrounding communities,
              focused on delivering transparent and reliable service
            </p>

            <div className="text-sm text-gray-300 mb-6 space-y-2">
              <p className="flex items-center gap-2">
                <FaPhone className="text-orange-500" />
                <a href="tel:4168582564" className="text-white hover:underline">
                  (437) 217-7574
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-orange-500" />
                <a
                  href="mailto:duranoht@hotmail.com"
                  className="text-white hover:underline"
                >
                  tech@houzgpt.ca
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-orange-500" />
                79 BRAMSTEELE Road Unit #2, BRAMPTON, Ontario L6W3K6
              </p>
            </div>

            <div className="text-sm text-gray-500 flex items-center gap-3">
              Stay Connect:
              <a
                href="https://www.facebook.com/amit.tiwari.3958914"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-400 text-lg"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/amit.realtor82"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-400 text-lg"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/amit-tiwari-796b42271/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-400 text-lg"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Right Section with Transparent Image - Hidden on Mobile */}
          <div className="relative w-full h-96 md:h-auto hidden md:block">
            <Image
              src="/amit-tiwari-new.png"
              alt="Amit Tiwari"
              layout="fill"
              objectFit="contain"
              objectPosition="right center"
              className="object-cover"
            />
            {/* Countdown Timer */}
            {/* Name & Designation in Circular Badge */}
            <div className="absolute bottom-6 left-6 w-52 h-52 bg-orange-500 text-white rounded-full flex flex-col items-center justify-center shadow-xl text-center px-4">
              <p className="font-extrabold text-2xl leading-tight tracking-wide text-white drop-shadow-md">
                Amit Tiwari
              </p>
              <p className="text-base mt-2 font-medium text-white/90 italic">
                Broker at
              </p>
              <p className="text-sm mt-1 font-semibold uppercase tracking-wider text-white/90 text-center leading-tight">
                Gold Estate Realty inc
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
