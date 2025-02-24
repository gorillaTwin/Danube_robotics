import Link from "next/link"

const blogPost = {
  id: 8,
  title: "Building MILI: A Complete Guide to Prototype Assembly Tools and Components",
  date: "2024-02-17",
  author: "Marko Pavlović",
  content: `
    <p>As we progress with MILI's development, many have asked about the tools and components needed to build a prototype. In this post, we'll break down everything you need to assemble a working prototype, from basic tools to specialized components.</p>

    <h2>Essential Tools for Assembly</h2>
    <div class="bg-gray-50 p-6 rounded-lg mb-8">
      <h3 class="font-semibold mb-4">Basic Tools</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ul class="list-disc list-inside">
          <li>Metric Allen key set (2mm - 10mm)</li>
          <li>Phillips and flathead screwdrivers</li>
          <li>Adjustable wrench set</li>
          <li>Digital multimeter</li>
          <li>Wire strippers and crimpers</li>
        </ul>
        <ul class="list-disc list-inside">
          <li>Soldering iron and solder</li>
          <li>Heat gun</li>
          <li>Hot glue gun</li>
          <li>Measuring tape and level</li>
          <li>Cable ties and wire management tools</li>
        </ul>
      </div>

      <h3 class="font-semibold mt-6 mb-4">Specialized Tools</h3>
      <ul class="list-disc list-inside">
        <li>3D printer for rapid prototyping</li>
        <li>Bench power supply</li>
        <li>Battery spot welder</li>
        <li>Oscilloscope (for motor controller debugging)</li>
      </ul>
    </div>

    <h2>Component Categories and Bill of Materials</h2>

    <h3>1. Drive System</h3>
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <ul class="space-y-2">
        <li>• 48-60V 1300W DC Brushless Motor Rear axle kit
          <span class="text-gray-600 block ml-4">Purpose: Main drive system for robot mobility</span>
        </li>
        <li>• 2 x 6.5" hoverboard brushless DC motors (15 pole pairs)
          <span class="text-gray-600 block ml-4">Purpose: Auxiliary drive/steering system</span>
        </li>
        <li>• ODRIVE 56V V3.6
          <span class="text-gray-600 block ml-4">Purpose: Motor controller for precise movement</span>
        </li>
      </ul>
    </div>

    <h3>2. Structural Components</h3>
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <ul class="space-y-2">
        <li>• Aluminum profile CLAK 40x40x3000mm-SET
          <span class="text-gray-600 block ml-4">Purpose: Main frame structure</span>
        </li>
        <li>• Square profile 20x20mm - 1.8mm - 6m
          <span class="text-gray-600 block ml-4">Purpose: Secondary support structure</span>
        </li>
        <li>• Corner brackets for 40x40 aluminum profiles
          <span class="text-gray-600 block ml-4">Purpose: Frame assembly and reinforcement</span>
        </li>
        <li>• Various wheels and casters
          <span class="text-gray-600 block ml-4">Purpose: Mobility and stability</span>
        </li>
      </ul>
    </div>

    <h3>3. Power System</h3>
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <ul class="space-y-2">
        <li>• LiFePO4 battery cells (3.2V 320Ah CATL)
          <span class="text-gray-600 block ml-4">Purpose: Main power storage</span>
        </li>
        <li>• BMS (Battery Management System)
          <span class="text-gray-600 block ml-4">Purpose: Battery protection and monitoring</span>
        </li>
        <li>• 20kW DC/DC bidirectional EV charger module
          <span class="text-gray-600 block ml-4">Purpose: Power conversion and charging control</span>
        </li>
        <li>• VARTA Slim Power Bank (18000 mAh)
          <span class="text-gray-600 block ml-4">Purpose: Backup power for control systems</span>
        </li>
      </ul>
    </div>

    <h3>4. Charging System</h3>
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <ul class="space-y-2">
        <li>• Type 2 charger
          <span class="text-gray-600 block ml-4">Purpose: Standard EV charging interface</span>
        </li>
        <li>• Portable EV charger
          <span class="text-gray-600 block ml-4">Purpose: Testing and development</span>
        </li>
        <li>• Various charging connectors
          <span class="text-gray-600 block ml-4">Purpose: Compatibility with different vehicles</span>
        </li>
      </ul>
    </div>

    <h3>5. Sensors and Vision</h3>
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <ul class="space-y-2">
        <li>• RPLIDAR A2 M8
          <span class="text-gray-600 block ml-4">Purpose: 360° environment scanning</span>
        </li>
        <li>• RealSense Depth Camera D435i
          <span class="text-gray-600 block ml-4">Purpose: Depth perception and obstacle detection</span>
        </li>
        <li>• Intel RealSense Tracking Camera T265
          <span class="text-gray-600 block ml-4">Purpose: Visual odometry and mapping</span>
        </li>
      </ul>
    </div>

    <h3>6. Control System</h3>
    <div class="bg-white shadow-md rounded-lg p-6 mb-6">
      <ul class="space-y-2">
        <li>• NVIDIA Jetson Nano B01 64GB
          <span class="text-gray-600 block ml-4">Purpose: Main computer for AI and vision processing</span>
        </li>
        <li>• Arduino Mega 2650 Rev3
          <span class="text-gray-600 block ml-4">Purpose: Low-level control and sensor integration</span>
        </li>
        <li>• Turnigy 9X 2.4 GHz 8CH Receiver
          <span class="text-gray-600 block ml-4">Purpose: Remote control backup system</span>
        </li>
      </ul>
    </div>

    <h2>Assembly Tips</h2>
    <div class="space-y-4 mt-6">
      <p>1. <strong>Start with the Frame:</strong> Begin by assembling the aluminum profile frame. This provides the foundation for all other components.</p>
      <p>2. <strong>Power System Installation:</strong> Mount the battery system early, but don't connect it until all other systems are in place and verified.</p>
      <p>3. <strong>Sensor Positioning:</strong> Carefully plan sensor positions to ensure maximum coverage with minimal blind spots.</p>
      <p>4. <strong>Cable Management:</strong> Use cable trays and proper wire management from the start - it's much harder to organize cables after everything is assembled.</p>
      <p>5. <strong>Testing Protocol:</strong> Test each subsystem independently before integration:
        <ul class="list-disc list-inside ml-4 mt-2">
          <li>Drive system verification</li>
          <li>Sensor system calibration</li>
          <li>Power distribution testing</li>
          <li>Control system communication check</li>
        </ul>
      </p>
    </div>

    <h2>Safety Considerations</h2>
    <div class="bg-yellow-50 p-6 rounded-lg mt-6">
      <p class="font-semibold mb-4">Always follow these safety guidelines:</p>
      <ul class="list-disc list-inside space-y-2">
        <li>Use appropriate personal protective equipment (PPE)</li>
        <li>Have a fire extinguisher rated for electrical fires nearby</li>
        <li>Never work alone on high-voltage systems</li>
        <li>Use insulated tools when working with batteries</li>
        <li>Maintain proper ventilation in the work area</li>
      </ul>
    </div>

    <h2>Next Steps</h2>
    <p class="mt-6">In our next post, we'll provide detailed assembly instructions for each subsystem, including wiring diagrams and configuration guides. We'll also share our testing protocols and troubleshooting procedures.</p>
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

