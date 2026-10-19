
import {
  FaUtensils,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaTruck,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10 mt-12">
      <div className="max-w-6xl mx-auto">

        {/* Company logo and name */}
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-yellow-400 text-gray-900 p-3 rounded-xl">
            <FaUtensils size={28} />
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              Meraki Restaurant
            </h2>
            <p className="text-gray-400 text-sm">
              Good food, made with love.
            </p>
          </div>
        </div>

        <p className="text-gray-400 mb-8">
          Fresh food and a delightful dining experience.
        </p>

        {/* Footer information columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Contact information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact Us
            </h3>

            <div className="space-y-3 text-gray-300">
              <p className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-yellow-400 shrink-0" />
                BTW-02, Jhapa, Nepal
              </p>

              <p className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 text-yellow-400 shrink-0" />
                <a
                  href="tel:9810000012"
                  className="hover:text-yellow-400 transition-colors"
                >
                  9810000012
                </a>
              </p>

              <p className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-yellow-400 shrink-0" />
                <a
                  href="mailto:merakirestaurant12@gmail.com"
                  className="break-all hover:text-yellow-400 transition-colors"
                >
                  merakirestaurant12@gmail.com
                </a>
              </p>

              <p className="flex items-start gap-3">
                <FaClock className="mt-1 text-yellow-400 shrink-0" />
                10:00 AM – 5:00 PM
              </p>
            </div>
          </div>

          {/* Delivery information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Delivery Information
            </h3>

            <div className="flex items-start gap-3 text-gray-300">
              <FaTruck className="mt-1 text-yellow-400 shrink-0" />
              <div>
                <p className="font-medium text-white">
                  Delivery within BTM only
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Please provide your correct delivery address
                  when placing an order.
                </p>
              </div>
            </div>
          </div>

          {/* Legal information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Legal Information
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <Link
                  to="/terms"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  to="/privacy"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="/refund-policy"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Cancellation & Refund Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-5 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Meraki Restaurant.
            All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Please review our policies before placing an order.
          </p>
        </div>

      </div>
    </footer>
  );
}
