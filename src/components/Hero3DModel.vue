<template>
  <div class="hero-3d-model">
    <TresCanvas v-bind="gl" class="absolute inset-0 z-0">
      <OrbitControls
        :enablePan="false"
        :minDistance="3"
        :maxDistance="8"
        :minPolarAngle="Math.PI / 4"
        :maxPolarAngle="(3 * Math.PI) / 4"
        :autoRotate="true"
        :autoRotateSpeed="0.5"
      />
      <Suspense>
        <Modela
          modelName="walk"
          :positionX="0"
          :positionY="0"
          :positionZ="0"
          :rotationX="0"
          :rotationY="0"
          :rotationZ="0"
        />
      </Suspense>
    </TresCanvas>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TresCanvas } from "@tresjs/core";
import { OrbitControls } from "@tresjs/cientos";
import Modela from "./Modela.vue";
import { BasicShadowMap, NoToneMapping, SRGBColorSpace } from "three";

const gl = {
  clearColor: "#030303",
  shadows: true,
  alpha: true,
  shadowMapType: BasicShadowMap,
  outputColorSpace: SRGBColorSpace,
  toneMapping: NoToneMapping,
};
</script>

<style scoped>
.hero-3d-model {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>