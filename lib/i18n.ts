import { useRouter } from 'next/router'
import zh from '../locales/zh.json'
import en from '../locales/en.json'

const locales = {
  zh,
  en
}

export function useTranslation() {
  const router = useRouter()
  const { locale = 'zh' } = router

  const t = (key: string) => {
    const keys = key.split('.')
    let value: any = locales[locale as keyof typeof locales]

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k]
      } else {
        return key
      }
    }

    return value || key
  }

  return { t, locale }
}

export function getBrowserLanguage() {
  if (typeof window === 'undefined') return 'zh'

  const browserLang = navigator.language.toLowerCase()
  return browserLang.startsWith('zh') ? 'zh' : 'en'
} 