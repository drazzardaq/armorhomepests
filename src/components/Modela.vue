<script setup>
import { onMounted, ref, onUnmounted } from "vue";
import { useGLTF, useAnimations } from "@tresjs/cientos";

onUnmounted(() => {
  console.log("Model component unmounted");
});

const props = defineProps({
  modelName: {
    type: String,
    required: true,
  },
  positionX: { type: Number, default: 0 },
  positionY: { type: Number, default: 0 },
  positionZ: { type: Number, default: 0 },
  rotationX: { type: Number, default: 0 },
  rotationY: { type: Number, default: 0 },
  rotationZ: { type: Number, default: 0 },
  iteration: { type: String, default: "" },
});

const scene = ref(null);
const animations = ref(null);

const loadModel = async () => {
  try {
    const gltf = await useGLTF(`./models/${props.modelName}.glb`, { draco: true });
    if (!gltf) throw new Error("Failed to load GLTF model");

    const { scene: loadedScene, animations: loadedAnimations } = gltf;
    const animationData = useAnimations(loadedAnimations, loadedScene);
    if (!animationData) throw new Error("Failed to initialize animations");

    scene.value = loadedScene;
    animations.value = loadedAnimations;

    const { actions } = animationData;
    if (actions && actions[props.modelName]) {
      actions[props.modelName].play();
    }
  } catch (error) {
    console.error("Error loading model:", error);
  }
};

const positionYLocal = ref(props.positionY);

onMounted(() => {
  loadModel();

  if (props.modelName === "drago") positionYLocal.value = 0.47;
  if (props.modelName === "drako") positionYLocal.value = 0.43;

  if (props.modelName === "draco") {
    positionYLocal.value = 0.34;
    if (scene.value) scene.value.children[0].scale.set(0.5, 0.5, 0.5);
  }

  if (props.modelName === "dracorisz") {
    positionYLocal.value = 0.48;
    if (scene.value) scene.value.children[0].scale.set(0.5, 0.5, 0.5);
  }
});
</script>

<template>
  <primitive
    v-if="scene"
    :object="scene"
    :position="[positionX, positionY, positionZ]"
    :rotation="[rotationX, rotationY, rotationZ]"
    :castShadow="true"
  />
  <div v-else class="loading">Loading model...</div>
</template>

<style scoped>
.loading {
  color: white;
  text-align: center;
  font-size: 1.2rem;
}
</style>

