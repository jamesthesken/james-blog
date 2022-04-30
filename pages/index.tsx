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
    <div className='px-10'>
      <h1 className="mt-24 mb-12 font-bold text-3xl">Latest Posts</h1>
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
  );
}