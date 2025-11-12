import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-pink-50">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink to-purple flex items-center justify-center">
            <Icon name="Sparkles" size={24} className="text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent">
            AdConnect
          </span>
        </div>
        <div className="flex gap-4">
          <Button variant="ghost" className="text-foreground hover:text-pink">
            Войти
          </Button>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-pink via-purple to-indigo bg-clip-text text-transparent">
              Маркетплейс рекламы
            </span>
            <br />
            <span className="text-foreground">для брендов и криейторов</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Объединяем бренды с талантливыми создателями контента. Детальная аналитика, 
            прозрачные условия, максимальный охват.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-pink to-purple hover:opacity-90 transition-all hover:scale-105"
            >
              <Icon name="UserPlus" className="mr-2" size={20} />
              Начать работу
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-pink text-pink hover:bg-pink hover:text-white transition-all hover:scale-105"
            >
              <Icon name="Play" className="mr-2" size={20} />
              Демонстрация
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-cyan">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan to-indigo flex items-center justify-center mb-4 animate-float">
              <Icon name="TrendingUp" size={32} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-2 text-cyan">5.2M+</h3>
            <p className="text-muted-foreground">Средний охват кампании</p>
          </Card>
          <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-pink">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink to-orange flex items-center justify-center mb-4 animate-float" style={{ animationDelay: '0.2s' }}>
              <Icon name="Users" size={32} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-2 text-pink">12,500+</h3>
            <p className="text-muted-foreground">Активных криейторов</p>
          </Card>
          <Card className="p-8 hover:shadow-xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-purple">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple to-pink flex items-center justify-center mb-4 animate-float" style={{ animationDelay: '0.4s' }}>
              <Icon name="Target" size={32} className="text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-2 text-purple">94%</h3>
            <p className="text-muted-foreground">Точность таргетинга</p>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in">
            <div className="inline-block px-4 py-2 bg-pink/10 rounded-full mb-4">
              <span className="text-pink font-semibold">Для брендов</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Найдите идеальных амбассадоров для вашего бренда
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-pink/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="BarChart3" className="text-pink" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Детальная аналитика</h4>
                  <p className="text-muted-foreground">Отслеживайте охваты, вовлечённость и ROI в реальном времени</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Shield" className="text-cyan" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Гарантия качества</h4>
                  <p className="text-muted-foreground">Проверенные криейторы с подтверждённой статистикой</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Zap" className="text-purple" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Быстрый запуск</h4>
                  <p className="text-muted-foreground">От выбора криейтора до старта кампании за 24 часа</p>
                </div>
              </div>
            </div>
          </div>
          <Card className="p-8 bg-gradient-to-br from-pink/5 to-purple/5 border-2">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Охват кампании</span>
                <Icon name="TrendingUp" className="text-pink" size={16} />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">Instagram</span>
                  <span className="text-pink font-bold">2.3M</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-pink to-purple w-[85%]"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">YouTube</span>
                  <span className="text-cyan font-bold">1.8M</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan to-indigo w-[70%]"></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">TikTok</span>
                  <span className="text-purple font-bold">1.1M</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple to-pink w-[55%]"></div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Card className="p-8 bg-gradient-to-br from-indigo/5 to-cyan/5 border-2 order-2 md:order-1">
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink to-purple"></div>
                  <div>
                    <div className="font-semibold">Fashion Campaign</div>
                    <div className="text-sm text-muted-foreground">Активна 5 дней</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-pink">$2,450</div>
                  <div className="text-xs text-muted-foreground">Заработано</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan to-indigo"></div>
                  <div>
                    <div className="font-semibold">Tech Review</div>
                    <div className="text-sm text-muted-foreground">Завершена</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-cyan">$1,890</div>
                  <div className="text-xs text-muted-foreground">Заработано</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange to-pink"></div>
                  <div>
                    <div className="font-semibold">Food Brand</div>
                    <div className="text-sm text-muted-foreground">Новая</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-orange">$3,200</div>
                  <div className="text-xs text-muted-foreground">Оффер</div>
                </div>
              </div>
            </div>
          </Card>
          <div className="animate-fade-in order-1 md:order-2">
            <div className="inline-block px-4 py-2 bg-cyan/10 rounded-full mb-4">
              <span className="text-cyan font-semibold">Для криейторов</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Монетизируйте контент с премиальными брендами
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-indigo/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="DollarSign" className="text-indigo" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Справедливая оплата</h4>
                  <p className="text-muted-foreground">Прозрачная система расчётов и быстрые выплаты</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="LineChart" className="text-orange" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Аналитика эффективности</h4>
                  <p className="text-muted-foreground">Детальная статистика всех ваших рекламных кампаний</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-pink/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Star" className="text-pink" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Топовые бренды</h4>
                  <p className="text-muted-foreground">Работайте с ведущими компаниями вашей ниши</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-pink via-purple to-indigo rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">
            Готовы начать?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к тысячам брендов и криейторов, которые уже используют нашу платформу
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-white text-pink hover:bg-gray-100 transition-all hover:scale-105"
            >
              Зарегистрироваться бесплатно
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white/10 transition-all hover:scale-105"
            >
              <Icon name="Calendar" className="mr-2" size={20} />
              Заказать демо
            </Button>
          </div>
        </div>
      </section>

      <footer className="container mx-auto px-4 py-12 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink to-purple flex items-center justify-center">
              <Icon name="Sparkles" size={16} className="text-white" />
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent">
              AdConnect
            </span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 AdConnect. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
