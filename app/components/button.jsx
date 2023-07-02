/*export default function DatasetSelect({onChange}) {
    return <select onChange={onChange}>
            <option value="/datasets/blocks.json">Blocks</option>
            <option value="/datasets/miserables.json">Miserables</option>
            { }
        </select>
}*/

import Select from 'react-select';

const options = [
  { value: '/datasets/blocks.json', label: 'Blocks' },
  { value: '/datasets/miserables.json', label: 'Miserables' }
];

export default function DatasetSelect({onChange}) {
  return (
    <div className="DatasetSelect">
      <Select options={options} onChange={onChange} />
    </div>
  );
}
