<template>
  <DraCUIIEditor
    :componentName="'DimLoader'"
    :initialTemplate="initialTemplate"
    :initialStyle="initialStyle"
    :initialScript="initialScript"
    :hasComponent="true"
    :hasDocs="true"
    :drawerLink="drawerLink"
  >
    <template #default="slotProps">
      <DimLoader
        :variant="variant"
        :roundness="slotProps.roundness"
        :primaryColor="slotProps.primaryColor"
        :width="slotProps.width"
        :height="slotProps.height"
        :theme="slotProps.theme"
      />
    </template>
    
    <template #docs>
      <h3>DimLoader Component</h3>
      <p>Animated loading indicators with multiple styles.</p>
      <h4>Variants</h4>
      <ul>
        <li><strong>spinner</strong> - Classic spinning loader</li>
        <li><strong>dots</strong> - Bouncing dots animation</li>
        <li><strong>pulse</strong> - Pulsing circle loader</li>
        <li><strong>bars</strong> - Animated bars loader</li>
      </ul>
    </template>
  </DraCUIIEditor>
</template>

<script setup>
import { ref } from 'vue';
import DraCUIIEditor from '@/components/DraCUIIEditor.vue';
import DimLoader from './DimLoader.vue';

const props = defineProps({
  drawerLink: { type: String, default: '#loader-docs' }
});

const variant = ref('spinner');

const initialTemplate = `<div class="loader-container">
  <div 
    class="loader"
    :class="[\`loader-\${variant}\`]"
    :style="loaderStyle"
  >
    <div v-if="variant === 'dots'" class="dots">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <div v-else-if="variant === 'bars'" class="bars">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
  </div>
</div>`;

const initialStyle = `.loader-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.loader {
  width: 40px;
  height: 40px;
}

.loader-spinner {
  border: 3px solid rgba(99, 102, 241, 0.2);
  border-top: 3px solid #6366f1;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.loader-pulse {
  background: #6366f1;
  border-radius: 50%;
  animation: pulse 1.5s ease-in-out infinite;
}

.dots {
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
}

.dot {
  width: 8px;
  height: 8px;
  background: #6366f1;
  border-radius: 50%;
  animation: bounce 1.4s ease-in-out infinite both;
}

.dot:nth-child(1) { animation-delay: -0.32s; }
.dot:nth-child(2) { animation-delay: -0.16s; }

.bars {
  display: flex;
  gap: 2px;
  align-items: end;
  height: 40px;
}

.bar {
  width: 6px;
  background: #6366f1;
  animation: bars 1s ease-in-out infinite;
}

.bar:nth-child(1) { animation-delay: -0.3s; }
.bar:nth-child(2) { animation-delay: -0.2s; }
.bar:nth-child(3) { animation-delay: -0.1s; }

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
}

@keyframes bounce {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}

@keyframes bars {
  0%, 40%, 100% { height: 10px; }
  20% { height: 30px; }
}`;

const initialScript = `const { ref } = Vue;
const variant = ref('spinner');

const loaderStyle = {
  width: '40px',
  height: '40px'
};

return {
  variant,
  loaderStyle
};`;
</script>
