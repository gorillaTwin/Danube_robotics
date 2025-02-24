import Link from "next/link"

const blogPost = {
  id: 15,
  title: "MILI's Business Model Canvas: Mapping Our Path to Success",
  date: "2024-02-24",
  author: "Marko Pavlović",
  content: `
    <p>As we continue to develop MILI, our autonomous EV charging robot, it's crucial to have a clear understanding of our business model. To achieve this, we've utilized the Business Model Canvas, a strategic management tool that helps us visualize, design, and pivot our business model. In this post, we'll break down each component of the canvas for MILI.</p>

    <h2>What is a Business Model Canvas?</h2>
    <div class="bg-blue-50 p-6 rounded-lg mb-6">
      <p>The Business Model Canvas is a one-page overview that lays out both what you do (or want to do) and how you go about doing it. It's divided into nine key areas:</p>
      <ol class="list-decimal list-inside space-y-2 mt-4">
        <li>Value Propositions</li>
        <li>Customer Segments</li>
        <li>Channels</li>
        <li>Customer Relationships</li>
        <li>Revenue Streams</li>
        <li>Key Resources</li>
        <li>Key Activities</li>
        <li>Key Partnerships</li>
        <li>Cost Structure</li>
      </ol>
    </div>

    <h2>MILI's Business Model Canvas</h2>

    <h3>1. Value Propositions</h3>
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <ul class="list-disc list-inside space-y-2">
        <li>Flexible and scalable EV charging solution for parking facilities</li>
        <li>Reduced infrastructure costs compared to fixed charging stations</li>
        <li>Increased utilization of parking spaces</li>
        <li>24/7 autonomous operation</li>
        <li>Enhanced user experience through mobile app integration</li>
      </ul>
    </div>

    <h3>2. Customer Segments</h3>
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <ul class="list-disc list-inside space-y-2">
        <li>Parking facility operators (public and private)</li>
        <li>Commercial real estate developers</li>
        <li>Shopping centers and malls</li>
        <li>Airports and transportation hubs</li>
        <li>Corporate campuses</li>
        <li>Residential complexes</li>
      </ul>
    </div>

    <h3>3. Channels</h3>
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <ul class="list-disc list-inside space-y-2">
        <li>Direct sales team</li>
        <li>Industry trade shows and conferences</li>
        <li>Online marketing (website, social media, content marketing)</li>
        <li>Partnerships with EV manufacturers and charging network operators</li>
        <li>Pilot programs and demonstrations</li>
      </ul>
    </div>

    <h3>4. Customer Relationships</h3>
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <ul class="list-disc list-inside space-y-2">
        <li>Dedicated account managers for large clients</li>
        <li>24/7 technical support</li>
        <li>Regular software updates and feature improvements</li>
        <li>Customer feedback integration for product development</li>
        <li>User community and knowledge base</li>
      </ul>
    </div>

    <h3>5. Revenue Streams</h3>
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <ul class="list-disc list-inside space-y-2">
        <li>Hardware sales (MILI units)</li>
        <li>Software licensing fees</li>
        <li>Maintenance and service contracts</li>
        <li>Revenue sharing model with parking operators</li>
        <li>Data insights and analytics services</li>
      </ul>
    </div>

    <h3>6. Key Resources</h3>
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <ul class="list-disc list-inside space-y-2">
        <li>Engineering and R&D team</li>
        <li>Manufacturing facilities and supply chain</li>
        <li>Proprietary software and AI algorithms</li>
        <li>Patents and intellectual property</li>
        <li>Customer service and support infrastructure</li>
      </ul>
    </div>

    <h3>7. Key Activities</h3>
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <ul class="list-disc list-inside space-y-2">
        <li>Product development and innovation</li>
        <li>Manufacturing and quality control</li>
        <li>Software development and maintenance</li>
        <li>Sales and marketing</li>
        <li>Customer support and training</li>
        <li>Regulatory compliance and certification</li>
      </ul>
    </div>

    <h3>8. Key Partnerships</h3>
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <ul class="list-disc list-inside space-y-2">
        <li>EV manufacturers</li>
        <li>Charging station manufacturers</li>
        <li>Parking management software providers</li>
        <li>Battery suppliers</li>
        <li>Cloud service providers</li>
        <li>Regulatory bodies and industry associations</li>
      </ul>
    </div>

    <h3>9. Cost Structure</h3>
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <ul class="list-disc list-inside space-y-2">
        <li>Research and development expenses</li>
        <li>Manufacturing costs</li>
        <li>Sales and marketing expenses</li>
        <li>Customer support and service costs</li>
        <li>Software development and maintenance</li>
        <li>Administrative and overhead costs</li>
      </ul>
    </div>

    <h2>Key Insights from Our Business Model Canvas</h2>
    <div class="bg-green-50 p-6 rounded-lg mb-6">
      <ol class="list-decimal list-inside space-y-2">
        <li>Our value proposition centers on flexibility and cost-effectiveness, addressing key pain points in the EV charging infrastructure market.</li>
        <li>We have a diverse range of potential customers, from private parking operators to large corporations, indicating significant market potential.</li>
        <li>Our revenue model combines hardware sales with recurring software and service income, providing multiple income streams.</li>
        <li>Partnerships, especially with EV manufacturers and charging station providers, will be crucial for market penetration and technology integration.</li>
        <li>Continuous innovation and customer support are key activities that will drive our competitive advantage.</li>
      </ol>
    </div>

    <h2>Next Steps</h2>
    <div class="bg-yellow-50 p-6 rounded-lg mb-8">
      <p class="mb-4">Based on our Business Model Canvas analysis, here are our priority actions:</p>
      <ol class="list-decimal list-inside space-y-2">
        <li>Refine our pricing strategy to balance hardware costs with recurring revenue streams</li>
        <li>Develop a comprehensive partnership strategy, focusing on key players in the EV and parking management industries</li>
        <li>Invest in scalable customer support infrastructure to ensure high satisfaction as we grow</li>
        <li>Explore data monetization opportunities while ensuring user privacy and regulatory compliance</li>
        <li>Continuously gather customer feedback to iterate on our product and business model</li>
      </ol>
    </div>

    <p class="mt-6">
      The Business Model Canvas provides us with a clear overview of MILI's potential in the market and the key areas we need to focus on. As we continue to develop and refine our product, we'll regularly revisit and update this canvas to ensure our business strategy remains aligned with market needs and technological advancements.
    </p>

    <p class="mt-4">
      In our next post, we'll dive deeper into our go-to-market strategy, exploring how we plan to introduce MILI to our first customers and scale our operations.
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

