import Link from "next/link"

const blogPost = {
  id: 1,
  title: "The Future of EV Charging: Mobile Robots",
  date: "2023-06-15",
  author: "Marko Pavlović",
  content: `
    <p>The electric vehicle (EV) revolution is well underway, with more and more drivers making the switch to eco-friendly transportation. However, one significant hurdle remains: the availability and convenience of charging infrastructure. At Danube Robotics, we're tackling this challenge head-on with our innovative solution: MILI, the mobile charging robot.</p>

    <h2>The Challenge of EV Charging Infrastructure</h2>
    <p>Traditional EV charging solutions often involve installing fixed charging stations at designated parking spots. While this approach works, it comes with several drawbacks:</p>
    <ul>
      <li>High installation costs</li>
      <li>Limited flexibility</li>
      <li>Potential for underutilization</li>
      <li>Difficulty in scaling with demand</li>
    </ul>

    <h2>Enter MILI: The Mobile Charging Solution</h2>
    <p>MILI represents a paradigm shift in EV charging. As an autonomous robot designed to navigate parking lots, MILI brings the charger to the vehicle, rather than requiring the vehicle to park at a specific charging spot. This innovative approach offers numerous benefits:</p>
    <ul>
      <li>Flexibility: MILI can serve multiple parking spots, maximizing utilization</li>
      <li>Cost-effectiveness: No need for extensive electrical infrastructure installation</li>
      <li>Scalability: Easy to deploy additional units as demand grows</li>
      <li>Convenience: Users can park anywhere and request charging via a mobile app</li>
    </ul>

    <h2>How MILI Works</h2>
    <p>MILI is equipped with advanced sensors and AI-driven navigation systems, allowing it to safely maneuver through parking lots. When a user requests a charge via our mobile app, MILI locates the vehicle, navigates to it, and initiates the charging process. This seamless interaction ensures that EV owners can charge their vehicles with minimal effort. MILI navigates his environment with AI models and sensors, and then connects to custom charging connectors.</p>

    <p>Stay tuned for more updates on MILI and our mission to revolutionize EV charging infrastructure!</p>
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

