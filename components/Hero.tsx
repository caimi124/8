import Image from 'next/image'
import { FaLeaf, FaFlask, FaShieldAlt } from 'react-icons/fa'

export function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-green-50 to-white overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <Image
            src="/images/hero-pattern.png"
            alt="Decorative pattern"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">重新发现古老智慧</span>
                <span className="block text-primary-600">焕发现代健康</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                基于科学研究的传统中医智慧，为您提供纯天然、无添加的养生方案。
                千年传承，现代验证。
              </p>
              
              {/* 特性展示 */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <FaLeaf className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="font-medium">100% 纯天然</p>
                    <p>无添加 · 无转基因</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <FaFlask className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="font-medium">科学研究支持</p>
                    <p>临床验证 · 数据支持</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <FaShieldAlt className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="font-medium">安全可靠</p>
                    <p>品质保证 · 可追溯</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 sm:mt-12">
                <a
                  href="/herbs"
                  className="btn-primary inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm"
                >
                  探索草药库
                </a>
                <a
                  href="/symptoms"
                  className="ml-4 btn-secondary inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md"
                >
                  症状查询
                </a>
              </div>
            </div>

            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                  <Image
                    src="/images/hero-herbs.jpg"
                    alt="Traditional Chinese herbs"
                    width={600}
                    height={400}
                    className="w-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 