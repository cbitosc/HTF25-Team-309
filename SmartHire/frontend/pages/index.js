import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/jobs').then(res => setJobs(res.data));
  }, []);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <a href="/">
                <div className="flex items-center gap-2 font-bold text-xl hover-elevate rounded px-2 py-1 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase text-primary">
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                  </svg>
                  <span className="hidden sm:inline">SmartHire</span>
                </div>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2 border border-transparent h-9 w-9">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-moon">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              </button>
              <a href="/login">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2 border border-transparent min-h-9 px-4 py-2">Sign In</button>
              </a>
              <a href="/signup">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2 bg-primary text-primary-foreground border border-primary-border min-h-9 px-4 py-2">Get Started</button>
              </a>
            </div>
          </div>
        </div>
      </header>
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-90"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Your Gateway to Freelance Success</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">Connect with opportunities. Build your portfolio. Earn with trust.</p>
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex gap-2">
                <input className="flex w-full rounded-md border border-input px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm pl-10 h-14 text-base bg-background/90 backdrop-blur" placeholder="Search skills, jobs, or services..." />
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2 bg-primary text-primary-foreground border border-primary-border min-h-10 rounded-md h-14 px-8">Search</button>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/signup?role=freelancer">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2 border [border-color:var(--button-outline)] shadow-xs active:shadow-none min-h-10 rounded-md px-8 bg-background/10 backdrop-blur border-white/20 hover:bg-background/20">Find Work</button>
              </a>
              <a href="/signup?role=client">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2 text-primary-foreground border min-h-10 rounded-md px-8 bg-primary border-primary-border">Hire Talent</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Add more sections like stats, features, jobs, etc., from the original spec */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">For Freelancers</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Find Work</a></li>
                <li><a href="#" className="hover:text-foreground">How It Works</a></li>
              </ul>
            </div>
            {/* Add more footer sections */}
          </div>
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 SmartHire. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>