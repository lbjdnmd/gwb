"use client";
import { useState, useEffect } from "react";
import { Header } from "../../../components/Header";
import { riderInfo, orderStatus } from "../../../data/mockData";
import { Star, Phone, MessageCircle, ChevronRight, Clock, Bike } from "lucide-react";

export default function OrderStatusPage() {
  const [remainingTime, setRemainingTime] = useState(orderStatus.remainingMinutes);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="page-container min-h-screen bg-blue-50">
      <Header title="订单状态" showBack onBack={() => window.history.back()} showMenu />

      <div className="relative h-64 bg-gradient-to-br from-primary-400 to-cyan-300">
        <img
          src="https://neeko-copilot.bytedance.net/api/text_to_image?prompt=delivery%20rider%20on%20motorcycle%20delivering%20food%20in%20city%20street&image_size=landscape_16_9"
          alt="配送中"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
            <MessageCircle className="w-5 h-5 text-primary-500" />
          </button>
          <button className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
            <Clock className="w-5 h-5 text-primary-500" />
          </button>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white">
              <img
                src={orderStatus.merchant.image}
                alt={orderStatus.merchant.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-white">
              <p className="font-semibold">{orderStatus.merchant.name}</p>
              <p className="text-sm opacity-80">骑手正在快马加鞭为您配送</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 -mt-6 bg-white rounded-2xl shadow-lg p-4 animate-slideUp">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary-500" />
            <span className="text-gray-600">预计送达时间</span>
          </div>
          <span className="text-xs px-2 py-1 bg-primary-100 text-primary-600 rounded-full">配送中</span>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-gray-900">{orderStatus.estimatedTime}</p>
          <p className="text-sm text-gray-500 mt-1">预计还有 {remainingTime} 分钟</p>
        </div>

        <div className="mt-6 flex items-center justify-between">
          {orderStatus.progress.map((step, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className={
                step.completed
                  ? "w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center"
                  : "w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
              }>
                {step.completed ? (
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                ) : (
                  <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                )}
              </div>
              <span className={
                step.completed ? "text-sm text-primary-500 mt-2" : "text-sm text-gray-400 mt-2"
              }>{step.step}</span>
              {index < orderStatus.progress.length - 1 && (
                <div className={`absolute top-12 w-1/3 h-0.5 ${step.completed ? "bg-primary-500" : "bg-gray-200"}`}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-4 mt-4 bg-white rounded-2xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                src={riderInfo.avatar}
                alt={riderInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">{riderInfo.name}</span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-xs text-gray-600">{riderInfo.rating}</span>
                </div>
              </div>
              <p className="text-xs text-gray-500">
                已配送 {riderInfo.deliveredOrders}+ 单 | {riderInfo.isCertified && "平台认证骑手"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
              <MessageCircle className="w-5 h-5 text-gray-600" />
            </button>
            <button className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center hover:bg-primary-600 transition-colors">
              <Phone className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-4 mt-4 bg-white rounded-2xl p-4">
        <button className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bike className="w-5 h-5 text-primary-500" />
            <span className="text-gray-900">查看订单详情</span>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      <div className="h-20"></div>
    </div>
  );
}
