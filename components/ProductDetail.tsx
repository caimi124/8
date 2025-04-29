'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FaStar, FaChevronDown, FaChevronUp, FaHeart, FaShare, FaShoppingCart } from 'react-icons/fa'

interface ProductDetailProps {
  product: {
    name: string
    description: string
    images: string[]
    price: number
    benefits: string[]
    ingredients: {
      name: string
      description: string
      percentage: number
    }[]
    usage: {
      dosage: string
      timing: string
      precautions: string[]
    }
    faqs: {
      question: string
      answer: string
    }[]
    reviews: {
      author: string
      rating: number
      comment: string
      date: string
    }[]
    relatedProducts: {
      id: string
      name: string
      image: string
      price: number
    }[]
  }
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)
  const [showShareModal, setShowShareModal] = useState(false)

  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value)
    }
  }

  const handleShare = () => {
    setShowShareModal(true)
    // 这里可以添加实际的分享功能
  }

  return (
    <div className="bg-white">
      {/* 产品基本信息 */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 图片画廊 */}
          <div className="space-y-4">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`relative h-24 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-primary-600' : ''
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image}
                    alt={`${product.name} - 图片 ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <div className="flex space-x-4">
                <button
                  className={`p-2 rounded-full ${
                    isFavorite ? 'text-red-500' : 'text-gray-400'
                  } hover:text-red-500 transition-colors`}
                  onClick={() => setIsFavorite(!isFavorite)}
                >
                  <FaHeart className="h-6 w-6" />
                </button>
                <button
                  className="p-2 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
                  onClick={handleShare}
                >
                  <FaShare className="h-6 w-6" />
                </button>
              </div>
            </div>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="text-2xl font-bold text-primary-600 mb-6">
              ¥{product.price}
            </div>

            {/* 数量选择器 */}
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-gray-700">数量：</span>
              <div className="flex items-center border rounded-lg">
                <button
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                  onClick={() => handleQuantityChange(quantity - 1)}
                >
                  -
                </button>
                <span className="px-4 py-2 border-x">{quantity}</span>
                <button
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                  onClick={() => handleQuantityChange(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <button className="btn-primary w-full md:w-auto flex items-center justify-center space-x-2">
              <FaShoppingCart className="h-5 w-5" />
              <span>立即购买</span>
            </button>
          </div>
        </div>
      </div>

      {/* 功效说明 */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">功效说明</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 主要成分 */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">主要成分</h2>
          <div className="space-y-6">
            {product.ingredients.map((ingredient, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{ingredient.name}</h3>
                  <span className="text-primary-600 font-medium">{ingredient.percentage}%</span>
                </div>
                <p className="text-gray-600">{ingredient.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 服用方法 */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">服用方法</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">用量</h3>
              <p className="text-gray-600">{product.usage.dosage}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">服用时间</h3>
              <p className="text-gray-600">{product.usage.timing}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">注意事项</h3>
              <ul className="list-disc list-inside text-gray-600">
                {product.usage.precautions.map((precaution, index) => (
                  <li key={index}>{precaution}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 常见问题 */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">常见问题</h2>
          <div className="space-y-4">
            {product.faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {expandedFaq === index ? (
                    <FaChevronUp className="text-gray-500" />
                  ) : (
                    <FaChevronDown className="text-gray-500" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 用户评价 */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">用户评价</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">{review.author}</p>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                  <div className="flex items-center">
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className="h-5 w-5 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 相关产品推荐 */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">相关产品推荐</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {product.relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h3>
                  <p className="text-primary-600 font-bold">¥{relatedProduct.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 分享模态框 */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h3 className="text-xl font-bold text-gray-900 mb-4">分享产品</h3>
            <div className="flex justify-center space-x-4">
              <button className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                微信
              </button>
              <button className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-500">
                微博
              </button>
              <button className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600">
                复制链接
              </button>
            </div>
            <button
              className="mt-6 w-full py-2 text-gray-600 hover:text-gray-900"
              onClick={() => setShowShareModal(false)}
            >
              关闭
            </button>
          </div>
        </div>
      )}
    </div>
  )
} 