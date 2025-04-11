"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, DollarSign } from "lucide-react"

export default function SalariesPage() {
  const [salary, setSalary] = useState("")
  const [selectedTitle, setSelectedTitle] = useState("Senior Solidity Engineer")
  const [skills, setSkills] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("Indonesia, Jakarta")

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-[#ffd888] py-5 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-[#602d2d] font-bold text-xl">
            CryptoJobList
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/jobs" className="text-[#602d2d] hover:text-[#ea5251] transition-colors">
              Jobs
            </Link>
            <Link href="/companies" className="text-[#602d2d] hover:text-[#ea5251] transition-colors">
              Companies
            </Link>
            <Link href="/salaries" className="text-[#602d2d] font-medium hover:text-[#ea5251] transition-colors">
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
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#ffd888] to-[#ffe9aa] py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#ea5251]"></div>
          <div className="absolute top-40 -right-20 w-80 h-80 rounded-full bg-[#ea5251]"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-[#602d2d] text-3xl md:text-4xl font-bold mb-4">Blockchain Salaries</h1>
          <p className="text-[#602d2d] max-w-2xl mx-auto mb-10">
            Sem ac velit id risus volutpat nunc arcu. Aliquet orci, dui viverra at sed sit est diam dictum. Sed at sit
            orci donec vitae, mattis sit rhoncus ullamcorper. Id congue duis lectus velit neque.
          </p>

          {/* Salary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white/30 backdrop-blur-sm rounded-lg p-6 shadow-sm">
              <h3 className="text-[#ea5251] text-3xl font-bold mb-1">$87K</h3>
              <p className="text-[#602d2d] text-sm">PER YEAR AVERAGE</p>
            </div>
            <div className="bg-white/30 backdrop-blur-sm rounded-lg p-6 shadow-sm">
              <h3 className="text-[#ea5251] text-3xl font-bold mb-1">$20K</h3>
              <p className="text-[#602d2d] text-sm">PER YEAR BOTTOM 10%</p>
            </div>
            <div className="bg-white/30 backdrop-blur-sm rounded-lg p-6 shadow-sm">
              <h3 className="text-[#ea5251] text-3xl font-bold mb-1">$150K</h3>
              <p className="text-[#602d2d] text-sm">PER YEAR TOP 10%</p>
            </div>
            <div className="bg-white/30 backdrop-blur-sm rounded-lg p-6 shadow-sm">
              <h3 className="text-[#ea5251] text-3xl font-bold mb-1">377</h3>
              <p className="text-[#602d2d] text-sm">APPROVED SALARIES</p>
            </div>
          </div>

          {/* 3D Blocks Decoration */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 opacity-30 hidden md:block">
              <div className="w-32 h-32 bg-white shadow-lg transform rotate-12"></div>
              <div className="w-24 h-24 bg-white shadow-lg transform -rotate-6 -mt-8 ml-12"></div>
              <div className="w-16 h-16 bg-white shadow-lg transform rotate-45 -mt-4 ml-4"></div>
            </div>

            <div className="absolute -right-16 top-1/2 -translate-y-1/2 opacity-30 hidden md:block">
              <div className="w-32 h-32 bg-white shadow-lg transform -rotate-12"></div>
              <div className="w-24 h-24 bg-white shadow-lg transform rotate-6 -mt-8 -ml-12"></div>
              <div className="w-16 h-16 bg-white shadow-lg transform -rotate-45 -mt-4 -ml-4"></div>
            </div>

            {/* Salary Form */}
            <div className="bg-white rounded-xl shadow-lg p-8 relative z-10">
              <h2 className="text-[#323155] text-xl font-medium mb-6 text-center">Submit Your Salary Information</h2>

              <div className="space-y-6">
                <div>
                  <label htmlFor="salary" className="block text-[#323155] text-sm font-medium mb-2">
                    Total Annual Salary (in USD)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <DollarSign className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="salary"
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
                      placeholder="123,000"
                      className="pl-10 w-full border border-gray-200 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#ea5251]/30 focus:border-[#ea5251] outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="title" className="block text-[#323155] text-sm font-medium mb-2">
                    Title
                  </label>
                  <div className="relative">
                    <select
                      id="title"
                      value={selectedTitle}
                      onChange={(e) => setSelectedTitle(e.target.value)}
                      className="w-full border border-gray-200 rounded-md px-4 py-3 pr-10 appearance-none focus:ring-2 focus:ring-[#ea5251]/30 focus:border-[#ea5251] outline-none transition-all"
                    >
                      <option>Senior Solidity Engineer</option>
                      <option>Blockchain Developer</option>
                      <option>Smart Contract Auditor</option>
                      <option>Crypto Marketing Manager</option>
                      <option>DeFi Product Manager</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="skills" className="block text-[#323155] text-sm font-medium mb-2">
                    Skills
                  </label>
                  <input
                    type="text"
                    id="skills"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    placeholder="Solidity, JavaScript, React, Web3.js"
                    className="w-full border border-gray-200 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#ea5251]/30 focus:border-[#ea5251] outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-[#323155] text-sm font-medium mb-2">
                    Location
                  </label>
                  <div className="relative">
                    <select
                      id="location"
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full border border-gray-200 rounded-md px-4 py-3 pr-10 appearance-none focus:ring-2 focus:ring-[#ea5251]/30 focus:border-[#ea5251] outline-none transition-all"
                    >
                      <option>Indonesia, Jakarta</option>
                      <option>United States, Remote</option>
                      <option>Germany, Berlin</option>
                      <option>United Kingdom, London</option>
                      <option>Singapore</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>

                <button className="w-full bg-[#ea5251] text-white py-3 rounded-md hover:bg-[#d13f3f] transition-colors font-medium">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Salary Table */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#fff8e1] text-[#602d2d]">
                  <th className="text-left py-4 px-4 font-medium rounded-l-lg">Profession</th>
                  <th className="text-left py-4 px-4 font-medium">Skills</th>
                  <th className="text-left py-4 px-4 font-medium">Experience</th>
                  <th className="text-left py-4 px-4 font-medium">Place/Type</th>
                  <th className="text-left py-4 px-4 font-medium">Salary</th>
                  <th className="text-left py-4 px-4 font-medium rounded-r-lg"></th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {salaryData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-4 px-4 text-[#323155]">{item.profession}</td>
                    <td className="py-4 px-4 text-[#323155]">{item.skills}</td>
                    <td className="py-4 px-4 text-[#323155]">{item.experience}</td>
                    <td className="py-4 px-4 text-[#323155]">{item.place}</td>
                    <td className="py-4 px-4 font-medium text-[#ea5251]">${item.salary}</td>
                    <td className="py-4 px-4 text-[#9190b3]">{item.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-16 bg-[#fffaeb]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h4 className="font-bold text-[#602d2d] mb-6 text-lg">Browse crypto jobs by role</h4>
              <div className="grid grid-cols-2 gap-3">
                <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
                  Remote Blockchain jobs
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
                  San Francisco jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
                  Austin Blockchain jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
                  Austin Blockchain jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
                  Boston Blockchain jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
                  Boston Blockchain jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
                  Chicago Blockchain jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
                  Chicago Blockchain jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
                  New York Blockchain jobs
                </Link>
                <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
                  Seattle Blockchain jobs
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

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="text-[#602d2d] font-medium">Partners:</div>
            <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
              Etherscan
            </Link>
            <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
              CoinMarketCap
            </Link>
            <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
              Andreessen
            </Link>
            <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
              Dapp University
            </Link>
            <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
              More Partners
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
              Donate on Gitcoin
            </Link>
            <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
              Twitter
            </Link>
            <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
              Telegram
            </Link>
            <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
              LinkedIn
            </Link>
            <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
              Reddit
            </Link>
            <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
              Instagram
            </Link>
            <Link href="#" className="text-sm text-[#602d2d] hover:text-[#ea5251] transition-colors">
              Facebook
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#504f70] mb-6 md:mb-0">
              © 2021 Cryptocurrency Jobs |{" "}
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

// Sample salary data
const salaryData = [
  {
    profession: "Communication Manager",
    skills: "Communication on Social Media",
    experience: "10 Years Experience",
    place: "Berlin/Remote",
    salary: "1600",
    rate: "3 day",
  },
  {
    profession: "Solidity",
    skills: "Solidity, Javascript",
    experience: "2 Years Experience",
    place: "Berlin/Remote",
    salary: "1800",
    rate: "3 day",
  },
  {
    profession: "Graphic Designer",
    skills: "UI UX Designer",
    experience: "4 Years Experience",
    place: "Berlin/Remote",
    salary: "2050",
    rate: "3 day",
  },
  {
    profession: "Marketing Director",
    skills: "Banner Ads Validity",
    experience: "5 Years Experience",
    place: "Berlin/Remote",
    salary: "600",
    rate: "3 day",
  },
  {
    profession: "Product Manager",
    skills: "UX Research",
    experience: "2 Years Experience",
    place: "Berlin/Remote",
    salary: "1100",
    rate: "3 day",
  },
  {
    profession: "Marketing Manager",
    skills: "Communication on Social Media",
    experience: "3 Years Experience",
    place: "Berlin/Remote",
    salary: "800",
    rate: "3 day",
  },
  {
    profession: "Analyst",
    skills: "Data Analyst",
    experience: "6 Years Experience",
    place: "Berlin/Remote",
    salary: "1400",
    rate: "3 day",
  },
]
