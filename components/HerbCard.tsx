import Image from 'next/image'
import Link from 'next/link'

interface HerbCardProps {
  name: string
  description: string
  imageUrl: string
  link: string
}

const HerbCard = ({ name, description, imageUrl, link }: HerbCardProps) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        href={link}
        className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
      >
        查看详情
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  )
}

export default HerbCard 