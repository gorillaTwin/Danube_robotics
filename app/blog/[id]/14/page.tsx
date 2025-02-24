import Link from "next/link"

const blogPost = {
  id: 14,
  title: "Selecting Off-the-Shelf Parking Sensors for MILI: A Comprehensive Guide",
  date: "2024-02-23",
  author: "Marko Pavlović",
  content: `
    <p>As we continue to refine MILI's capabilities, one crucial aspect we need to address is its ability to accurately detect and navigate around vehicles in parking lots. While our camera system provides excellent visual data, integrating off-the-shelf parking sensors can significantly enhance MILI's precision and safety. In this post, we'll explore how to select the right parking sensors for our autonomous charging robot.</p>

    <h2>Understanding Parking Sensors</h2>
    <div class="bg-blue-50 p-6 rounded-lg mb-6">
      <p class="mb-4">Parking sensors are proximity detection devices that help vehicles (or in our case, robots) avoid collisions during parking maneuvers. They typically use one of two technologies:</p>
      <ul class="list-disc list-inside space-y-2">
        <li><strong>Ultrasonic sensors:</strong> Emit high-frequency sound waves and measure the time it takes for the echo to return</li>
        <li><strong>Electromagnetic sensors:</strong> Create an electromagnetic field and detect changes in the field when objects enter it</li>
      </ul>
    </div>

    <h2>Key Factors for Selecting Parking Sensors</h2>
    <div class="space-y-4 mb-8">
      <ol class="list-decimal list-inside space-y-2">
        <li><strong>Detection Range:</strong> The maximum distance at which the sensor can reliably detect objects</li>
        <li><strong>Accuracy:</strong> The precision of distance measurements</li>
        <li><strong>Update Rate:</strong> How quickly the sensor can provide new readings</li>
        <li><strong>Field of View:</strong> The angular range covered by the sensor</li>
        <li><strong>Environmental Resistance:</strong> Ability to function in various weather conditions</li>
        <li><strong>Power Requirements:</strong> Compatibility with MILI's power system</li>
        <li><strong>Interface:</strong> Ease of integration with MILI's existing systems</li>
        <li><strong>Size and Form Factor:</strong> Suitability for mounting on MILI's chassis</li>
        <li><strong>Cost:</strong> Balance between performance and budget constraints</li>
      </ol>
    </div>

    <h2>Top Off-the-Shelf Parking Sensor Options</h2>
    
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <h3 class="font-semibold mb-2">1. HC-SR04 Ultrasonic Sensor</h3>
      <ul class="space-y-2">
        <li>• Type: Ultrasonic</li>
        <li>• Range: 2cm - 400cm</li>
        <li>• Accuracy: 3mm</li>
        <li>• Update Rate: 40Hz</li>
        <li>• Voltage: 5V</li>
        <li>• Price: $2-$5 per unit</li>
        <li>• Pros: Very affordable, easy to interface, widely available</li>
        <li>• Cons: Limited range, narrow beam angle</li>
      </ul>
    </div>

    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <h3 class="font-semibold mb-2">2. TF-Luna LiDAR Module</h3>
      <ul class="space-y-2">
        <li>• Type: LiDAR (Light Detection and Ranging)</li>
        <li>• Range: 0.2m - 8m</li>
        <li>• Accuracy: ±6cm (at 6m)</li>
        <li>• Update Rate: 250Hz</li>
        <li>• Voltage: 5V</li>
        <li>• Price: $25-$30 per unit</li>
        <li>• Pros: Long range, high update rate, works well in various lighting conditions</li>
        <li>• Cons: More expensive, requires careful mounting for optimal performance</li>
      </ul>
    </div>

    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <h3 class="font-semibold mb-2">3. Sharp GP2Y0A21YK0F IR Range Sensor</h3>
      <ul class="space-y-2">
        <li>• Type: Infrared</li>
        <li>• Range: 10cm - 80cm</li>
        <li>• Accuracy: Varies with distance, typically ±5%</li>
        <li>• Update Rate: Continuous analog output</li>
        <li>• Voltage: 4.5V - 5.5V</li>
        <li>• Price: $10-$15 per unit</li>
        <li>• Pros: No dead zone, less affected by object color/reflectivity</li>
        <li>• Cons: Limited range, can be affected by ambient light</li>
      </ul>
    </div>

    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <h3 class="font-semibold mb-2">4. MaxBotix MB1240 XL-MaxSonar-EZ4</h3>
      <ul class="space-y-2">
        <li>• Type: Ultrasonic</li>
        <li>• Range: 20cm - 765cm</li>
        <li>• Accuracy: 1cm</li>
        <li>• Update Rate: 10Hz</li>
        <li>• Voltage: 3.3V - 5V</li>
        <li>• Price: $50-$60 per unit</li>
        <li>• Pros: Long range, high accuracy, weather-resistant</li>
        <li>• Cons: Expensive, lower update rate</li>
      </ul>
    </div>

    <h2>Integration with MILI's Systems</h2>
    <div class="space-y-4 mb-8">
      <p>When integrating parking sensors with MILI's existing systems, consider the following:</p>
      <ul class="list-disc list-inside space-y-2">
        <li>Interface compatibility with the Jetson Nano (GPIO, I2C, or USB)</li>
        <li>Power requirements and integration with MILI's power distribution system</li>
        <li>Sensor placement to complement camera coverage and minimize blind spots</li>
        <li>Data fusion algorithms to combine sensor data with camera input for robust obstacle detection</li>
        <li>Real-time processing capabilities to handle multiple sensor inputs simultaneously</li>
      </ul>
    </div>

    <h2>Recommended Configuration</h2>
    <div class="bg-green-50 p-6 rounded-lg mb-6">
      <p class="mb-4">Based on MILI's requirements, we recommend the following sensor configuration:</p>
      <ul class="list-disc list-inside space-y-2">
        <li>4x TF-Luna LiDAR Modules (front, rear, left, right) for long-range detection</li>
        <li>4x HC-SR04 Ultrasonic Sensors (corners) for close-range detection</li>
        <li>2x Sharp GP2Y0A21YK0F IR Sensors (low front and rear) for very close obstacle detection</li>
      </ul>
      <p class="mt-4">
        This configuration provides a comprehensive coverage around MILI, ensuring accurate distance measurements 
        at various ranges and complementing our existing camera system.
      </p>
    </div>

    <h2>Cost Analysis</h2>
    <div class="bg-yellow-50 p-6 rounded-lg mb-6">
      <p class="mb-4">Let's break down the estimated cost for our recommended sensor setup:</p>
      <ul class="list-disc list-inside space-y-2">
        <li>4x TF-Luna LiDAR Modules: $100-$120</li>
        <li>4x HC-SR04 Ultrasonic Sensors: $8-$20</li>
        <li>2x Sharp GP2Y0A21YK0F IR Sensors: $20-$30</li>
        <li>Misc. mounting hardware and cables: $20-$30</li>
        <li><strong>Total estimated cost: $148-$200</strong></li>
      </ul>
      <p class="mt-4">
        This sensor package provides a good balance of performance and cost-effectiveness, significantly enhancing 
        MILI's obstacle detection capabilities without breaking the bank.
      </p>
    </div>

    <h2>Next Steps</h2>
    <div class="bg-blue-50 p-6 rounded-lg mb-8">
      <ol class="list-decimal list-inside space-y-2">
        <li>Order the selected sensors for prototyping</li>
        <li>Design and 3D print mounting brackets for each sensor type</li>
        <li>Develop interface code for each sensor type on the Jetson Nano</li>
        <li>Implement a sensor fusion algorithm to combine data from all sensors</li>
        <li>Integrate sensor data with the existing camera-based obstacle detection system</li>
        <li>Conduct extensive testing in various parking scenarios</li>
        <li>Optimize sensor placement and software parameters based on test results</li>
      </ol>
    </div>

    <p class="mt-6">
      In our next post, we'll dive into the software architecture for integrating these parking sensors with MILI's 
      existing systems. We'll explore sensor fusion techniques, real-time processing strategies, and how to combine 
      this data with our camera-based navigation system for robust and safe operation in complex parking environments.
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

