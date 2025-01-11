const mediaFeatures = [
  "ProductHunt",
  "Notion Featured",
  "Medium",
  "Productivity Weekly",
  "StartupDaily",
  "TechCrunch",
];

export function AlternativeSocialProof() {
  return (
    <section className='container py-24 sm:py-32'>
      <div className='space-y-8'>
        <h3 className='text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground'>
          Featured In
        </h3>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6'>
          {mediaFeatures.map((media) => (
            <div
              key={media}
              className='flex h-16 items-center justify-center rounded-lg border bg-muted/50 px-6 py-3'
            >
              <span className='font-semibold tracking-tight'>{media}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
