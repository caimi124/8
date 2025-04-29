import { BlogCard } from '../../components/BlogCard'
import { FaSearch } from 'react-icons/fa'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import { useState, useMemo } from 'react'
import SearchBar from '../../components/SearchBar'

type Locale = 'zh' | 'en'

interface BlogPost {
  id: string
  title: {
    zh: string
    en: string
  }
  excerpt: {
    zh: string
    en: string
  }
  coverImage: string
  author: {
    zh: string
    en: string
  }
  date: string
  tags: {
    zh: string[]
    en: string[]
  }
  readTime: {
    zh: string
    en: string
  }
}

// 示例博客文章数据
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: {
      zh: "灵芝：传统中药的现代科学解读",
      en: "Ganoderma: Modern Scientific Interpretation of Traditional Chinese Medicine"
    },
    excerpt: {
      zh: "探索灵芝的化学成分、药理作用及其在现代医学中的应用。通过科学研究的视角，深入了解这种传统中药的价值。",
      en: "Explore the chemical composition, pharmacological effects, and modern medical applications of Ganoderma. Understand the value of this traditional Chinese medicine through scientific research."
    },
    coverImage: "/images/blog/lingzhi-science.jpg",
    author: {
      zh: "张教授",
      en: "Prof. Zhang"
    },
    date: "2024-03-20",
    tags: {
      zh: ["灵芝", "科学研究", "免疫调节"],
      en: ["Ganoderma", "Scientific Research", "Immunomodulation"]
    },
    readTime: {
      zh: "8分钟",
      en: "8 min"
    }
  },
  {
    id: "2",
    title: {
      zh: "中医养生：四季调养之道",
      en: "TCM Health Preservation: Seasonal Regimen"
    },
    excerpt: {
      zh: "根据中医理论，详细介绍春夏秋冬四季的养生要点，以及如何通过中药调理来适应季节变化。",
      en: "Detailed introduction to seasonal health preservation according to TCM theory, and how to adapt to seasonal changes through herbal medicine."
    },
    coverImage: "/images/blog/seasonal-health.jpg",
    author: {
      zh: "李医生",
      en: "Dr. Li"
    },
    date: "2024-03-18",
    tags: {
      zh: ["养生", "四季调养", "中医理论"],
      en: ["Health Preservation", "Seasonal Regimen", "TCM Theory"]
    },
    readTime: {
      zh: "10分钟",
      en: "10 min"
    }
  },
  {
    id: "3",
    title: {
      zh: "现代科技助力中药研发",
      en: "Modern Technology in TCM Development"
    },
    excerpt: {
      zh: "探讨人工智能、大数据等现代科技如何推动中药研发创新，提高中药的标准化和现代化水平。",
      en: "Explore how modern technologies like AI and big data are driving innovation in TCM development and improving standardization and modernization."
    },
    coverImage: "/images/blog/modern-tech.jpg",
    author: {
      zh: "王研究员",
      en: "Researcher Wang"
    },
    date: "2024-03-15",
    tags: {
      zh: ["科技创新", "中药研发", "现代化"],
      en: ["Tech Innovation", "TCM Development", "Modernization"]
    },
    readTime: {
      zh: "12分钟",
      en: "12 min"
    }
  },
  {
    id: "4",
    title: {
      zh: "常见中药材的选购指南",
      en: "Guide to Purchasing Common Chinese Herbs"
    },
    excerpt: {
      zh: "详细介绍如何辨别优质中药材，包括外观、气味、质地等方面的判断标准，帮助消费者做出明智选择。",
      en: "Detailed guide on identifying quality Chinese herbs, including appearance, smell, and texture, to help consumers make informed choices."
    },
    coverImage: "/images/blog/herb-selection.jpg",
    author: {
      zh: "陈药师",
      en: "Pharmacist Chen"
    },
    date: "2024-03-12",
    tags: {
      zh: ["中药材", "选购指南", "品质鉴别"],
      en: ["Chinese Herbs", "Purchase Guide", "Quality Assessment"]
    },
    readTime: {
      zh: "6分钟",
      en: "6 min"
    }
  }
]

interface BlogPageProps {
  locale: Locale
}

export default function BlogPage({ locale }: BlogPageProps) {
  const { t } = useTranslation('common')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = useMemo(() => {
    if (!searchQuery) return blogPosts

    const query = searchQuery.toLowerCase()
    return blogPosts.filter(post => {
      const title = post.title[locale].toLowerCase()
      const excerpt = post.excerpt[locale].toLowerCase()
      const author = post.author[locale].toLowerCase()
      const tags = post.tags[locale].join(' ').toLowerCase()

      return (
        title.includes(query) ||
        excerpt.includes(query) ||
        author.includes(query) ||
        tags.includes(query)
      )
    })
  }, [searchQuery, locale])

  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <link rel="alternate" hrefLang="zh" href="https://yourdomain.com/zh/blog" />
        <link rel="alternate" hrefLang="en" href="https://yourdomain.com/en/blog" />
        <link rel="canonical" href={`https://yourdomain.com/${locale}/blog`} />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* 博客头部 */}
        <div className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {t('nav.blog')}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {locale === 'zh' 
                ? "探索传统中医智慧，了解现代科学研究"
                : "Explore Traditional TCM Wisdom, Understand Modern Scientific Research"
              }
            </p>
            
            {/* 搜索框 */}
            <div className="max-w-2xl">
              <SearchBar onSearch={setSearchQuery} />
            </div>
          </div>
        </div>

        {/* 博客内容 */}
        <div className="container mx-auto px-4 py-12">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                {locale === 'zh' 
                  ? "没有找到相关文章"
                  : "No articles found"
                }
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard 
                  key={post.id} 
                  post={{
                    ...post,
                    title: post.title[locale],
                    excerpt: post.excerpt[locale],
                    author: post.author[locale],
                    tags: post.tags[locale],
                    readTime: post.readTime[locale]
                  }} 
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export async function getStaticProps({ locale }: { locale: Locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      locale,
    },
  }
} 