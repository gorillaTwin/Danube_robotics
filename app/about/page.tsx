'use client'

import { useLanguage } from "@/contexts/LanguageContext"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="w-full bg-gray-100 px-4 md:px-56 py-4" >
          <h1 className="text-4xl font-bold">{t('about.title')}</h1>
        </div>
        <div className="space-y-8">
          <div className="container mx-auto px-4 md:px-6 py-8 max-w-5xl" >
            <p className="text-lg leading-relaxed">
              {t('about.description')}
            </p>
          </div>
          <div className="relative h-[300px] md:h-[600px] w-full bg-white flex items-center justify-center">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pi6X8xKXffGedbM4ZScEINY6veHRZn.png"
              alt="Chart showing infrastructure as a roadblock to buying EVs across European countries"
              className="max-h-full w-auto object-contain p-4 md:p-8"
            />
          </div>

          <div className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 md:px-6 py-8 md:py-16 max-w-5xl" >
              <h2 className="mb-4 text-3xl font-bold">{t('about.mission.title')}</h2>
              <h3 className="mb-8 text-4xl md:text-5xl font-bold">{t('about.mission.subtitle')}</h3>
              <p className="text-lg leading-relaxed">
                {t('about.mission.description')}
              </p>
            </div>
          </div>

          <div className="container mx-auto px-4 md:px-6 py-8 max-w-5xl" >
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="mb-4 text-xl font-semibold">{t('about.hardware')}</h3>
                <p>{t('about.hardware.description')}</p>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-semibold">{t('about.software')}</h3>
                <p>{t('about.software.description')}</p>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-semibold">{t('about.autonomy')}</h3>
                <p>{t('about.autonomy.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

