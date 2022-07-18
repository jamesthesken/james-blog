import Link from "next/link"

export default function PostCard(props) {
    return (
        <div>
            <Link href={`/posts/${props.slug}`}>
                <a><h2 className="mb-4 font-bold text-2xl">{props.title}</h2></a>
            </Link>
            <p className="mb-4 text-gray-500 text-sm">{props.date}</p>
            <p className="mb-4 text-sm italic">{props.description}</p>
            <Link href={`/posts/${props.slug}`}>
                <a className="text-indigo-800 text-sm">Read more</a>
            </Link>
            <div className="mt-4 mb-4 border-t border-gray-300"></div>
        </div>
    )
}