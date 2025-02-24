import Link from "next/link"

const blogPost = {
  id: 13,
  title: "Optimizing MILI's Vision: Selecting the Perfect Camera Setup for Jetson Nano 4GB",
  date: "2024-02-22",
  author: "Marko Pavlović",
  content: `
    <p>Following our decision to use the NVIDIA Jetson Nano 4GB for MILI's brain, we're now faced with the crucial task of selecting the right cameras for our autonomous charging robot. Our setup requires five cameras in total: two high-performance front-facing cameras for SLAM (Simultaneous Localization and Mapping) and three side/rear cameras for basic car detection. Let's dive into the selection process and find the perfect RGB-IR cameras for each role.</p>

    <h2>Jetson Nano 4GB: A Quick Recap</h2>
    <div class="bg-blue-50 p-6 rounded-lg mb-6">
      <p class="mb-4">Before we select our cameras, let's review the relevant specs of our Jetson Nano 4GB:</p>
      <ul class="list-disc list-inside space-y-2">
        <li>4x USB 3.0 ports</li>
        <li>12 lanes MIPI CSI-2 D-PHY 1.1 (3x4 or 4x2 configuration)</li>
        <li>Video Encode: 250 MP/sec, up to 4K @ 30fps (HEVC)</li>
        <li>Video Decode: 500 MP/sec, up to 4K @ 60fps (HEVC)</li>
        <li>GPU: 128 NVIDIA CUDA® cores</li>
        <li>CPU: Quad-core ARM Cortex-A57 MPCore processor</li>
        <li>Memory: 4 GB 64-bit LPDDR4, 1600MHz 25.6 GB/s</li>
      </ul>
    </div>

    <h2>Camera Requirements</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="bg-white shadow-md rounded-lg p-6">
        <h3 class="font-semibold mb-2">Front Cameras (2x)</h3>
        <ul class="space-y-1">
          <li>• Higher frame rate for SLAM (ideally 60fps+)</li>
          <li>• Higher resolution for detailed mapping</li>
          <li>• Wide field of view</li>
          <li>• Excellent low-light performance</li>
          <li>• Connected via MIPI CSI-2</li>
        </ul>
      </div>
      <div class="bg-white shadow-md rounded-lg p-6">
        <h3 class="font-semibold mb-2">Side/Rear Cameras (3x)</h3>
        <ul class="space-y-1">
          <li>• Moderate frame rate (30fps is sufficient)</li>
          <li>• Decent resolution for car detection</li>
          <li>• Good low-light capability</li>
          <li>• Connected via USB 3.0</li>
        </ul>
      </div>
    </div>

    <h2>Camera Selection</h2>
    
    <h3>Front Cameras (2x)</h3>
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <h4 class="font-semibold mb-2">Selected: Arducam 12MP IMX477 IR-CUT Camera</h4>
      <ul class="space-y-2">
        <li>• Resolution: 12.3MP (4056x3040)</li>
        <li>• Frame Rate: Up to 60fps at 1080p</li>
        <li>• Sensor: Sony IMX477 1/2.3" sensor</li>
        <li>• IR Sensitivity: Yes, with IR-cut filter</li>
        <li>• Interface: MIPI CSI-2 (2-lane)</li>
        <li>• Field of View: 70° (adjustable with different lenses)</li>
        <li>• Price: Approximately $70-$80 per unit</li>
      </ul>
      <p class="mt-4">
        <strong>Reasoning:</strong> The Arducam 12MP IMX477 offers an excellent balance of high resolution and frame rate, 
        crucial for our SLAM requirements. Its IR sensitivity with an IR-cut filter allows for both daytime and nighttime 
        operation. The MIPI CSI-2 interface ensures direct compatibility with the Jetson Nano, reducing latency and 
        processing overhead.
      </p>
    </div>

    <h3>Side/Rear Cameras (3x)</h3>
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <h4 class="font-semibold mb-2">Selected: ELP 2MP Sony IMX291 USB Camera</h4>
      <ul class="space-y-2">
        <li>• Resolution: 2MP (1920x1080)</li>
        <li>• Frame Rate: 30fps at 1080p</li>
        <li>• Sensor: Sony IMX291 1/2.8" sensor</li>
        <li>• IR Sensitivity: Yes, with IR LEDs for night vision</li>
        <li>• Interface: USB 3.0</li>
        <li>• Field of View: 100°</li>
        <li>• Price: Approximately $40-$50 per unit</li>
      </ul>
      <p class="mt-4">
        <strong>Reasoning:</strong> The ELP camera with Sony IMX291 sensor provides excellent low-light performance, 
        which is crucial for car detection in various lighting conditions. The USB 3.0 interface allows easy connection 
        to the Jetson Nano, and the 30fps frame rate is sufficient for our car detection needs. The built-in IR LEDs 
        ensure functionality in complete darkness.
      </p>
    </div>

    <h2>Integration with Jetson Nano 4GB</h2>
    <div class="space-y-4 mb-8">
      <h3 class="font-semibold">Connection Layout:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Front Cameras (2x):
          <ul class="list-disc list-inside ml-6 mt-2">
            <li>Connected to the MIPI CSI-2 lanes (using 2x4 lane configuration)</li>
            <li>Utilize the full bandwidth for high-frame-rate SLAM processing</li>
          </ul>
        </li>
        <li>Side/Rear Cameras (3x):
          <ul class="list-disc list-inside ml-6 mt-2">
            <li>Connected to three of the four available USB 3.0 ports</li>
            <li>Provides sufficient bandwidth for 1080p30 streaming on all cameras</li>
          </ul>
        </li>
      </ul>
    </div>

    <h2>Software Considerations</h2>
    <div class="bg-yellow-50 p-6 rounded-lg mb-6">
      <h3 class="font-semibold mb-4">Optimizing Performance:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Utilize NVIDIA's VisionWorks and OpenCV for efficient image processing</li>
        <li>Implement separate processing pipelines for SLAM and car detection tasks</li>
        <li>Use TensorRT for optimizing neural network inference on car detection models</li>
        <li>Consider using NVIDIA's DeepStream SDK for efficient multi-camera video analytics</li>
        <li>Implement adaptive frame rate control to balance performance and power consumption</li>
      </ul>
    </div>

    <h2>Potential Challenges and Solutions</h2>
    <div class="space-y-4 mb-8">
      <h3 class="font-semibold">Challenges:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Processing overhead from multiple high-resolution camera streams</li>
        <li>Power consumption and heat generation</li>
        <li>Synchronization between different camera interfaces (MIPI vs USB)</li>
      </ul>
      <h3 class="font-semibold mt-4">Solutions:</h3>
      <ul class="list-disc list-inside space-y-2">
        <li>Implement efficient multi-threading and GPU acceleration techniques</li>
        <li>Optimize power management settings on the Jetson Nano</li>
        <li>Develop a robust camera synchronization algorithm in software</li>
        <li>Consider adding a small cooling fan to the Jetson Nano for thermal management</li>
        <li>Leverage the Jetson Nano's 128 CUDA cores for efficient parallel processing of camera streams</li>
      </ul>
    </div>

    <h2>Cost Analysis</h2>
    <div class="bg-green-50 p-6 rounded-lg mb-6">
      <p class="mb-4">Let's break down the estimated cost for our camera setup:</p>
      <ul class="list-disc list-inside space-y-2">
        <li>2x Arducam 12MP IMX477 IR-CUT Camera: $140-$160</li>
        <li>3x ELP 2MP Sony IMX291 USB Camera: $120-$150</li>
        <li>Total estimated cost: $260-$310</li>
      </ul>
      <p class="mt-4">
        This camera setup provides an excellent balance of performance and cost-effectiveness, 
        giving MILI robust vision capabilities for both navigation and obstacle detection.
      </p>
    </div>

    <h2>Next Steps</h2>
    <div class="bg-blue-50 p-6 rounded-lg mb-8">
      <ol class="list-decimal list-inside space-y-2">
        <li>Order the selected cameras for prototyping</li>
        <li>Develop a mounting system for integrating the cameras into MILI's chassis</li>
        <li>Set up the Jetson Nano with the necessary software stack (JetPack, OpenCV, etc.)</li>
        <li>Implement initial camera interfacing and test basic functionality</li>
        <li>Develop separate processing pipelines for SLAM and car detection</li>
        <li>Conduct extensive testing in various lighting conditions</li>
        <li>Optimize performance and power consumption</li>
      </ol>
    </div>

    <p class="mt-6">
      In our next post, we'll dive into the software architecture for processing these multiple camera streams efficiently 
      on the Jetson Nano 4GB. We'll explore how to leverage its 128 CUDA cores and quad-core ARM CPU for our SLAM 
      algorithms using the front cameras and the car detection algorithms for the side/rear cameras, all while managing 
      the impressive encode and decode capabilities of this compact yet powerful device.
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

