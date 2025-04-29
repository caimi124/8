import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LanguageSwitcher from './LanguageSwitcher'

export function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? 'text-primary-600 font-medium' : 'text-gray-600 hover:text-primary-500'
  }

  return (
    <header className="bg-white shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-600">中草药</span>
            </Link>
            <nav className="ml-10 space-x-8">
              <Link href="/" className={`${isActive('/')} transition-colors duration-200`}>
                首页
              </Link>
              <Link href="/herbs" className={`${isActive('/herbs')} transition-colors duration-200`}>
                草药库
              </Link>
              <Link href="/symptoms" className={`${isActive('/symptoms')} transition-colors duration-200`}>
                症状查询
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <button className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200">
              登录
            </button>
          </div>
        </div>
      </div>
    </header>
  )
} 