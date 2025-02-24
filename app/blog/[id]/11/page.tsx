import Link from "next/link"

const blogPost = {
  id: 11,
  title: "Dual Jetson Nano Setup for MILI: Balancing Performance and Efficiency",
  date: "2024-02-20",
  author: "Marko Pavlović",
  content: `
    <p>As we refine MILI's design, we've been exploring various options for our AI processing unit. After careful consideration of our specific requirements and power constraints, we've arrived at an innovative solution: a dual NVIDIA Jetson Nano setup. This approach allows us to efficiently handle both obstacle detection and navigation tasks. Let's dive into the details of this configuration and why it's ideal for MILI.</p>

    <h2>MILI's Revised AI Processing Requirements</h2>
    <div class="bg-blue-50 p-6 rounded-lg mb-6">
      <ul class="space-y-2">
        <li>• Process streams from 5 cameras total</li>
        <li>• Run real-time car detection on 3 cameras for safety</li>
        <li>• Execute path planning algorithms using 2 front cameras</li>
        <li>• Operate within strict power and space constraints of a mobile robot</li>
      </ul>
    </div>

    <h2>Dual Jetson Nano Configuration</h2>
    <p class="mb-4">We've decided to use two NVIDIA Jetson Nano modules, each handling specific tasks:</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-white shadow-md rounded-lg p-6">
        <h3 class="font-semibold mb-2">Jetson Nano #1: Safety System</h3>
        <ul class="space-y-1">
          <li>• Primary task: Car detection</li>
          <li>• Processes feeds from 3 cameras</li>
          <li>• Runs lightweight object detection model</li>
          <li>• Dedicated to safety-critical operations</li>
        </ul>
      </div>
      <div class="bg-white shadow-md rounded-lg p-6">
        <h3 class="font-semibold mb-2">Jetson Nano #2: Navigation System</h3>
        <ul class="space-y-1">
          <li>• Primary task: Path planning</li>
          <li>• Processes feeds from 2 front cameras</li>
          <li>• Runs navigation and mapping algorithms</li>
          <li>• Handles decision-making for movement</li>
        </ul>
      </div>
    </div>

    <h2>Why Two Jetson Nanos?</h2>
    
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <h3 class="font-semibold mb-4">Advantages of Dual Nano Setup</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Task Separation: Dedicates resources to critical functions</li>
        <li>Redundancy: Enhances system reliability</li>
        <li>Power Efficiency: Each Nano can be optimized for its specific task</li>
        <li>Cost-Effective: Two Nanos are still more affordable than one Xavier NX</li>
        <li>Thermal Management: Easier to cool two smaller units</li>
        <li>Flexibility: Allows for independent updates and maintenance</li>
      </ul>
    </div>

    <h2>Performance Analysis</h2>
    
    <div class="bg-gray-50 p-6 rounded-lg mb-6">
      <h3 class="font-semibold mb-4">Jetson Nano Capabilities (per unit)</h3>
      <ul class="space-y-2">
        <li>• CPU: Quad-core ARM A57</li>
        <li>• GPU: 128-core Maxwell</li>
        <li>• Memory: 4GB LPDDR4</li>
        <li>• Power: 5-10W</li>
        <li>• Video Processing: Up to 4K @ 30fps (H.265) decode</li>
      </ul>
    </div>

    <h2>Task Distribution and Performance Estimates</h2>
    <div class="space-y-4 mb-8">
      <h3 class="font-semibold">Safety System (Nano #1):</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Processes 3 camera streams (e.g., 720p @ 30fps)</li>
        <li>Runs TensorRT-optimized SSD-Mobilenet-V2 for car detection</li>
        <li>Expected performance: ~20-25 fps for detection on each stream</li>
      </ul>
      
      <h3 class="font-semibold mt-4">Navigation System (Nano #2):</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Processes 2 front camera streams (e.g., 1080p @ 30fps)</li>
        <li>Runs visual odometry and mapping algorithms</li>
        <li>Executes path planning at 5-10 Hz</li>
      </ul>
    </div>

    <h2>Implementation Considerations</h2>
    <div class="bg-yellow-50 p-6 rounded-lg mb-6">
      <ul class="space-y-2">
        <li>1. <strong>Inter-module Communication:</strong> Implement efficient data sharing between Nanos (e.g., using shared memory or high-speed serial)</li>
        <li>2. <strong>Power Management:</strong> Implement dynamic clock scaling to optimize power usage</li>
        <li>3. <strong>Thermal Design:</strong> Ensure adequate cooling for both modules in MILI's compact frame</li>
        <li>4. <strong>Fail-safe Mechanisms:</strong> Design system to operate safely if one module fails</li>
        <li>5. <strong>Software Architecture:</strong> Develop a distributed system architecture that leverages both modules effectively</li>
      </ul>
    </div>

    <h2>Software Stack Recommendations</h2>
    <div class="space-y-4 mb-8">
      <ul class="list-disc list-inside space-y-2">
        <li>OS: NVIDIA JetPack 4.6 (or latest compatible version)</li>
        <li>AI Framework: NVIDIA TensorRT for optimized inference</li>
        <li>Computer Vision: OpenCV with CUDA acceleration</li>
        <li>ROS2: For overall robot control and inter-module communication</li>
        <li>Navigation: Custom stack based on ROS2 navigation</li>
      </ul>
    </div>

    <h2>Next Steps</h2>
    <div class="bg-green-50 p-6 rounded-lg mb-8">
      <ol class="list-decimal list-inside space-y-2">
        <li>Acquire two Jetson Nano Developer Kits for prototyping</li>
        <li>Set up the development environment with JetPack and necessary SDKs</li>
        <li>Develop and benchmark the car detection model on the first Nano</li>
        <li>Implement and test the navigation stack on the second Nano</li>
        <li>Design and test the inter-module communication system</li>
        <li>Integrate both modules into MILI's control system</li>
        <li>Conduct comprehensive system tests and optimizations</li>
      </ol>
    </div>

    <p class="mt-6">In our next post, we'll delve into the software architecture for MILI's dual Jetson Nano system, detailing how we'll implement efficient inter-module communication and task distribution between the safety and navigation systems.</p>
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

