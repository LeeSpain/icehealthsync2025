// src/config/permissions.ts
export const PERMISSION_CATEGORIES = {
  USER: 'user',
  DEVICE: 'device',
  PATIENT: 'patient',
  METRICS: 'metrics',
  REPORTS: 'reports',
  ALERTS: 'alerts',
  SYSTEM: 'system',
} as const;

export const PERMISSIONS = {
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
  
  // Metrics
  METRICS_VIEW: { code: 'metrics.view', category: PERMISSION_CATEGORIES.METRICS, name: 'View Metrics' },
  METRICS_MANAGE: { code: 'metrics.manage', category: PERMISSION_CATEGORIES.METRICS, name: 'Manage Metrics' },
  
  // Reports
  REPORTS_VIEW: { code: 'reports.view', category: PERMISSION_CATEGORIES.REPORTS, name: 'View Reports' },
  REPORTS_CREATE: { code: 'reports.create', category: PERMISSION_CATEGORIES.REPORTS, name: 'Create Reports' },
  
  // Alerts
  ALERTS_VIEW: { code: 'alerts.view', category: PERMISSION_CATEGORIES.ALERTS, name: 'View Alerts' },
  ALERTS_MANAGE: { code: 'alerts.manage', category: PERMISSION_CATEGORIES.ALERTS, name: 'Manage Alerts' },
  
  // System
  SYSTEM_SETTINGS: { code: 'system.settings', category: PERMISSION_CATEGORIES.SYSTEM, name: 'Manage System Settings' },
  SYSTEM_LOGS: { code: 'system.logs', category: PERMISSION_CATEGORIES.SYSTEM, name: 'View System Logs' },
} as const;