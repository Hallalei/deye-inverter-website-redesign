import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import { getAssetPath } from "@/lib/utils"

export function News() {
  const newsItems = [
    {
      category: "公司新闻",
      date: "2025年10月8日",
      title: "绿色产业，光明未来：德业2025迪拜经销商峰会圆满举办",
      excerpt: "2025年11月，德业集团在迪拜成功举办了"绿色产业，光明未来"经销商峰会，汇聚全球合作伙伴共商发展大计",
      image: getAssetPath("/business-conference-dubai-skyline.jpg"),
      featured: true,
    },
    {
      category: "公司新闻",
      date: "2025年10月8日",
      title: "德业马来西亚柔佛制造基地正式破土动工",
      excerpt: "2024年10月2日，德业集团马来西亚柔佛制造基地正式破土动工，这是德业全球化战略的重要一步",
      image: getAssetPath("/manufacturing-facility-groundbreaking-ceremony.jpg"),
    },
    {
      category: "产品创新",
      date: "2025年9月26日",
      title: "德业储能解决方案荣获创新奖",
      excerpt: "TÜV莱茵授予德业模块化工商业储能解决方案2025年全质量保障创新奖",
      image: getAssetPath("/industrial-energy-storage-containers.jpg"),
    },
  ]

  return (
    <section id="news" className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">新闻动态</h2>
            <p className="text-lg text-muted-foreground">了解德业最新资讯</p>
          </div>
          <Button variant="outline" className="hidden lg:inline-flex bg-transparent">
            查看全部
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <Card
              key={index}
              className={`group overflow-hidden border-0 bg-card hover:shadow-xl transition-all duration-300 cursor-pointer ${
                item.featured && index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`relative overflow-hidden bg-muted ${item.featured ? "aspect-[16/10]" : "aspect-video"}`}>
                <img
                  src={item.image || getAssetPath("/placeholder.svg")}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className={`p-6 ${item.featured ? "lg:p-8" : ""}`}>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>

                <h3
                  className={`font-bold mb-3 group-hover:text-primary transition-colors ${
                    item.featured ? "text-xl lg:text-2xl" : "text-lg"
                  } line-clamp-2`}
                >
                  {item.title}
                </h3>

                <p className={`text-muted-foreground mb-4 ${item.featured ? "line-clamp-3" : "line-clamp-2"}`}>
                  {item.excerpt}
                </p>

                <Button variant="link" className="p-0 h-auto text-primary group/btn">
                  阅读更多
                  <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 lg:hidden">
          <Button variant="outline" className="bg-transparent">
            查看全部新闻
          </Button>
        </div>
      </div>
    </section>
  )
}
