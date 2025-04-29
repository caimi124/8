'use client'

import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Header } from '../../../components/Header'
import Footer from '../../../components/Footer'
import CommentSection from '../../../components/CommentSection'
import { prisma } from '../../../lib/prisma'
import { addComment } from '../../actions/comments'

interface Herb {
  id: string
  name: string
  description: string
  image: string
  benefits: string[]
  symptoms: string[]
  comments: {
    id: string
    content: string
    user: {
      name: string
    }
    createdAt: string
  }[]
}

interface PageProps {
  params: {
    id: string
  }
}

async function getHerb(id: string) {
  const herb = await prisma.herb.findUnique({
    where: { id },
    include: {
      comments: {
        include: {
          user: {
            select: {
              name: true
            }
          }
        },
        orderBy: {
          createdAt: 'desc'
        }
      }
    }
  })

  if (!herb) {
    notFound()
  }

  return herb
}

export default async function HerbPage({ params }: PageProps) {
  const herb = await getHerb(params.id)
  
  if (!herb) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={herb.image}
                alt={herb.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-4">{herb.name}</h1>
              <p className="text-gray-600 mb-6">{herb.description}</p>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">功效</h2>
                <ul className="list-disc list-inside">
                  {herb.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="text-gray-700">{benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">适用症状</h2>
                <ul className="list-disc list-inside">
                  {herb.symptoms.map((symptom: string, index: number) => (
                    <li key={index} className="text-gray-700">{symptom}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <CommentSection
              herbId={herb.id}
              comments={herb.comments}
              onAddComment={addComment}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 