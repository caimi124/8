import { Metadata } from 'next'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
  title: '草药知识库 | 探索传统中医与现代科学',
  description: '深入了解传统中药的现代科学解读，探索中医养生之道，获取权威的草药知识。'
}

// 将数据移动到单独的文件中
const blogPosts = [
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

// 确保这是一个纯服务器组件
export default async function Page() {
  return <BlogClient blogPosts={blogPosts} />
} 