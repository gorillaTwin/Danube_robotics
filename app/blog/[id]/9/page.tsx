import Link from "next/link"

const blogPost = {
  id: 9,
  title: "Selecting the Right Aluminum Profile for MILI: A Load-Bearing Analysis",
  date: "2024-02-18",
  author: "Marko Pavlović",
  content: `
    <p>When building a robot prototype capable of carrying significant weight, choosing the right structural components is crucial. Today, we'll explore how to select appropriate aluminum profiles for MILI, ensuring it can safely handle loads up to 100kg while maintaining structural integrity and operational safety.</p>

    <div class="my-8">
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mtPC14L5S8bPeAoqEqSF9fJQbzMObc.png"
        alt="Various sizes of aluminum extrusion profiles"
        class="w-full rounded-lg"
      />
      <p class="text-sm text-gray-600 mt-2">Different T-slot aluminum profile sizes available for structural applications</p>
    </div>

    <h2>Understanding Load Requirements</h2>
    <p>Before selecting a profile size, we need to consider several factors:</p>
    <ul class="list-disc list-inside space-y-2 mb-6">
      <li>Static load (100kg payload)</li>
      <li>Dynamic forces during movement</li>
      <li>Safety factor (typically 2-3x for mobile robots)</li>
      <li>Weight distribution across the frame</li>
      <li>Mounting points and stress concentrations</li>
    </ul>

    <h2>Profile Size Analysis</h2>
    
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <h3 class="font-semibold mb-4">20x20mm Profile</h3>
      <ul class="space-y-2">
        <li>• Load capacity: ~15-20kg per vertical member</li>
        <li>• Best for: Light internal supports, cable management</li>
        <li>• <span class="text-red-600">Not suitable for main structure with 100kg load</span></li>
      </ul>
    </div>

    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <h3 class="font-semibold mb-4">30x30mm Profile</h3>
      <ul class="space-y-2">
        <li>• Load capacity: ~30-40kg per vertical member</li>
        <li>• Best for: Medium-duty internal structures</li>
        <li>• <span class="text-yellow-600">Could work with multiple supports but risky</span></li>
      </ul>
    </div>

    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <h3 class="font-semibold mb-4">40x40mm Profile ✓</h3>
      <ul class="space-y-2">
        <li>• Load capacity: ~60-80kg per vertical member</li>
        <li>• Best for: Main structural elements</li>
        <li>• <span class="text-green-600">Recommended for MILI's primary frame</span></li>
      </ul>
    </div>

    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <h3 class="font-semibold mb-4">80x80mm Profile</h3>
      <ul class="space-y-2">
        <li>• Load capacity: ~200kg+ per vertical member</li>
        <li>• Best for: Heavy industrial applications</li>
        <li>• <span class="text-yellow-600">Overkill for our needs, adds unnecessary weight</span></li>
      </ul>
    </div>

    <h2>Our Recommendation</h2>
    <p class="mb-6">For MILI's 100kg load requirement, we recommend using 40x40mm profiles for the main structure. Here's why:</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-green-50 p-4 rounded-lg">
        <h3 class="font-semibold mb-2">Advantages</h3>
        <ul class="list-disc list-inside space-y-1">
          <li>Sufficient load capacity with safety margin</li>
          <li>Widely available and cost-effective</li>
          <li>Compatible with standard accessories</li>
          <li>Good balance of strength vs weight</li>
          <li>Adequate mounting surface area</li>
        </ul>
      </div>
      
      <div class="bg-red-50 p-4 rounded-lg">
        <h3 class="font-semibold mb-2">Considerations</h3>
        <ul class="list-disc list-inside space-y-1">
          <li>Requires proper corner bracing</li>
          <li>Need to distribute load across multiple members</li>
          <li>May need reinforcement at high-stress points</li>
          <li>Regular inspection of connections needed</li>
        </ul>
      </div>
    </div>

    <h2>Structural Design Tips</h2>
    <div class="space-y-4 mb-8">
      <p>1. <strong>Use Triangle Formations:</strong> Incorporate diagonal supports to increase frame rigidity.</p>
      <p>2. <strong>Multiple Vertical Supports:</strong> Distribute the 100kg load across at least 4-6 vertical members.</p>
      <p>3. <strong>Corner Reinforcement:</strong> Use corner brackets or gussets at critical joints.</p>
      <p>4. <strong>Base Stability:</strong> Create a wider base with proper support for the total weight.</p>
    </div>

    <h2>Hybrid Approach</h2>
    <p class="mb-6">Consider using different profile sizes for different parts of the robot:</p>
    <ul class="list-disc list-inside space-y-2 mb-8">
      <li>40x40mm for main load-bearing structure</li>
      <li>30x30mm for secondary supports</li>
      <li>20x20mm for cable management and light attachments</li>
    </ul>

    <h2>Safety Considerations</h2>
    <div class="bg-yellow-50 p-6 rounded-lg mb-8">
      <p class="font-semibold mb-4">Always follow these guidelines:</p>
      <ul class="list-disc list-inside space-y-2">
        <li>Regular inspection of all structural connections</li>
        <li>Verify proper torque on all fasteners</li>
        <li>Monitor for any signs of stress or deformation</li>
        <li>Consider dynamic loads during movement</li>
        <li>Maintain documentation of load tests</li>
      </ul>
    </div>

    <h2>Next Steps</h2>
    <p>In our next post, we'll provide detailed assembly instructions for the frame, including proper techniques for joining profiles and installing reinforcements. We'll also share our testing protocols for validating the structure's load-bearing capacity.</p>
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

