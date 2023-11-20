import React from 'react';

import Navbar from './components/navbar.jsx';

import Profile from './components/profile.jsx';

import Post from './components/post.jsx';

const App = () => {

  return (

    <main className=" w-full h-full m-0 border, bg-white">

      <Navbar />

      <Profile />

      <Post
        
        title="Useful products"

        body="Interesting facts you’ll want to share with everyone. Random fun facts catch us off guard in …
        Fact: The world’s oldest wooden wheel has been around for more than 5,000 years. It was …
        Fact: Dead skin cells are a main ingredient in household dust.y"

        authorName="Chinmay Mungarh"

        date="August 26"

        views={500}

      /><Post

      title="Company motto"

      body="Follow these steps when asked to tell something interesting about yourself in an interview: Related and  Dead skin cells are a main ingredient in household dust. Here’s an interesting science …
      Fact: Sudan has more pyramids than any country in the world. Not only does Sudan have"

      authorName="Chinmay Mungarh"

      date="july 10"

      views={196}

    /><Post

    title="Main components"

    body="Describe yourself in one word” interview question. Ambitious, bold, creative, positive, passionate, empathic, transparent, honest, resilient, humble. Leader,"

    authorName="Chinmay Mungarh"

    date="may 10"

    views={188}

  /><Post

  title="Main Leaders of company"

  body=" It could be one of the toughest questions when asked impulsively. However, people who like sharing their achievements and personal life with others may find it"

  authorName="Chinmay Mungarh"

  date="september 22"

  views={104}

/><Post

title="Profits "

body="Mention experiences and successes as they relate to the job Begin by reviewing the job description. Notice what skills the job requires and identify recent actions of yours that show them."

authorName="Chinmay Mungarh"

date="july 5"

views={106}

/>

    </main>

  );

};

export default App; 