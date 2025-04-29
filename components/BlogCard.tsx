import Image from 'next/image'
import Link from 'next/link'
import { FaCalendar, FaUser, FaTags } from 'react-icons/fa'

interface BlogCardProps {
  post: {
    id: string
    title: string
    excerpt: string
    coverImage: string
    author: string
    date: string
    tags: string[]
    readTime: string
  }
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      <Link href={`/blog/${post.id}`}>
        <div className="relative h-48">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
            {post.title}
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center text-sm text-gray-500 space-x-4">
            <div className="flex items-center">
              <FaUser className="mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <FaCalendar className="mr-2" />
              {post.date}
            </div>
            <div className="flex items-center">
              <FaTags className="mr-2" />
              {post.readTime}
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  )
} 