import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Section, SectionHeader } from '@/components/layout/Section';
import { Button } from '@/components/ui/Button';
import { personalInfo } from '@/data/portfolio';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/vasyl',
    href: personalInfo.github,
    color: 'text-slate-700 dark:text-slate-300',
    bgColor: 'bg-slate-500/10',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/vasyl',
    href: personalInfo.linkedin,
    color: 'text-blue-600',
    bgColor: 'bg-blue-500/10',
  },
];

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <Section id="contact" className="bg-muted/30">
      <SectionHeader
        title="Get In Touch"
        subtitle="I'm always open to discussing new projects and opportunities"
      />

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 rounded-xl ${link.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <link.icon className={`w-6 h-6 ${link.color}`} />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{link.label}</h3>
              <p className="text-sm text-muted-foreground">{link.value}</p>
            </motion.a>
          ))}
        </div>

        <div className="bg-card border border-border rounded-2xl p-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Let's work together
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Whether you have a project in mind or just want to chat about technology,
              feel free to reach out. I'm currently open to new opportunities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="w-full sm:w-auto">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                onClick={copyEmail}
                className="w-full sm:w-auto"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copy Email
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
