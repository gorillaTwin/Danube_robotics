'use client'

import { useLanguage } from "@/contexts/LanguageContext"

export default function FAQPage() {
  const { t } = useLanguage()

  const faqs = [
    { q: 'faq.q1', a: 'faq.a1' },
    { q: 'faq.q2', a: 'faq.a2' },
    { q: 'faq.q3', a: 'faq.a3' },
    { q: 'faq.q4', a: 'faq.a4' },
    { q: 'faq.q5', a: 'faq.a5' },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="w-full bg-gray-100 px-4 md:px-56 py-4">
          <h1 className="text-4xl font-bold">{t('faq.title')}</h1>
        </div>
        <div className="container mx-auto px-4 md:px-6 py-8 max-w-5xl">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-2">{t(faq.q)}</h2>
                <p className="text-gray-600">{t(faq.a)}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

