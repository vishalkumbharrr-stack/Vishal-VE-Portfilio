export default function SectionHeading({ title, highlight, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
        {title} <span className="text-accent-blue">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}