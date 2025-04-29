const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">关于我们</h3>
            <p className="text-gray-300">
              东方草药科学化致力于将传统中医药与现代科技相结合，
              为大众提供科学、可靠的中草药知识。
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">首页</a></li>
              <li><a href="/herb-database" className="text-gray-300 hover:text-white transition-colors">中药数据库</a></li>
              <li><a href="/symptom-check" className="text-gray-300 hover:text-white transition-colors">症状推荐</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">联系我们</h3>
            <p className="text-gray-300">
              邮箱：contact@herbscience.shop<br />
              地址：中国
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>© 2025 东方草药科学化. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 