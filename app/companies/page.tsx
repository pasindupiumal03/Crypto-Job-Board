import Link from "next/link"
import { Search, MapPin } from "lucide-react"

export default function CompaniesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-[#ffd888] py-5">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-[#602d2d] font-bold text-xl">
            CryptoJobList
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/jobs" className="text-[#602d2d] hover:text-[#504f70]">
              Jobs
            </Link>
            <Link href="/companies" className="text-[#602d2d] font-medium hover:text-[#504f70]">
              Companies
            </Link>
            <Link href="/salaries" className="text-[#602d2d] hover:text-[#504f70]">
              Salaries
            </Link>
            <Link href="/stats" className="text-[#602d2d] hover:text-[#504f70]">
              Stats
            </Link>
            <Link href="/blog" className="text-[#602d2d] hover:text-[#504f70]">
              Blog
            </Link>
            <Link
              href="/post-job"
              className="bg-[#ea5251] text-white px-4 py-2 rounded-full hover:bg-[#ea5251]/90 transition-colors"
            >
              Post Job
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#ffd888] py-10 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-[#602d2d] text-3xl md:text-4xl font-serif mb-4">Find your next blockchain job</h1>
          <p className="text-[#602d2d] max-w-2xl mx-auto mb-8 text-sm">
            Sem ac velit id risus volutpat nunc arcu. Aliquet orci, dui viverra at sed sit est diam dictum. Sed at sit
            orci donec vitae, mattis sit rhoncus ullamcorper. Id congue duis lectus velit neque.
          </p>

          {/* Job Search Filters */}
          <div className="bg-white rounded-lg shadow-md p-4 max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              <button className="bg-[#f9f9fb] text-[#504f70] px-4 py-1 rounded-full text-sm font-medium">Remote</button>
              <button className="bg-white text-[#504f70] px-4 py-1 rounded-full text-sm font-medium">Developer</button>
              <button className="bg-white text-[#504f70] px-4 py-1 rounded-full text-sm font-medium">Marketing</button>
              <button className="bg-white text-[#504f70] px-4 py-1 rounded-full text-sm font-medium">DeFi</button>
              <button className="bg-white text-[#504f70] px-4 py-1 rounded-full text-sm font-medium">NFT</button>
              <button className="bg-white text-[#504f70] px-4 py-1 rounded-full text-sm font-medium">Solidity</button>
              <button className="bg-white text-[#504f70] px-4 py-1 rounded-full text-sm font-medium">Intern</button>
            </div>

            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex items-center flex-1 border rounded-md px-3 py-2">
                <Search className="h-4 w-4 text-gray-400 mr-2" />
                <input type="text" placeholder="Search job by name" className="w-full outline-none text-sm" />
              </div>
              <div className="flex items-center border rounded-md px-3 py-2">
                <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                <select className="outline-none text-sm bg-transparent">
                  <option>United States</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#504f70] text-sm mb-6">Trusted by World's leading Blockchain Companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <img src="/placeholder.svg?height=30&width=120" alt="Coinbase" className="h-8 object-contain" />
            <img src="/placeholder.svg?height=30&width=120" alt="Binance" className="h-8 object-contain" />
            <img src="/placeholder.svg?height=30&width=120" alt="Ethereum" className="h-8 object-contain" />
            <img src="/placeholder.svg?height=30&width=120" alt="Huobi" className="h-8 object-contain" />
            <img src="/placeholder.svg?height=30&width=120" alt="FTX" className="h-8 object-contain" />
          </div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <CompanyCard
              name="Storetesker"
              logo="#6366f1"
              employees="1-18 Employees"
              description="Mauris sollicitudin vitae sit tempus et purus viverra."
              isHiring={true}
            />
            <CompanyCard
              name="Octane AI"
              logo="#4ade80"
              employees="1-18 Employees"
              description="Document Everything"
              isHiring={true}
            />
            <CompanyCard
              name="Storetesker"
              logo="#6366f1"
              employees="1-18 Employees"
              description="Mauris sollicitudin vitae sit tempus et purus viverra."
              isHiring={true}
            />
            <CompanyCard
              name="Storetesker"
              logo="#6366f1"
              employees="1-18 Employees"
              description="Mauris sollicitudin vitae sit tempus et purus viverra."
              isHiring={true}
            />
            <CompanyCard
              name="Storetesker"
              logo="#6366f1"
              employees="1-18 Employees"
              description="Mauris sollicitudin vitae sit tempus et purus viverra."
              isHiring={true}
            />
            <CompanyCard
              name="Gitbook"
              logo="#f87171"
              employees="1-18 Employees"
              description="Mauris sollicitudin vitae sit tempus et purus viverra."
              isHiring={true}
            />
            <CompanyCard
              name="Storetesker"
              logo="#6366f1"
              employees="1-18 Employees"
              description="Mauris sollicitudin vitae sit tempus et purus viverra."
              isHiring={true}
            />
            <CompanyCard
              name="Storetesker"
              logo="#6366f1"
              employees="1-18 Employees"
              description="Mauris sollicitudin vitae sit tempus et purus viverra."
              isHiring={true}
            />
            <CompanyCard
              name="Storetesker"
              logo="#6366f1"
              employees="1-18 Employees"
              description="Mauris sollicitudin vitae sit tempus et purus viverra."
              isHiring={true}
            />
            <CompanyCard
              name="Storetesker"
              logo="#fcd34d"
              employees="1-18 Employees"
              description="Front end JS services"
              isHiring={true}
            />
            <CompanyCard
              name="Storetesker"
              logo="#6366f1"
              employees="1-18 Employees"
              description="Mauris sollicitudin vitae sit tempus et purus viverra."
              isHiring={true}
            />
            <CompanyCard
              name="Storetesker"
              logo="#6366f1"
              employees="1-18 Employees"
              description="Mauris sollicitudin vitae sit tempus et purus viverra."
              isHiring={true}
            />
          </div>

          <div className="flex justify-center mt-12">
            <button className="bg-[#ea5251] text-white px-6 py-3 rounded-full hover:bg-[#ea5251]/90 transition-colors">
              Load More Companies
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-[#ea5251]">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-white text-xl mb-6">Subscribe to our weekly newsletter with latest crypto jobs</h3>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-4 py-3 rounded-l-md outline-none"
              aria-label="Email address for newsletter"
            />
            <button
              className="bg-white text-[#504f70] px-6 py-3 rounded-r-md font-medium hover:bg-gray-100 transition-colors"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-12 bg-[#ffebc2]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium text-[#602d2d] mb-4">Browse crypto jobs by role</h4>
              <div className="grid grid-cols-2 gap-2">
                <Link href="#" className="text-sm text-[#602d2d] hover:underline">
                  Remote Blockchain jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:underline">
                  Solidity jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:underline">
                  Blockchain Developer jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:underline">
                  Crypto Trader jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:underline">
                  Blockchain Marketing jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:underline">
                  Crypto Analyst jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:underline">
                  Blockchain Designer jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:underline">
                  Community Manager jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:underline">
                  Earn Bitcoin
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:underline">
                  Hire Blockchain Talent
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-[#602d2d] mb-4">Browse Jobs by Location</h4>
              <div className="grid grid-cols-2 gap-2">
                <Link href="#" className="text-sm text-[#602d2d] hover:underline">
                  San Francisco jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:underline">
                  San Francisco jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:underline">
                  Austin Blockchain jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:underline">
                  Austin Blockchain jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:underline">
                  Boston Blockchain jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:underline">
                  Boston Blockchain jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:underline">
                  Chicago Blockchain jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:underline">
                  Chicago Blockchain jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:underline">
                  New York Blockchain jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:underline">
                  Seattle Blockchain jobs
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12 mb-6">
            <div className="flex items-center gap-4">
              <span className="text-[#602d2d]">Hiring?</span>
              <Link
                href="/post-job"
                className="bg-[#ea5251] text-white px-6 py-2 rounded-full hover:bg-[#ea5251]/90 transition-colors flex items-center"
              >
                Post Job
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="#" className="text-sm text-[#602d2d] hover:underline">
              Partners
            </Link>
            <span className="text-[#602d2d]">•</span>
            <Link href="#" className="text-sm text-[#602d2d] hover:underline">
              Ethereum
            </Link>
            <span className="text-[#602d2d]">•</span>
            <Link href="#" className="text-sm text-[#602d2d] hover:underline">
              CoinMarketCap
            </Link>
            <span className="text-[#602d2d]">•</span>
            <Link href="#" className="text-sm text-[#602d2d] hover:underline">
              Andrequest
            </Link>
            <span className="text-[#602d2d]">•</span>
            <Link href="#" className="text-sm text-[#602d2d] hover:underline">
              Dapp University
            </Link>
            <span className="text-[#602d2d]">•</span>
            <Link href="#" className="text-sm text-[#602d2d] hover:underline">
              More Partners
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link href="#" className="text-sm text-[#602d2d] hover:underline flex items-center gap-1">
              <span>Donate on Gitcoin</span>
            </Link>
            <Link href="#" className="text-sm text-[#602d2d] hover:underline flex items-center gap-1">
              <span>Twitter</span>
            </Link>
            <Link href="#" className="text-sm text-[#602d2d] hover:underline flex items-center gap-1">
              <span>Telegram</span>
            </Link>
            <Link href="#" className="text-sm text-[#602d2d] hover:underline flex items-center gap-1">
              <span>LinkedIn</span>
            </Link>
            <Link href="#" className="text-sm text-[#602d2d] hover:underline flex items-center gap-1">
              <span>Reddit</span>
            </Link>
            <Link href="#" className="text-sm text-[#602d2d] hover:underline flex items-center gap-1">
              <span>Instagram</span>
            </Link>
            <Link href="#" className="text-sm text-[#602d2d] hover:underline flex items-center gap-1">
              <span>Facebook</span>
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
              <Link href="#" className="text-xs text-[#504f70] hover:underline">
                Jobs
              </Link>
              <Link href="#" className="text-xs text-[#504f70] hover:underline">
                Salaries
              </Link>
              <Link href="#" className="text-xs text-[#504f70] hover:underline">
                Affiliate
              </Link>
              <Link href="#" className="text-xs text-[#504f70] hover:underline">
                Hire
              </Link>
              <Link href="#" className="text-xs text-[#504f70] hover:underline">
                Companies
              </Link>
              <Link href="#" className="text-xs text-[#504f70] hover:underline">
                Success Stories
              </Link>
              <Link href="#" className="text-xs text-[#504f70] hover:underline">
                Stats
              </Link>
              <Link href="#" className="text-xs text-[#504f70] hover:underline">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Company Card Component with improved UI/UX
function CompanyCard({ name, logo, employees, description, isHiring }) {
  return (
    <Link href={`/companies/${name.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="border rounded-lg p-6 hover:shadow-lg transition-all duration-300 h-full flex flex-col group">
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center relative"
            style={{ backgroundColor: logo }}
          >
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-white rounded-sm"></div>
          </div>
        </div>

        <h3 className="font-medium text-lg text-[#323155] mb-1 group-hover:text-[#ea5251] transition-colors">{name}</h3>

        <p className="text-sm text-[#9190b3] mb-3">{employees}</p>

        <p className="text-sm text-[#504f70] mb-4 flex-grow">{description}</p>

        {isHiring && (
          <div className="flex items-center">
            <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
            <span className="text-xs text-green-600 font-medium">Actively hiring</span>
          </div>
        )}
      </div>
    </Link>
  )
}
