import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import imageSize from "rehype-img-size";
import { getPosts, getPost } from "../../helpers/getPosts";


export default function Post({ data, content }) {
    return (
      <div className="ml-10">
        <h1 className="font-bold text-5xl mt-24 mb-12">{data.title}</h1>
        <time className="text-gray-500 italic">{data.date}</time>
        <p className="prose dark:prose-invert mt-12">
          <MDXRemote {...content} />
        </p>
      </div>
    );
};


export const getStaticPaths = async () => {
    const posts = await getPosts();
    const paths = posts['allPostsData'].map((post) => ({ params: { slug: post.slug } }));
    return {
      paths,
      fallback: false,
    };
  };

export const getStaticProps = async ({ params }) => {
    const post = await getPost(params.slug);
    const mdxSource = await serialize(post.content, {
      mdxOptions: {
        rehypePlugins: [[imageSize, { dir: "public" }]],
      },
    });
    return {
        props: {
        data: post.data,
        content: mdxSource,
        },
    };
};

