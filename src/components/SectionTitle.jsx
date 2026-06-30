const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-semibold">{title}</h2>
      {subtitle ? <p className="mt-2 text-gray-600">{subtitle}</p> : null}
    </div>
  );
};

export default SectionTitle;
