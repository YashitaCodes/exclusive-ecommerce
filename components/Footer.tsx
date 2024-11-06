import React from 'react';
import { ArrowRight, Facebook, Twitter, Instagram, Linkedin, SendHorizontal } from 'lucide-react';
import Image from 'next/image';

export const experimental_ppr = true;

const Footer = () => {
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
      console.log(e)
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Exclusive Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Exclusive</h2>
          <div className="space-y-2">
            <h3 className="text-lg">Subscribe</h3>
            <p className="text-sm">Get 10% off your first order</p>
            <form className="relative group mt-5">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border border-white/20 rounded px-4 py-2 text-sm 
                         transition-all duration-300 focus:border-white focus:outline-none
                         group-hover:border-white/40"
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 -translate-y-1/2 transition-transform duration-300
                         hover:scale-110 hover:text-primary"
              >
                <SendHorizontal className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Support Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Support</h2>
          <div className="space-y-2 text-sm">
            <p className="hover:text-gray-300 transition-colors duration-300">111 Bijoy sarani, Dhaka,</p>
            <p className="hover:text-gray-300 transition-colors duration-300">DH 1515, Bangladesh.</p>
            <p className="relative group cursor-pointer">
              <span className="transition-colors duration-300 group-hover:text-primary">exclusive@gmail.com</span>
            </p>
            <p className="relative group cursor-pointer">
              <span className="transition-colors duration-300 group-hover:text-primary">+88015-88888-9999</span>
            </p>
  </div>
        </div>

        {/* Account Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Account</h2>
          <ul className="space-y-2 text-sm">
            {['My Account', 'Login / Register', 'Cart', 'Wishlist', 'Shop'].map((item) => (
              <li key={item}>
                <a href={`/${item.toLowerCase().replace(/ \/ /g, '-').replace(/ /g, '-')}`} 
                   className="relative group inline-block">
                  <span className="transition-colors duration-300 group-hover:text-primary">{item}</span>
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Link Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Quick Link</h2>
          <ul className="space-y-2 text-sm">
            {['Privacy Policy', 'Terms Of Use', 'FAQ', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`/${item.toLowerCase().replace(/ /g, '-')}`} 
                   className="relative group inline-block">
                  <span className="transition-colors duration-300 group-hover:text-primary">{item}</span>
                  <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Download App Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Download App</h2>
          <p className="text-sm">Save $3 with App New User Only</p>
          
          <div className="flex space-x-4">
            <div className="w-24 h-24 transition-transform duration-300">
              <Image src="/qr-code.png" height={96} width={96} alt="QR Code" className="w-full" />
            </div>
            <div className="space-y-2">
              <Image src="/google-play.png" height={40} width={120} alt="Google Play" className="h-10 transition-all duration-300 hover:brightness-110" />
              <Image src="/app-store.png" height={40} width={120} alt="Google Play" className="h-10 transition-all duration-300 hover:brightness-110" />
            </div>
          </div>

          <div className="flex space-x-4 pt-4">
            {[
              { Icon: Facebook, color: 'hover:text-blue-500 hover:fill-blue-500' },
              { Icon: Twitter, color: 'hover:text-primary hover:fill-primary' },
              { Icon: Instagram, color: 'hover:text-pink-500 hover:fill-pink-500' },
              { Icon: Linkedin, color: 'hover:text-blue-600 hover:fill-blue-600' }
            ].map(({ Icon, color }, index) => (
              <a key={index} href="#" 
                 className={`transition-all duration-300 hover:scale-110 ${color}`}>
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
        <p className="transition-colors duration-300 hover:text-white">
          © Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;