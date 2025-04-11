"use client"

import Image from "next/image"
import Link from "next/link"
import { Search, MapPin, ChevronLeft, ChevronRight, Menu, X, Briefcase, Globe, Star, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-[#ffd888] py-5 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-[#602d2d] font-bold text-xl">
            CryptoJobList
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#602d2d]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/jobs" className="text-[#602d2d] hover:text-[#ea5251] transition-colors">
              Jobs
            </Link>
            <Link href="/companies" className="text-[#602d2d] hover:text-[#ea5251] transition-colors">
              Companies
            </Link>
            <Link href="/salaries" className="text-[#602d2d] hover:text-[#ea5251] transition-colors">
              Salaries
            </Link>
            <Link href="/stats" className="text-[#602d2d] hover:text-[#ea5251] transition-colors">
              Stats
            </Link>
            <Link href="/blog" className="text-[#602d2d] hover:text-[#ea5251] transition-colors">
              Blog
            </Link>
            <Link
              href="/post-job"
              className="bg-[#ea5251] text-white px-5 py-2 rounded-full hover:bg-[#d13f3f] transition-colors shadow-sm"
            >
              Post Job
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md z-50 py-4 px-4 border-t border-gray-100 animate-in fade-in slide-in-from-top-5 duration-300">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/jobs"
                className="text-[#323155] hover:text-[#ea5251] transition-colors py-2 px-4 rounded-md hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Jobs
              </Link>
              <Link
                href="/companies"
                className="text-[#323155] hover:text-[#ea5251] transition-colors py-2 px-4 rounded-md hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Companies
              </Link>
              <Link
                href="/salaries"
                className="text-[#323155] hover:text-[#ea5251] transition-colors py-2 px-4 rounded-md hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Salaries
              </Link>
              <Link
                href="/stats"
                className="text-[#323155] hover:text-[#ea5251] transition-colors py-2 px-4 rounded-md hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Stats
              </Link>
              <Link
                href="/blog"
                className="text-[#323155] hover:text-[#ea5251] transition-colors py-2 px-4 rounded-md hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/post-job"
                className="bg-[#ea5251] text-white px-4 py-2 rounded-full hover:bg-[#d13f3f] transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Post Job
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#ffd888] to-[#ffe9aa] py-12 md:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#ea5251]"></div>
          <div className="absolute top-40 -right-20 w-80 h-80 rounded-full bg-[#ea5251]"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-[#602d2d] text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Find your next <span className="text-[#ea5251]">blockchain</span> job
          </h1>
          <p className="text-[#602d2d] max-w-2xl mx-auto mb-10 text-lg">
            Over six years of crypto employers have used us. Aligned with the industry we sort out just crypto jobs. See
            all job types, cities, myths or obvious scams/spam.
          </p>

          {/* Job Search Filters */}
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto transform transition-all">
            <div className="flex flex-wrap gap-3 mb-6">
              <button className="bg-[#f9f9fb] text-[#504f70] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#ea5251] hover:text-white transition-colors">
                Remote
              </button>
              <button className="bg-white border border-gray-200 text-[#504f70] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#f9f9fb] transition-colors">
                Developer
              </button>
              <button className="bg-white border border-gray-200 text-[#504f70] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#f9f9fb] transition-colors">
                Marketing
              </button>
              <button className="bg-white border border-gray-200 text-[#504f70] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#f9f9fb] transition-colors">
                DeFi
              </button>
              <button className="bg-white border border-gray-200 text-[#504f70] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#f9f9fb] transition-colors">
                NFT
              </button>
              <button className="bg-white border border-gray-200 text-[#504f70] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#f9f9fb] transition-colors">
                Solidity
              </button>
              <button className="bg-white border border-gray-200 text-[#504f70] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#f9f9fb] transition-colors">
                Intern
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex items-center flex-1 border rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#ea5251]/30 focus-within:border-[#ea5251] transition-all">
                <Search className="h-5 w-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Search job by name"
                  className="w-full outline-none text-[#323155]"
                  aria-label="Search jobs"
                />
              </div>
              <div className="flex items-center border rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-[#ea5251]/30 focus-within:border-[#ea5251] transition-all">
                <MapPin className="h-5 w-5 text-gray-400 mr-3" />
                <select className="outline-none text-[#323155] bg-transparent pr-8 appearance-none">
                  <option>United States</option>
                  <option>Remote</option>
                  <option>Europe</option>
                  <option>Asia</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Companies */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[#504f70] text-sm mb-8 uppercase tracking-wider font-medium">
            Trusted by World's leading Blockchain Companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
              <Image src="/placeholder.svg?height=30&width=120" alt="Coinbase" width={120} height={30} />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
              <Image src="/placeholder.svg?height=30&width=120" alt="Binance" width={120} height={30} />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
              <Image src="/placeholder.svg?height=30&width=120" alt="Ethereum" width={120} height={30} />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
              <Image src="/placeholder.svg?height=30&width=120" alt="Huobi" width={120} height={30} />
            </div>
            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
              <Image src="/placeholder.svg?height=30&width=120" alt="FTX" width={120} height={30} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-[#323155]">Featured Jobs</h2>
            <Link href="/jobs" className="text-[#ea5251] flex items-center gap-1 hover:underline">
              View all jobs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {jobListings.slice(0, 5).map((job, index) => (
            <Link href="/jobs/core-substrate-developer" key={index}>
              <JobCard job={job} />
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter Box */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#ffebc2] to-[#fff6e5] rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center">
              <div className="mr-4 bg-white p-3 rounded-full">
                <Briefcase className="h-6 w-6 text-[#ea5251]" />
              </div>
              <div>
                <h3 className="text-[#323155] font-bold text-lg mb-1">Be the 1st to know about hot jobs</h3>
                <p className="text-[#504f70]">Get the latest crypto opportunities delivered to your inbox</p>
              </div>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter email address"
                className="border rounded-l-md px-4 py-3 w-full md:w-auto outline-none text-sm focus:ring-2 focus:ring-[#ea5251]/30 focus:border-[#ea5251]"
                aria-label="Email for newsletter"
              />
              <button className="bg-[#ea5251] text-white px-6 py-3 rounded-r-md hover:bg-[#d13f3f] transition-colors text-sm font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* More Job Listings */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#323155] mb-8">Recent Jobs</h2>

          {moreJobListings.map((job, index) => (
            <Link href="/jobs/core-substrate-developer" key={`more-${index}`}>
              <JobCard job={job} />
            </Link>
          ))}
        </div>
      </section>

      {/* Hiring CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-[#323155] text-2xl font-bold mb-4">Hiring Crypto Talent?</h3>
            <p className="text-[#504f70] mb-8">
              Post your job listing and reach thousands of qualified blockchain professionals
            </p>
            <Link
              href="/post-job"
              className="bg-[#ea5251] text-white px-8 py-3 rounded-full hover:bg-[#d13f3f] transition-colors inline-flex items-center gap-2 shadow-md"
            >
              <Briefcase className="h-5 w-5" />
              Post Job
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-[#323155] mb-8 text-center">What Our Users Say</h2>

          <div className="relative bg-gradient-to-r from-[#ffebc2]/30 to-[#fff6e5]/30 rounded-xl p-8 shadow-sm">
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <button className="bg-white border rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors">
                <ChevronLeft className="h-5 w-5 text-[#504f70]" />
              </button>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <button className="bg-white border rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors">
                <ChevronRight className="h-5 w-5 text-[#504f70]" />
              </button>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="text-[#ea5251] text-6xl font-serif">"</div>
              <div className="flex-1">
                <p className="text-[#323155] mb-8 text-lg italic">
                  I'd recommend using Crypto Jobs List if you're looking to hire someone in crypto, they cater to a
                  number of different skill sets including marketing and community sales and business development
                  traders and of course, developers and engineers. We hired our CMO here!
                </p>
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg?height=60&width=60"
                    alt="Testimonial"
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-white shadow-sm"
                  />
                  <div>
                    <p className="font-bold text-[#323155]">Samantha William</p>
                    <p className="text-sm text-[#9190b3]">CEO of TOPTAL</p>
                    <div className="flex mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-[#fdce55] text-[#fdce55]" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 gap-2">
              <span className="h-2 w-6 rounded-full bg-[#ea5251]"></span>
              <span className="h-2 w-2 rounded-full bg-[#dddde6]"></span>
              <span className="h-2 w-2 rounded-full bg-[#dddde6]"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-[#ea5251] to-[#f87171]">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-white text-2xl font-bold mb-2">Stay Updated</h3>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Subscribe to our weekly newsletter with the latest crypto jobs and industry insights
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-4 py-3 rounded-l-md outline-none shadow-sm"
              aria-label="Email for newsletter"
            />
            <button className="bg-white text-[#ea5251] px-6 py-3 rounded-r-md font-medium hover:bg-gray-100 transition-colors shadow-sm">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-16 bg-[#ffebc2]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h4 className="font-bold text-[#602d2d] mb-6 text-lg">Browse crypto jobs by role</h4>
              <div className="grid grid-cols-2 gap-3">
                <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
                  Remote crypto jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
                  Solidity jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
                  Blockchain Developer jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
                  Crypto Trader jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
                  Blockchain Marketing jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
                  Crypto Analyst jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
                  Blockchain Designer jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
                  Community Manager jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
                  Earn Bitcoin
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
                  Hire Blockchain Talent
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-[#602d2d] mb-6 text-lg">Browse Jobs by Location</h4>
              <div className="grid grid-cols-2 gap-3">
                <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
                  San Francisco jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
                  Austin Blockchain jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
                  Boston Blockchain jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
                  New York Blockchain jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
                  Chicago Blockchain jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
                  Seattle Blockchain jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
                  London Blockchain jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
                  Singapore Blockchain jobs
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-16 mb-10">
            <div className="flex items-center gap-4">
              <span className="text-[#602d2d] font-medium">Hiring?</span>
              <Link
                href="/post-job"
                className="bg-[#ea5251] text-white px-6 py-2 rounded-full hover:bg-[#d13f3f] transition-colors flex items-center shadow-sm"
              >
                Post Job
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
              Partners
            </Link>
            <span className="text-[#602d2d]">•</span>
            <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
              Ethereum
            </Link>
            <span className="text-[#602d2d]">•</span>
            <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
              CoinMarketCap
            </Link>
            <span className="text-[#602d2d]">•</span>
            <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
              Andreessen
            </Link>
            <span className="text-[#602d2d]">•</span>
            <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
              Dapp University
            </Link>
            <span className="text-[#602d2d]">•</span>
            <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
              More Partners
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <Link
              href="#"
              className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors flex items-center gap-2"
            >
              <Globe className="h-4 w-4" />
              <span>Donate on Gitcoin</span>
            </Link>
            <Link
              href="#"
              className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors flex items-center gap-2"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              <span>Twitter</span>
            </Link>
            <Link
              href="#"
              className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors flex items-center gap-2"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-.237 0-.47-.01-.7-.03-1.13-.093-2.143-.32-3.09-.694a5.537 5.537 0 01-1.667-.982c-.374-.292-.7-.638-.748-.878-.058-.097-.073-.22-.044-.36.035-.164.1-.252.19-.33.117-.1.29-.16.52-.16h.023c.307 0 .582.096.78.283.334.317.5.71.5 1.163 0 .269.092.52.255.705.083.095.182.176.3.24.245.136.524.21.816.21 1.31 0 2.375-1.023 2.375-2.282 0-.157-.014-.31-.04-.468-.09-.527-.293-.982-.59-1.31-.358-.4-.82-.6-1.37-.6-.118 0-.235.01-.35.03a1.702 1.702 0 00-.9.398 1.845 1.845 0 00-.627.996c-.093.297-.163.582-.213.86a.66.66 0 01-.232.446a.727.727 0 01-.464.158a.66.66 0 01-.496-.22c-.142-.148-.213-.35-.213-.59 0-.06.004-.12.013-.18.073-.535.23-1.05.46-1.53.234-.49.553-.94.95-1.347.4-.41.876-.736 1.417-.975a4.568 4.568 0 011.734-.354c1.326 0 2.395.404 3.17 1.2.775.795 1.17 1.867 1.17 3.196 0 1.163-.358 2.23-1.01 3.013-.652.782-1.56 1.193-2.552 1.193z" />
              </svg>
              <span>Telegram</span>
            </Link>
            <Link
              href="#"
              className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors flex items-center gap-2"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </Link>
            <Link
              href="#"
              className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors flex items-center gap-2"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.058c0 1.193.975 2.163 2.174 2.163 1.198 0 2.172-.97 2.172-2.163s-.975-2.164-2.172-2.164c-.92 0-1.704.574-2.021 1.379l-4.329-1.015c-.189-.046-.381.063-.44.249l-1.654 5.207c-2.838.034-5.409.798-7.3 2.025-.474-.438-1.103-.712-1.799-.712-1.465 0-2.656 1.187-2.656 2.646 0 .97.533 1.811 1.317 2.271-.052.282-.086.567-.086.857 0 3.911 4.808 7.093 10.719 7.093s10.72-3.182 10.72-7.093c0-.274-.029-.544-.075-.81.832-.447 1.405-1.312 1.405-2.318zm-17.224 1.816c0-.868.71-1.575 1.582-1.575.872 0 1.581.707 1.581 1.575s-.709 1.574-1.581 1.574-1.582-.706-1.582-1.574zm9.061 4.669c-.797.793-2.048 1.179-3.824 1.179l-.013-.003-.013.003c-1.777 0-3.028-.386-3.824-1.179-.145-.144-.145-.379 0-.523.145-.145.381-.145.526 0 .65.647 1.729.961 3.298.961l.013.003.013-.003c1.569 0 2.648-.315 3.298-.962.145-.145.381-.144.526 0 .145.145.145.379 0 .524zm-.189-3.095c-.872 0-1.581-.706-1.581-1.574 0-.868.709-1.575 1.581-1.575s1.581.707 1.581 1.575-.709 1.574-1.581 1.574z" />
              </svg>
              <span>Reddit</span>
            </Link>
            <Link
              href="#"
              className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors flex items-center gap-2"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
              <span>Instagram</span>
            </Link>
            <Link
              href="#"
              className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors flex items-center gap-2"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Facebook</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#504f70] mb-6 md:mb-0">
              © 2023 Cryptocurrency Jobs |{" "}
              <Link href="#" className="hover:text-[#ea5251]">
                Legal
              </Link>
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="#" className="text-sm text-[#504f70] hover:text-[#ea5251] transition-colors">
                Jobs
              </Link>
              <Link href="#" className="text-sm text-[#504f70] hover:text-[#ea5251] transition-colors">
                Salaries
              </Link>
              <Link href="#" className="text-sm text-[#504f70] hover:text-[#ea5251] transition-colors">
                Affiliate
              </Link>
              <Link href="#" className="text-sm text-[#504f70] hover:text-[#ea5251] transition-colors">
                Hire
              </Link>
              <Link href="#" className="text-sm text-[#504f70] hover:text-[#ea5251] transition-colors">
                Companies
              </Link>
              <Link href="#" className="text-sm text-[#504f70] hover:text-[#ea5251] transition-colors">
                Success Stories
              </Link>
              <Link href="#" className="text-sm text-[#504f70] hover:text-[#ea5251] transition-colors">
                Stats
              </Link>
              <Link href="#" className="text-sm text-[#504f70] hover:text-[#ea5251] transition-colors">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Modern Job Card Component with improved UI
function JobCard({ job }) {
  return (
    <div className="border border-gray-100 rounded-xl p-5 mb-4 hover:shadow-md transition-all duration-300 bg-white group">
      <div className="flex items-start gap-5">
        <div className="bg-[#f9f9fb] p-3 rounded-lg group-hover:scale-105 transition-transform">
          <Image src={job.logo || "/placeholder.svg"} alt={job.company} width={40} height={40} className="rounded-md" />
        </div>
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
            <div>
              <h3 className="font-medium text-lg group-hover:text-[#ea5251] transition-colors">
                {job.title} <span className="text-[#ea5251]">at {job.company}</span>
              </h3>
              <div className="flex items-center gap-2 text-sm text-[#9190b3] mt-1">
                <span className="bg-[#f9f9fb] px-3 py-1 rounded-full text-xs">Remote</span>
                <span>•</span>
                <span>We pay in crypto</span>
              </div>
            </div>
            <div className="text-sm text-[#9190b3] mt-2 md:mt-0 bg-[#f9f9fb] px-3 py-1 rounded-full text-xs md:ml-2">
              {job.postedTime}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {job.tags &&
              job.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#f9f9fb] text-[#9190b3] text-xs px-3 py-1 rounded-full hover:bg-[#ea5251]/10 hover:text-[#ea5251] transition-colors"
                >
                  {tag}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Sample job data
const jobListings = [
  {
    title: "Core Substrate Developer",
    company: "Polkadex",
    logo: "/placeholder.svg?height=40&width=40",
    postedTime: "8 Hours Ago",
    tags: ["rust", "ethereum", "blockchain engineer"],
  },
  {
    title: "Senior Product Designer",
    company: "Polkadex",
    logo: "/placeholder.svg?height=40&width=40",
    postedTime: "12 Hours Ago",
    tags: ["designer", "ethereum", "blockchain engineer"],
  },
  {
    title: "Software Engineer",
    company: "Polkadex",
    logo: "/placeholder.svg?height=40&width=40",
    postedTime: "14 Hours Ago",
    tags: ["rust", "ethereum", "blockchain engineer"],
  },
  {
    title: "Software Engineer",
    company: "Polkadex",
    logo: "/placeholder.svg?height=40&width=40",
    postedTime: "14 Hours Ago",
    tags: ["rust", "ethereum", "blockchain engineer"],
  },
  {
    title: "Software Engineer",
    company: "Polkadex",
    logo: "/placeholder.svg?height=40&width=40",
    postedTime: "14 Hours Ago",
    tags: ["rust", "ethereum", "blockchain engineer"],
  },
]

const moreJobListings = [
  {
    title: "Software Engineer",
    company: "Polkadex",
    logo: "/placeholder.svg?height=40&width=40",
    postedTime: "14 Hours Ago",
    tags: ["rust", "ethereum", "blockchain engineer"],
  },
  {
    title: "Software Engineer",
    company: "Polkadex",
    logo: "/placeholder.svg?height=40&width=40",
    postedTime: "14 Hours Ago",
    tags: ["rust", "ethereum", "blockchain engineer"],
  },
  {
    title: "Software Engineer",
    company: "Polkadex",
    logo: "/placeholder.svg?height=40&width=40",
    postedTime: "14 Hours Ago",
    tags: ["rust", "ethereum", "blockchain engineer"],
  },
]
