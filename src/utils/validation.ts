"use client";

// Username validation
export const validateUsername = (username: string): { isValid: boolean; error?: string } => {
  if (!username) {
    return { isValid: false, error: 'Username is required' };
  }

  if (username.length < 3) {
    return { isValid: false, error: 'Username must be at least 3 characters long' };
  }

  if (username.length > 30) {
    return { isValid: false, error: 'Username cannot exceed 30 characters' };
  }

  if (!/^[a-zA-Z0-9._-]+$/.test(username)) {
    return { isValid: false, error: 'Username can only contain letters, numbers, and .-_' };
  }

  if (/^[._-]/.test(username)) {
    return { isValid: false, error: 'Username cannot start with special characters' };
  }

  return { isValid: true };
};

// Password validation
export const validatePassword = (password: string): { isValid: boolean; error?: string; strength: 'weak' | 'medium' | 'strong' } => {
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (!password) {
    return { isValid: false, error: 'Password is required', strength: 'weak' };
  }

  if (password.length < minLength) {
    return { isValid: false, error: `Password must be at least ${minLength} characters long`, strength: 'weak' };
  }

  // Calculate password strength
  let strength: 'weak' | 'medium' | 'strong' = 'weak';
  let criteriaCount = [hasUppercase, hasLowercase, hasNumbers, hasSpecialChar].filter(Boolean).length;

  if (criteriaCount >= 4 && password.length >= 12) {
    strength = 'strong';
  } else if (criteriaCount >= 3 && password.length >= 8) {
    strength = 'medium';
  }

  const missingCriteria = [];
  if (!hasUppercase) missingCriteria.push('uppercase letter');
  if (!hasLowercase) missingCriteria.push('lowercase letter');
  if (!hasNumbers) missingCriteria.push('number');
  if (!hasSpecialChar) missingCriteria.push('special character');

  if (missingCriteria.length > 0) {
    return {
      isValid: false,
      error: `Password must include at least one ${missingCriteria.join(', ')}`,
      strength
    };
  }

  return { isValid: true, strength };
};

// Password strength indicator component
export const PasswordStrengthIndicator = ({ strength }: { strength: 'weak' | 'medium' | 'strong' }) => {
  const getColor = () => {
    switch (strength) {
      case 'strong':
        return 'bg-green-500';
      case 'medium':
        return 'bg-yellow-500';
      default:
        return 'bg-red-500';
    }
  };

  const getWidth = () => {
    switch (strength) {
      case 'strong':
        return 'w-full';
      case 'medium':
        return 'w-2/3';
      default:
        return 'w-1/3';
    }
  };

  return (
    <div className="mt-1">
      <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${getColor()} ${getWidth()} transition-all duration-300`}
        />
      </div>
      <p className={`text-xs mt-1 ${
        strength === 'strong' ? 'text-green-600' :
        strength === 'medium' ? 'text-yellow-600' :
        'text-red-600'
      }`}>
        Password strength: {strength.charAt(0).toUpperCase() + strength.slice(1)}
      </p>
    </div>
  );
};