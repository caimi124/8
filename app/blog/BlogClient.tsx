'use client'

import { BlogCard } from '../../components/BlogCard'
import { useTranslation } from 'next-i18next'
import { useState, useMemo } from 'react'
import SearchBar from '../../components/SearchBar'
import { useParams } from 'next/navigation'

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

interface BlogClientProps {
  blogPosts: BlogPost[]
}

export default function BlogClient({ blogPosts }: BlogClientProps) {
  const { t } = useTranslation('common')
  const [searchQuery, setSearchQuery] = useState('')
  const params = useParams()
  const locale = (params?.locale as Locale) || 'zh'

  const filteredPosts = useMemo(() => {
    if (!searchQuery) return blogPosts

    return blogPosts.filter(post => {
      const searchLower = searchQuery.toLowerCase()
      return (
        post.title[locale].toLowerCase().includes(searchLower) ||
        post.excerpt[locale].toLowerCase().includes(searchLower) ||
        post.tags[locale].some(tag => tag.toLowerCase().includes(searchLower))
      )
    })
  }, [searchQuery, locale, blogPosts])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">{t('blog.title')}</h1>
        <p className="text-gray-600 mb-8">{t('blog.subtitle')}</p>

        <div className="mb-8">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder={t('blog.searchPlaceholder')}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.map(post => (
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
      </div>
    </div>
  )
} 