interface AppCardProps {
  title: string;
  desc: string;
  emoji: string;
  badge: string;
  href: string;
  glow: string;
  accent: string;
  delay: string;
  disabled?: boolean;
}

export default function AppCard({ title, desc, emoji, badge, href, glow, accent, delay, disabled }: AppCardProps) {
  return (
    <a 
      href={disabled ? "#" : href}
      target={disabled ? "_self" : "_blank"}
      className={`group relative aspect-square rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[var(--border-h)] hover:shadow-[var(--sh-h)] animate-fade-up ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      style={{ animationDelay: delay }}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
           style={{ background: `radial-gradient(circle at 50% 100%, ${glow} 0%, transparent 70%)` }} />
      
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <span className="text-5xl group-hover:scale-110 transition-transform">{emoji}</span>
          <span className="text-[10px] font-mono border border-[var(--chip-bd)] px-2 py-1 rounded-full uppercase">{badge}</span>
        </div>
        <div>
          <h2 className="font-serif text-2xl font-bold mb-2">{title}</h2>
          <p className="text-xs text-[var(--text2)] leading-relaxed">{desc}</p>
        </div>
      </div>
    </a>
  );
}