import clsx from 'clsx';
import React from 'react';

type SectionProps = {
  className?: string;
  children: React.ReactNode;
};
function Section({ className, children }: SectionProps) {
  return <section className={clsx('section wrapper', className)}>{children}</section>;
}

export default Section;
