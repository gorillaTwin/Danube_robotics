import { useLanguage } from "@/contexts/LanguageContext"

export default function BlogPage() {
  const { t } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="w-full bg-gray-100 px-4 md:px-56 py-4">
          <h1 className="text-4xl font-bold">{t('blog.title')}</h1>
        </div>
        <div className="container mx-auto px-4 md:px-6 py-8 max-w-5xl">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              {t('blog.description')}
            </p>

            {/* Video Section */}
            <div className="my-8 md:my-12">
              <a
                href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID&ab_channel=YourChannel"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                  <img
                    src="https://your-image-url.com/image.png"
                    alt="Blog related image"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 md:w-10 md:h-10 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <h2 className="mt-4 text-xl font-semibold">{t('blog.video.caption')}</h2>
              </a>
            </div>

            <p className="text-lg leading-relaxed">
              {t('blog.additional')}
            </p>
            <p className="text-lg leading-relaxed">
              {t('blog.features')}
            </p>
            <ul className="list-disc list-inside text-lg leading-relaxed">
              <li>{t('blog.feature1')}</li>
              <li>{t('blog.feature2')}</li>
              <li>{t('blog.feature3')}</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}


