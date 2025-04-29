import { useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import { FaSearch } from 'react-icons/fa'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export default function SearchBar({ value, onChange, placeholder }: SearchBarProps) {
  const { t } = useTranslation('common')

  return (
    <div className="relative">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || t('blog.search')}
        className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
      />
      <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  )
} 