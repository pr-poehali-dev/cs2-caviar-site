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
  const reviews = [
    {
      name: "Алексей К.",
      text: "Быстро пополнил Steam кошелек, все прошло отлично!",
      rating: 5,
    },
    {
      name: "Мария С.",
      text: "Отличный сервис, рекомендую всем геймерам",
      rating: 5,
    },
    {
      name: "Дмитрий П.",
      text: "Пользуюсь уже полгода, никаких проблем не было",
      rating: 5,
    },
    {
      name: "Анна В.",
      text: "Самый удобный способ пополнения Steam",
      rating: 4,
    },
    {
      name: "Игорь Т.",
      text: "Быстро, надежно, безопасно - все как обещали",
      rating: 5,
    },
    {
      name: "Елена Р.",
      text: "Пополнила аккаунт за 3 минуты, супер!",
      rating: 5,
    },
    {
      name: "Владимир Н.",
      text: "Отзывчивая поддержка и быстрые транзакции",
      rating: 4,
    },
    {
      name: "Ольга М.",
      text: "Пользуюсь только ONsteam для покупок игр",
      rating: 5,
    },
    {
      name: "Сергей Л.",
      text: "Удобный интерфейс и мгновенное зачисление",
      rating: 5,
    },
    {
      name: "Татьяна Ж.",
      text: "Безопасно пополнила кошелек, спасибо!",
      rating: 4,
    },
    {
      name: "Андрей К.",
      text: "Лучший сервис для пополнения Steam",
      rating: 5,
    },
    { name: "Юлия Б.", text: "Быстро, просто и без комиссий", rating: 5 },
    {
      name: "Максим Г.",
      text: "Пользуюсь постоянно, всегда все работает",
      rating: 5,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="mb-6">
          <div className="w-20 h-20 steam-gradient rounded-2xl mx-auto flex items-center justify-center mb-4 shadow-lg shadow-blue-500/25">
            <Icon name="Coins" size={40} className="text-white" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          ONsteam - Покупка валюты Steam
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Быстро и безопасно пополните ваш Steam кошелек для покупки игр и
          внутриигровых предметов через ONsteam
        </p>
        <Button
          onClick={onGetStarted}
          size="lg"
          className="steam-gradient hover:shadow-lg hover:shadow-blue-500/25 text-white px-8 py-3 text-lg transition-all duration-300"
        >
          Начать покупку
          <Icon name="ArrowRight" size={20} className="ml-2" />
        </Button>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <Card className="steam-card text-center hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
          <CardHeader>
            <div className="w-12 h-12 bg-blue-500/20 border border-blue-400/30 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Icon name="Shield" size={24} className="text-blue-400" />
            </div>
            <CardTitle className="text-white">Безопасно</CardTitle>
            <CardDescription className="text-slate-300">
              Защищенные транзакции и гарантия безопасности ваших данных
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="steam-card text-center hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
          <CardHeader>
            <div className="w-12 h-12 bg-green-500/20 border border-green-400/30 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Icon name="Zap" size={24} className="text-green-400" />
            </div>
            <CardTitle className="text-white">Быстро</CardTitle>
            <CardDescription className="text-slate-300">
              Мгновенное пополнение Steam кошелька в течение 5 минут
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="steam-card text-center hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
          <CardHeader>
            <div className="w-12 h-12 bg-purple-500/20 border border-purple-400/30 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Icon name="Star" size={24} className="text-purple-400" />
            </div>
            <CardTitle className="text-white">Надежно</CardTitle>
            <CardDescription className="text-slate-300">
              Более 1000 довольных клиентов и отличные отзывы
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Reviews Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Отзывы наших клиентов
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="steam-card hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
            >
              <CardContent className="pt-6">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-500/20 border border-blue-400/30 rounded-full flex items-center justify-center mr-3">
                    <Icon name="User" size={16} className="text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{review.name}</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={14}
                          className={
                            i < review.rating
                              ? "text-yellow-400 fill-current"
                              : "text-slate-600"
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div className="steam-card rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Как это работает
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 steam-gradient rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/25">
              1
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Регистрация
            </h3>
            <p className="text-slate-300">
              Мгновенное пополнение Steam кошелька в течение 15 минут
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 steam-gradient rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/25">
              2
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Оплата</h3>
            <p className="text-slate-300">Выберите сумму и способ оплаты</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 steam-gradient rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/25">
              3
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Получение</h3>
            <p className="text-slate-300">
              Средства поступят на ваш Steam аккаунт
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
