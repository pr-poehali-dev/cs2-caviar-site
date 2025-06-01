import { useState } from "react";
import Navigation from "@/components/Navigation";
import HomePage from "@/components/HomePage";
import SteamDataForm from "@/components/SteamDataForm";
import AdminPanel from "@/components/AdminPanel";

export interface SteamUserData {
  id: string;
  steamId: string;
  username: string;
  email: string;
  tradeLink: string;
  submittedAt: string;
}

const Index = () => {
  const [currentPage, setCurrentPage] = useState<"home" | "form" | "admin">(
    "home",
  );
  const [userData, setUserData] = useState<SteamUserData[]>([]);

  const addUserData = (data: Omit<SteamUserData, "id" | "submittedAt">) => {
    const newUser: SteamUserData = {
      ...data,
      id: Date.now().toString(),
      submittedAt: new Date().toLocaleString("ru-RU"),
    };
    setUserData((prev) => [...prev, newUser]);
    setCurrentPage("home");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />

      {currentPage === "home" && (
        <HomePage onGetStarted={() => setCurrentPage("form")} />
      )}
      {currentPage === "form" && (
        <SteamDataForm
          onSubmit={addUserData}
          onBack={() => setCurrentPage("home")}
        />
      )}
      {currentPage === "admin" && <AdminPanel userData={userData} />}
    </div>
  );
};

export default Index;
