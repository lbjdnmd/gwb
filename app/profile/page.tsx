"use client";
import { TabBar } from "../../components/TabBar";
import { User, Settings, Bell, ChevronRight, Wallet, Ticket, MapPin, Heart, HelpCircle, MessageSquare, Shield, ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

export default function ProfilePage() {
  const menuItems = [
    { icon: Wallet, label: "我的钱包", badge: "¥0.00" },
    { icon: Ticket, label: "优惠券", badge: "3张可用" },
    { icon: MapPin, label: "收货地址", badge: "" },
    { icon: Heart, label: "我的收藏", badge: "" },
    { icon: HelpCircle, label: "帮助中心", badge: "" },
    { icon: MessageSquare, label: "意见反馈", badge: "" },
    { icon: Shield, label: "账号安全", badge: "" },
  ];

  return (
    <div className="page-container min-h-screen bg-blue-50">
      <div className="bg-gradient-to-r from-primary-500 to-cyan-400 px-4 pt-12 pb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div className="text-white">
              <h2 className="text-xl font-bold">登录/注册</h2>
              <p className="text-sm opacity-80 mt-1">登录享更多权益</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
              <Bell className="w-5 h-5 text-white" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors">
              <Settings className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {[
            { value: "0", label: "优惠券" },
            { value: "0", label: "积分" },
            { value: "0", label: "收藏" },
            { value: "0", label: "足迹" },
          ].map((item, index) => (
            <button key={index} className="text-center">
              <p className="text-2xl font-bold text-white">{item.value}</p>
              <p className="text-xs text-white/80 mt-1">{item.label}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="mx-4 -mt-4 bg-white rounded-2xl p-4 mb-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">我的订单</h3>
          <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-primary-500 transition-colors">
            <span>全部订单</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-5 gap-2 mt-4">
          {[
            { icon: "待付款", count: 0 },
            { icon: "待配送", count: 0 },
            { icon: "待评价", count: 0 },
            { icon: "退款/售后", count: 0 },
            { icon: "优惠券", count: 3 },
          ].map((item, index) => (
            <button key={index} className="flex flex-col items-center gap-2">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-xs text-gray-500">{item.icon.charAt(0)}</span>
                </div>
                {item.count > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center text-xs font-medium bg-red-500 text-white rounded-full px-1">
                    {item.count}
                  </span>
                )}
              </div>
              <span className="text-xs text-gray-600">{item.icon}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="mx-4 bg-white rounded-2xl overflow-hidden mb-4">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              className={cn(
                "w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors",
                index !== menuItems.length - 1 && "border-b border-gray-100"
              )}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gray-600" />
                </div>
                <span className="text-gray-900">{item.label}</span>
              </div>
              <div className="flex items-center gap-2">
                {item.badge && (
                  <span className={cn(
                    "text-sm",
                    item.badge.includes("¥") ? "text-orange-500" : "text-gray-500"
                  )}>
                    {item.badge}
                  </span>
                )}
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </div>
            </button>
          );
        })}
      </div>

      <div className="mx-4 mb-20">
        <button className="w-full flex items-center justify-center gap-2 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
          <span className="text-gray-600">切换账号</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      <TabBar activeTab="profile" onTabChange={() => {}} />
    </div>
  );
}
