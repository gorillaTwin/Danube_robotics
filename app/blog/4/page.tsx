import Link from "next/link"
import Image from "next/image"

const blogPost = {
  id: 4,
  title: "From Manual Pumps to Mobile Robots: The Evolution of Vehicle Charging Infrastructure",
  date: "2024-01-21",
  author: "Marko Pavlović",
  content: `
    <p>The history of vehicle refueling and charging infrastructure is a fascinating journey that spans over a century. From manual gas pumps to today's autonomous charging robots like MILI, the evolution of this technology reflects our constant drive for innovation and efficiency.</p>

    <h2>The Early Days: Manual Pumps and Personal Service</h2>
    <p>In the early days of automobiles, refueling was a completely manual process. Gas stations were simple affairs, often just a pump on a street corner, operated by hand. The image below shows one such early fuel dispenser, complete with manual pump mechanism and basic measuring equipment. This represents the first generation of vehicle refueling infrastructure - simple, manual, but revolutionary for its time.</p>

    <div class="my-8">
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7erOnrwZ1GNe8CVzHHspqH1lhXKSm6.png"
        alt="Historical black and white photograph of an early street-corner fuel dispenser with an attendant"
        class="w-full rounded-lg"
      />
      <p class="text-sm text-gray-600 mt-2">An early street-corner fuel dispenser from the early 20th century, showing how vehicle refueling began.</p>
    </div>

    <h2>The Evolution of Charging Infrastructure</h2>
    <p>Fast forward to today, and we're witnessing another revolutionary change in vehicle charging infrastructure. The challenges we face with electric vehicle charging are remarkably similar to those faced in the early days of gasoline infrastructure:</p>
    <ul>
      <li>Need for widespread accessibility</li>
      <li>Efficiency of service delivery</li>
      <li>Scalability of infrastructure</li>
      <li>Cost-effectiveness of deployment</li>
    </ul>

    <h2>The MILI Solution: A New Paradigm</h2>
    <p>At Danube Robotics, we're proud to be part of this evolutionary journey. Our MILI robot represents the next generation of vehicle charging infrastructure - autonomous, mobile, and adaptive. Just as the early fuel dispensers brought convenience to motorists in the 1900s, MILI brings a new level of convenience to EV owners today.</p>

    <h2>Key Advantages of Modern Mobile Charging</h2>
    <p>The contrast between early refueling infrastructure and modern mobile charging solutions like MILI highlights several key advancements:</p>
    <ul>
      <li>Automation: From manual pumps to fully autonomous operation</li>
      <li>Flexibility: From fixed locations to mobile service delivery</li>
      <li>Intelligence: From simple mechanical systems to AI-driven navigation</li>
      <li>Efficiency: From serving one vehicle at a time to optimized multi-vehicle service</li>
    </ul>

    <h2>Looking to the Future</h2>
    <p>As we continue to develop and refine mobile charging solutions, we're not just creating new technology - we're writing the next chapter in the history of vehicle energy infrastructure. The journey from manual street-corner pumps to autonomous charging robots shows how far we've come, and hints at the exciting possibilities that lie ahead.</p>
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


