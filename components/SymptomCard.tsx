interface SymptomCardProps {
  symptom: string
  recommendedHerb: string
}

const SymptomCard = ({ symptom, recommendedHerb }: SymptomCardProps) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <h3 className="text-xl font-bold mb-2 text-gray-800">{symptom}</h3>
      <div className="flex items-center text-gray-600">
        <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p>推荐草药：<span className="font-medium text-green-600">{recommendedHerb}</span></p>
      </div>
    </div>
  )
}

export default SymptomCard 