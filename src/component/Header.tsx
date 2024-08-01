import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white p-4 w-full fixed top-0 left-0 z-10 border-b-2 rounded-2xl">
      <div className="container mx-auto flex justify-between">
        <div>
        <img
          src='/assets/Logo.svg'
          alt="Logo"
          className="h-10 ml-10 w-100"
        />
        </div>
        <div>
        <img
          src='/assets/Logo1.svg'
          alt='Logo1'
          className='ml-730 h-8 w-8 mt-2'
        />
        </div>
        <div className='border-2 w-48 h-[48px] flex items-center ml-10 shadow-md rounded-md border-green-600 p-2'>
        <img
          className="w-6 h-6"
          src='/assets/Logo2.svg'
          alt="Profile"
        />
       <div className='flex flex-col ml-2'>
  <span className='text-xs font-medium'>Kelvin Roadster</span>
  <span className='text-xs text-gray-500 font-light'>Senior Manager</span>
</div>
<div>
<img
          className="w-6 h-6 ml-4"
          src='/assets/arrow.svg'
          alt="Profile"
        />

</div>
      </div>
       <div>
       <img
          src='/assets/Logo3.svg'
          alt='Logo3'
          className='ml-3 h-7 w-7 mt-2'
        />
       </div>
      </div>
    </header>
  );
};

export default Header;
