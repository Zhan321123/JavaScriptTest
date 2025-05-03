import {Canvas} from '@react-three/fiber';
import {OrbitControls, Box, Edges, SpotLight} from '@react-three/drei';
import React, {useMemo} from 'react';
import * as THREE from 'three';

// function Cubes({data}) {
//   return data.map(([x, y, z], index) => (
//     <Box
//       key={index}
//       position={[x + 0.5, y + 0.5, z + 0.5]}
//       args={[1, 1, 1]}
//     >
//       {/* 方块主体颜色 */}
//       <meshStandardMaterial color="#4CAFAA"/>
//       {/* 边框线（白色细线） */}
//       <Edges
//         scale={1.01}    // 略微放大避免重叠
//         color="white"   // 边框颜色
//         thickness={0.5} // 线宽
//       />
//     </Box>
//   ));
// }
function Cube({ position: [x, y, z] }) {
  // 定义六个面的颜色（顺序：右/左/上/下/前/后）
  const materials = useMemo(() => [
    new THREE.MeshStandardMaterial({ color: '#5c87ff' }), // 右 - 红
    new THREE.MeshStandardMaterial({ color: '#4562ff' }), // 左 - 绿
    new THREE.MeshStandardMaterial({ color: '#b5b5ff' }), // 上 - 蓝
    new THREE.MeshStandardMaterial({ color: '#7c92ff' }), // 下 - 黄
    new THREE.MeshStandardMaterial({ color: '#b4c4ff' }), // 前 - 品红
    new THREE.MeshStandardMaterial({ color: '#9196ff' }), // 后 - 青
  ], []);

  return (
    <mesh
      position={[x + 0.5, y + 0.5, z + 0.5]} // 中心点坐标
      material={materials}                   // 直接传递材质数组
    >
      <boxGeometry args={[1, 1, 1]} />
      {/* 可选：添加白色边框增强边缘 */}
      <Edges color="white" threshold={15} />
    </mesh>
  );
}

// 使用示例
function Cubes({ data }) {
  return data.map((pos, idx) => (
    <Cube key={idx} position={pos} />
  ));
}

interface BlockChartProps {
  data: number[][]
  width?: number
  height?: number
}

export default function BlockChart({data, width = 800, height = 600}: BlockChartProps) {

  return (
    <Canvas camera={{position: [20,20,20], fov: 50}}
            className={'border'}
            style={{width: width, height: height}}>
      <ambientLight intensity={0.5}/>
      {/*<pointLight position={[0, 0, 0]}/>*/}
      <OrbitControls/>
      <Cubes data={data}/>
    </Canvas>
  );
}