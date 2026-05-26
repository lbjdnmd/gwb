export const categories = [
  { id: 1, name: "餐饮美食", icon: "Utensils", color: "#FB923C" },
  { id: 2, name: "超市便利", icon: "ShoppingBag", color: "#60A5FA" },
  { id: 3, name: "奶茶果汁", icon: "Wine", color: "#F472B6" },
  { id: 4, name: "医疗健康", icon: "Heart", color: "#34D399" },
  { id: 5, name: "鲜花蛋糕", icon: "Flower2", color: "#FB7185" },
  { id: 6, name: "下午茶", icon: "Coffee", color: "#FBBF24" },
  { id: 7, name: "生鲜食材", icon: "Fish", color: "#10B981" },
  { id: 8, name: "全城跑腿", icon: "Zap", color: "#F59E0B" },
];

export const banners = [
  {
    id: 1,
    title: "夏日冰爽季",
    subtitle: "全场美食5折起起步",
    image: "https://neeko-copilot.bytedance.net/api/text_to_image?prompt=delicious%20food%20summer%20promotion%20banner%20with%20ice%20cold%20drinks%20and%20fresh%20dishes&image_size=landscape_16_9",
  },
  {
    id: 2,
    title: "周五会员日",
    subtitle: "全场美",
    image: "https://neeko-copilot.bytedance.net/api/text_to_image?prompt=VIP%20member%20day%20promotion%20banner%20with%20golden%20elements%20and%20food&image_size=landscape_16_9",
  },
];

export const merchants = [
  {
    id: 1,
    name: "壹号生鲜旗舰店",
    rating: 4.6,
    monthlySales: 1200,
    distance: 1.2,
    deliveryTime: 25,
    deliveryFee: 3,
    minOrder: 20,
    tags: ["满30减10", "支持自提", "首单免配送费"],
    image: "https://neeko-copilot.bytedance.net/api/text_to_image?prompt=fresh%20grocery%20store%20front%20view%20with%20vegetables%20and%20fruits%20display&image_size=landscape_4_3",
  },
  {
    id: 2,
    name: "瑞幸咖啡（软件园店）",
    rating: 4.9,
    monthlySales: 3500,
    distance: 0.5,
    deliveryTime: 15,
    deliveryFee: 0,
    minOrder: 15,
    tags: ["9.9元秒杀", "极速到手"],
    image: "https://neeko-copilot.bytedance.net/api/text_to_image?prompt=modern%20coffee%20shop%20front%20with%20coffee%20cups%20and%20cozy%20atmosphere&image_size=landscape_4_3",
  },
  {
    id: 3,
    name: "汉堡王（环球港店）",
    rating: 4.5,
    monthlySales: 800,
    distance: 2.5,
    deliveryTime: 40,
    deliveryFee: 5,
    minOrder: 30,
    tags: ["满49减15", "赠送小食"],
    image: "https://neeko-copilot.bytedance.net/api/text_to_image?prompt=burger%20restaurant%20front%20with%20burgers%20and%20fries%20display&image_size=landscape_4_3",
  },
];

export const deliveryAddress = {
  id: 1,
  name: "李先生",
  phone: "13800138000",
  address: "深圳市龙华区民治街道民强社",
  tag: "数字产业园10",
  isDefault: true,
};

export const cartItems = [
  {
    id: 1,
    name: "招牌黑糖波波厚乳",
    spec: "标准冰 / 五分糖 / 大杯",
    quantity: 1,
    price: 22,
    image: "https://neeko-copilot.bytedance.net/api/text_to_image?prompt=bubble%20milk%20tea%20with%20brown%20sugar%20pearls%20in%20clear%20cup&image_size=square",
  },
  {
    id: 2,
    name: "爆浆草莓奶酪包",
    spec: "单份",
    quantity: 1,
    price: 18,
    image: "https://neeko-copilot.bytedance.net/api/text_to_image?prompt=strawberry%20cheese%20bread%20with%20cream%20filling%20on%20plate&image_size=square",
  },
];

export const riderInfo = {
  id: 1,
  name: "王小明",
  rating: 4.9,
  deliveredOrders: 2500,
  isCertified: true,
  phone: "13900139000",
  avatar: "https://neeko-copilot.bytedance.net/api/text_to_image?prompt=delivery%20rider%20portrait%20in%20uniform%20with%20helmet&image_size=square",
};

export const orderStatus = {
  id: "DD20240526001",
  status: "delivering",
  estimatedTime: "12:35",
  remainingMinutes: 12,
  merchant: {
    name: "必胜客（陆家嘴店）",
    image: "https://neeko-copilot.bytedance.net/api/text_to_image?prompt=Pizza%20Hut%20restaurant%20front&image_size=square",
  },
  progress: [
    { step: "商家已出餐", completed: true },
    { step: "骑手配送中", completed: true },
    { step: "预计送达", completed: false },
  ],
};

export const settlement = {
  subtotal: 40,
  deliveryFee: 3.5,
  packagingFee: 1.5,
  discount: 5,
  couponDiscount: 2.5,
  total: 40,
};

export const merchantServices = [
  { id: 1, name: "店铺装修", description: "专业视觉团队设计", icon: "Palette", color: "#E0F2FE" },
  { id: 2, name: "活动策划", description: "定制化营销方案", icon: "Sparkles", color: "#FFF7ED" },
  { id: 3, name: "物资供应", description: "定制包装与工服", icon: "Package", color: "#ECFDF5" },
  { id: 4, name: "大数据选品", description: "分析区域消费热点", icon: "BarChart3", color: "#F0F9FF" },
];

export const agentInfo = {
  name: "林经理",
  title: "专属招商顾问",
  status: "在线中",
  avatar: "https://neeko-copilot.bytedance.net/api/text_to_image?prompt=professional%20business%20consultant%20portrait%20in%20suit&image_size=square",
};

export const stats = {
  dailyActiveUsers: "10W+",
  partnerMerchants: "2.5k",
  averageDeliveryTime: "30min",
};

export const entrySteps = [
  { id: 1, title: "在线申请", description: "提交基础资料与联系方式" },
  { id: 2, title: "资质审核", description: "1-3个工作日内完成审核" },
  { id: 3, title: "店铺装修", description: "上传商品并配置经营信息" },
  { id: 4, title: "正式上线", description: "开启您的极速点餐之旅" },
];
