import Link from "next/link"

const blogPost = {
  id: 7,
  title: "Building MILI's World: 3D Reconstruction with Multi-Camera Vision",
  date: "2024-02-16",
  author: "Marko Pavlović",
  content: `
    <p>Following our previous discussion of MILI's camera system, let's dive into how we can use these five cameras to create a real-time 3D model of the robot's environment. This capability is crucial for autonomous navigation, obstacle avoidance, and precise positioning during charging operations.</p>

    <div class="my-8">
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vBUbQFwsqbcIrLaJFqBEVZdgWF1ntS.png"
        alt="3D reconstruction example showing a living room space with depth mapping"
        class="w-full rounded-lg"
      />
      <p class="text-sm text-gray-600 mt-2">Example of real-time 3D reconstruction showing how multiple camera inputs can be combined to create a detailed spatial map.</p>
    </div>

    <h2>The Pipeline: From 2D Images to 3D World</h2>
    <p>Converting multiple 2D camera feeds into a coherent 3D model involves several sophisticated steps:</p>

    <h3>1. Visual SLAM (Simultaneous Localization and Mapping)</h3>
    <p>At the core of our 3D reconstruction pipeline is Visual SLAM. We're considering several open-source frameworks:</p>
    <ul>
      <li><strong>ORB-SLAM3:</strong> Currently the state-of-the-art in open-source SLAM systems
        <ul>
          <li>Handles multiple cameras seamlessly</li>
          <li>Real-time performance on NVIDIA hardware</li>
          <li>Robust loop closure detection</li>
        </ul>
      </li>
      <li><strong>OpenVSLAM:</strong> Modern alternative with excellent documentation
        <ul>
          <li>Easy integration with ROS2</li>
          <li>Supports various camera configurations</li>
        </ul>
      </li>
    </ul>

    <h3>2. Deep Learning Enhancement</h3>
    <p>We're augmenting traditional SLAM with deep learning models:</p>
    <ul>
      <li><strong>NVIDIA Isaac:</strong> 
        <ul>
          <li>Provides GPU-accelerated perception stack</li>
          <li>Includes pre-trained models for depth estimation</li>
          <li>Seamless integration with Jetson platform</li>
        </ul>
      </li>
      <li><strong>Neural Radiance Fields (NeRF):</strong>
        <ul>
          <li>Enables high-quality 3D reconstruction</li>
          <li>Instant-NGP implementation for real-time performance</li>
          <li>Particularly useful for static scene understanding</li>
        </ul>
      </li>
    </ul>

    <h3>3. Point Cloud Processing</h3>
    <p>For handling the resulting 3D data, we utilize:</p>
    <ul>
      <li><strong>Open3D:</strong> 
        <ul>
          <li>Efficient point cloud registration</li>
          <li>Real-time mesh reconstruction</li>
          <li>CUDA acceleration support</li>
        </ul>
      </li>
      <li><strong>PCL (Point Cloud Library):</strong>
        <ul>
          <li>Robust filtering and segmentation</li>
          <li>Integration with ROS2</li>
          <li>Extensive tool set for point cloud manipulation</li>
        </ul>
      </li>
    </ul>

    <h2>Implementation Architecture</h2>
    <p>Our proposed software stack consists of several layers:</p>

    <h3>1. Data Acquisition Layer</h3>
    <pre><code>
    // Camera configuration example
    cameras = {
      front_left: {
        model: "Sony IMX689",
        resolution: "4K",
        fps: 30,
        position: [-0.3, 0.5, 0.2]
      },
      front_right: {
        model: "Sony IMX689",
        resolution: "4K",
        fps: 30,
        position: [0.3, 0.5, 0.2]
      }
      // ... similar for other cameras
    }
    </code></pre>

    <h3>2. Processing Pipeline</h3>
    <ol>
      <li><strong>Pre-processing:</strong>
        <ul>
          <li>Image rectification</li>
          <li>Synchronization across cameras</li>
          <li>GPU-accelerated feature extraction</li>
        </ul>
      </li>
      <li><strong>Core Processing:</strong>
        <ul>
          <li>Multi-view stereo reconstruction</li>
          <li>Deep learning-based depth estimation</li>
          <li>Point cloud generation and fusion</li>
        </ul>
      </li>
      <li><strong>Post-processing:</strong>
        <ul>
          <li>Mesh generation</li>
          <li>Semantic segmentation</li>
          <li>Map optimization</li>
        </ul>
      </li>
    </ol>

    <h2>Performance Considerations</h2>
    <p>Running this system on NVIDIA Jetson hardware requires careful optimization:</p>
    <ul>
      <li>TensorRT optimization for neural networks</li>
      <li>Multi-threading for parallel camera processing</li>
      <li>GPU memory management for real-time performance</li>
      <li>Efficient data structures for map storage</li>
    </ul>

    <h2>Practical Applications</h2>
    <p>This 3D reconstruction system enables several key capabilities for MILI:</p>
    <ol>
      <li><strong>Navigation:</strong> Accurate path planning in complex environments</li>
      <li><strong>Obstacle Avoidance:</strong> Real-time detection and avoidance of static and moving obstacles</li>
      <li><strong>Charging Position:</strong> Precise alignment with vehicle charging ports</li>
      <li><strong>Map Building:</strong> Creating and maintaining detailed maps of parking facilities</li>
    </ol>

    <h2>Future Developments</h2>
    <p>We're actively exploring several enhancements:</p>
    <ul>
      <li>Integration of transformer-based architectures for better scene understanding</li>
      <li>Dynamic object tracking and prediction</li>
      <li>Cloud-based map sharing between multiple MILI units</li>
      <li>Semantic scene understanding for improved navigation</li>
    </ul>

    <h2>Conclusion</h2>
    <p>The combination of our carefully selected camera system with modern computer vision and AI techniques enables MILI to build and maintain accurate 3D models of its environment. This capability is fundamental to its autonomous operation and sets the foundation for future enhancements in navigation and interaction capabilities.</p>

    <p>In our next post, we'll dive deeper into how MILI uses this 3D understanding to plan and execute efficient charging routes in complex parking environments.</p>
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

