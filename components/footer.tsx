import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer id="about" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-2xl font-bold">DEYE</span>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              德业科技成立于2007年，致力于为全球住宅和商业光伏电站及储能系统提供可靠的逆变器解决方案
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">产品</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {["混合逆变器", "组串式逆变器", "微型逆变器", "储能系统", "充电桩"].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4" id="support">
              服务支持
            </h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {["下载中心", "培训", "常见问题", "售后服务", "经销商认证"].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">公司</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {["关于我们", "联系我们", "加入我们", "隐私政策"].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="grid md:grid-cols-2 gap-6 text-sm text-primary-foreground/80">
            <div>
              <div className="font-medium text-primary-foreground mb-2">全球销售</div>
              <div>电话: +86 0574-8612-0560</div>
              <div>邮箱: [[email protected]](mailto:sales@deyeinverter.com)</div>
            </div>
            <div>
              <div className="font-medium text-primary-foreground mb-2">全球服务</div>
              <div>中文: +86-574-8622-8816 / +86-574-8622-8852</div>
              <div>意大利语: +86-574-8611-8865</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 py-6 text-center text-sm text-primary-foreground/60">
          <p>© 2025 宁波德业变流技术有限公司 版权所有</p>
        </div>
      </div>
    </footer>
  )
}
