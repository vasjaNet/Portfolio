import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { Section, SectionHeader } from '@/components/layout/Section';
import { Badge } from '@/components/ui/Badge';
import { experiences } from '@/data/portfolio';

export function ExperienceSection() {
  return (
    <Section id="experience">
      <SectionHeader
        title="Work Experience"
        subtitle="My professional journey in software development"
      />

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 z-10 mt-1.5" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:text-right' : ''
                }`}>
                  <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap items-center gap-2 mb-3 text-muted-foreground">
                      <div className={`flex items-center gap-1 text-sm ${
                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                      }`}>
                        <Calendar className="w-4 h-4" />
                        <span>{experience.period}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {experience.role}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-medium">{experience.company}</span>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {experience.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground text-sm leading-relaxed flex gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      {experience.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
