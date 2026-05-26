import { Home, Search, ShoppingCart, Building2, User } from "lucide-react";
import { cn } from "../lib/utils";

interface TabBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  cartCount?: number;
}

const tabs = [
  { id: "home", label: "首页", icon: Home },
  { id: "search", label: "搜索", icon: Search },
  { id: "order", label: "订单", icon: ShoppingCart },
  { id: "entry", label: "入驻", icon: Building2 },
  { id: "profile", label: "我的", icon: User },
];

export function TabBar({ activeTab, onTabChange, cartCount = 0 }: TabBarProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-[480px] mx-auto bg-white border-t border-gray-100 z-50">
      <div className="flex items-center justify-around py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex flex-col items-center px-4 py-1 rounded-lg transition-all",
                isActive ? "text-primary-500" : "text-gray-500"
              )}
            >
              <div className="relative">
                <Icon className={cn("w-6 h-6", isActive ? "stroke-[2.5]" : "")} />
                {tab.id === "order" && cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 min-w-[18px] h-[18px] flex items-center justify-center text-xs font-medium bg-red-500 text-white rounded-full px-1">
                    {cartCount > 99 ? "99+" : cartCount}
                  </span>
                )}
              </div>
              <span className="text-xs mt-1">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
