import Link from "next/link"

const blogPost = {
  id: 10,
  title: "Optimizing MILI's Dimensions: A Design Analysis for Battery Integration",
  date: "2024-02-19",
  author: "Marko Pavlović",
  content: `
    <p>One of the most critical aspects of designing MILI is determining its optimal dimensions. While we've settled on a refrigerator-like form factor, we need to carefully consider how to accommodate our LiFePO4 batteries (21cm × 18cm × 8cm) while maintaining stability and efficient space utilization. Let's break down this design challenge.</p>

    <h2>Initial Dimensions Proposal</h2>
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <ul class="space-y-2">
        <li>• Height (Z): 1 meter</li>
        <li>• Width (X): 0.5 meter</li>
        <li>• Depth (Y): 0.5 meter</li>
      </ul>
    </div>

    <h2>3D Visualization</h2>
    <div class="my-8">
      <div class="bg-gray-100 p-6 rounded-lg mb-4">
        <pre class="text-sm">
          Top View (X-Y Plane)
          ┌───────────50cm───────────┐
          │                          │
          │     Battery Layout       │
          50cm  [21cm×18cm each]    │
          │                          │
          │                          │
          └──────────────────────────┘
        </pre>
      </div>
      <p class="text-sm text-gray-600 mt-2">Schematic representation of MILI's top view showing battery placement area</p>
    </div>

    <h2>Battery Configuration Analysis</h2>
    
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <h3 class="font-semibold mb-4">Vertical Stack Configuration</h3>
      <ul class="space-y-2">
        <li>• Available height: 100cm</li>
        <li>• Battery height: 8cm</li>
        <li>• Maximum stack: 10 batteries (allowing for spacing and mounting hardware)</li>
        <li>• <span class="text-green-600">Advantage: Efficient use of vertical space</span></li>
        <li>• <span class="text-red-600">Concern: Higher center of gravity</span></li>
      </ul>
    </div>

    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <h3 class="font-semibold mb-4">Horizontal Layout (Base Level)</h3>
      <ul class="space-y-2">
        <li>• Available floor space: 50cm × 50cm</li>
        <li>• Battery footprint: 21cm × 18cm</li>
        <li>• Possible arrangement: 2 × 2 configuration</li>
        <li>• <span class="text-green-600">Advantage: Lower center of gravity</span></li>
        <li>• <span class="text-red-600">Concern: Limited floor space for other components</span></li>
      </ul>
    </div>

    <h2>Revised Dimensions Proposal</h2>
    <div class="bg-green-50 p-6 rounded-lg mb-6">
      <h3 class="font-semibold mb-4">Optimized Measurements</h3>
      <ul class="space-y-2">
        <li>• Height (Z): 100cm (unchanged)</li>
        <li>• Width (X): 60cm (increased)</li>
        <li>• Depth (Y): 55cm (increased)</li>
        <li>• Reasoning: Allows for better battery arrangement and maintenance access</li>
      </ul>
    </div>

    <h2>Battery Mounting Zones</h2>
    <div class="space-y-4 mb-8">
      <h3 class="font-semibold">Three-Tier Approach:</h3>
      
      <div class="bg-gray-50 p-4 rounded-lg">
        <h4 class="font-medium mb-2">Lower Zone (0-30cm height)</h4>
        <ul class="list-disc list-inside">
          <li>4 batteries in 2×2 configuration</li>
          <li>Provides stable base weight distribution</li>
          <li>Easy access for maintenance</li>
        </ul>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg">
        <h4 class="font-medium mb-2">Middle Zone (30-60cm height)</h4>
        <ul class="list-disc list-inside">
          <li>4 batteries in 2×2 configuration</li>
          <li>Mounted with additional support brackets</li>
          <li>Accessible through side panels</li>
        </ul>
      </div>

      <div class="bg-gray-50 p-4 rounded-lg">
        <h4 class="font-medium mb-2">Upper Zone (60-100cm height)</h4>
        <ul class="list-disc list-inside">
          <li>Reserved for electronics and control systems</li>
          <li>Better heat dissipation</li>
          <li>Keeps sensitive components away from ground</li>
        </ul>
      </div>
    </div>

    <h2>Space Allocation</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-blue-50 p-4 rounded-lg">
        <h3 class="font-semibold mb-2">Component Zones</h3>
        <ul class="list-disc list-inside space-y-1">
          <li>Batteries: Lower and middle sections</li>
          <li>Motor controllers: Upper section</li>
          <li>Charging electronics: Mid-upper section</li>
          <li>Sensors: Distributed throughout</li>
          <li>Cooling system: Vertical channels</li>
        </ul>
      </div>
      
      <div class="bg-yellow-50 p-4 rounded-lg">
        <h3 class="font-semibold mb-2">Access Considerations</h3>
        <ul class="list-disc list-inside space-y-1">
          <li>Removable side panels</li>
          <li>Sliding battery trays</li>
          <li>Cable management channels</li>
          <li>Ventilation pathways</li>
          <li>Maintenance access points</li>
        </ul>
      </div>
    </div>

    <h2>Stability Considerations</h2>
    <div class="space-y-4 mb-8">
      <p>With the revised dimensions, we need to consider:</p>
      <ul class="list-disc list-inside space-y-2">
        <li>Center of gravity calculation with full battery load</li>
        <li>Tipping angle safety margins</li>
        <li>Weight distribution during movement</li>
        <li>Impact of dynamic forces during operation</li>
      </ul>
    </div>

    <div class="bg-yellow-50 p-6 rounded-lg mb-8">
      <h2 class="font-semibold mb-4">Safety Recommendations</h2>
      <ul class="list-disc list-inside space-y-2">
        <li>Install battery retention systems</li>
        <li>Use vibration-dampening mounts</li>
        <li>Implement temperature monitoring</li>
        <li>Include emergency battery disconnect</li>
        <li>Design for easy battery replacement</li>
      </ul>
    </div>

    <h2>Next Steps</h2>
    <p class="mb-4">Based on this analysis, we recommend:</p>
    <ol class="list-decimal list-inside space-y-2">
      <li>Create a detailed 3D model with the revised dimensions</li>
      <li>Build a cardboard prototype to verify component fit</li>
      <li>Test battery mounting systems</li>
      <li>Verify maintenance access points</li>
      <li>Conduct stability tests with weighted mockups</li>
    </ol>

    <p class="mt-6">In our next post, we'll provide detailed assembly instructions for the battery mounting system and share our testing results for various load configurations.</p>
  `,
}

export default function BlogPost() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="w-full bg-gray-100 px-4 md:px-56 py-4">
          <h1 className="text-4xl font-bold">{blogPost.title}</h1>
        </div>
        <article className="container mx-auto px-4 md:px-6 py-8 max-w-3xl">
          <div className="mb-8 text-gray-600">
            <p className="mb-2">Published on {blogPost.date}</p>
            <p>By {blogPost.author}</p>
          </div>
          <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: blogPost.content }}></div>
          <div className="mt-12">
            <Link href="/blog" className="text-blue-600 hover:text-blue-800">
              ← Back to all posts
            </Link>
          </div>
        </article>
      </main>
    </div>
  )
}

