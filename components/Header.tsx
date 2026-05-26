import { ArrowLeft, MoreHorizontal, Headphones } from "lucide-react";

interface HeaderProps {
  title: string;
  showBack?: boolean;
  showService?: boolean;
  showMenu?: boolean;
  onBack?: () => void;
}

export function Header({ title, showBack = false, showService = false, showMenu = false, onBack }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="flex items-center justify-between h-12 px-4">
        <div className="flex items-center w-12">
          {showBack && (
            <button
              onClick={onBack}
              className="p-2 -ml-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
          )}
        </div>
        <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
        <div className="flex items-center w-12 justify-end">
          {showService ? (
            <button className="p-2 -mr-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Headphones className="w-5 h-5 text-primary-500" />
            </button>
          ) : showMenu ? (
            <button className="p-2 -mr-2 rounded-lg hover:bg-gray-100 transition-colors">
              <MoreHorizontal className="w-5 h-5 text-gray-700" />
            </button>
          ) : null}
        </div>
      </div>
    </header>
  );
}
