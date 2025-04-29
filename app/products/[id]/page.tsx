import { ProductDetail } from '../../../components/ProductDetail'

// 示例产品数据
const sampleProduct = {
  name: "灵芝孢子粉",
  description: "采用优质灵芝孢子，经过现代科技提取，保留灵芝精华，帮助提升免疫力，改善睡眠质量。",
  images: [
    "/images/products/lingzhi-1.jpg",
    "/images/products/lingzhi-2.jpg",
    "/images/products/lingzhi-3.jpg",
    "/images/products/lingzhi-4.jpg"
  ],
  price: 299,
  benefits: [
    "增强免疫力，提高身体抵抗力",
    "改善睡眠质量，缓解失眠",
    "抗氧化，延缓衰老",
    "调节血压，保护心血管"
  ],
  ingredients: [
    {
      name: "灵芝孢子",
      description: "富含灵芝多糖、三萜类等活性成分",
      percentage: 100
    }
  ],
  usage: {
    dosage: "每日2次，每次1-2克",
    timing: "早餐前和晚餐前服用",
    precautions: [
      "孕妇、哺乳期妇女慎用",
      "有出血倾向者慎用",
      "避免与抗凝血药物同服"
    ]
  },
  faqs: [
    {
      question: "灵芝孢子粉适合哪些人群？",
      answer: "适合免疫力低下、睡眠质量差、亚健康人群服用。"
    },
    {
      question: "服用多久可以看到效果？",
      answer: "一般服用2-4周后可以感受到睡眠质量改善，免疫力提升需要持续服用1-3个月。"
    },
    {
      question: "可以长期服用吗？",
      answer: "可以长期服用，建议服用3个月后停用1个月，让身体自然调节。"
    }
  ],
  reviews: [
    {
      author: "张先生",
      rating: 5,
      comment: "服用一个月后，睡眠质量明显改善，白天精神也好了很多。",
      date: "2024-03-15"
    },
    {
      author: "李女士",
      rating: 5,
      comment: "免疫力提升很明显，感冒次数减少了，推荐给身边的朋友。",
      date: "2024-03-10"
    }
  ],
  relatedProducts: [
    {
      id: "1",
      name: "灵芝片",
      image: "/images/products/lingzhi-pian.jpg",
      price: 199
    },
    {
      id: "2",
      name: "灵芝茶",
      image: "/images/products/lingzhi-tea.jpg",
      price: 159
    },
    {
      id: "3",
      name: "灵芝胶囊",
      image: "/images/products/lingzhi-capsule.jpg",
      price: 259
    },
    {
      id: "4",
      name: "灵芝口服液",
      image: "/images/products/lingzhi-liquid.jpg",
      price: 179
    }
  ]
}

export default function ProductPage() {
  return <ProductDetail product={sampleProduct} />
} 