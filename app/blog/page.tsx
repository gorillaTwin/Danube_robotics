import Link from "next/link"

const blogPosts = [
  {
    id: 16,
    title: "MILI Business Plan: From MVP to Market Leadership",
    date: "2024-02-25",
    excerpt:
      "A comprehensive business plan outlining MILI's development roadmap, investment strategy, and go-to-market approach, including MVP specifications and financial projections.",
    author: "Marko Pavlović",
  },
  {
    id: 15,
    title: "MILI's Business Model Canvas: Mapping Our Path to Success",
    date: "2024-02-24",
    excerpt:
      "Explore MILI's business model using the Business Model Canvas framework, covering key aspects such as value propositions, customer segments, revenue streams, and more.",
    author: "Marko Pavlović",
  },
  {
    id: 14,
    title: "Selecting Off-the-Shelf Parking Sensors for MILI: A Comprehensive Guide",
    date: "2024-02-23",
    excerpt:
      "Explore the process of choosing the right parking sensors to enhance MILI's obstacle detection capabilities, including a comparison of different sensor types and a recommended configuration.",
    author: "Marko Pavlović",
  },
  {
    id: 13,
    title: "Optimizing MILI's Vision: Selecting the Perfect Camera Setup for Jetson Nano 4GB",
    date: "2024-02-22",
    excerpt:
      "A detailed analysis of choosing the right RGB-IR cameras for MILI's front SLAM and side/rear car detection, optimized for the Jetson Nano 4GB.",
    author: "Marko Pavlović",
  },
  {
    id: 12,
    title: "Seeing in the Dark: RGB-IR Cameras for MILI's All-Condition Navigation",
    date: "2024-02-21",
    excerpt:
      "Exploring the integration of RGB-IR cameras to enhance MILI's navigation capabilities in low-light conditions.",
    author: "Marko Pavlović",
  },
  {
    id: 11,
    title: "Dual Jetson Nano Setup for MILI: Balancing Performance and Efficiency",
    date: "2024-02-20",
    excerpt:
      "Exploring an innovative dual NVIDIA Jetson Nano configuration for MILI, optimizing performance for both safety and navigation tasks.",
    author: "Marko Pavlović",
  },
  {
    id: 10,
    title: "Optimizing MILI's Dimensions: A Design Analysis for Battery Integration",
    date: "2024-02-19",
    excerpt:
      "A detailed analysis of MILI's optimal dimensions, focusing on efficient battery placement and overall stability.",
    author: "Marko Pavlović",
  },
  {
    id: 9,
    title: "Selecting the Right Aluminum Profile for MILI: A Load-Bearing Analysis",
    date: "2024-02-18",
    excerpt:
      "Learn how to choose the appropriate aluminum profiles for MILI's frame to safely handle loads up to 100kg while maintaining structural integrity.",
    author: "Marko Pavlović",
  },
  {
    id: 8,
    title: "Building MILI: A Complete Guide to Prototype Assembly Tools and Components",
    date: "2024-02-17",
    excerpt: "A comprehensive guide to the tools, components, and assembly process needed to build a MILI prototype.",
    author: "Marko Pavlović",
  },
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
                  <Link href={`/blog/${post.id}/${post.id}`} className="text-blue-600 hover:text-blue-800">
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
                  className="inline-block mt-4 text-blue-600 hover:text-blue-800"
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

