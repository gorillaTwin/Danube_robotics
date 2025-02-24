import Link from "next/link"

const blogPost = {
  id: 5,
  title: "The Inevitable Shift: From Coal to Solar and Battery Power",
  date: "2024-01-22",
  author: "Marko Pavlović",
  content: `
    <p>Soon, market conditions will force us to shut down coal-fired power plants. It sounds megalomaniacal. What is this guy babbling about? Coal has been used since the Industrial Revolution. What does this guy know? The essence lies in a simple calculation; before mathematical principles, we are all equal. Mathematics does not care who sets the equations, but whether they are true.</p>

    <p>After decades of refining the production process, a solar power plant connected to a battery is cheaper to build and maintain than a coal-fired power plant. As such, it can cover 95%-99% of all energy needs of a household or a country. [1] Battery costs have fallen to the point where in many places (Lazard 2018) it is cheaper to build new solar+batteries than to operate existing gas and coal power systems. Even if gas costs, which are often driven by transport costs, fall, carbon burning grid assets are well on the way to being stranded.</p>

    <div class="my-8">
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cTUk3f3cdaAzTnX6qbDAMTazrXvqbW.png"
        alt="The Clean Energy U-Curve graph showing the relationship between system costs and generating capacity for renewable energy systems"
        class="w-full rounded-lg"
      />
      <p class="text-sm text-gray-600 mt-2">Figure: The Clean Energy U-Curve demonstrating how the combination of battery storage and renewable generation capacity affects overall system costs. Source: RethinkX</p>
    </div>

    <p>If after this quote you think we are not on that map. We are, more than ever. In the last 8-7 years, the prices of lithium-ion batteries have fallen from $250 to $50 per kWh. This means we need to focus on finding safe places where we can store the batteries we will use to store this enormous solar energy we can obtain on our land. One way to do this could be the electric car, or a battery with its electric charger. But also batteries in the grid itself.</p>

    <p>We plan to make a charger for electric cars that is actually a large battery on wheels; it approaches the car and starts charging it, thus achieving greater utilization of the electric charger, but bringing the charger to the garage or place that suits the customer best faster.</p>

    <h2>References</h2>
    <p>[1] 95% of needs can be covered with a few more panels and 12h batteries.<br>
    <a href="https://caseyhandmer.wordpress.com/2023/07/12/grid-storage-batteries-will-win/" target="_blank" rel="noopener noreferrer">https://caseyhandmer.wordpress.com/2023/07/12/grid-storage-batteries-will-win/</a></p>
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

