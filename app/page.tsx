"use client";
import { useState } from "react";
import { Search, Gift, MapPin, Star, Clock, ChevronRight, Zap, ChevronDown } from "lucide-react";
import { TabBar } from "../components/TabBar";
import { categories, banners, merchants } from "../data/mockData";
import { cn } from "../lib/utils";
import * as Icons from "lucide-react";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("home");

  const getIcon = (iconName: string) => {
    return ((Icons as unknown) as Record<string, React.ComponentType<React.HTMLAttributes<SVGSVGElement>>>)[iconName] || Icons.Circle;
  };

  const handleCategoryClick = () => {
    setActiveTab("search");
  };

  return (
    <div className="page-container min-h-screen bg-blue-50">
      <header className="sticky top-0 z-50 bg-gradient-to-r from-primary-500 to-cyan-400">
        <div className="px-4 py-3">
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="w-5 h-5 text-white" />
            <span className="text-white font-medium">环球中心</span>
            <ChevronDown className="w-4 h-4 text-white" />
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜美食、生鲜、奶茶..."
              className="w-full pl-10 pr-4 py-3 bg-white rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-primary-500 text-white rounded-lg text-sm font-medium">
              搜索
            </button>
          </div>
        </div>
      </header>

      <div className="px-4 py-4">
        <div className="grid grid-cols-4 gap-3">
          {categories.map((category) => {
            const Icon = getIcon(category.icon);
            return (
              <button
                key={category.id}
                onClick={handleCategoryClick}
                className="flex flex-col items-center gap-2 p-2 rounded-xl hover:bg-white hover:shadow-sm transition-all"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: category.color }} />
                </div>
                <span className="text-xs text-gray-700">{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="px-4 mb-4">
        <div className="relative bg-gradient-to-r from-orange-400 to-orange-500 rounded-2xl p-4 flex items-center justify-between overflow-hidden">
          <div className="absolute right-0 top-0 w-20 h-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute right-0 bottom-0 w-16 h-16 bg-white/10 rounded-full translate-y-1/2 translate-x-1/2"></div>
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
              <Gift className="w-7 h-7 text-white" />
            </div>
            <div className="text-white">
              <p className="text-lg font-bold">新人专享¥50大礼包</p>
              <p className="text-xs opacity-80">无门槛优惠券，立即开启生活</p>
            </div>
          </div>
          <button className="bg-white text-orange-500 px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange-50 transition-colors">
            一键领取
          </button>
        </div>
      </div>

      <div className="px-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-orange-500" />
            <span className="font-semibold text-gray-900">超值特惠</span>
          </div>
          <button className="flex items-center gap-1 text-sm text-gray-500">
            <span>更多活动</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="flex-shrink-0 w-56 h-28 rounded-xl overflow-hidden relative group"
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-3">
                <p className="text-white font-bold">{banner.title}</p>
                <p className="text-white/80 text-xs">{banner.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-t-3xl -mx-4 px-4 pt-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <span className="font-semibold text-gray-900">综合排序</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
          <div className="flex-1 flex items-center gap-4 text-sm text-gray-500">
            <button className="hover:text-primary-500 transition-colors">距离</button>
            <button className="hover:text-primary-500 transition-colors">评分</button>
            <button className="hover:text-primary-500 transition-colors">筛选</button>
          </div>
          <div className="flex items-center gap-1 text-sm text-gray-500">
            <MapPin className="w-4 h-4" />
            <span>环球中心</span>
          </div>
        </div>

        <div className="space-y-4 pb-20">
          {merchants.map((merchant) => (
            <button
              key={merchant.id}
              className="w-full flex gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={merchant.image}
                  alt={merchant.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between py-0.5">
                <div>
                  <h3 className="font-medium text-gray-900">{merchant.name}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-xs text-gray-600">{merchant.rating}</span>
                    </div>
                    <span className="text-xs text-gray-400">月售 {merchant.monthlySales}+</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span>{merchant.distance}km</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{merchant.deliveryTime}分钟</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-400">起送¥{merchant.minOrder}</span>
                    <span className="text-xs text-primary-500">配送¥{merchant.deliveryFee}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  {merchant.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className={cn(
                        "px-2 py-0.5 rounded text-xs",
                        tag.includes("减")
                          ? "bg-orange-100 text-orange-600"
                          : "bg-gray-100 text-gray-600"
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      <TabBar activeTab={activeTab} onTabChange={setActiveTab} cartCount={3} />
    </div>
  );
}
