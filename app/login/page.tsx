"use client";
import { useState } from "react";
import { Zap, Gift, Phone, Lock, MessageCircle, Fingerprint, Apple, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";

type LoginType = "quick" | "password";

export default function LoginPage() {
  const [loginType, setLoginType] = useState<LoginType>("quick");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);
  const [codeCountdown, setCodeCountdown] = useState(0);

  const handleGetCode = () => {
    if (!phone || phone.length !== 11) return;
    setCodeCountdown(60);
    const timer = setInterval(() => {
      setCodeCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleLogin = () => {
    if (!isAgreed) return;
    if (loginType === "quick") {
      if (!phone || !code) return;
    } else {
      if (!phone || !password) return;
    }
    window.location.href = "/";
  };

  return (
    <div className="page-container min-h-screen bg-gradient-to-b from-blue-50 to-white pb-8">
      <div className="flex flex-col items-center pt-16 pb-8">
        <div className="w-16 h-16 rounded-2xl bg-black flex items-center justify-center mb-4 shadow-lg">
          <Zap className="w-8 h-8 text-white" />
        </div>
        <p className="text-gray-600 text-sm">让生活触手可及</p>
      </div>

      <div className="mx-4 mb-6">
        <div className="relative bg-gradient-to-r from-orange-100 to-orange-50 rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-orange-400 flex items-center justify-center">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-lg font-bold text-orange-600">¥50 新人礼包</p>
              <p className="text-xs text-orange-500">注册即领全平台通用券</p>
            </div>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1 transition-colors">
            <span>限时福利</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="mx-4 mb-6">
        <div className="flex bg-gray-100 rounded-xl p-1">
          <button
            onClick={() => setLoginType("quick")}
            className={cn(
              "flex-1 py-3 text-center rounded-lg font-medium transition-all",
              loginType === "quick"
                ? "bg-white text-primary-500 shadow-sm"
                : "text-gray-500"
            )}
          >
            快捷登录
          </button>
          <button
            onClick={() => setLoginType("password")}
            className={cn(
              "flex-1 py-3 text-center rounded-lg font-medium transition-all",
              loginType === "password"
                ? "bg-white text-primary-500 shadow-sm"
                : "text-gray-500"
            )}
          >
            账号登录
          </button>
        </div>
      </div>

      <div className="mx-4 space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-2">手机号</label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 11))}
              placeholder="请输入手机号"
              className="w-full pl-10 pr-4 py-3.5 bg-gray-100 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-2">
            {loginType === "quick" ? "验证码" : "密码"}
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type={loginType === "quick" ? "tel" : "password"}
              value={loginType === "quick" ? code : password}
              onChange={(e) => loginType === "quick" ? setCode(e.target.value.replace(/\D/g, "").slice(0, 6)) : setPassword(e.target.value)}
              placeholder={loginType === "quick" ? "验证码" : "请输入密码"}
              className="w-full pl-10 pr-20 py-3.5 bg-gray-100 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all"
            />
            {loginType === "quick" && (
              <button
                onClick={handleGetCode}
                disabled={codeCountdown > 0 || phone.length !== 11}
                className={cn(
                  "absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 rounded-lg text-sm font-medium transition-all",
                  codeCountdown > 0 || phone.length !== 11
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-primary-500 text-white hover:bg-primary-600"
                )}
              >
                {codeCountdown > 0 ? `${codeCountdown}s` : "获取验证码"}
              </button>
            )}
          </div>
        </div>

        {loginType === "password" && (
          <div className="flex justify-end">
            <button className="text-sm text-primary-500 hover:text-primary-600 transition-colors">
              忘记密码
            </button>
          </div>
        )}

        <button
          onClick={handleLogin}
          disabled={!isAgreed || (!phone || (loginType === "quick" ? !code : !password))}
          className={cn(
            "w-full py-3.5 rounded-xl text-white font-semibold text-lg transition-all",
            isAgreed && phone && (loginType === "quick" ? code : password)
              ? "bg-primary-500 hover:bg-primary-600 active:scale-98"
              : "bg-gray-300 cursor-not-allowed"
          )}
        >
          立即登录 →
        </button>
      </div>

      <div className="mx-4 mt-8">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-sm text-gray-400">其他登录方式</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <div className="flex justify-center gap-8 mt-6">
          <button className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <span className="text-xs text-gray-600">微信</span>
          </button>
          <button className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
              <Fingerprint className="w-7 h-7 text-gray-600" />
            </div>
            <span className="text-xs text-gray-600">FaceID</span>
          </button>
          <button className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center">
              <Apple className="w-7 h-7 text-gray-600" />
            </div>
            <span className="text-xs text-gray-600">Apple</span>
          </button>
        </div>
      </div>

      <div className="mx-4 mt-8">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={isAgreed}
            onChange={(e) => setIsAgreed(e.target.checked)}
            className="w-4 h-4 rounded border-gray-300 text-primary-500 focus:ring-primary-500"
          />
          <span className="text-xs text-gray-500">
            我已阅读并同意《用户协议》、《隐私政策》以及《LocalDash运营商服务条款》
          </span>
        </label>
      </div>

      <div className="text-center mt-8 text-xs text-gray-400">
        <p>© 2024 LocalDash Technology Co., Ltd.</p>
      </div>
    </div>
  );
}
