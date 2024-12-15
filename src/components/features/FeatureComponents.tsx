// MainFeatureCard.tsx
export const MainFeatureCard = () => {
    const stats = [
      { label: 'Average', value: '75 BPM' },
      { label: 'Peak', value: '120 BPM' },
      { label: 'Resting', value: '62 BPM' }
    ];
  
    return (
      <div className="relative transform rotate-y-10 rotate-x-10 animate-float preserve-3d">
        <Card className="backdrop-blur-md border border-white/20">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <IconBadge
                icon={<Heart className="w-6 h-6 text-[#FF7F50]" />}
                color="bg-[#FF7F50]/20"
              />
              <div>
                <div className="text-white/80 font-medium">Heart Rate</div>
                <div className="text-white/60 text-sm">Real-time Monitoring</div>
              </div>
            </div>
            <div className="text-2xl font-bold text-white">72 BPM</div>
          </div>
  
          {/* Wave Animation */}
          <div className="h-32 relative overflow-hidden rounded-lg bg-black/20 mb-4">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-full h-24" viewBox="0 0 400 100">
                <path
                  d="M0,50 C150,0 250,100 400,50"
                  fill="none"
                  stroke="#FF7F50"
                  strokeWidth="2"
                  className="animate-wave"
                />
              </svg>
            </div>
          </div>
  
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white/5 rounded-lg p-3 text-center">
                <div className="text-white/60 text-sm mb-1">{stat.label}</div>
                <div className="text-white font-medium">{stat.value}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    );
  };
  
  // FeatureSection.tsx
  export const FeatureSection = ({ categories, technologies }: FeatureSectionProps) => {
    return (
      <section className="py-24 relative">
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 -left-48 top-0 bg-[#FF7F50]/10 rounded-full blur-3xl" />
          <div className="absolute w-96 h-96 -right-48 bottom-0 bg-[#008B8B]/10 rounded-full blur-3xl" />
        </div>
  
        <div className="max-w-7xl mx-auto px-4 relative">
          <SectionHeader
            badge="Platform Technology"
            title="Advanced Features"
            description="Discover the innovative capabilities that power our health monitoring platform"
          />
  
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            {categories.map((category, idx) => (
              <FeatureCategory key={idx} {...category} />
            ))}
          </div>
  
          <div className="grid lg:grid-cols-3 gap-8">
            {technologies.map((tech, idx) => (
              <TechnologyCard key={idx} {...tech} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  // FeatureCategory.tsx
  export const FeatureCategory = ({ title, icon: Icon, features }: FeatureCategoryProps) => {
    return (
      <div>
        <div className="relative mb-12">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#FF7F50] to-[#FF6347] rounded-lg blur" />
          <Card>
            <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <Icon className="w-6 h-6 text-[#FF7F50]" />
              {title}
            </h3>
          </Card>
        </div>
  
        <div className="space-y-8">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    );
  };