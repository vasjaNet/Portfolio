import { motion } from 'framer-motion';
import {
  Terminal,
  Layers,
  Database,
  MessageSquare,
  Cloud,
  Wrench,
  type LucideIcon
} from 'lucide-react';
import { Section, SectionHeader } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { skills } from '@/data/portfolio';

const categoryIcons: Record<string, LucideIcon> = {
  'Core Java': Terminal,
  'Frameworks': Layers,
  'Databases': Database,
  'Messaging': MessageSquare,
  'DevOps & Cloud': Cloud,
  'Tools & Others': Wrench,
};

export function SkillsSection() {
  return (
    <Section id="skills">
      <SectionHeader
        title="Technical Skills"
        subtitle="Technologies and tools I work with daily"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => {
          const Icon = categoryIcons[skill.category] || Wrench;
          return (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">
                  {skill.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="cursor-default hover:bg-primary hover:text-white transition-colors"
                  >
                    {item}
                  </Badge>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
