import '@/styles/globals.css';
import { UserContext } from '@/lib/context';
import { useUserData } from '@/lib/hooks';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  const userData = useUserData();

  return (
    <UserContext.Provider value={userData}>
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  );
}

export default MyApp;
