'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useTranslation } from 'next-i18next'
import { useState } from 'react'
import { FaGlobe } from 'react-icons/fa'

const languages = [
  { code: 'zh', name: '中文' },
  { code: 'en', name: 'English' }
]

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const currentLanguage = languages.find(lang => lang.code === i18n.language)

  const switchLanguage = (locale: string) => {
    i18n.changeLanguage(locale)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <FaGlobe className="text-gray-600" />
        <span className="text-sm font-medium text-gray-700">
          {currentLanguage?.name}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-32 bg-white rounded-lg shadow-lg z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => switchLanguage(language.code)}
              className={`w-full px-4 py-2 text-sm text-left hover:bg-gray-100 transition-colors ${
                i18n.language === language.code ? 'text-primary-600 font-medium' : 'text-gray-700'
              }`}
            >
              {language.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
} 