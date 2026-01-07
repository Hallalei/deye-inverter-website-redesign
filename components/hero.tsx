import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { getAssetPath } from "@/lib/utils"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      <div className="absolute inset-0">
        <img src={getAssetPath("/modern-solar-panel-installation-on-roof-with-blue-.jpg")} alt="Solar Installation" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-white">全球领先的清洁能源解决方案</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight text-balance">
            赋能未来
            <br />
            清洁能源
          </h1>

          <p className="text-xl text-white/90 mb-12 text-pretty leading-relaxed max-w-2xl">
            德业科技致力于为全球住宅和商业光伏电站及储能系统提供高效可靠的逆变器解决方案
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="h-14 px-8 text-base bg-white text-primary hover:bg-white/90 group">
              浏览产品
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/15 hover:border-white/50"
            >
              了解更多
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-16 pt-16 border-t border-white/20">
            <div>
              <div className="text-4xl font-bold text-white mb-2">150+</div>
              <div className="text-sm text-white/70">国家与地区</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">5GW+</div>
              <div className="text-sm text-white/70">年产能</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">20+</div>
              <div className="text-sm text-white/70">研发年限</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
