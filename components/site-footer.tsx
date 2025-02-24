import Link from "next/link"
import { Youtube, Twitter, Linkedin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-[#184c7c] text-white py-12">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Company Info Column */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Danube Robotics</h2>
            <div className="space-y-2 text-gray-300">
              <p>Belgrade, Republic of Sebia</p>
              <p>CEO: Marko Pavlović</p>
              <p>
                Email:{" "}
                <Link href="mailto:markopavlovicprvi@gmail.com" className="hover:text-white">
                  markopavlovicprvi@gmail.com
                </Link>
              </p>
              <p>Tel: +381-65-4084607</p>
            </div>
          </div>

          {/* Help & Support Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Help & Support</h3>
            <div className="space-y-2">
              <p>
                <Link href="/faq" className="text-gray-300 hover:text-white">
                  FAQ
                </Link>
              </p>
              <p>
                <Link href="/feedback" className="text-gray-300 hover:text-white">
                  Case Studies
                </Link>
              </p>
              <p>
                <Link href="/specifications" className="text-gray-300 hover:text-white">
                  Detailed Product Specifications
                </Link>
              </p>
              <p>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  Contact Us
                </Link>
              </p>
              <p>
                <Link href="/blog" className="text-gray-300 hover:text-white">
                  Blog
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright and Social Links */}
        <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center border-t border-gray-800 pt-8">
          <p className="text-gray-400">&copy; Danube Robotics. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">YouTube</span>
              <Youtube className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <span className="sr-only">Blog</span>
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 8H17M7 12H17M7 16H13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

