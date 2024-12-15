// src/lib/api/roles.ts
import { Role, Permission } from '../types/role';

export async function getRoles(): Promise<Role[]> {
  // Add your database query here
  const response = await fetch('/api/roles');
  return response.json();
}

export async function getRole(id: string): Promise<Role> {
  const response = await fetch(`/api/roles/${id}`);
  return response.json();
}

export async function createRole(role: Omit<Role, 'id' | 'createdAt' | 'updatedAt'>): Promise<Role> {
  const response = await fetch('/api/roles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(role),
  });
  return response.json();
}

export async function updateRole(id: string, role: Partial<Role>): Promise<Role> {
  const response = await fetch(`/api/roles/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(role),
  });
  return response.json();
}

export async function deleteRole(id: string): Promise<void> {
  await fetch(`/api/roles/${id}`, { method: 'DELETE' });
}