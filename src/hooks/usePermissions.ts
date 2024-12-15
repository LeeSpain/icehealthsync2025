// src/hooks/usePermissions.ts
import { useCallback } from 'react';

export function usePermissions(userPermissions: string[]) {
  const checkPermission = useCallback((requiredPermission: string) => {
    return hasPermission(userPermissions, requiredPermission);
  }, [userPermissions]);

  const checkAnyPermission = useCallback((requiredPermissions: string[]) => {
    return hasAnyPermission(userPermissions, requiredPermissions);
  }, [userPermissions]);

  const checkAllPermissions = useCallback((requiredPermissions: string[]) => {
    return hasAllPermissions(userPermissions, requiredPermissions);
  }, [userPermissions]);

  return {
    checkPermission,
    checkAnyPermission,
    checkAllPermissions,
  };
}