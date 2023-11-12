type SectionProps = {
  id: string;
  children: React.ReactNode;
  backgroundColor: string;
};

const Section = ({ children, id, backgroundColor }: SectionProps) => (
  <section id={id} className={backgroundColor}>
    {children}
  </section>
);

export default Section;
