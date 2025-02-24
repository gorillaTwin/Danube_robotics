import Link from "next/link"

const blogPosts = [
  {
    id: 7,
    title: "Building MILI's World: 3D Reconstruction with Multi-Camera Vision",
    date: "2024-02-16",
    excerpt:
      "Explore how MILI uses multiple cameras and advanced AI to create real-time 3D models of its environment for autonomous navigation.",
    author: "Marko Pavlović",
  },
  {
    id: 6,
    title: "Optimizing MILI's Vision: Top 5 Smartphone Cameras for Advanced Navigation",
    date: "2024-02-15",
    excerpt:
      "Explore our top picks for smartphone-grade cameras to enhance MILI's computer vision capabilities, including cost analysis and trade-offs.",
    author: "Marko Pavlović",
  },
  {
    id: 5,
    title: "The Inevitable Shift: From Coal to Solar and Battery Power",
    date: "2024-01-22",
    excerpt:
      "Explore the economic and technological factors driving the transition from coal to solar and battery power in our energy infrastructure.",
    author: "Marko Pavlović",
  },
  {
    id: 4,
    title: "From Manual Pumps to Mobile Robots: The Evolution of Vehicle Charging Infrastructure",
    date: "2024-01-21",
    excerpt:
      "Explore the fascinating journey of vehicle charging infrastructure, from early manual pumps to modern autonomous robots.",
    author: "Marko Pavlović",
  },
  {
    id: 1,
    title: "The Future of EV Charging: Mobile Robots",
    date: "2023-06-15",
    excerpt: "Explore how mobile robots like MILI are revolutionizing EV charging infrastructure.",
    author: "Marko Pavlović",
  },
]

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="w-full bg-gray-100 px-4 md:px-56 py-4">
          <h1 className="text-4xl font-bold">Blog</h1>
        </div>
        <div className="container mx-auto px-4 md:px-6 py-8 max-w-5xl">
          <div className="space-y-10">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-2">
                  <Link href={`/blog/${post.id}/${post.id}`} className="text-[#184c7c] hover:text-[#2b6ca8]">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">
                  <span className="mr-4">{post.date}</span>
                  <span>By {post.author}</span>
                </p>
                <p className="text-gray-700">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.id}/${post.id}`}
                  className="inline-block mt-4 text-[#184c7c] hover:text-[#2b6ca8]"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

