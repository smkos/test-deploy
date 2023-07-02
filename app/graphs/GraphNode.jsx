"use client"
import React, { useEffect, useRef } from 'react';

const GraphPage = ({dataset}) => {
  const graphRef = useRef(null);

  useEffect(() => {
    import('3d-force-graph').then((ForceGraph3D) => {
      if (!graphRef.current) {
        return;
      }
      const Graph = ForceGraph3D.default()(graphRef.current)
      .jsonUrl(dataset)  // '/public/datasets/data.json' 파일을 참조
      // .nodeLabel((node) => `${node.user}: ${node.description}`)
      .nodeLabel((node) => `${node.id}`)
      .nodeAutoColorBy('user')
      .linkDirectionalParticles('value');
      // Graph(graphRef.current); // ForceGraph3D(DOM)
    });
  }, [dataset]); // 의존성 배열이 비어있음

  return (
    <div ref={graphRef} style={{ width: '100%', height: '100%' }} />
  );
};

export default GraphPage;