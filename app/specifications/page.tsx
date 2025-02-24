import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const specifications = [
  {
    name: "MILI",
    image: "/placeholder.svg?height=300&width=400",
    specs: ["Power: 10KW", "Battery capacity: 15kWh", "Vehicle: Car on public parking"],
  },
  {
    name: "KILO",
    image: "/placeholder.svg?height=300&width=400",
    specs: ["Power: 20KW", "Battery capacity: 30kWh", "Vehicle: Car on business parking lot"],
  },
  {
    name: "MICRO",
    image: "/placeholder.svg?height=300&width=400",
    specs: ["Power: 2KW", "Battery capacity: 5kWh", "Vehicle: E-Bikes public parking"],
  },
];

export default function SpecificationsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="w-full bg-gray-100 px-4 md:px-56 py-4">
          <h1 className="text-4xl font-bold">Product Specifications</h1>
        </div>
        <div className="container mx-auto px-4 md:px-6 py-8 max-w-6xl">
          <div className="space-y-6">
            {specifications.map((spec, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="py-2">
                  <CardTitle className="text-xl">{spec.name}</CardTitle>
                </CardHeader>
                <CardContent className="py-4">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                      <Image
                        src={spec.image || "/placeholder.svg"}
                        alt={`${spec.name} robot`}
                        width={300}
                        height={200}
                        className="rounded-lg w-full h-[200px] object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 mt-4 md:mt-0 md:pl-6">
                      <ul className="list-disc list-inside space-y-1">
                        {spec.specs.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-base">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}


