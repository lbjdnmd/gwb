"use client";
import { useState } from "react";
import { Header } from "../../components/Header";
import { TabBar } from "../../components/TabBar";
import { Search, MapPin, Clock, Star, ChevronDown, History, TrendingUp } from "lucide-react";
import { merchants } from "../../data/mockData";
import { cn } from "../../lib/utils";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("综合");

  const filters = ["综合", "距离", "评分", "销量", "价格"];
  const hotKeywords = ["奶茶", "生鲜", "咖啡", "汉堡", "水果", "蛋糕"];
  const searchHistory = ["茶百道", "瑞幸咖啡", "汉堡王", "壹号生鲜"];

  return (
    <div className="page-container min-h-screen bg-blue-50">
      <Header title="搜索" showBack onBack={() => window.history.back()} />

      <div className="px-4 py-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜美食、生鲜、奶茶..."
            className="w-full pl-10 pr-4 py-3 bg-white rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 shadow-sm"
          />
        </div>
      </div>

      <div className="px-4 mb-4">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeFilter === filter
                  ? "bg-primary-500 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              )}
            >
              {filter}
              {filter === "综合" && <ChevronDown className="w-4 h-4 inline ml-1" />}
            </button>
          ))}
        </div>
      </div>

      {!searchQuery && (
        <>
          <div className="px-4 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-orange-500" />
              <span className="font-semibold text-gray-900">热门搜索</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {hotKeywords.map((keyword) => (
                <button
                  key={keyword}
                  onClick={() => setSearchQuery(keyword)}
                  className="px-4 py-2 bg-white rounded-full text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-500 transition-colors"
                >
                  {keyword}
                </button>
              ))}
            </div>
          </div>

          <div className="px-4 mb-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <History className="w-5 h-5 text-gray-400" />
                <span className="font-semibold text-gray-900">搜索历史</span>
              </div>
              <button className="text-sm text-gray-500 hover:text-primary-500 transition-colors">
                清空
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {searchHistory.map((history) => (
                <button
                  key={history}
                  onClick={() => setSearchQuery(history)}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600 hover:bg-gray-200 transition-colors"
                >
                  {history}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      <div className="bg-white rounded-t-3xl -mx-4 px-4 pt-4 pb-20">
        <p className="text-sm text-gray-500 mb-4">为您找到 {merchants.length} 家相关店铺</p>
        <div className="space-y-4">
          {merchants.map((merchant) => (
            <button
              key={merchant.id}
              onClick={() => window.location.href = "/order/confirm"}
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
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{merchant.distance}km</span>
                    </div>
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
              </div>
            </button>
          ))}
        </div>
      </div>

      <TabBar activeTab="search" onTabChange={() => {}} />
    </div>
  );
}
