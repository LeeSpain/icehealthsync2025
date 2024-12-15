"use client";

import React, { createContext, useContext, useReducer, useState } from 'react';

// Types
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive' | 'pending';
}

interface Role {
  id: string;
  name: string;
  permissions: string[];
}

interface AdminState {
  users: User[];
  roles: Role[];
  notifications: number;
  systemStatus: {
    apiHealth: boolean;
    dbHealth: boolean;
    lastUpdated: Date;
  };
}

interface AdminContextType extends AdminState {
  addUser: (user: User) => void;
  updateUser: (id: string, user: Partial<User>) => void;
  deleteUser: (id: string) => void;
  addRole: (role: Role) => void;
  updateRole: (id: string, role: Partial<Role>) => void;
  deleteRole: (id: string) => void;
}

// Create Context
const AdminContext = createContext<AdminContextType | undefined>(undefined);

// Initial State
const initialState: AdminState = {
  users: [],
  roles: [],
  notifications: 0,
  systemStatus: {
    apiHealth: true,
    dbHealth: true,
    lastUpdated: new Date()
  }
};

// Provider Component
export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [users, setUsers] = useState<User[]>([]);
  const [roles, setRoles] = useState<Role[]>([]);
  const [notifications, setNotifications] = useState(0);
  const [systemStatus, setSystemStatus] = useState(initialState.systemStatus);

  const addUser = (user: User) => {
    setUsers(prev => [...prev, user]);
  };

  const updateUser = (id: string, userUpdate: Partial<User>) => {
    setUsers(prev => prev.map(user => 
      user.id === id ? { ...user, ...userUpdate } : user
    ));
  };

  const deleteUser = (id: string) => {
    setUsers(prev => prev.filter(user => user.id !== id));
  };

  const addRole = (role: Role) => {
    setRoles(prev => [...prev, role]);
  };

  const updateRole = (id: string, roleUpdate: Partial<Role>) => {
    setRoles(prev => prev.map(role => 
      role.id === id ? { ...role, ...roleUpdate } : role
    ));
  };

  const deleteRole = (id: string) => {
    setRoles(prev => prev.filter(role => role.id !== id));
  };

  const value = {
    users,
    roles,
    notifications,
    systemStatus,
    addUser,
    updateUser,
    deleteUser,
    addRole,
    updateRole,
    deleteRole
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
}

// Custom Hook
export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}

// Custom Hooks for specific features
export function useUsers() {
  const { users, addUser, updateUser, deleteUser } = useAdmin();
  return { users, addUser, updateUser, deleteUser };
}

export function useRoles() {
  const { roles, addRole, updateRole, deleteRole } = useAdmin();
  return { roles, addRole, updateRole, deleteRole };
}

// Update the AdminLayout to use the Provider
export function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminProvider>
      <div className="min-h-screen bg-gray-50">
        {/* Your existing layout code */}
        {children}
      </div>
    </AdminProvider>
  );
}