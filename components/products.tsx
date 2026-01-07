import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Products() {
  const products = [
    {
      title: "混合逆变器",
      subtitle: "Hybrid Inverter",
      description: "先进的混合逆变器，无缝集成太阳能和储能系统",
      image: "/modern-hybrid-solar-inverter-device.jpg",
      badge: "热销",
      specs: ["3kW-80kW", "效率98%+", "智能并网"],
    },
    {
      title: "组串式逆变器",
      subtitle: "String Inverter",
      description: "高性能组串式逆变器，适用于商业和住宅应用",
      image: "/string-solar-inverter-system-installation.jpg",
      specs: ["1.5kW-136kW", "IP65防护", "VSG功能"],
    },
    {
      title: "微型逆变器",
      subtitle: "Microinverter",
      description: "紧凑型微型逆变器，组件级最大能量收集",
      image: "/microinverter-solar-panel-close-up.jpg",
      badge: "新品",
      specs: ["300W-2250W", "组件级MPPT", "易安装"],
    },
    {
      title: "储能系统",
      subtitle: "Energy Storage",
      description: "完整的储能解决方案，安全可靠长寿命",
      image: "/battery-energy-storage-system-cabinet.jpg",
      specs: ["模块化设计", "长寿命", "智能管理"],
    },
  ]

  return (
    <section id="products" className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">产品系列</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            从住宅到商业应用，完整的逆变器和储能系统产品线
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* 产品图片 */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    {product.badge}
                  </div>
                )}
              </div>

              {/* 产品信息 */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{product.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{product.subtitle}</p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{product.description}</p>

                {/* 规格标签 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.specs.map((spec, i) => (
                    <span key={i} className="px-2 py-1 bg-muted text-xs rounded">
                      {spec}
                    </span>
                  ))}
                </div>

                {/* 了解更多链接 */}
                <Button variant="link" className="p-0 h-auto text-primary group/btn">
                  了解更多
                  <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="h-12 px-8 bg-transparent">
            查看所有产品
          </Button>
        </div>
      </div>
    </section>
  )
}
