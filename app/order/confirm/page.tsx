"use client";
import { useState } from "react";
import { Header } from "../../../components/Header";
import { TabBar } from "../../../components/TabBar";
import { deliveryAddress, cartItems, settlement } from "../../../data/mockData";
import { cn, formatPrice, formatPhone } from "../../../lib/utils";
import { MapPin, ChevronRight, Clock, Store, Ticket, Tag, Shield } from "lucide-react";

type DeliveryMode = "timely" | "scheduled" | "contactless";

export default function ConfirmOrderPage() {
  const [deliveryMode, setDeliveryMode] = useState<DeliveryMode>("timely");

  const handleSubmitOrder = () => {
    window.location.href = "/order/status";
  };

  return (
    <div className="page-container min-h-screen bg-blue-50">
      <Header title="确认订单" showBack onBack={() => window.history.back()} showService />

      <div className="px-4 py-4 space-y-4">
        <div className="bg-white rounded-xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary-500" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-gray-900">{deliveryAddress.tag}</span>
                <span className="text-xs text-gray-400">{deliveryAddress.name} {formatPhone(deliveryAddress.phone)}</span>
              </div>
              <p className="text-sm text-gray-600">{deliveryAddress.address}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="bg-white rounded-xl p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary-500" />
              <span className="font-medium text-gray-900">送达时间</span>
            </div>
            <span className="text-primary-500 font-semibold">预计 12:45 送达</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-gray-500">选择配送模式</span>
          </div>
          <div className="flex gap-3">
            {[
              { id: "timely" as DeliveryMode, label: "准时送达", desc: "超时赔付" },
              { id: "scheduled" as DeliveryMode, label: "预约送餐", desc: "指定时段" },
              { id: "contactless" as DeliveryMode, label: "无接触", desc: "放置门外" },
            ].map((mode) => (
              <button
                key={mode.id}
                onClick={() => setDeliveryMode(mode.id)}
                className={cn(
                  "flex-1 py-3 rounded-xl border-2 transition-all text-center",
                  deliveryMode === mode.id
                    ? "border-primary-500 bg-primary-50 text-primary-600"
                    : "border-gray-200 text-gray-600"
                )}
              >
                <p className="font-medium">{mode.label}</p>
                <p className="text-xs opacity-70">{mode.desc}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-4">
          <div className="flex items-center gap-2 mb-4">
            <Store className="w-5 h-5 text-orange-500" />
            <span className="font-medium text-gray-900">茶百道（龙华壹方城店）</span>
          </div>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-3">
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{item.name}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">{item.spec}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-gray-400">x{item.quantity}</span>
                    <span className="text-gray-900 font-semibold">{formatPrice(item.price)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
            <Ticket className="w-4 h-4 text-orange-500" />
            <span className="text-sm text-gray-600">商家优惠券</span>
            <span className="text-sm text-orange-500">已减¥5</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Tag className="w-4 h-4 text-red-500" />
            <span className="text-sm text-gray-600">店铺满减活动</span>
            <span className="text-sm text-red-500 ml-auto">-¥2.5</span>
          </div>
        </div>

        <div className="bg-white rounded-xl p-4">
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">商品小计</span>
              <span className="text-gray-900">{formatPrice(settlement.subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">配送费</span>
              <span className="text-gray-900">{formatPrice(settlement.deliveryFee)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">打包费</span>
              <span className="text-gray-900">{formatPrice(settlement.packagingFee)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">红包/优惠券</span>
              <span className="text-red-500">-{formatPrice(settlement.discount).slice(1)}</span>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary-500" />
                <span className="text-xs text-gray-500">极速配送 · 延时赔付</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs text-gray-400">已优惠¥7.5</span>
                <span className="text-gray-900 font-semibold">合计 {formatPrice(settlement.total)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-16 left-0 right-0 max-w-[480px] mx-auto bg-white border-t border-gray-100 px-4 py-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-gray-500">应付</span>
            <span className="text-xl font-bold text-red-500 ml-1">{formatPrice(settlement.total)}</span>
            <span className="text-xs text-gray-400 ml-1">为您节省了¥7.5</span>
          </div>
          <button
            onClick={handleSubmitOrder}
            className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors active:scale-98"
          >
            提交订单
          </button>
        </div>
      </div>

      <TabBar activeTab="order" onTabChange={() => {}} />
    </div>
  );
}
