import Image from 'next/image';
import React from 'react';

const QualitiesSection: React.FC = () => {
  return (
    <div className="container md:my-20 mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 flex flex-col items-center">
          <Image className="h-16 w-16 mr-4 mb-4" height={32} width={32} alt='DELIVERY ICON' src={'/delivery.svg'}/>
          <div className='text-center'>
            <h3 className="text-lg font-bold">FREE AND FAST DELIVERY</h3>
            <p className="text-gray-600">Free delivery for all orders over $140</p>
          </div>
        </div>
        <div className="bg-white  p-6 flex flex-col items-center">
          <Image className="h-16 w-16 mr-4 mb-4" height={32} width={32} alt='CUSTOMER SERVICE ICON' src={'/customer-support.svg'}/>
          <div className='text-center'>
            <h3 className="text-lg font-bold">24/7 CUSTOMER SERVICE</h3>
            <p className="text-gray-600">Friendly 24/7 customer support</p>
          </div>
        </div>
        <div className="bg-white  p-6 flex flex-col items-center">
          <Image className="h-16 w-16 mr-4 mb-4" height={32} width={32} alt='CUSTOMER SERVICE ICON' src={'/verified-secure.svg'}/>
          <div className='text-center'>
            <h3 className="text-lg font-bold">MONEY BACK GUARANTEE</h3>
            <p className="text-gray-600">We return money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualitiesSection;