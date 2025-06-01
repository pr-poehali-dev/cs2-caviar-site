import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface NavigationProps {
  currentPage: "home" | "form" | "admin";
  onPageChange: (page: "home" | "form" | "admin") => void;
}

const Navigation = ({ currentPage, onPageChange }: NavigationProps) => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <Icon name="Coins" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              CS2 Steam Store
            </span>
          </div>

          <div className="flex space-x-4">
            <Button
              variant={currentPage === "home" ? "default" : "ghost"}
              onClick={() => onPageChange("home")}
              className="flex items-center space-x-2"
            >
              <Icon name="Home" size={16} />
              <span>Главная</span>
            </Button>

            <Button
              variant={currentPage === "form" ? "default" : "ghost"}
              onClick={() => onPageChange("form")}
              className="flex items-center space-x-2"
            >
              <Icon name="UserPlus" size={16} />
              <span>Регистрация</span>
            </Button>

            <Button
              variant={currentPage === "admin" ? "default" : "ghost"}
              onClick={() => onPageChange("admin")}
              className="flex items-center space-x-2"
            >
              <Icon name="Shield" size={16} />
              <span>Админ</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
