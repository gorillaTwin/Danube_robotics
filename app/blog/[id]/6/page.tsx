import Link from "next/link"

const blogPost = {
  id: 6,
  title: "Optimizing MILI's Vision: Top 5 Smartphone Cameras for Advanced Navigation",
  date: "2024-02-15",
  author: "Marko Pavlović",
  content: `
    <p>At Danube Robotics, we're constantly exploring ways to enhance MILI's performance and capabilities. One crucial aspect of our autonomous charging robot is its vision system, which relies on high-quality cameras for navigation and obstacle detection. In this post, we'll discuss our top 5 picks for smartphone-grade cameras that could potentially be integrated into MILI's design, with two cameras in front, one in back, and one on each side.</p>

    <h2>Why Smartphone Cameras?</h2>
    <p>Smartphone cameras offer an excellent balance of image quality, size, and cost-effectiveness. They're designed to perform well in various lighting conditions and are optimized for computational photography, making them ideal for computer vision applications. When paired with NVIDIA hardware for processing, these cameras can provide MILI with the visual acuity it needs to navigate complex parking environments safely and efficiently.</p>

    <h2>Our Top 5 Picks</h2>

    <h3>1. Sony IMX689</h3>
    <ul>
      <li>Resolution: 48 MP</li>
      <li>Sensor size: 1/1.43"</li>
      <li>Pixel size: 1.12μm</li>
      <li>Estimated cost per unit: $40-$50</li>
      <li>Pros: Excellent low-light performance, high dynamic range</li>
      <li>Cons: Higher cost, may be overkill for some applications</li>
    </ul>

    <h3>2. Samsung ISOCELL GN1</h3>
    <ul>
      <li>Resolution: 50 MP</li>
      <li>Sensor size: 1/1.31"</li>
      <li>Pixel size: 1.2μm</li>
      <li>Estimated cost per unit: $35-$45</li>
      <li>Pros: Dual Pixel autofocus, good balance of resolution and light sensitivity</li>
      <li>Cons: Slightly larger sensor may require more space</li>
    </ul>

    <h3>3. OmniVision OV64B</h3>
    <ul>
      <li>Resolution: 64 MP</li>
      <li>Sensor size: 1/2"</li>
      <li>Pixel size: 0.8μm</li>
      <li>Estimated cost per unit: $25-$35</li>
      <li>Pros: High resolution, compact size</li>
      <li>Cons: Smaller pixels may impact low-light performance</li>
    </ul>

    <h3>4. Sony IMX582</h3>
    <ul>
      <li>Resolution: 48 MP</li>
      <li>Sensor size: 1/2"</li>
      <li>Pixel size: 0.8μm</li>
      <li>Estimated cost per unit: $20-$30</li>
      <li>Pros: Good balance of performance and cost, widely available</li>
      <li>Cons: Not as advanced as newer sensors</li>
    </ul>

    <h3>5. OmniVision OV13B</h3>
    <ul>
      <li>Resolution: 13 MP</li>
      <li>Sensor size: 1/3.06"</li>
      <li>Pixel size: 1.12μm</li>
      <li>Estimated cost per unit: $15-$25</li>
      <li>Pros: Cost-effective, smaller size, good for side cameras</li>
      <li>Cons: Lower resolution may limit some applications</li>
    </ul>

    <h2>Cost Analysis</h2>
    <p>Let's break down the potential cost for MILI's camera system using these options:</p>
    <ul>
      <li>2x Front cameras: Sony IMX689 ($80-$100)</li>
      <li>1x Rear camera: Samsung ISOCELL GN1 ($35-$45)</li>
      <li>2x Side cameras: OmniVision OV13B ($30-$50)</li>
    </ul>
    <p>Total estimated cost range: $145-$195 for the complete set of five cameras.</p>

    <h2>Trade-offs and Considerations</h2>
    <p>When selecting cameras for MILI, we need to balance several factors:</p>
    <ol>
      <li><strong>Resolution vs. Processing Power:</strong> Higher resolution cameras provide more detail but require more processing power. The NVIDIA hardware must be capable of handling the data stream from all five cameras simultaneously.</li>
      <li><strong>Low-light Performance:</strong> Cameras with larger pixels (like the Sony IMX689) perform better in low-light conditions, which is crucial for parking garages and nighttime operation.</li>
      <li><strong>Cost vs. Capability:</strong> While it's tempting to use the highest-spec cameras for all positions, it may not be necessary. Using more cost-effective options for side cameras can help optimize the overall system cost.</li>
      <li><strong>Size and Integration:</strong> Smartphone cameras are compact, but integrating five of them into MILI's design requires careful consideration of space and thermal management.</li>
      <li><strong>Future-proofing:</strong> Choosing more capable cameras now may extend MILI's lifespan and allow for software upgrades that leverage higher resolution or better image quality in the future.</li>
    </ol>

    <h2>Conclusion</h2>
    <p>By carefully selecting and integrating these smartphone-grade cameras, we can provide MILI with a robust vision system capable of navigating complex environments. The estimated cost of $145-$195 for the camera system represents a small but crucial investment in MILI's overall capabilities.</p>

    <p>As we continue to refine MILI's design, we'll be conducting extensive tests with various camera configurations to determine the optimal setup for performance, reliability, and cost-effectiveness. Stay tuned for more updates on MILI's development journey!</p>
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

