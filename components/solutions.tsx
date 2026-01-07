import { Card } from "@/components/ui/card"
import { Home, Building2 } from "lucide-react"
import { getAssetPath } from "@/lib/utils"

export function Solutions() {
  const solutions = [
    {
      title: "住宅储能系统",
      subtitle: "Residential Energy Storage",
      description: "完整的家庭储能解决方案，最大化自发自用，提供备用电源保障",
      image: getAssetPath("/modern-house-with-solar-panels-and-battery-storage.jpg"),
      icon: Home,
      stats: [
        { label: "功率", value: "5-20kW" },
        { label: "容量", value: "10-40kWh" },
      ],
    },
    {
      title: "商业光伏系统",
      subtitle: "Commercial PV Systems",
      description: "可扩展的商业太阳能解决方案，降低能源成本，减少碳足迹",
      image: getAssetPath("/commercial-building-solar.png"),
      icon: Building2,
      stats: [
        { label: "功率", value: "30-500kW" },
        { label: "投资回报", value: "5-7年" },
      ],
    },
    {
      title: "住宅光伏系统",
      subtitle: "Residential PV Systems",
      description: "高效的住宅太阳能系统，实现可持续且经济的清洁能源",
      image: getAssetPath("/residential-rooftop-solar-panel-installation.jpg"),
      icon: Home,
      stats: [
        { label: "功率", value: "3-10kW" },
        { label: "节省", value: "最高70%" },
      ],
    },
    {
      title: "商业储能系统",
      subtitle: "Commercial Energy Storage",
      description: "先进的储能解决方案，适用于商业和工业应用场景",
      image: getAssetPath("/large-commercial-battery-storage-system.jpg"),
      icon: Building2,
      stats: [
        { label: "功率", value: "100kW-2.5MW" },
        { label: "循环", value: "6000+" },
      ],
    },
  ]

  return (
    <section id="solutions" className="py-20 lg:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">解决方案</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            为住宅和商业应用量身定制，支持全球向清洁能源转型
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <Card
                key={index}
                className="group overflow-hidden border-0 bg-card hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/* 图片容器 */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={solution.image || getAssetPath("/placeholder.svg")}
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  {/* 图标和统计数据 */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex gap-4 text-sm">
                        {solution.stats.map((stat, i) => (
                          <div key={i}>
                            <span className="text-white/70">{stat.label}: </span>
                            <span className="font-semibold">{stat.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 内容区域 */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{solution.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{solution.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
