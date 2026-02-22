import { useEffect } from 'react';
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, Map, ClipboardList, LogOut } from 'lucide-react';

const AdminLayout = () => {
  const { user, loading, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate('/admin');
    }
  }, [user, loading, isAdmin, navigate]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-background"><p>Загрузка...</p></div>;
  }

  if (!user || !isAdmin) return null;

  const navItems = [
    { path: '/admin/dashboard', label: 'Панель', icon: LayoutDashboard },
    { path: '/admin/tours', label: 'Экскурсии', icon: Map },
    { path: '/admin/bookings', label: 'Заявки', icon: ClipboardList },
  ];

  return (
    <div className="min-h-screen flex bg-background">
      <aside className="w-64 border-r border-border bg-card p-4 flex flex-col">
        <h1 className="text-xl font-serif font-bold text-primary mb-8">JamTrips CMS</h1>
        <nav className="space-y-1 flex-1">
          {navItems.map(item => (
            <Link key={item.path} to={item.path}>
              <Button
                variant={location.pathname.startsWith(item.path) ? 'default' : 'ghost'}
                className="w-full justify-start gap-2"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>
        <Button variant="ghost" className="justify-start gap-2 text-muted-foreground" onClick={signOut}>
          <LogOut className="h-4 w-4" /> Выйти
        </Button>
      </aside>
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
