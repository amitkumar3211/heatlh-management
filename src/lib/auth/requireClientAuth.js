'use client';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAccessToken } from './tokenStorage';

export function useRequireClientAuth({ role }) {
  const hydrated = useSelector((s) => s.auth.hydrated);
  const tokenInStore = useSelector((s) => s.auth.token);
  const roleInStore = useSelector((s) => s.auth.role);

  useEffect(() => {
    if (!hydrated) return;

    const token = tokenInStore || getAccessToken();
    if (!token) {
      window.location.href = '/login';
      return;
    }

    if (role && roleInStore && roleInStore !== role) {
      window.location.href = roleInStore === 'admin' ? '/admin/dashboard' : '/freelancer/dashboard';
    }
  }, [hydrated, tokenInStore, roleInStore, role]);
}

