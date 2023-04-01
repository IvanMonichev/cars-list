import { Sorting, SortName } from '../../constants/sorting';

type SortingListProps = {
  onChange: (name: SortName) => void;
  activeSorting: SortName;
};

function SortingList({ onChange, activeSorting }: SortingListProps): JSX.Element {

  const handleSortClick = (name: SortName) => {
    onChange(name)
  }

  return (
    <div className="cars__sorting">
      <h2 className="cars__sorting-name">Сортировать по:</h2>
      {(Object.entries(Sorting) as [SortName, Sorting][]).map(([name, title]) => (
        <button
          key={name}
          className={`cars__sorting-btn ${name === activeSorting ? 'cars__sorting-btn--active' : ''}`}
          onClick={() => handleSortClick(name)}
        >
          {title}
        </button>
      ))}
    </div>
  );
}

export default SortingList;
