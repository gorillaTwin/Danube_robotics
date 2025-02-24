"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-[#184c7c]">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2 pl-0 md:pl-4">
            <span className="text-2xl font-bold text-white">DANUBE ROBOTICS</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 items-center justify-center space-x-6">
            <Link href="/about" className="text-white hover:text-blue-100">
              {t("about")}
            </Link>
            <Link href="/product" className="text-white hover:text-blue-100">
              {t("product")}
            </Link>
            <Link href="/software" className="text-white hover:text-blue-100">
              {t("software")}
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-100">
              {t("contact")}
            </Link>
            <Link href="/blog" className="text-white hover:text-blue-100">
              Blog
            </Link>
            <Link href="/specifications" className="text-white hover:text-blue-100">
              {t("specifications")}
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            <Button
              variant="ghost"
              className={`text-white hover:text-white hover:bg-[#184c7c] ${language === "en" ? "bg-[#184c7c]" : ""}`}
              onClick={() => setLanguage("en")}
            >
              EN
            </Button>
            <Button
              variant="ghost"
              className={`text-white hover:text-white hover:bg-[#184c7c] ${language === "srb" ? "bg-[#184c7c]" : ""}`}
              onClick={() => setLanguage("srb")}
            >
              SRB
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="ml-auto md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#184c7c] border-t border-blue-500">
            <nav className="flex flex-col py-4">
              <Link
                href="/about"
                className="text-white hover:bg-[#184c7c] px-6 py-3"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("about")}
              </Link>
              <Link
                href="/product"
                className="text-white hover:bg-[#184c7c] px-6 py-3"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("product")}
              </Link>
              <Link
                href="/software"
                className="text-white hover:bg-[#184c7c] px-6 py-3"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("software")}
              </Link>
              <Link
                href="/contact"
                className="text-white hover:bg-[#184c7c] px-6 py-3"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("contact")}
              </Link>
              <Link
                href="/blog"
                className="text-white hover:bg-[#184c7c] px-6 py-3"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/specifications"
                className="text-white hover:bg-[#184c7c] px-6 py-3"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("specifications")}
              </Link>
              <div className="flex px-6 py-3 space-x-2">
                <Button
                  variant="ghost"
                  className={`text-white hover:text-white hover:bg-[#184c7c] ${language === "en" ? "bg-[#184c7c]" : ""}`}
                  onClick={() => setLanguage("en")}
                >
                  EN
                </Button>
                <Button
                  variant="ghost"
                  className={`text-white hover:text-white hover:bg-[#184c7c] ${language === "srb" ? "bg-[#184c7c]" : ""}`}
                  onClick={() => setLanguage("srb")}
                >
                  SRB
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}

