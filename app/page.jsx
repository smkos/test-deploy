"use client"
import { useState } from 'react';
import DatasetSelect from './components/button';
import GraphNode from './graphs/GraphNode';

export default function Home() {
  const [dataset, setDataset] = useState('/datasets/blocks.json');  // 초기 데이터셋 설정

    // 데이터셋 변경 핸들러
    const handleDatasetChange = (event) => {
      setDataset(event.value);
    };

  return (
    <div>
      <DatasetSelect onChange={handleDatasetChange} />
      <GraphNode dataset={dataset} />
    </div>
    /*<main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="/graphs"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>
      </div>
    </main>*/
  )
}

/* // 메인 페이지 컴포넌트
import React, { useState } from 'react';
import DatasetSelect from './DatasetSelect';
import GraphNode from './GraphNode';

const MainPage = () => {
  const [dataset, setDataset] = useState('/datasets/blocks.json');  // 초기 데이터셋 설정

  // 데이터셋 변경 핸들러
  const handleDatasetChange = (event) => {
    setDataset(event.target.value);
  };

  return (
    <div>
      <DatasetSelect onChange={handleDatasetChange} />
      <GraphNode dataset={dataset} />
    </div>
  );
};

export default MainPage;
 */