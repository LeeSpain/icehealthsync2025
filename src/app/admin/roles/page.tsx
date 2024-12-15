"use client";

import { useState, useEffect } from 'react';

// Types
interface Role {
  id: string;
  name: string;
  description: string;
  permissions: string[];
  isCustom: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

interface Permission {
  code: string;
  name: string;
  category: string;
  description?: string;
}

// Configuration
const PERMISSION_CATEGORIES = {
  USER: 'user',
  DEVICE: 'device',
  PATIENT: 'patient',
  METRICS: 'metrics',
  REPORTS: 'reports',
  ALERTS: 'alerts',
  SYSTEM: 'system',
} as const;

const PERMISSIONS = {
  // User Management
  USER_VIEW: { code: 'user.view', category: PERMISSION_CATEGORIES.USER, name: 'View Users' },
  USER_CREATE: { code: 'user.create', category: PERMISSION_CATEGORIES.USER, name: 'Create Users' },
  USER_EDIT: { code: 'user.edit', category: PERMISSION_CATEGORIES.USER, name: 'Edit Users' },
  USER_DELETE: { code: 'user.delete', category: PERMISSION_CATEGORIES.USER, name: 'Delete Users' },
  
  // Device Management
  DEVICE_VIEW: { code: 'device.view', category: PERMISSION_CATEGORIES.DEVICE, name: 'View Devices' },
  DEVICE_MANAGE: { code: 'device.manage', category: PERMISSION_CATEGORIES.DEVICE, name: 'Manage Devices' },
  
  // Patient Data
  PATIENT_VIEW: { code: 'patient.view', category: PERMISSION_CATEGORIES.PATIENT, name: 'View Patient Data' },
  PATIENT_EDIT: { code: 'patient.edit', category: PERMISSION_CATEGORIES.PATIENT, name: 'Edit Patient Data' },
} as const;

// Sample data
const sampleRoles: Role[] = [
  {
    id: '1',
    name: 'Administrator',
    description: 'Full system access',
    permissions: ['user.manage', 'system.manage'],
    isCustom: false,
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
];

// Components
function RoleList({ roles, onRoleUpdate }: { roles: Role[]; onRoleUpdate: (roles: Role[]) => void }) {
  return (
    <div className="divide-y divide-gray-200">
      {roles.map((role) => (
        <div key={role.id} className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{role.name}</h3>
              <p className="text-sm text-gray-500">{role.description}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium
                ${role.isCustom ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                {role.isCustom ? 'Custom' : 'Default'}
              </span>
              {role.isActive && (
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Active
                </span>
              )}
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Permissions</h4>
              <div className="flex flex-wrap gap-2">
                {role.permissions.map((permission) => (
                  <span
                    key={permission}
                    className="px-2 py-1 rounded-lg text-xs font-medium bg-gray-100 text-gray-700"
                  >
                    {permission}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex justify-end gap-2">
              <button
                onClick={() => {/* Add edit handler */}}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Edit
              </button>
              {role.isCustom && (
                <button
                  onClick={() => {/* Add delete handler */}}
                  className="text-sm text-red-600 hover:text-red-900"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function RoleForm({ role, onClose, onSave }: { 
  role?: Role; 
  onClose: () => void; 
  onSave: (role: Role) => Promise<void>; 
}) {
  const [formData, setFormData] = useState({
    name: role?.name || '',
    description: role?.description || '',
    permissions: role?.permissions || [],
    isCustom: true,
    isActive: true
  });

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full mx-4 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          {role ? 'Edit Role' : 'Create New Role'}
        </h2>
        
        <form onSubmit={async (e) => {
          e.preventDefault();
          await onSave(formData as Role);
        }}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Role Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500"
                rows={3}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Permissions
              </label>
              <div className="space-y-2">
                {Object.entries(PERMISSION_CATEGORIES).map(([category, value]) => (
                  <div key={category} className="border rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">
                      {category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {Object.values(PERMISSIONS)
                        .filter(p => p.category === value)
                        .map(permission => (
                          <label
                            key={permission.code}
                            className="flex items-center gap-2"
                          >
                            <input
                              type="checkbox"
                              checked={formData.permissions.includes(permission.code)}
                              onChange={(e) => {
                                const newPermissions = e.target.checked
                                  ? [...formData.permissions, permission.code]
                                  : formData.permissions.filter(p => p !== permission.code);
                                setFormData({ ...formData, permissions: newPermissions });
                              }}
                              className="rounded text-teal-600"
                            />
                            <span className="text-sm text-gray-700">
                              {permission.name}
                            </span>
                          </label>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 hover:text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700"
            >
              {role ? 'Update Role' : 'Create Role'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// Main Page Component
export default function RolesPage() {
  const [roles, setRoles] = useState<Role[]>(sampleRoles);
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateRole = async (newRole: Role) => {
    // Add API call here
    setRoles([...roles, { ...newRole, id: String(roles.length + 1) }]);
    setIsCreating(false);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Role Management</h1>
        <button
          onClick={() => setIsCreating(true)}
          className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700"
        >
          Create New Role
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <RoleList roles={roles} onRoleUpdate={setRoles} />
      </div>

      {isCreating && (
        <RoleForm
          onClose={() => setIsCreating(false)}
          onSave={handleCreateRole}
        />
      )}
    </div>
  );
}