import React from 'react';

function Navbar() {
  return (
    <div className='w-full border rounded-1g px-6 py-3 flex justify-between bg-black text-white'>
      <div>TTT STORIES</div>
      <div>
        <button className='bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Courses
        </button>
      </div>
    </div>
  );
}

export default Navbar;