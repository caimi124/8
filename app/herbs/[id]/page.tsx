'use client'

import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Header } from '../../../components/Header'
import Footer from '../../../components/Footer'
import CommentSection from '../../../components/CommentSection'
import { prisma } from '../../../lib/prisma'

interface Herb {
  id: string
  name: string
  description: string
  image: string
  benefits: string[]
  symptoms: string[]
  dosage: string
  precautions: string[]
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 md:h-96">
              <Image
                src={herb.imageUrl}
                alt={herb.name}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-4">{herb.name}</h1>
              <p className="text-gray-600 mb-6">{herb.description}</p>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">功效</h2>
                <ul className="list-disc list-inside space-y-1">
                  {herb.benefits.map((benefit, index) => (
                    <li key={index} className="text-gray-600">{benefit}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">适用症状</h2>
                <ul className="list-disc list-inside space-y-1">
                  {herb.symptoms.map((symptom, index) => (
                    <li key={index} className="text-gray-600">{symptom}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <CommentSection
            herbId={herb.id}
            comments={herb.comments}
            onAddComment={async (content) => {
              'use server'
              // 这里需要实现添加评论的逻辑
            }}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
} 