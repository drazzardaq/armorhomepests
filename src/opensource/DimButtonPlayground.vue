<template>
  <DraCUIIEditor
    :componentName="'DimButton'"
    :initialTemplate="initialTemplate"
    :initialStyle="initialStyle"
    :initialScript="initialScript"
    :hasComponent="true"
    :hasDocs="true"
    :drawerLink="drawerLink"
  >
    <template #default="slotProps">
      <DimButton
        :variant="variant"
        :roundness="slotProps.roundness"
        :primaryColor="slotProps.primaryColor"
        :bgColor="slotProps.bgColor"
        :textColor="slotProps.textColor"
        :fontFamily="slotProps.fontFamily"
        :width="slotProps.width"
        :height="slotProps.height"
        :padding="slotProps.padding"
        :margin="slotProps.margin"
        :theme="slotProps.theme"
        :compact="slotProps.compact"
      />
    </template>
    
    <template #docs>
      <h3>DimButton Component</h3>
      <p>Interactive button with multiple variants and hover effects.</p>
      <h4>Variants</h4>
      <ul>
        <li><strong>gradient</strong> - Gradient background button</li>
        <li><strong>ripple</strong> - Button with ripple click effect</li>
        <li><strong>glow</strong> - Glowing button effect</li>
        <li><strong>outline</strong> - Outlined button style</li>
        <li><strong>ghost</strong> - Transparent ghost button</li>
      </ul>
    </template>
  </DraCUIIEditor>
</template>

<script setup>
import { ref } from 'vue';
import DraCUIIEditor from '@/components/DraCUIIEditor.vue';
import DimButton from './DimButton.vue';

const props = defineProps({
  drawerLink: { type: String, default: '#button-docs' }
});

const variant = ref('gradient');

const initialTemplate = `<button 
  class="dim-button"
  :class="[\`variant-\${variant}\`]"
  :style="buttonStyle"
  @click="handleClick"
>
  <span class="button-text">
    {{ buttonText }}
  </span>
</button>`;

const initialStyle = `.dim-button {
  position: relative;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  overflow: hidden;
}

.variant-gradient {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
}

.variant-gradient:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
}

.variant-ripple {
  background: #6366f1;
  color: white;
}

.variant-glow {
  background: #6366f1;
  color: white;
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
}

.variant-glow:hover {
  box-shadow: 0 0 30px rgba(99, 102, 241, 0.6);
}`;

const initialScript = `const { ref } = Vue;
const variant = ref('gradient');
const buttonText = ref('Click Me');

function handleClick() {
  console.log('Button clicked!');
}

const buttonStyle = {
  borderRadius: '8px',
  padding: '12px 24px'
};

return {
  variant,
  buttonText,
  buttonStyle,
  handleClick
};`;
</script>
