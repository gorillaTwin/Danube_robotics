'use client'
import { useLanguage } from "@/contexts/LanguageContext"

export default function Home() {
  const { t } = useLanguage()
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="w-full bg-gray-100 px-4 md:px-56 py-4">
          <h1 className="text-4xl font-bold">{t('home.title')}</h1>
        </div>
        <div className="container mx-auto px-4 md:px-6 py-8 max-w-5xl">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              {t('home.description')}
            </p>

            {/* Image Section */}
            <div className="my-8 md:my-12">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-b2qxdVX15Eu4UGzsLaHrt7fmelAdft.png"
                  alt="MILI Robot navigating in a parking garage with LED path visualization"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="mt-4 text-xl font-semibold">{t('home.image.caption')}</h2>
            </div>

            <p className="text-lg leading-relaxed">
              {t('home.additional')}
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

