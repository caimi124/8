import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { TrustSection } from '../components/TrustSection'
import Footer from '../components/Footer'
import HerbCard from '../components/HerbCard'
import SymptomCard from '../components/SymptomCard'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-8 text-green-800">🌿 东方草药科学化</h1>
          <p className="text-xl text-center text-gray-600 mb-12">Traditional Herbs, Modern Science</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-green-700">🌱 中药数据库</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <HerbCard 
              name="黄芪" 
              description="黄芪是一种用于增强免疫力的草药，具有补气升阳、益卫固表、利水消肿、生津养血、行气活血、托毒排脓、敛疮生肌的功效。" 
              imageUrl="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop&q=60"
              link="/herbs/huangqi"
            />
            <HerbCard 
              name="灵芝" 
              description="灵芝是一种珍贵的中药材，具有补气安神、益心润肺、延年益寿的功效。现代研究表明，灵芝具有增强免疫力、抗肿瘤、保肝等作用。" 
              imageUrl="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop&q=60"
              link="/herbs/lingzhi"
            />
            <HerbCard 
              name="姜黄素" 
              description="姜黄素是从姜黄中提取的活性成分，具有强大的抗炎、抗氧化作用。研究表明，它可以帮助缓解关节炎、改善认知功能、预防心血管疾病。" 
              imageUrl="https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop&q=60"
              link="/herbs/jianghuang"
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-green-700">🧪 症状推荐</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <SymptomCard symptom="失眠" recommendedHerb="灵芝" />
            <SymptomCard symptom="焦虑" recommendedHerb="黄芪" />
            <SymptomCard symptom="消化不良" recommendedHerb="姜黄素" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 