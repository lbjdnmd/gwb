"use client";
import { useState } from "react";
import { Header } from "../../components/Header";
import { TabBar } from "../../components/TabBar";
import { stats, entrySteps, merchantServices, agentInfo } from "../../data/mockData";
import { cn } from "../../lib/utils";
import * as Icons from "lucide-react";
import { Zap, CheckCircle2, Upload, Headphones, Phone, ChevronRight, Shield } from "lucide-react";

export default function EntryPage() {
  const [formData, setFormData] = useState({
    shopName: "",
    phone: "",
  });

  const getIcon = (iconName: string) => {
    return ((Icons as unknown) as Record<string, React.ComponentType<React.HTMLAttributes<SVGSVGElement>>>)[iconName] || Icons.Circle;
  };

  const handleInputChange = (field: "shopName" | "phone", value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    alert("入驻申请已提交，招商经理将在24小时内与您联系");
  };

  return (
    <div className="page-container min-h-screen bg-blue-50">
      <Header title="商家入驻" showBack onBack={() => window.history.back()} showMenu />

      <div className="bg-gradient-to-r from-primary-500 to-cyan-400 px-4 py-6">
        <h1 className="text-2xl font-bold text-white mb-2">快点生活 · 赋能商家</h1>
        <p className="text-white/80 text-sm mb-4">加入我们，触达百万社区高质量消费者</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-white/80">
            <Zap className="w-4 h-4" />
            <span className="text-sm">极速配送</span>
          </div>
          <div className="w-px h-4 bg-white/30"></div>
          <div className="flex items-center gap-2 text-white/80">
            <span className="text-sm"># 0元入驻</span>
          </div>
        </div>
      </div>

      <div className="mx-4 -mt-4 grid grid-cols-3 gap-3">
        {[
          { label: "日活跃用户", value: stats.dailyActiveUsers },
          { label: "合作商家", value: stats.partnerMerchants },
          { label: "平均送达", value: stats.averageDeliveryTime },
        ].map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-3 text-center shadow-lg">
            <p className="text-2xl font-bold text-primary-500">{stat.value}</p>
            <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mx-4 mt-4 bg-white rounded-2xl p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-gray-900">入驻流程</h2>
          <span className="text-xs text-primary-500">申请仅需5分钟</span>
        </div>
        <div className="relative">
          {entrySteps.map((step, index) => (
            <div key={step.id} className="flex gap-4 pb-6 last:pb-0">
              <div className="flex flex-col items-center">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center",
                  index === 0 ? "bg-primary-500" : "bg-gray-200"
                )}>
                  {index === 0 ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <CheckCircle2 className="w-5 h-5 text-gray-500" />
                  )}
                </div>
                {index < entrySteps.length - 1 && (
                  <div className="w-0.5 h-8 bg-gray-200 mt-2"></div>
                )}
              </div>
              <div className="flex-1 pb-2">
                <h3 className="font-medium text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-4 mt-4 bg-white rounded-2xl p-4">
        <h2 className="font-semibold text-gray-900 mb-4">在线意向登记</h2>
        <p className="text-sm text-gray-500 mb-4">我们的招商经理将在24小时内与您联系</p>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-2">店铺名称</label>
            <input
              type="text"
              value={formData.shopName}
              onChange={(e) => handleInputChange("shopName", e.target.value)}
              placeholder="请填写您的招牌名称"
              className="w-full px-4 py-3 bg-gray-100 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">联系电话</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value.replace(/\D/g, "").slice(0, 11))}
              placeholder="请输入您的常用手机号"
              className="w-full px-4 py-3 bg-gray-100 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-2">上传执照照片(可选)</label>
            <div className="w-full h-24 border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center hover:border-primary-500 transition-colors cursor-pointer">
              <Upload className="w-8 h-8 text-gray-400" />
              <span className="text-sm text-gray-500 mt-2">点击或拖拽上传营业执照</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 mt-4 bg-white rounded-2xl p-4">
        <h2 className="font-semibold text-gray-900 mb-4">经营支持服务</h2>
        <div className="grid grid-cols-2 gap-3">
          {merchantServices.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <div
                key={service.id}
                className="rounded-xl p-4"
                style={{ backgroundColor: service.color }}
              >
                <Icon className="w-6 h-6 text-gray-700 mb-2" />
                <h3 className="font-medium text-gray-900">{service.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mx-4 mt-4 bg-white rounded-2xl p-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={agentInfo.avatar}
              alt={agentInfo.name}
              className="w-14 h-14 rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-900">{agentInfo.name}</span>
              <span className="text-xs px-2 py-0.5 bg-green-100 text-green-600 rounded-full">{agentInfo.status}</span>
            </div>
            <p className="text-sm text-gray-500">{agentInfo.title}</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <Headphones className="w-5 h-5 text-gray-600" />
            </button>
            <button className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center hover:bg-primary-600 transition-colors">
              <Phone className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-4 mt-4 mb-20">
        <button className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary-500" />
            <span className="text-gray-900">官方认证入驻通道</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      <div className="fixed bottom-16 left-0 right-0 max-w-[480px] mx-auto px-4">
        <button
          onClick={handleSubmit}
          disabled={!formData.shopName || !formData.phone}
          className={cn(
            "w-full py-4 rounded-xl font-semibold text-lg transition-all",
            formData.shopName && formData.phone
              ? "bg-primary-500 hover:bg-primary-600 text-white active:scale-98"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          )}
        >
          立即申请入驻
        </button>
      </div>

      <TabBar activeTab="entry" onTabChange={() => {}} />
    </div>
  );
}
