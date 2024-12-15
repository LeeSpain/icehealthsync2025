import React from 'react';
import { X } from 'lucide-react';

interface NotificationProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

export const Notification = ({ message, type, onClose }: NotificationProps) => (
  <div className={`fixed bottom-4 right-4 rounded-lg shadow-lg p-4 ${
    type === 'success' ? 'bg-green-500' : 'bg-red-500'
  } text-white flex items-center`}>
    {message}
    <button 
      onClick={onClose}
      className="ml-3 hover:opacity-75"
    >
      <X className="h-4 w-4" />
    </button>
  </div>
);