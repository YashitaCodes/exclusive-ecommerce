"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';
import { Twitter, Instagram, Linkedin } from 'lucide-react';
import QualitiesSection from '@/components/sections/QualitiesSection';

const OurStory = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  const stats = [
    { number: 10.5, label: "Sellers active our site", icon: "sellers.png", suffix: "k" },
    { number: 33, label: "Monthly Product Sale", icon: "sales.png", highlight: true, suffix: "k" },
    { number: 45.5, label: "Customer active in our site", icon: "customers.png", suffix: "k" },
    { number: 25, label: "Anual gross sale in our site", icon: "sales-icon.png", suffix: "k" },
  ];

  const team = [
    {
      name: "Tom Cruise",
      position: "Founder & Chairman",
      image: "/tom-cruise.png",
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Emma Watson",
      position: "Managing Director",
      image: "/emma-watson.png",
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
    {
      name: "Will Smith",
      position: "Product Designer",
      image: "/will-smith.png",
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#"
      }
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
    <p className='pb-5 text-gray-600 font-semibold'><a href="/">Home</a> / <span className='text-black'>About</span></p>
      {/* Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 md:pt-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Launched in 2015, Exclusive is South Asia's premiere online shopping 
              marketplace with an active presence in Bangladesh. Supported 
              by wide range of tailored marketing, data and service solutions, 
              Exclusive has 10,500 sellers and 300 brands and serves 3 
              millions customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a 
              very fast. Exclusive offers a diverse assortment in categories 
              ranging from consumer.
            </p>
          </div>
        </div>
        <div className="relative h-[400px]">
          <Image
            src="/shopping-friends.png"
            alt="Two friends shopping together"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div 
        ref={statsRef}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
      >
        {stats.map((stat, index) => (
          <div 
            key={index}
            className={`transform transition-all duration-500 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            } delay-${index * 50} cursor-default p-6 rounded-lg text-center hover:bg-primary hover:text-white ${
              stat.highlight ? 'bg-gray-100' : 'bg-gray-100'
            }`}
          >
            <div className="flex justify-center mb-3">
              <div className="w-12 h-12 flex items-center justify-center">
                <Image
                  src={`/${stat.icon}`}
                  alt={stat.label}
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className="text-2xl font-bold mb-1">
              {isVisible && (
                <CountUp
                  start={0}
                  end={stat.number}
                  duration={2.5}
                  decimals={stat.number % 1 !== 0 ? 1 : 0}
                  suffix={stat.suffix}
                  useEasing={true}
                >
                  {({ countUpRef }) => (
                    <div>
                      <span ref={countUpRef} />
                    </div>
                  )}
                </CountUp>
              )}
            </div>
            <div className="text-sm">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Team Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {team.map((member, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-80">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.position}</p>
              <div className="flex items-center space-x-4">
                <a 
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-400 transition-colors duration-300"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href={member.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <QualitiesSection/>
    </div>
  );
};

export default OurStory;
