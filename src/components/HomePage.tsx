import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface HomePageProps {
  onGetStarted: () => void;
}

const HomePage = ({ onGetStarted }: HomePageProps) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mx-auto flex items-center justify-center mb-4">
            <Icon name="Coins" size={40} className="text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          ONsteam - Покупка валюты Steam
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Быстро и безопасно пополните ваш Steam кошелек для покупки игр и
          внутриигровых предметов через ONsteam
        </p>
        <Button
          onClick={onGetStarted}
          size="lg"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg"
        >
          Начать покупку
          <Icon name="ArrowRight" size={20} className="ml-2" />
        </Button>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Icon name="Shield" size={24} className="text-blue-600" />
            </div>
            <CardTitle>Безопасно</CardTitle>
            <CardDescription>
              Защищенные транзакции и гарантия безопасности ваших данных
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Icon name="Zap" size={24} className="text-green-600" />
            </div>
            <CardTitle>Быстро</CardTitle>
            <CardDescription>
              Мгновенное пополнение Steam кошелька в течение 5 минут
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Icon name="Star" size={24} className="text-purple-600" />
            </div>
            <CardTitle>Надежно</CardTitle>
            <CardDescription>
              Более 1000 довольных клиентов и отличные отзывы
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* How it works */}
      <div className="bg-white rounded-2xl p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Как это работает
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
              1
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Регистрация
            </h3>
            <p className="text-gray-600">Введите ваши данные Steam</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
              2
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Оплата</h3>
            <p className="text-gray-600">Выберите сумму и способ оплаты</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
              3
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Получение
            </h3>
            <p className="text-gray-600">
              Средства поступят на ваш Steam аккаунт
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
