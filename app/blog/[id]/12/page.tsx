import Link from "next/link"

const blogPost = {
  id: 12,
  title: "Seeing in the Dark: RGB-IR Cameras for MILI's All-Condition Navigation",
  date: "2024-02-21",
  author: "Marko Pavlović",
  content: `
    <p>As we continue to refine MILI's capabilities, one crucial aspect we need to address is its ability to navigate in all lighting conditions, including complete darkness. To achieve this, we're exploring the integration of RGB-IR (Red, Green, Blue, and Infrared) cameras into our system. In this post, we'll dive into the world of RGB-IR technology and how it can significantly enhance MILI's perception capabilities.</p>

    <h2>Understanding RGB-IR Technology</h2>
    <div class="bg-blue-50 p-6 rounded-lg mb-6">
      <p class="mb-4">RGB-IR cameras combine traditional color imaging with infrared sensitivity, offering several advantages:</p>
      <ul class="list-disc list-inside space-y-2">
        <li>Full-color imaging in daylight conditions</li>
        <li>Near-infrared sensitivity for low-light and nighttime operation</li>
        <li>Single-sensor solution for day/night functionality</li>
        <li>Improved contrast and detail in challenging lighting situations</li>
      </ul>
    </div>

    <h2>Benefits for MILI's Navigation</h2>
    <div class="space-y-4 mb-8">
      <p>Integrating RGB-IR cameras into MILI's vision system offers several key benefits:</p>
      <ol class="list-decimal list-inside space-y-2">
        <li>24/7 Operation: Ability to navigate and detect obstacles in any lighting condition</li>
        <li>Enhanced Safety: Better detection of potential hazards in low-light environments</li>
        <li>Improved Efficiency: No need to switch between day and night cameras</li>
        <li>Energy Conservation: Potential to reduce the need for additional lighting systems</li>
        <li>Data Consistency: Maintain similar visual data across varying light conditions for AI processing</li>
      </ol>
    </div>

    <h2>RGB-IR Camera Options for MILI</h2>
    <p class="mb-4">Let's explore some RGB-IR camera options that could be suitable for MILI:</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-white shadow-md rounded-lg p-6">
        <h3 class="font-semibold mb-2">1. Sony IMX327 Starvis</h3>
        <ul class="space-y-1">
          <li>• Resolution: 2MP (1920x1080)</li>
          <li>• Sensor Size: 1/2.8"</li>
          <li>• Excellent low-light performance</li>
          <li>• Compatible with various lens options</li>
          <li>• Price Range: $50-$80</li>
        </ul>
      </div>
      <div class="bg-white shadow-md rounded-lg p-6">
        <h3 class="font-semibold mb-2">2. OmniVision OV9782</h3>
        <ul class="space-y-1">
          <li>• Resolution: 1MP (1280x800)</li>
          <li>• Sensor Size: 1/4"</li>
          <li>• Low power consumption</li>
          <li>• Compact size ideal for tight spaces</li>
          <li>• Price Range: $30-$50</li>
        </ul>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-white shadow-md rounded-lg p-6">
        <h3 class="font-semibold mb-2">3. Himax HM2140</h3>
        <ul class="space-y-1">
          <li>• Resolution: 2MP (1920x1080)</li>
          <li>• Sensor Size: 1/2.7"</li>
          <li>• High dynamic range (HDR) capability</li>
          <li>• Good balance of performance and cost</li>
          <li>• Price Range: $40-$70</li>
        </ul>
      </div>
      <div class="bg-white shadow-md rounded-lg p-6">
        <h3 class="font-semibold mb-2">4. ON Semiconductor AR0144</h3>
        <ul class="space-y-1">
          <li>• Resolution: 1MP (1280x800)</li>
          <li>• Sensor Size: 1/4"</li>
          <li>• Global shutter for motion blur reduction</li>
          <li>• Ideal for fast-moving scenes</li>
          <li>• Price Range: $60-$90</li>
        </ul>
      </div>
    </div>

    <h2>Our Recommendation</h2>
    <div class="bg-green-50 p-6 rounded-lg mb-6">
      <p class="mb-4">For MILI's specific needs, we recommend the <strong>Sony IMX327 Starvis</strong> for the following reasons:</p>
      <ul class="list-disc list-inside space-y-2">
        <li>Superior low-light performance, crucial for nighttime operation</li>
        <li>High resolution provides detailed imagery for both navigation and object detection</li>
        <li>Wide compatibility with various lenses allows for customization</li>
        <li>Balanced price point for the performance offered</li>
        <li>Well-documented and widely supported, easing integration with our Jetson Nano setup</li>
      </ul>
    </div>

    <h2>Integration with Dual Jetson Nano Setup</h2>
    <div class="space-y-4 mb-8">
      <p>Integrating RGB-IR cameras with our dual Jetson Nano configuration requires some considerations:</p>
      <ol class="list-decimal list-inside space-y-2">
        <li>Camera Distribution:
          <ul class="list-disc list-inside ml-6 mt-2">
            <li>Two RGB-IR cameras for the navigation Nano (front-facing)</li>
            <li>Three RGB-IR cameras for the safety Nano (sides and rear)</li>
          </ul>
        </li>
        <li>Data Processing:
          <ul class="list-disc list-inside ml-6 mt-2">
            <li>Utilize NVIDIA's VisionWorks toolkit for efficient image processing</li>
            <li>Implement adaptive thresholding to handle varying light conditions</li>
          </ul>
        </li>
        <li>Software Adjustments:
          <ul class="list-disc list-inside ml-6 mt-2">
            <li>Modify object detection models to work with both RGB and IR data</li>
            <li>Develop algorithms to switch between or combine RGB and IR data based on lighting conditions</li>
          </ul>
        </li>
      </ol>
    </div>

    <h2>Potential Challenges and Solutions</h2>
    <div class="bg-yellow-50 p-6 rounded-lg mb-6">
      <h3 class="font-semibold mb-4">Challenges:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Increased data processing requirements</li>
        <li>Potential for sensor oversaturation in rapidly changing light conditions</li>
        <li>Calibration complexity for accurate color reproduction</li>
        <li>Higher power consumption compared to standard RGB cameras</li>
      </ul>
      <h3 class="font-semibold mt-4 mb-2">Solutions:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Optimize image processing pipelines using NVIDIA's CUDA capabilities</li>
        <li>Implement adaptive exposure control algorithms</li>
        <li>Develop robust calibration procedures and software compensation</li>
        <li>Fine-tune power management and consider additional battery capacity</li>
      </ul>
    </div>

    <h2>Future Possibilities</h2>
    <div class="space-y-4 mb-8">
      <p>The integration of RGB-IR cameras opens up exciting possibilities for MILI:</p>
      <ul class="list-disc list-inside space-y-2">
        <li>Thermal mapping of charging stations for predictive maintenance</li>
        <li>Enhanced security features for nighttime operation in parking facilities</li>
        <li>Potential for detecting vehicle heat signatures for more accurate positioning during charging</li>
        <li>Improved weather condition detection (e.g., fog, rain) for adaptive navigation strategies</li>
      </ul>
    </div>

    <h2>Next Steps</h2>
    <div class="bg-blue-50 p-6 rounded-lg mb-8">
      <ol class="list-decimal list-inside space-y-2">
        <li>Acquire Sony IMX327 Starvis camera modules for testing</li>
        <li>Develop a prototype mount for integrating the cameras into MILI's chassis</li>
        <li>Implement initial image processing pipelines on our Jetson Nano setup</li>
        <li>Conduct extensive day/night testing in various environments</li>
        <li>Refine AI models to leverage the additional infrared data</li>
        <li>Update MILI's navigation algorithms to utilize the enhanced visual information</li>
      </ol>
    </div>

    <p class="mt-6">In our next post, we'll dive into the software architecture required to fully leverage these RGB-IR cameras, including adaptive processing techniques and integration with our existing navigation and safety systems.</p>
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

