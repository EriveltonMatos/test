import { FaPhoneAlt } from 'react-icons/fa';

export default function IconPhone() {
  return (
    <div>
      <a 
        href="tel:+5511999999999" 
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition flex items-center justify-center animate-spin"
        style={{ zIndex: 1000 }} 
      >
        <FaPhoneAlt className="text-xl" />
      </a>
    </div>
  );
}

