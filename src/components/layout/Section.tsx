import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
}

export function Section({ id, children, className, fullHeight = false }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        'py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8',
        fullHeight && 'min-h-screen flex items-center',
        className
      )}
    >
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </motion.section>
  );
}

export function SectionTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={cn(
        'text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4',
        className
      )}
    >
      {children}
    </h2>
  );
}

export function SectionSubtitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        'text-lg md:text-xl text-muted-foreground max-w-2xl',
        className
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeader({
  title,
  subtitle,
  className
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn('text-center mb-12 md:mb-16', className)}>
      <SectionTitle>{title}</SectionTitle>
      {subtitle && <SectionSubtitle className="mx-auto">{subtitle}</SectionSubtitle>}
    </div>
  );
}
