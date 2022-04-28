import matter from "gray-matter";
import fs from "fs";
import path from "path";

const files = fs.readdirSync(path.join("posts"));

const getPosts = () => {
    const allPostsData = files.map((fileName) => {
        const slug = fileName.replace(".mdx", "");
        const fileContents = fs.readFileSync(
          path.join(`posts/${slug}.mdx`),
          "utf8"
        );
        const { data } = matter(fileContents);
        return {
          slug,
          data,
        };
    });
    return {
        allPostsData
    };
};

const getPost = (slug) => {
    const fileContents = fs.readFileSync(path.join(`posts/${slug}.mdx`), "utf8");
    const { data, content } = matter(fileContents);
    return {
        data,
        content,
    };
};

export  { getPosts, getPost }; 