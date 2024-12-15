// This ensures consistent layout across the features section
export default function FeaturesLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-full h-full bg-gradient-to-br from-[#008B8B]/5 via-transparent to-[#FF7F50]/5 animate-gradient" />
        </div>
        {children}
      </div>
    );
  }