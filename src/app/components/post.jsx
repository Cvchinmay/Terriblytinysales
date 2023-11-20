import React from 'react';

function Post({ title, body, authorName, date, views }) {

  return (

    <div>

      {/* Title */}
      <div className='flex justify-between'>
      <h2 className='text-gray-800 font-bold mb-6'>{title}</h2>
      <span>👍</span>
      </div>
      

      {/* Body */}
      <p className='mb-6'>{body}</p>

      {/* Footer */}
      <footer className='mb-6'>

      <span className='text-blue-500'>musing</span> by {authorName} - {date} • 1 min Read • {views} views 

      </footer>

    </div>

  );

}

export default Post;

