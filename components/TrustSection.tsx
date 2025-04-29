import Image from 'next/image'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    content: "这些草药产品彻底改变了我的睡眠质量。纯天然的配方让我感到安心，而且效果显著。",
    author: "Sarah Johnson",
    role: "健康顾问",
    rating: 5
  },
  {
    content: "作为一名长期受慢性疼痛困扰的患者，这些中医草药给了我新的希望。科学验证的配方让我更有信心。",
    author: "Michael Chen",
    role: "软件工程师",
    rating: 5
  },
  {
    content: "产品质量非常好，包装精美，说明详细。客服团队也很专业，解答了我很多疑问。",
    author: "Emma Wilson",
    role: "瑜伽教练",
    rating: 5
  }
]

const certifications = [
  { name: "GMP认证", image: "/images/certifications/gmp.png" },
  { name: "有机认证", image: "/images/certifications/organic.png" },
  { name: "ISO认证", image: "/images/certifications/iso.png" },
  { name: "FDA注册", image: "/images/certifications/fda.png" }
]

const partners = [
  { name: "Nature's Best", logo: "/images/partners/partner1.png" },
  { name: "Health Times", logo: "/images/partners/partner2.png" },
  { name: "Wellness Journal", logo: "/images/partners/partner3.png" },
  { name: "Medical Review", logo: "/images/partners/partner4.png" }
]

export function TrustSection() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 客户评价 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            客户真实评价
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            听听他们怎么说
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <FaQuoteLeft className="h-8 w-8 text-primary-600 mb-4" />
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 认证标志 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            权威认证
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            严格的质量控制，确保产品安全可靠
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative h-20 w-20 mb-2">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-gray-600">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 合作伙伴 */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            合作伙伴
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            值得信赖的行业伙伴
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="relative h-12 w-32">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 