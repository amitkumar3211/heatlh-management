'use client';

import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { useEffect } from 'react';
import { hydrateFromStorage, setAuth, clearAuth } from '@/store/authSlice';
import { getAccessToken } from '@/lib/auth/tokenStorage';

function BootstrapAuth() {
  useEffect(() => {
    const token = getAccessToken();
    store.dispatch(hydrateFromStorage({ token }));

    if (!token) return;
    (async () => {
      try {
        const res = await fetch('/api/me', {
          headers: { authorization: `Bearer ${token}` },
        });
        const json = await res.json();
        if (!res.ok || !json.ok) {
          store.dispatch(clearAuth());
          return;
        }
        store.dispatch(setAuth({ token, role: json.role, is_superadmin: json.is_superadmin }));
      } catch {
        // ignore - keep token but marked hydrated
      }
    })();
  }, []);

  return null;
}

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <BootstrapAuth />
      {children}
    </Provider>
  );
}

