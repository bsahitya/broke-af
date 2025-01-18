import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import {
  // Import predefined theme
  ThemeSupa,
} from '@supabase/auth-ui-shared';
import { useEffect } from 'react';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_ANON_KEY as string
);

const Login = () => {
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getSession();
      if (data?.session?.user) {
        console.log('Logged in user:', data.session.user);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className='container mx-auto'>
      <div className='mx-6 sm:mx-auto sm:w-1/2 md:w-1/3 my-10 p-5 rounded border border-slate-200 shadow-md'>
        <Auth
          supabaseClient={supabase}
          appearance={{
            theme: ThemeSupa,
          }}
          providers={[]}
        />
      </div>
    </div>
  );
};

export default Login;
