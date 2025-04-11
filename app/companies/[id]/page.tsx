import Image from "next/image"
import Link from "next/link"
import { MapPin, Globe, Users, Eye } from "lucide-react"

export default function CompanyDetailPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white py-5 border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-[#323155] font-bold text-xl">
            CryptoJobList
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/jobs" className="text-[#323155] hover:text-[#ea5251] transition-colors">
              Jobs
            </Link>
            <Link href="/companies" className="text-[#323155] hover:text-[#ea5251] transition-colors">
              Companies
            </Link>
            <Link href="/salaries" className="text-[#323155] hover:text-[#ea5251] transition-colors">
              Salaries
            </Link>
            <Link href="/stats" className="text-[#323155] hover:text-[#ea5251] transition-colors">
              Stats
            </Link>
            <Link href="/blog" className="text-[#323155] hover:text-[#ea5251] transition-colors">
              Blog
            </Link>
            <Link
              href="/post-job"
              className="bg-[#ea5251] text-white px-5 py-2 rounded-full hover:bg-[#d13f3f] transition-colors"
            >
              Post Job
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Image */}
      <div className="w-full h-[200px] relative">
        <Image
          src="/placeholder.svg?height=200&width=1200"
          alt="Company header"
          className="w-full h-full object-cover bg-gray-800"
          width={1200}
          height={200}
          priority
        />
      </div>

      <main className="flex-1 bg-white">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Company Info Sidebar */}
            <div className="md:w-1/4">
              <div className="bg-[#fffaeb] p-6 rounded-lg mb-6">
                <div className="w-16 h-16 bg-[#fffaeb] rounded-lg flex items-center justify-center mb-4 border border-gray-200">
                  <div className="text-[#4a3f69] text-2xl font-bold">P</div>
                  <div className="absolute bottom-1 right-1 w-2 h-2 bg-green-500 rounded-full"></div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Globe className="h-4 w-4 text-[#ea5251] mr-2" />
                    <a href="https://clevertechh.com" className="text-[#ea5251] hover:underline">
                      clevertechh.com
                    </a>
                  </div>

                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 text-[#9190b3] mr-2" />
                    <span className="text-[#323155]">Jakarta Indonesia</span>
                  </div>

                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 text-[#9190b3] mr-2" />
                    <span className="text-[#323155]">1 - 14 Employees</span>
                  </div>

                  <div className="flex items-center text-sm">
                    <Eye className="h-4 w-4 text-[#9190b3] mr-2" />
                    <span className="text-[#323155]">10.400 Views</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Details */}
            <div className="md:w-3/4">
              <h1 className="text-3xl font-bold text-[#323155] mb-6">Storetesker Technologies</h1>

              <div className="space-y-4 text-[#323155] mb-12">
                <p>
                  Parity is an infrastructure and innovation focused company building platforms and applications.
                  Parity's work combines cutting-edge cryptography, cellular systems, peer-to-peer technology and
                  decentralised consensus architectures.
                </p>

                <p>
                  The problems we solve everyday are real and require creativity, grit, and determination. We are
                  building a culture that challenges norms while fostering experimentation and personal growth. We are
                  hiring team members who are passionate and energized by the vision of empowering our customers in a
                  complex industry through technology, data and a deep understanding of client concerns. In order to
                  grasp the scale of problems we face, ideally, you have some exposure to Logistics, FinTech,
                  Transportation, Insurance, Media, or other complex multifactor industries.
                </p>

                <p>
                  Beyond this, we also follow regular best-practices, no pull request gets merged without a code review,
                  things that are deemed critical such as code that touches anything consensus-related requires multiple
                  reviews and from the people who have best insight into the code in question.
                </p>
              </div>

              {/* Company Jobs */}
              <div>
                <h2 className="text-2xl font-bold text-[#323155] mb-6">Storetesker Technologies Jobs</h2>

                <div className="space-y-4">
                  <JobCard
                    color="#6366f1"
                    title="Senior Product Designer"
                    company="Polkadex"
                    isRemote={true}
                    payInCrypto={true}
                    postedTime="12 Hours Ago"
                    tags={["engineer", "ethereum", "frontend engineer"]}
                  />

                  <JobCard
                    color="#fbbf24"
                    title="Software Enginer"
                    company="Polkadex"
                    isRemote={true}
                    payInCrypto={true}
                    postedTime="16 Hours Ago"
                    tags={["engineer", "ethereum", "frontend engineer"]}
                  />

                  <JobCard
                    color="#4f46e5"
                    title="Software Enginer"
                    company="Polkadex"
                    isRemote={true}
                    payInCrypto={true}
                    postedTime="16 Hours Ago"
                    tags={["engineer", "ethereum", "frontend engineer"]}
                  />

                  <JobCard
                    color="#4f46e5"
                    title="Software Enginer"
                    company="Polkadex"
                    isRemote={true}
                    payInCrypto={true}
                    postedTime="16 Hours Ago"
                    tags={["engineer", "ethereum", "frontend engineer"]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Newsletter */}
      <section className="py-12 bg-[#ea5251]">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-white text-xl font-medium mb-6">
            Subscribe to our weekly newsletter with latest crypto jobs
          </h3>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-4 py-3 rounded-l-md outline-none"
              aria-label="Email for newsletter"
            />
            <button className="bg-white text-[#323155] px-6 py-3 rounded-r-md font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-12 bg-[#fffaeb]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h4 className="font-medium text-[#323155] mb-4">Browse crypto jobs by role</h4>
              <div className="grid grid-cols-2 gap-2">
                <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
                  Remote Blockchain jobs
                </Link>
                <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
                  Solidity jobs
                </Link>
                <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
                  Blockchain Developer jobs
                </Link>
                <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
                  Crypto Trader jobs
                </Link>
                <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
                  Blockchain Marketing jobs
                </Link>
                <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
                  Crypto Analyst jobs
                </Link>
                <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
                  Blockchain Designer jobs
                </Link>
                <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
                  Community Manager jobs
                </Link>
                <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
                  Earn Bitcoin
                </Link>
                <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
                  Hire Blockchain Talent
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-[#323155] mb-4">Browse Jobs by Location</h4>
              <div className="grid grid-cols-2 gap-2">
                <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
                  San Francisco jobs
                </Link>
                <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
                  San Francisco jobs
                </Link>
                <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
                  Austin Blockchain jobs
                </Link>
                <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
                  Austin Blockchain jobs
                </Link>
                <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
                  Boston Blockchain jobs
                </Link>
                <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
                  Boston Blockchain jobs
                </Link>
                <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
                  Chicago Blockchain jobs
                </Link>
                <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
                  Chicago Blockchain jobs
                </Link>
                <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
                  New York Blockchain jobs
                </Link>
                <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
                  Seattle Blockchain jobs
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10 mb-8">
            <div className="flex items-center gap-4">
              <span className="text-[#323155]">Hiring?</span>
              <Link
                href="/post-job"
                className="bg-[#ea5251] text-white px-6 py-2 rounded-full hover:bg-[#d13f3f] transition-colors flex items-center"
              >
                Post Job
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="text-sm text-[#323155]">Partners:</span>
            <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
              Ethereum
            </Link>
            <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
              CoinMarketCap
            </Link>
            <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
              Andrequest
            </Link>
            <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
              Dapp University
            </Link>
            <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
              More Partners
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
              Donate on Gitcoin
            </Link>
            <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
              Twitter
            </Link>
            <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
              Telegram
            </Link>
            <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
              Reddit
            </Link>
            <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
              Instagram
            </Link>
            <Link href="#" className="text-sm text-[#323155] hover:text-[#ea5251] transition-colors">
              Facebook
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-[#504f70] mb-4 md:mb-0">© 2021 Cryptocurrency Jobs | Legal</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#" className="text-xs text-[#504f70] hover:text-[#ea5251] transition-colors">
                Jobs
              </Link>
              <Link href="#" className="text-xs text-[#504f70] hover:text-[#ea5251] transition-colors">
                Salaries
              </Link>
              <Link href="#" className="text-xs text-[#504f70] hover:text-[#ea5251] transition-colors">
                Affiliate
              </Link>
              <Link href="#" className="text-xs text-[#504f70] hover:text-[#ea5251] transition-colors">
                Hire
              </Link>
              <Link href="#" className="text-xs text-[#504f70] hover:text-[#ea5251] transition-colors">
                Companies
              </Link>
              <Link href="#" className="text-xs text-[#504f70] hover:text-[#ea5251] transition-colors">
                Success Stories
              </Link>
              <Link href="#" className="text-xs text-[#504f70] hover:text-[#ea5251] transition-colors">
                Stats
              </Link>
              <Link href="#" className="text-xs text-[#504f70] hover:text-[#ea5251] transition-colors">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Job Card Component
function JobCard({ color, title, company, isRemote, payInCrypto, postedTime, tags }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow bg-white">
      <div className="flex items-start gap-4">
        <div className="bg-[#f9f9fb] p-2 rounded-md">
          <div className="w-10 h-10 rounded-md flex items-center justify-center" style={{ backgroundColor: color }}>
            <div className="grid grid-cols-2 gap-0.5">
              <div className="w-2 h-2 bg-white rounded-sm"></div>
              <div className="w-2 h-2 bg-white rounded-sm"></div>
              <div className="w-2 h-2 bg-white rounded-sm"></div>
              <div className="w-2 h-2 bg-white rounded-sm"></div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
            <div>
              <h3 className="font-medium">
                <span className="hover:text-[#ea5251] transition-colors">
                  {title} <span className="text-[#ea5251]">at {company}</span>
                </span>
              </h3>
              <div className="flex items-center gap-2 text-sm text-[#9190b3] mt-1">
                {isRemote && <span className="bg-[#f9f9fb] px-2 py-0.5 rounded">Remote</span>}
                <span>•</span>
                {payInCrypto && <span>We pay in crypto</span>}
              </div>
            </div>
            <div className="text-sm text-[#9190b3] mt-2 md:mt-0">{postedTime}</div>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags &&
              tags.map((tag, i) => (
                <span key={i} className="bg-[#f9f9fb] text-[#9190b3] text-xs px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
