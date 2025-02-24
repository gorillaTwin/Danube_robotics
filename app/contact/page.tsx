"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <div className="w-full bg-gray-100 px-4 md:px-56 py-4">
          <h1 className="text-4xl font-bold">{t("contact.title")}</h1>
        </div>
        <section className="container mx-auto px-4 md:px-6 py-4">
          <div className="grid gap-6 md:gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  {t("contact.address")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground whitespace-pre-line">{t("contact.address.content")}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  {t("contact.email")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">markopavlovicprvi@gmail.com</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  {t("contact.tel")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+381 65 4084607</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}

