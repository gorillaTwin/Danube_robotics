"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function LetterOfIntentPage() {
  const [formData, setFormData] = useState({
    clientName: "",
    companyName: "",
    position: "",
    units: "",
    pricePerUnit: "",
    deliveryDate: "",
    location: "",
  })

  const today = new Date().toISOString().split("T")[0]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="w-full bg-gray-100 px-4 md:px-56 py-4">
          <h1 className="text-4xl font-bold">Letter of Intent</h1>
        </div>
        <div className="container mx-auto px-4 md:px-6 py-8 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle>Letter of Intent for MILI Robot Purchase</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="text-right">
                <p>Date: {today}</p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="clientName">Client Name</Label>
                  <Input
                    id="clientName"
                    placeholder="Full Name"
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    placeholder="Company Name"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position">Position</Label>
                  <Input
                    id="position"
                    placeholder="Your Position"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="units">Number of Units</Label>
                    <Input
                      id="units"
                      type="number"
                      placeholder="Number of MILI robots"
                      value={formData.units}
                      onChange={(e) => setFormData({ ...formData, units: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pricePerUnit">Price per Unit (EUR)</Label>
                    <Input
                      id="pricePerUnit"
                      type="number"
                      placeholder="Price per unit"
                      value={formData.pricePerUnit}
                      onChange={(e) => setFormData({ ...formData, pricePerUnit: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deliveryDate">Expected Delivery Date</Label>
                  <Input
                    id="deliveryDate"
                    type="date"
                    value={formData.deliveryDate}
                    onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Installation Location</Label>
                  <Input
                    id="location"
                    placeholder="Address of the parking facility"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Product Specifications Requirements</h3>
                  <div className="space-y-4 text-sm">
                    <p>The MILI robots must meet or exceed the following specifications:</p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Power Output: 10KW minimum per unit</li>
                      <li>Battery Capacity: 15kWh minimum per unit</li>
                      <li>Charging Time: Maximum 4 hours for a full charge</li>
                      <li>Operating Hours: 24/7 capability</li>
                      <li>Navigation: Autonomous operation with collision avoidance</li>
                      <li>Weather Resistance: IP65 rating or better</li>
                      <li>Safety Certifications: CE marking and relevant EU safety standards</li>
                      <li>Warranty: 2 years minimum on all components</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Terms and Conditions</h3>
                  <div className="space-y-4 text-sm">
                    <p>
                      This Letter of Intent ("LOI") is not legally binding and serves only as an expression of interest
                      to purchase MILI robots from Danube Robotics, subject to the following conditions:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>
                        Successful completion and demonstration of the MILI robot meeting all specified requirements
                      </li>
                      <li>Satisfactory due diligence and testing period</li>
                      <li>Execution of a definitive purchase agreement</li>
                      <li>Receipt of all necessary regulatory approvals</li>
                    </ul>
                    <p>
                      Either party may terminate this LOI at any time without liability or obligation to the other
                      party.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                  <div className="space-y-4">
                    <p className="font-semibold">For the Client:</p>
                    <div className="border-t-2 border-gray-300 pt-2">
                      <p>{formData.clientName}</p>
                      <p>{formData.position}</p>
                      <p>{formData.companyName}</p>
                      <p>Date: {today}</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="font-semibold">For Danube Robotics:</p>
                    <div className="border-t-2 border-gray-300 pt-2">
                      <p>Marko Pavlović</p>
                      <p>CEO</p>
                      <p>Danube Robotics</p>
                      <p>Date: {today}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-4 pt-8">
                  <Button variant="outline" onClick={() => window.print()}>
                    Print
                  </Button>
                  <Button>Save as PDF</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

