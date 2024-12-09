import React, { useEffect } from 'react';
import { useGraph } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';
import { Group, SkinnedMesh } from 'three';
import { GroupProps } from '@react-three/fiber';

interface AvatarProps extends GroupProps {
  'position-y'?: number;
  'rotation-y'?: number;
}

export function Avatar(props: AvatarProps) {
  const group = React.useRef<Group | null>(null);
  const { scene, animations: dancingAnimation } = useGLTF('models/zekkenDance.glb');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  dancingAnimation[0].name = 'Dancing';
  const { actions } = useAnimations(dancingAnimation, group);

  useEffect(() => {
    actions['Dancing']?.reset().play();
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Hips} />
          {/* Cast nodes to SkinnedMesh for proper typing */}
          <skinnedMesh
            name="Wolf3D_Body"
            geometry={(nodes.Wolf3D_Body as SkinnedMesh).geometry}
            material={materials.Wolf3D_Body}
            skeleton={(nodes.Wolf3D_Body as SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Glasses"
            geometry={(nodes.Wolf3D_Glasses as SkinnedMesh).geometry}
            material={materials.Wolf3D_Glasses}
            skeleton={(nodes.Wolf3D_Glasses as SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Hair"
            geometry={(nodes.Wolf3D_Hair as SkinnedMesh).geometry}
            material={materials.Wolf3D_Hair}
            skeleton={(nodes.Wolf3D_Hair as SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom"
            geometry={(nodes.Wolf3D_Outfit_Bottom as SkinnedMesh).geometry}
            material={materials.Wolf3D_Outfit_Bottom}
            skeleton={(nodes.Wolf3D_Outfit_Bottom as SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear"
            geometry={(nodes.Wolf3D_Outfit_Footwear as SkinnedMesh).geometry}
            material={materials.Wolf3D_Outfit_Footwear}
            skeleton={(nodes.Wolf3D_Outfit_Footwear as SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top"
            geometry={(nodes.Wolf3D_Outfit_Top as SkinnedMesh).geometry}
            material={materials.Wolf3D_Outfit_Top}
            skeleton={(nodes.Wolf3D_Outfit_Top as SkinnedMesh).skeleton}
          />
          <skinnedMesh
            name="EyeLeft"
            geometry={(nodes.EyeLeft as SkinnedMesh).geometry}
            material={materials.Wolf3D_Eye}
            skeleton={(nodes.EyeLeft as SkinnedMesh).skeleton}
            morphTargetDictionary={(nodes.EyeLeft as SkinnedMesh).morphTargetDictionary}
            morphTargetInfluences={(nodes.EyeLeft as SkinnedMesh).morphTargetInfluences}
          />
          <skinnedMesh
            name="EyeRight"
            geometry={(nodes.EyeRight as SkinnedMesh).geometry}
            material={materials.Wolf3D_Eye}
            skeleton={(nodes.EyeRight as SkinnedMesh).skeleton}
            morphTargetDictionary={(nodes.EyeRight as SkinnedMesh).morphTargetDictionary}
            morphTargetInfluences={(nodes.EyeRight as SkinnedMesh).morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={(nodes.Wolf3D_Head as SkinnedMesh).geometry}
            material={materials.Wolf3D_Skin}
            skeleton={(nodes.Wolf3D_Head as SkinnedMesh).skeleton}
            morphTargetDictionary={(nodes.Wolf3D_Head as SkinnedMesh).morphTargetDictionary}
            morphTargetInfluences={(nodes.Wolf3D_Head as SkinnedMesh).morphTargetInfluences}
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={(nodes.Wolf3D_Teeth as SkinnedMesh).geometry}
            material={materials.Wolf3D_Teeth}
            skeleton={(nodes.Wolf3D_Teeth as SkinnedMesh).skeleton}
            morphTargetDictionary={(nodes.Wolf3D_Teeth as SkinnedMesh).morphTargetDictionary}
            morphTargetInfluences={(nodes.Wolf3D_Teeth as SkinnedMesh).morphTargetInfluences}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('models/zekkenDance.glb');
