import Link from "next/link"
import { ArrowLeft, MapPin, Share2, Globe, MoreHorizontal } from "lucide-react"

export default function JobDetailPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white py-5 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-[#602d2d] font-bold text-xl">
            CryptoJobList
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/jobs" className="text-[#323155] hover:text-[#504f70]">
              Jobs
            </Link>
            <Link href="/companies" className="text-[#323155] hover:text-[#504f70]">
              Companies
            </Link>
            <Link href="/salaries" className="text-[#323155] hover:text-[#504f70]">
              Salaries
            </Link>
            <Link href="/stats" className="text-[#323155] hover:text-[#504f70]">
              Stats
            </Link>
            <Link href="/blog" className="text-[#323155] hover:text-[#504f70]">
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

      <main className="flex-1 bg-white">
        <div className="container mx-auto px-4 py-6">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center text-[#323155] mb-6 hover:text-[#ea5251]">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to previous
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              {/* Featured Badge */}
              <div className="inline-flex items-center bg-[#ffebc2] text-[#602d2d] px-3 py-1 rounded-md text-sm mb-4">
                <span className="mr-1">✨</span>
                Featured Job Opportunity
              </div>

              {/* Job Title */}
              <div className="flex justify-between items-start mb-2">
                <h1 className="text-2xl font-bold text-[#323155]">
                  Core Substrate Developer <span className="text-[#9190b3] font-normal">at</span>
                </h1>
                <button className="text-[#9190b3] hover:text-[#323155]">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>

              <h2 className="text-[#ea5251] text-xl font-medium mb-4">Clevertech</h2>
              <p className="text-[#9190b3] text-sm mb-6">Posted at March 24 2023</p>

              {/* Job Details */}
              <div className="bg-[#f9f9fb] rounded-lg p-6 mb-8">
                <h3 className="font-medium text-[#323155] mb-4">Job Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-[#ea5251] mr-3" />
                    <a href="https://clevertech.com" className="text-[#ea5251] hover:underline">
                      clevertech.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-[#9190b3] mr-3" />
                    <span className="text-[#323155]">Jakarta Indonesia</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-5 w-5 flex items-center justify-center mr-3">🌐</div>
                    <span className="text-[#323155]">Remote</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-5 w-5 flex items-center justify-center mr-3">💰</div>
                    <span className="text-[#323155]">We Pay in Crypto</span>
                  </div>
                </div>
              </div>

              {/* Job Description */}
              <div className="space-y-6 mb-8">
                <p className="text-[#323155]">
                  Polkadex is a decentralized, peer-peer, orderbook based cryptocurrency exchange for the DeFi ecosystem
                  in Substrate. We are building the best orderbook based exchange with comparable experience and
                  performance to centralized exchanges.
                </p>
                <p className="text-[#323155]">Polkadex strives to improve two types of markets.</p>
                <p className="text-[#323155]">
                  The Automated Market Making pool market, by providing Polkadex Pool ( a.k.a. Polkapool), is a modified
                  version of vanilla uniswap bonding curve with feeless swaps, interactive market making, and minimum
                  possible impermanent loss.
                </p>
                <p className="text-[#323155]">
                  The Polkadex orderbook brings the best exchange in the marketplace by decentralizing KYC for traders,
                  off-chain orderbook with on-chain peer-to-peer settlements. In this way, Polkadex Orderbook provides
                  the same level of experience as centralized exchanges with better trader privacy and funds safety.
                </p>
              </div>

              {/* Job Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#323155] mb-4">Job Description</h3>
                <p className="text-[#323155] mb-6">
                  We are looking to expand our team to have engineers who can write Substrate Runtime code that's will
                  be crypto-economically sound and incentive the behaviour we need from our traders. You will be
                  implementing the parachain, XCMP based chain transfers, and storage migration from standalone network
                  to parachain, when
                </p>
              </div>

              {/* Requirements */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#323155] mb-4">Requirements</h3>
                <ul className="list-disc pl-6 space-y-2 text-[#323155]">
                  <li>Experience as a Smart Contract or Substrate Runtime developer.</li>
                  <li>Experience working with Rust or other similar system-level languages.</li>
                  <li>Excellent communication and teamwork skills.</li>
                </ul>
              </div>

              {/* Apply Button */}
              <div className="mb-12">
                <button className="bg-[#ea5251] text-white px-6 py-3 rounded-md hover:bg-[#ea5251]/90 transition-colors w-full md:w-auto md:min-w-[200px]">
                  Apply Now
                </button>
              </div>

              {/* Related Jobs */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-[#323155]">Related Job</h3>
                  <Link href="/jobs" className="text-[#ea5251] text-sm hover:underline flex items-center">
                    See All
                  </Link>
                </div>

                <div className="space-y-4">
                  <RelatedJobCard
                    logo="F"
                    title="UI UX Lead"
                    company="Ajala"
                    isRemote={true}
                    payInCrypto={true}
                    featured={true}
                  />
                  <RelatedJobCard
                    logo="F"
                    title="3D Blender Developer"
                    company="Clever"
                    isRemote={true}
                    payInCrypto={true}
                    featured={true}
                  />
                  <RelatedJobCard
                    logo="F"
                    title="3D Blender Developer"
                    company="Tokopedia"
                    isRemote={true}
                    payInCrypto={true}
                    featured={true}
                  />
                  <RelatedJobCard
                    logo="F"
                    title="3D Blender Developer"
                    company="Mixpanel"
                    isRemote={true}
                    payInCrypto={true}
                    featured={true}
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="md:col-span-1">
              {/* Company Card */}
              <div className="bg-[#ffebc2]/30 rounded-lg p-6 mb-6">
                <div className="flex justify-between mb-4">
                  <div className="bg-[#27ae60] text-white h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold">
                    ct
                  </div>
                  <button className="text-[#9190b3]">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </div>
                <h3 className="text-lg font-bold text-[#323155] mb-1">Clevertech</h3>
                <p className="text-[#9190b3] text-sm mb-6">Jakarta</p>
                <button className="bg-[#ea5251] text-white w-full py-2 rounded-md hover:bg-[#ea5251]/90 transition-colors mb-4">
                  Apply Job
                </button>
                <p className="text-sm text-[#323155]">
                  Please refer 👋 Halo Designers on your application to be considered
                </p>
              </div>

              {/* Newsletter */}
              <div className="bg-white border rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <span className="text-[#323155] font-medium">Be the 1st to know about</span>
                </div>
                <div className="flex items-center mb-4">
                  <span className="text-[#ea5251] mr-1">🔥</span>
                  <span className="font-medium text-[#323155]">hot jobs</span>
                </div>
                <p className="text-[#323155] mb-4">delivered to ur inbox</p>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="border rounded-md px-3 py-2 w-full mb-2 outline-none text-sm"
                />
                <button className="bg-[#ea5251] text-white w-full py-2 rounded-md hover:bg-[#ea5251]/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#ffebc2] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
                <Link href="#" className="text-sm text-[#602d2d] hover:underline"></Link>
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

          <div className="flex justify-center mb-8">
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
      </footer>

      {/* Copyright Footer */}
      <div className="py-6 bg-white border-t">
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
      </div>
    </div>
  )
}

// Related Job Card Component
function RelatedJobCard({ logo, title, company, isRemote, payInCrypto, featured }) {
  return (
    <div className="border rounded-lg p-4 bg-[#fdf1f1]/30 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="bg-[#fec534] text-white h-10 w-10 rounded-md flex items-center justify-center font-bold">
          {logo}
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-[#323155]">
            {title} <span className="text-[#9190b3]">at</span> <span className="text-[#ea5251]">{company}</span>
          </h3>
          <div className="flex items-center gap-2 text-sm text-[#9190b3] mt-1">
            <span className="bg-[#f9f9fb] px-2 py-0.5 rounded text-xs">Remote</span>
            <span>•</span>
            <span className="text-xs">We Pay in Crypto</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-[#f9f9fb] text-[#9190b3] text-xs px-2 py-1 rounded">rust</span>
            <span className="bg-[#f9f9fb] text-[#9190b3] text-xs px-2 py-1 rounded">ethereum</span>
            <span className="bg-[#f9f9fb] text-[#9190b3] text-xs px-2 py-1 rounded">frontend engineer</span>
          </div>
        </div>
        {featured && <div className="bg-[#ea5251] text-white text-xs px-3 py-1 rounded-full">Featured</div>}
      </div>
    </div>
  )
}
