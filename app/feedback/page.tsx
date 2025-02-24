"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/LanguageContext"
import { Building2, Car, ShoppingCart, Warehouse, ParkingMeterIcon as Parking, Hotel } from "lucide-react"

const useCases = [
  {
    title: "Urban Apartment Complexes",
    description:
      "MILI robots can provide flexible charging solutions for residents without the need for extensive infrastructure changes. This is particularly useful for older buildings where installing fixed charging stations might be challenging.",
    icon: Building2,
    tags: ["Residential", "Urban", "Retrofit"],
  },
  {
    title: "Corporate Parking Lots",
    description:
      "Companies can offer EV charging as an employee benefit without dedicating specific parking spots to charging. MILI robots can serve multiple vehicles throughout the day, optimizing charging based on employee schedules.",
    icon: Car,
    tags: ["Commercial", "Workplace", "Fleet Management"],
  },
  {
    title: "Shopping Centers",
    description:
      "Malls and shopping centers can attract EV-owning customers by offering convenient charging services. MILI robots can move between different parking areas, serving customers' cars while they shop.",
    icon: ShoppingCart,
    tags: ["Retail", "Customer Service", "High Turnover"],
  },
  {
    title: "Logistics and Distribution Centers",
    description:
      "For companies transitioning to electric delivery fleets, MILI robots can provide flexible charging solutions in large warehouse parking areas, adapting to changing fleet sizes and parking configurations.",
    icon: Warehouse,
    tags: ["Industrial", "Fleet Charging", "Scalable"],
  },
  {
    title: "Public Parking Garages",
    description:
      "MILI robots can transform any parking spot into a potential charging point, increasing the utilization of the parking facility and providing a valuable service to EV owners in urban areas.",
    icon: Parking,
    tags: ["Public Infrastructure", "Urban Mobility", "On-Demand"],
  },
  {
    title: "Hotels and Resorts",
    description:
      "Hospitality businesses can offer EV charging as a premium service without installing fixed chargers at every parking spot. MILI robots can serve guest vehicles overnight or during their stay.",
    icon: Hotel,
    tags: ["Hospitality", "Tourism", "Guest Services"],
  },
]

export default function UseCasesPage() {
  const { t } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="w-full bg-gray-100 px-4 md:px-56 py-4">
          <h1 className="text-4xl font-bold">MILI Technology Use Cases</h1>
        </div>
        <div className="container mx-auto px-4 md:px-6 py-8 max-w-6xl">
          <p className="text-lg text-gray-600 mb-8">
            Explore how MILI's innovative mobile charging robots can revolutionize EV charging across various sectors
            and environments.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {<useCase.icon className="h-6 w-6 text-blue-600" />}
                    {useCase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{useCase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {useCase.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Interested in MILI for Your Business?</h2>
            <p className="text-lg text-gray-600 mb-8">
              We're currently in the development phase and looking for partners to help us refine our technology. If you
              see potential for MILI in your industry, we'd love to hear from you.
            </p>
            <a href="/contact" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-sm font-medium text-white hover:bg-blue-700 cursor-pointer">
              Contact Us for Partnership Opportunities
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

