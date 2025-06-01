import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { SteamUserData } from "@/pages/Index";

interface SteamDataFormProps {
  onSubmit: (data: Omit<SteamUserData, "id" | "submittedAt">) => void;
  onBack: () => void;
}

const SteamDataForm = ({ onSubmit, onBack }: SteamDataFormProps) => {
  const [formData, setFormData] = useState({
    steamId: "",
    username: "",
    email: "",
    tradeLink: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.steamId.trim()) {
      newErrors.steamId = "Steam ID обязателен";
    }

    if (!formData.username.trim()) {
      newErrors.username = "Имя пользователя обязательно";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email обязателен";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Некорректный email";
    }

    if (!formData.tradeLink.trim()) {
      newErrors.tradeLink = "Ссылка для трейда обязательна";
    } else if (!formData.tradeLink.includes("steamcommunity.com/tradeoffer")) {
      newErrors.tradeLink = "Некорректная ссылка для трейда";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6">
        <Button variant="ghost" onClick={onBack} className="mb-4">
          <Icon name="ArrowLeft" size={16} className="mr-2" />
          Назад
        </Button>
      </div>

      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-orange-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
            <Icon name="UserPlus" size={32} className="text-white" />
          </div>
          <CardTitle className="text-2xl">Регистрация Steam данных</CardTitle>
          <CardDescription>
            Введите ваши данные для покупки валюты Steam
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Steam ID *
              </label>
              <Input
                type="text"
                placeholder="Например: 76561198XXXXXXXXX"
                value={formData.steamId}
                onChange={(e) => handleInputChange("steamId", e.target.value)}
                className={errors.steamId ? "border-red-500" : ""}
              />
              {errors.steamId && (
                <p className="text-red-500 text-sm mt-1">{errors.steamId}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Имя пользователя Steam *
              </label>
              <Input
                type="text"
                placeholder="Ваш ник в Steam"
                value={formData.username}
                onChange={(e) => handleInputChange("username", e.target.value)}
                className={errors.username ? "border-red-500" : ""}
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">{errors.username}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ссылка для трейда *
              </label>
              <Input
                type="url"
                placeholder="https://steamcommunity.com/tradeoffer/new/?partner=..."
                value={formData.tradeLink}
                onChange={(e) => handleInputChange("tradeLink", e.target.value)}
                className={errors.tradeLink ? "border-red-500" : ""}
              />
              {errors.tradeLink && (
                <p className="text-red-500 text-sm mt-1">{errors.tradeLink}</p>
              )}
              <p className="text-sm text-gray-500 mt-1">
                Найти в Steam: Инвентарь → Обмен → Кто может отправлять вам
                предложения → Ссылка для трейда
              </p>
            </div>

            <Button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3"
              size="lg"
            >
              Отправить данные
              <Icon name="Send" size={16} className="ml-2" />
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SteamDataForm;
