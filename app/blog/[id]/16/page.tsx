import Link from "next/link"

const blogPost = {
  id: 16,
  title: "MILI Business Plan: From MVP to Market Leadership",
  date: "2024-02-25",
  author: "Marko Pavlović",
  content: `
    <p>Following our Business Model Canvas analysis, we're now presenting our comprehensive business plan for MILI. This plan outlines our path from initial prototype to market deployment, including our MVP strategy and investment requirements. Let's dive into the details of how we'll bring MILI to market.</p>

    <h2>Version 1.0 (MVP) Specifications</h2>
    <div class="bg-blue-50 p-6 rounded-lg mb-6">
      <h3 class="font-semibold mb-4">Core Features:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Basic autonomous navigation in controlled environments</li>
        <li>10kW charging capability</li>
        <li>4-hour battery capacity</li>
        <li>Simple mobile app for charging requests</li>
        <li>Basic obstacle detection and avoidance</li>
        <li>Manual override capabilities</li>
      </ul>
      <h3 class="font-semibold mt-6 mb-4">Target Cost:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Manufacturing cost: €15,000 per unit</li>
        <li>Selling price: €30,000 per unit</li>
        <li>Development budget: €200,000</li>
      </ul>
    </div>

    <h2>Investment Strategy</h2>
    <div class="space-y-6 mb-8">
      <h3 class="font-semibold">Funding Rounds:</h3>
      
      <div class="bg-white shadow-md rounded-lg p-6">
        <h4 class="font-semibold mb-2">Seed Round: €500,000</h4>
        <ul class="list-disc list-inside space-y-2">
          <li>MVP development and testing</li>
          <li>Initial team hiring</li>
          <li>Patent applications</li>
          <li>Pilot program setup</li>
        </ul>
      </div>

      <div class="bg-white shadow-md rounded-lg p-6">
        <h4 class="font-semibold mb-2">Series A: €2,000,000</h4>
        <ul class="list-disc list-inside space-y-2">
          <li>Production scaling</li>
          <li>Market expansion</li>
          <li>Team growth</li>
          <li>R&D for Version 2.0</li>
        </ul>
      </div>

      <div class="bg-white shadow-md rounded-lg p-6">
        <h4 class="font-semibold mb-2">Target Investors:</h4>
        <ul class="list-disc list-inside space-y-2">
          <li>Clean tech venture capital firms</li>
          <li>EV infrastructure funds</li>
          <li>Strategic corporate investors (automotive/energy sector)</li>
          <li>Government green technology grants</li>
        </ul>
      </div>
    </div>

    <h2>Market Analysis</h2>
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <h3 class="font-semibold mb-4">Market Size:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Global EV charging infrastructure market: €23.3 billion (2023)</li>
        <li>Expected CAGR: 30.5% (2024-2030)</li>
        <li>Initial target market (EU): €5.2 billion</li>
      </ul>

      <h3 class="font-semibold mt-6 mb-4">Competitors:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Rollyy: Autonomous charging robots (direct competitor)</li>
        <li>Traditional fixed charging stations</li>
        <li>Battery swap solutions</li>
        <li>Mobile charging vans</li>
      </ul>

      <h3 class="font-semibold mt-6 mb-4">Competitive Advantages:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Lower infrastructure costs</li>
        <li>Flexible deployment</li>
        <li>Advanced AI navigation system</li>
        <li>Scalable solution</li>
        <li>Lower maintenance requirements</li>
      </ul>
    </div>

    <h2>Financial Projections</h2>
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <h3 class="font-semibold mb-4">Year 1:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Units sold: 10</li>
        <li>Revenue: €300,000</li>
        <li>Operating costs: €400,000</li>
        <li>Net loss: €100,000</li>
      </ul>

      <h3 class="font-semibold mt-6 mb-4">Year 2:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Units sold: 50</li>
        <li>Revenue: €1,500,000</li>
        <li>Operating costs: €1,200,000</li>
        <li>Net profit: €300,000</li>
      </ul>

      <h3 class="font-semibold mt-6 mb-4">Year 3:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Units sold: 200</li>
        <li>Revenue: €6,000,000</li>
        <li>Operating costs: €4,000,000</li>
        <li>Net profit: €2,000,000</li>
      </ul>
    </div>

    <h2>Development Roadmap</h2>
    <div class="space-y-6 mb-8">
      <div class="bg-white shadow-md rounded-lg p-6">
        <h3 class="font-semibold mb-4">Phase 1: MVP Development (6 months)</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Basic navigation system implementation</li>
          <li>Charging system integration</li>
          <li>Safety features development</li>
          <li>Mobile app creation</li>
          <li>Initial testing in controlled environment</li>
        </ul>
      </div>

      <div class="bg-white shadow-md rounded-lg p-6">
        <h3 class="font-semibold mb-4">Phase 2: Pilot Program (6 months)</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Deploy 5 units in partner locations</li>
          <li>Gather user feedback and performance data</li>
          <li>Refine software and hardware</li>
          <li>Obtain necessary certifications</li>
        </ul>
      </div>

      <div class="bg-white shadow-md rounded-lg p-6">
        <h3 class="font-semibold mb-4">Phase 3: Market Entry (12 months)</h3>
        <ul class="list-disc list-inside space-y-2">
          <li>Begin production of Version 1.0</li>
          <li>Expand sales and marketing efforts</li>
          <li>Establish support infrastructure</li>
          <li>Start development of Version 2.0</li>
        </ul>
      </div>
    </div>

    <h2>Go-to-Market Strategy</h2>
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <h3 class="font-semibold mb-4">Initial Target Markets:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Private parking operators in major EU cities</li>
        <li>Shopping centers and retail locations</li>
        <li>Corporate office complexes</li>
        <li>Airport parking facilities</li>
      </ul>

      <h3 class="font-semibold mt-6 mb-4">Marketing Channels:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Industry trade shows and conferences</li>
        <li>Direct B2B sales team</li>
        <li>Digital marketing campaigns</li>
        <li>Partnership with EV manufacturers</li>
        <li>Demo units in high-visibility locations</li>
      </ul>

      <h3 class="font-semibold mt-6 mb-4">Sales Strategy:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Direct sales to large parking operators</li>
        <li>Leasing options for smaller facilities</li>
        <li>Revenue sharing models available</li>
        <li>Pilot program partnerships</li>
      </ul>
    </div>

    <h2>Risk Analysis and Mitigation</h2>
    <div class="bg-yellow-50 p-6 rounded-lg mb-6">
      <h3 class="font-semibold mb-4">Key Risks:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Technical challenges in autonomous navigation</li>
        <li>Regulatory hurdles</li>
        <li>Competition from established players</li>
        <li>Market adoption rate</li>
        <li>Manufacturing scalability</li>
      </ul>

      <h3 class="font-semibold mt-6 mb-4">Mitigation Strategies:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Robust testing and validation procedures</li>
        <li>Early engagement with regulatory bodies</li>
        <li>Focus on unique value propositions</li>
        <li>Pilot programs to demonstrate benefits</li>
        <li>Strategic manufacturing partnerships</li>
      </ul>
    </div>

    <h2>Next Steps</h2>
    <div class="bg-green-50 p-6 rounded-lg mb-8">
      <ol class="list-decimal list-inside space-y-2">
        <li>Complete MVP development</li>
        <li>Secure seed funding</li>
        <li>Establish pilot program partnerships</li>
        <li>Begin regulatory certification process</li>
        <li>Build initial sales pipeline</li>
      </ol>
    </div>

    <p class="mt-6">
      This business plan outlines our path to bringing MILI to market and establishing ourselves as a leader in the 
      autonomous EV charging space. Our focus on a lean MVP approach, combined with strategic funding rounds and 
      careful market entry, positions us well for success in this rapidly growing market.
    </p>

    <p class="mt-4">
      In our next post, we'll dive deeper into our pilot program strategy and how we plan to work with early adopters 
      to refine MILI's capabilities.
    </p>
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

