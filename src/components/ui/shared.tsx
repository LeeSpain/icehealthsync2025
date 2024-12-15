// GradientButton.tsx
interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    icon?: React.ReactNode;
    label: string;
    sublabel?: string;
  }
  
  export const GradientButton = ({ 
    variant = 'primary', 
    icon, 
    label, 
    sublabel,
    className = '',
    ...props 
  }: GradientButtonProps) => {
    const baseStyles = "px-6 py-3 rounded-xl font-medium inline-flex items-center gap-2 transition-all";
    const variants = {
      primary: "bg-gradient-to-r from-[#008B8B] to-[#20B2AA] text-white hover:shadow-lg",
      secondary: "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
    };
  
    return (
      <button 
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {icon}
        <div className="text-left">
          {sublabel && <div className="text-xs opacity-80">{sublabel}</div>}
          <div className="font-bold">{label}</div>
        </div>
      </button>
    );
  };
  
  // Card.tsx
  interface CardProps {
    children: React.ReactNode;
    gradient?: boolean;
    hover?: boolean;
    className?: string;
  }
  
  export const Card = ({ children, gradient, hover, className = '' }: CardProps) => {
    const baseStyles = "bg-white rounded-2xl p-6 shadow-lg";
    const hoverStyles = hover ? "hover:shadow-xl transition-shadow" : "";
    const gradientStyles = gradient ? "hover:bg-gradient-to-br from-white to-gray-50" : "";
  
    return (
      <div className={`${baseStyles} ${hoverStyles} ${gradientStyles} ${className}`}>
        {children}
      </div>
    );
  };
  
  // IconBadge.tsx
  interface IconBadgeProps {
    icon: React.ReactNode;
    color: string;
    size?: 'sm' | 'md' | 'lg';
  }
  
  export const IconBadge = ({ icon, color, size = 'md' }: IconBadgeProps) => {
    const sizes = {
      sm: 'w-10 h-10',
      md: 'w-12 h-12',
      lg: 'w-16 h-16'
    };
  
    return (
      <div className={`${sizes[size]} rounded-xl ${color} flex items-center justify-center`}>
        {icon}
      </div>
    );
  };