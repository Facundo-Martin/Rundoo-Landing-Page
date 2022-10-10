import clsx from 'clsx';
import React from 'react';

interface SectionProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  className?: string;
  children: React.ReactNode;
}
function Section({ className, children, ...props }: SectionProps) {
  return (
    <section className={clsx('section wrapper', className)} {...props}>
      {children}
    </section>
  );
}

export default Section;
