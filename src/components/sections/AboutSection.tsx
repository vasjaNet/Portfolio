import { motion } from 'framer-motion';
import { Check, Code2, Cpu, Users } from 'lucide-react';
import { Section, SectionHeader } from '@/components/layout/Section';
import { about } from '@/data/portfolio';

const highlights = [
  { icon: Code2, label: '8+ Years Experience' },
  { icon: Cpu, label: 'Microservices Expert' },
  { icon: Users, label: 'Team Lead' },
];

export function AboutSection() {
  return (
    <Section id="about" className="bg-muted/30">
      <SectionHeader
        title="About Me"
        subtitle="Passionate about building scalable systems and mentoring teams"
      />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-6">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {about.summary.split('\n\n').map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {about.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground font-medium">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats/Highlights */}
        <div className="grid sm:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="font-medium text-foreground">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
