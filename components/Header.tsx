import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-green-600 p-4">
      <h1 className="text-white text-3xl">🌿 东方草药科学化</h1>
      <h2 className="text-white">Traditional Herbs, Modern Science</h2>
      <nav className="mt-2">
        <Link href="/" className="text-white mr-4">首页</Link>
        <Link href="/herb-database" className="text-white mr-4">中药数据库</Link>
        <Link href="/symptom-check" className="text-white">症状推荐</Link>
      </nav>
    </header>
  )
}

export default Header 