export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatPhone(phone: string): string {
  if (phone.length === 11) {
    return phone.replace(/(\d{3})(\d{4})(\d{4})/, "$1****$3");
  }
  return phone;
}

export function formatPrice(price: number): string {
  return `¥${price.toFixed(2)}`;
}

export function getRelativeTime(minutes: number): string {
  if (minutes < 60) {
    return `${minutes}分钟`;
  }
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins > 0 ? `${hours}小时${mins}分钟` : `${hours}小时`;
}
