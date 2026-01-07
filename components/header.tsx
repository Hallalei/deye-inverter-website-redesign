"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe, ChevronDown } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-primary flex items-center justify-center">
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6 text-primary-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className={`text-xl lg:text-2xl font-bold ${scrolled ? "text-foreground" : "text-white"}`}>DEYE</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {[
              { href: "#products", label: "产品" },
              { href: "#solutions", label: "解决方案" },
              { href: "#news", label: "新闻" },
              { href: "#support", label: "服务支持" },
              { href: "#about", label: "关于我们" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <button
              className={`hidden lg:flex items-center gap-1 text-sm ${scrolled ? "text-foreground" : "text-white"}`}
            >
              <Globe className="h-4 w-4" />
              <span>中文</span>
              <ChevronDown className="h-3 w-3" />
            </button>
            <Button variant={scrolled ? "default" : "secondary"} size="sm" className="hidden lg:inline-flex">
              联系我们
            </Button>

            {/* Mobile menu button */}
            <button
              className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-white"}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col gap-2">
              {[
                { href: "#products", label: "产品" },
                { href: "#solutions", label: "解决方案" },
                { href: "#news", label: "新闻" },
                { href: "#support", label: "服务支持" },
                { href: "#about", label: "关于我们" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium hover:bg-muted rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button size="sm" className="w-full">
                  联系我们
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
