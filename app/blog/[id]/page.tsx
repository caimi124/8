import Image from 'next/image'
import { FaCalendar, FaUser, FaTags, FaShare, FaBookmark } from 'react-icons/fa'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

type Locale = 'zh' | 'en'

interface ArticleContent {
  zh: string
  en: string
}

interface ArticleTitle {
  zh: string
  en: string
}

interface ArticleAuthor {
  zh: string
  en: string
}

interface ArticleTags {
  zh: string[]
  en: string[]
}

interface ArticleReadTime {
  zh: string
  en: string
}

interface RelatedArticle {
  id: string
  title: ArticleTitle
  image: string
}

interface Article {
  id: string
  title: ArticleTitle
  content: ArticleContent
  coverImage: string
  author: ArticleAuthor
  authorTitle: ArticleAuthor
  date: string
  tags: ArticleTags
  readTime: ArticleReadTime
  relatedArticles: RelatedArticle[]
}

// 示例文章数据
const article: Article = {
  id: "1",
  title: {
    zh: "灵芝：传统中药的现代科学解读",
    en: "Ganoderma: Modern Scientific Interpretation of Traditional Chinese Medicine"
  },
  content: {
    zh: `
      <p>灵芝，作为一种传统中药材，在中国已有数千年的使用历史。近年来，随着现代科学技术的发展，我们对灵芝的认识不断深入。</p>

      <h2>化学成分研究</h2>
      <p>现代研究表明，灵芝含有多种活性成分，主要包括：</p>
      <ul>
        <li>多糖类：具有免疫调节作用</li>
        <li>三萜类：具有抗炎、抗肿瘤作用</li>
        <li>蛋白质：含有多种氨基酸</li>
        <li>微量元素：包括锌、硒等</li>
      </ul>

      <h2>药理作用</h2>
      <p>科学研究证实，灵芝具有以下主要药理作用：</p>
      <ul>
        <li>免疫调节：增强机体免疫力</li>
        <li>抗肿瘤：抑制肿瘤细胞生长</li>
        <li>保肝：保护肝脏功能</li>
        <li>抗衰老：清除自由基</li>
      </ul>

      <h2>现代应用</h2>
      <p>在现代医学中，灵芝的应用主要包括：</p>
      <ul>
        <li>辅助治疗肿瘤</li>
        <li>改善睡眠质量</li>
        <li>调节免疫功能</li>
        <li>保护肝脏</li>
      </ul>

      <h2>研究展望</h2>
      <p>未来研究方向包括：</p>
      <ul>
        <li>活性成分的分离纯化</li>
        <li>作用机制的深入研究</li>
        <li>新剂型的开发</li>
        <li>临床应用的规范化</li>
      </ul>
    `,
    en: `
      <p>Ganoderma, as a traditional Chinese medicinal herb, has been used in China for thousands of years. In recent years, with the development of modern science and technology, our understanding of Ganoderma has deepened.</p>

      <h2>Chemical Composition Research</h2>
      <p>Modern research shows that Ganoderma contains various active components, mainly including:</p>
      <ul>
        <li>Polysaccharides: Immunomodulatory effects</li>
        <li>Triterpenes: Anti-inflammatory and anti-tumor effects</li>
        <li>Proteins: Various amino acids</li>
        <li>Trace elements: Including zinc, selenium, etc.</li>
      </ul>

      <h2>Pharmacological Effects</h2>
      <p>Scientific research confirms that Ganoderma has the following main pharmacological effects:</p>
      <ul>
        <li>Immunomodulation: Enhances body immunity</li>
        <li>Anti-tumor: Inhibits tumor cell growth</li>
        <li>Liver protection: Protects liver function</li>
        <li>Anti-aging: Clears free radicals</li>
      </ul>

      <h2>Modern Applications</h2>
      <p>In modern medicine, the applications of Ganoderma mainly include:</p>
      <ul>
        <li>Adjuvant cancer treatment</li>
        <li>Sleep quality improvement</li>
        <li>Immune function regulation</li>
        <li>Liver protection</li>
      </ul>

      <h2>Research Prospects</h2>
      <p>Future research directions include:</p>
      <ul>
        <li>Separation and purification of active components</li>
        <li>In-depth study of mechanisms of action</li>
        <li>Development of new dosage forms</li>
        <li>Standardization of clinical applications</li>
      </ul>
    `
  },
  coverImage: "/images/blog/lingzhi-science.jpg",
  author: {
    zh: "张教授",
    en: "Prof. Zhang"
  },
  authorTitle: {
    zh: "中医药研究所首席研究员",
    en: "Chief Researcher at Institute of Traditional Chinese Medicine"
  },
  date: "2024-03-20",
  tags: {
    zh: ["灵芝", "科学研究", "免疫调节"],
    en: ["Ganoderma", "Scientific Research", "Immunomodulation"]
  },
  readTime: {
    zh: "8分钟",
    en: "8 min"
  },
  relatedArticles: [
    {
      id: "2",
      title: {
        zh: "中医养生：四季调养之道",
        en: "TCM Health Preservation: Seasonal Regimen"
      },
      image: "/images/blog/seasonal-health.jpg"
    },
    {
      id: "3",
      title: {
        zh: "现代科技助力中药研发",
        en: "Modern Technology in TCM Development"
      },
      image: "/images/blog/modern-tech.jpg"
    }
  ]
}

interface BlogPostPageProps {
  locale: Locale
}

export default function BlogPostPage({ locale }: BlogPostPageProps) {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{article.title[locale]}</title>
        <meta name="description" content={t('meta.description')} />
        <link rel="alternate" hrefLang="zh" href={`https://yourdomain.com/zh/blog/${article.id}`} />
        <link rel="alternate" hrefLang="en" href={`https://yourdomain.com/en/blog/${article.id}`} />
        <link rel="canonical" href={`https://yourdomain.com/${locale}/blog/${article.id}`} />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* 文章头部 */}
        <div className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                {article.title[locale]}
              </h1>
              <div className="flex items-center text-gray-600 space-x-6 mb-8">
                <div className="flex items-center">
                  <FaUser className="mr-2" />
                  <div>
                    <p className="font-medium">{article.author[locale]}</p>
                    <p className="text-sm text-gray-500">{article.authorTitle[locale]}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaCalendar className="mr-2" />
                  {article.date}
                </div>
                <div className="flex items-center">
                  <FaTags className="mr-2" />
                  {article.readTime[locale]}
                </div>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden mb-8">
                <Image
                  src={article.coverImage}
                  alt={article.title[locale]}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-center justify-between mb-8">
                <div className="flex space-x-2">
                  {article.tags[locale].map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <button className="p-2 text-gray-500 hover:text-gray-700">
                    <FaShare className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-gray-700">
                    <FaBookmark className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 文章内容 */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content[locale] }}
              />
            </div>

            {/* 相关文章 */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t('blog.relatedArticles')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {article.relatedArticles.map((related) => (
                  <div
                    key={related.id}
                    className="bg-white rounded-xl shadow-sm overflow-hidden"
                  >
                    <div className="relative h-48">
                      <Image
                        src={related.image}
                        alt={related.title[locale]}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {related.title[locale]}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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

export async function getStaticPaths({ locales }: { locales: Locale[] }) {
  return {
    paths: locales.map((locale) => ({
      params: { id: '1' },
      locale,
    })),
    fallback: false,
  }
} 