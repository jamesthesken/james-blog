import Head from 'next/head'
import Image from 'next/image'
import { getPosts } from '../helpers/getPosts';
import PostCard from '../components/PostCard';

export const getStaticProps = () => {
  const posts = getPosts();
  console.log(posts)
  return {
    props: {
      posts,
    },
  };
};



export default function Home({ posts }) {
  return (
    <div>
      <h1 className="px-10 mt-24 mb-5 font-bold text-3xl dark:text-terminal dark:[text-shadow:0_4px_8px_rgba(0,200,0,0.4)]">More About</h1>
      <div className='px-10'>
        <div className='border-2 border-dotted rounded-md border-green-500'>
          <p className='p-8 dark:text-slate-200'> Born and raised in Hawaii, I spent most of my time growing up surfing and messing around at the beach. 
          Sometime in middle school I became obsessed with Cold War era Sci-Fi, Arthur C. Clarke was my favorite author. 
          </p>
          <p className='px-8 dark:text-slate-200 mb-5'> In 2019 I graduated with a degree in Mechanical Engineering from the Univeristy of
          Hawaii at Manoa. Throughout school however, I had always carried an interest in software development, learning Python and different web
          technologies - HTML/CSS/JavaScript. I find the most satisfation by working on difficult problems that make sure I never stay
          comfortable in knowing what I already know.
          </p>
          
          <p className='px-8 mb-5 dark:text-slate-200'> 
          Primary Technical Interests:
          </p>
          <ul className='list-disc px-12 mb-10'>
            <li> Systems Design / Integration </li>
            <li> Peer-to-peer networks </li>
            <li> Terminal User Interfaces </li>
          </ul>

        </div>

      </div>
      <h1 className="px-10 mt-24 mb-5 font-bold text-3xl dark:text-terminal dark:[text-shadow:0_4px_8px_rgba(0,200,0,0.4)]">Looking to Hire?</h1>
      <div className='px-10'>
        <div className='border-2 border-dotted rounded-md border-green-500'>
          <p className='px-8 mt-8 mb-5 dark:text-slate-200'> 
          Programming Languages:
          </p>
          <ul className='list-disc px-12 mb-5'>
            <li> Go </li>
            <li> Python </li>
            <li> ReactJS </li>
          </ul>
          <p className='px-8 mb-5 dark:text-slate-200'> 
          Technologies:
          </p>
          <ul className='list-disc px-12 mb-10'>
            <li> Docker </li>
            <li> Amazon Web Services </li>
            <li> Linux </li>
          </ul>

        </div>

      </div>
    </div>
  );
}