import Header from '../components/Header'
import Footer from '../components/Footer'
import HerbCard from '../components/HerbCard'
import SymptomCard from '../components/SymptomCard'

const HomePage = () => {
  return (
    <div>
      <Header />
      
      <main className="p-4">
        <h2>🌱 中药数据库</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

        <h2 className="mt-8">🧪 症状推荐</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <SymptomCard symptom="失眠" recommendedHerb="灵芝" />
          <SymptomCard symptom="焦虑" recommendedHerb="黄芪" />
          <SymptomCard symptom="消化不良" recommendedHerb="姜黄素" />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default HomePage 