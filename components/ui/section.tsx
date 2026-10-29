export function Section({
  id,
  index,
  title,
  lead,
  children,
}: {
  id: string;
  index: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-border py-20">
      <div className="mb-10">
        <p className="font-mono text-xs text-brand">{index}</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        {lead && <p className="mt-3 max-w-2xl text-muted-foreground text-pretty">{lead}</p>}
      </div>
      {children}
    </section>
  );
}
