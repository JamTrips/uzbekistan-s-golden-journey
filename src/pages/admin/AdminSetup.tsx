import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

const AdminSetup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [hasAdmin, setHasAdmin] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if admin exists by trying to call the function
    const check = async () => {
      // Just show the form — the edge function will reject if admin exists
      setHasAdmin(false);
    };
    check();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6) {
      toast({ title: 'Пароль должен быть не менее 6 символов', variant: 'destructive' });
      return;
    }
    setSubmitting(true);
    const { data, error } = await supabase.functions.invoke('create-admin', {
      body: { email, password },
    });
    setSubmitting(false);
    if (error || data?.error) {
      toast({ title: 'Ошибка', description: data?.error || error?.message, variant: 'destructive' });
    } else {
      toast({ title: 'Администратор создан!', description: 'Теперь войдите с вашими данными' });
      navigate('/admin');
    }
  };

  if (hasAdmin === null) return <div className="min-h-screen flex items-center justify-center"><p>Загрузка...</p></div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-serif">Создание администратора</CardTitle>
          <p className="text-sm text-muted-foreground">Первоначальная настройка CMS</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Пароль (мин. 6 символов)</Label>
              <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required minLength={6} />
            </div>
            <Button type="submit" className="w-full" disabled={submitting}>
              {submitting ? 'Создание...' : 'Создать администратора'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSetup;
