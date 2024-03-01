interface FilterLabelProps {
  children: React.ReactNode;
}

const FilterLabel = ({ children }: FilterLabelProps) => (
  <div className="mb-3 t8">
    {children}
  </div>
);

export default FilterLabel;
