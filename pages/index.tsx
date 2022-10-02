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
    <div className='px-10'>
        <h1 className="mt-24 mb-5 font-bold text-3xl dark:text-terminal dark:[text-shadow:0_4px_8px_rgba(0,200,0,0.4)]">About</h1>
        <div className='border-2 rounded-md border-green-500 border-dotted'>
        <h3 className='px-8 mt-10 mb-5 text-2xl'> 
        Welcome 🤙
        </h3>
          <p className='px-8 mt-10 mb-5'> 
          My name is James, I&apos;m a software engineer passionate about learning new technologies,
          surfing, and working on cars. 
          </p>

          <p className='px-8 mb-5'> 
          Technical Interests:
          </p>
          <ul className='list-disc px-12 mb-5'>
            <li> Docker </li>
            <li> Amazon Web Services </li>
            <li> Linux </li>
          </ul>

          <p className='px-8 mb-5'> 
          Some of the things you&apos;ll find on this website:
          </p>
          <ul className='list-disc px-12 mb-10'>
            <li>Go / Python / React Projects and Tutorials <strong className='dark:text-terminal dark:[text-shadow:0_4px_8px_rgba(0,200,0,0.4)]'>(Coming Soon)</strong></li>
            <li>Automotive Projects</li>
            <li> ¯\_(ツ)_/¯</li>
          </ul>
        </div>
      
      </div>
      <div className='px-10'>
        <h1 className="mt-24 mb-12 font-bold text-3xl dark:text-terminal dark:[text-shadow:0_4px_8px_rgba(0,200,0,0.4)]">Latest Posts</h1>
        {posts['allPostsData'].map((post) => (
          <PostCard
            key={post.slug}
            title={post.data.title}
            date={post.data.date}
            description={post.data.description}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  );
}