import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Products } from "@/components/products"
import { Solutions } from "@/components/solutions"
import { News } from "@/components/news"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Products />
      <Solutions />
      <News />
      <Footer />
    </main>
  )
}
