import "./index.css";
import { FaPhoneAlt, FaUserTie, FaMotorcycle } from "react-icons/fa";

const deliveryStaff = [
  { id: 1, name: "Delivery Staff 3", phone: "9800000001" },
  { id: 2, name: "Delivery Staff 2", phone: "9800000002" },
  { id: 3, name: "Delivery Staff 3", phone: "9800000003" },
  { id: 4, name: "Delivery Staff 4", phone: "9800000004" },
  { id: 5, name: "Delivery Staff 5", phone: "9800000005" },
];

export default function DeliveryDetails() {
  const managerPhone = "9810000000";

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold text-center mb-3">
          Delivery Details
        </h1>

        <p className="text-gray-600 text-center mb-10">
          Contact our team for delivery assistance.
        </p>

        {/* Emergency Manager Contact */}
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-10 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <FaUserTie className="text-red-600 text-2xl" />
            <h2 className="text-xl font-bold text-red-700">
              Urgent / Emergency Contact
            </h2>
          </div>

          <p className="text-gray-700 mb-4">
            For urgent delivery issues or emergencies, please contact
            our restaurant manager.
          </p>

          <a
            href={`tel:${managerPhone}`}
            className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            <FaPhoneAlt />
            Call Manager: {managerPhone}
          </a>
        </div>

        {/* Delivery Staff Contacts */}
        <h2 className="text-2xl font-bold mb-6">
          Delivery Staff Contacts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {deliveryStaff.map((staff) => (
            <div
              key={staff.id}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <FaMotorcycle className="text-blue-600 text-2xl" />

                <h3 className="text-lg font-semibold">
                  {staff.name}
                </h3>
              </div>

              <p className="text-gray-600 mb-4">
                Contact: {staff.phone}
              </p>

              <a
                href={`tel:${staff.phone}`}
                className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800"
              >
                <FaPhoneAlt />
                Call Staff
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


