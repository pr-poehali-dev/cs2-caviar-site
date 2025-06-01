import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { SteamUserData } from "@/pages/Index";

interface AdminPanelProps {
  userData: SteamUserData[];
}

const AdminPanel = ({ userData }: AdminPanelProps) => {
  const exportData = () => {
    const dataStr = JSON.stringify(userData, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "steam_users_data.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Админ панель
            </h1>
            <p className="text-gray-600">
              Управление данными пользователей Steam
            </p>
          </div>
          <Button
            onClick={exportData}
            className="bg-blue-500 hover:bg-blue-600"
          >
            <Icon name="Download" size={16} className="mr-2" />
            Экспорт данных
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-600">
                Всего пользователей
              </CardTitle>
              <Icon name="Users" size={16} className="text-gray-400" />
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-2xl font-bold text-gray-900">
              {userData.length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-600">
                Сегодня
              </CardTitle>
              <Icon name="Calendar" size={16} className="text-gray-400" />
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-2xl font-bold text-gray-900">
              {
                userData.filter(
                  (user) =>
                    new Date(user.submittedAt).toDateString() ===
                    new Date().toDateString(),
                ).length
              }
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium text-gray-600">
                Последний
              </CardTitle>
              <Icon name="Clock" size={16} className="text-gray-400" />
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-2xl font-bold text-gray-900">
              {userData.length > 0
                ? userData[userData.length - 1].submittedAt.split(" ")[1]
                : "--:--"}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <CardTitle>Данные пользователей</CardTitle>
        </CardHeader>
        <CardContent>
          {userData.length === 0 ? (
            <div className="text-center py-12">
              <Icon
                name="Users"
                size={48}
                className="text-gray-300 mx-auto mb-4"
              />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Нет данных
              </h3>
              <p className="text-gray-500">
                Пользователи еще не регистрировались
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium text-gray-600">
                      Пользователь
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">
                      Steam ID
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">
                      Email
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">
                      Дата
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-gray-600">
                      Действия
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((user) => (
                    <tr key={user.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div className="font-medium text-gray-900">
                          {user.username}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="text-sm text-gray-600 font-mono">
                          {user.steamId}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="text-sm text-gray-600">
                          {user.email}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="text-sm text-gray-600">
                          {user.submittedAt}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => window.open(user.tradeLink, "_blank")}
                        >
                          <Icon
                            name="ExternalLink"
                            size={14}
                            className="mr-1"
                          />
                          Трейд
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPanel;
