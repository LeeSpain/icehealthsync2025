// src/types/role.ts
export interface Role {
  id: string;
  name: string;
  description: string;
  permissions: string[];
  isCustom: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Permission {
  code: string;
  name: string;
  category: string;
  description?: string;
}