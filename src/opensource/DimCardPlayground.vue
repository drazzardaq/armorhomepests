<template>
  <DraCUIIEditor
    :componentName="'DimCard'"
    :initialTemplate="initialTemplate"
    :initialStyle="initialStyle"
    :initialScript="initialScript"
    :hasComponent="true"
    :hasDocs="true"
    :drawerLink="drawerLink"
  >
    <template #default="slotProps">
      <DimCard
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
        :showActions="showActions"
      />
    </template>
    
    <template #docs>
      <h3>DimCard Component</h3>
      <p>A flexible, modern card component with multiple variants including glassmorphic effects.</p>
      <h4>Variants</h4>
      <ul>
        <li><strong>classic</strong> - Standard card design</li>
        <li><strong>glass</strong> - Glassmorphic card with backdrop blur</li>
        <li><strong>modern</strong> - Contemporary design with enhanced visuals</li>
        <li><strong>neon</strong> - Futuristic neon-accented card</li>
        <li><strong>frosted</strong> - Heavy frosted glass effect</li>
        <li><strong>gradient</strong> - Dynamic gradient backgrounds</li>
      </ul>
      <h4>Props</h4>
      <table class="w-full text-xs">
        <tr><td>variant</td><td>String</td><td>'classic'</td><td>Card style variant</td></tr>
        <tr><td>showActions</td><td>Boolean</td><td>false</td><td>Show action buttons</td></tr>
        <tr><td>+ all common DUIMX props</td><td>-</td><td>-</td><td>See sidebar controls</td></tr>
      </table>
    </template>
  </DraCUIIEditor>
</template>

<script setup>
import { ref, computed } from 'vue';
import DraCUIIEditor from '@/components/DraCUIIEditor.vue';
import DimCard from './DimCard.vue';

const props = defineProps({
  drawerLink: { type: String, default: '#card-docs' }
});

const variant = ref('classic');
const showActions = ref(false);

const initialTemplate = `<div
  class="dim-card bg-gradient-to-br from-slate-800 via-purple-900 to-slate-900 border border-purple-500/20 shadow-lg flex flex-col items-center justify-center min-h-[200px]"
  :class="[\`variant-\${variant}\`]"
  :style="cardStyle"
>
  <div class="w-16 h-16 rounded-xl bg-purple-500/20 flex items-center justify-center mb-4">
    <span class="text-3xl">🃏</span>
  </div>
  <h2 class="text-xl font-bold text-purple-200 mb-2">DimCard</h2>
  <p class="text-slate-400 text-center mb-4">A modern, flexible card component for layouts, dashboards, and content blocks.</p>
</div>`;

const initialStyle = `.dim-card {
  position: relative;
  transition: box-shadow 0.2s, background 0.2s;
  border-radius: 16px;
  width: 320px;
  height: 200px;
  padding: 24px;
}

.dim-card:hover {
  box-shadow: 0 8px 32px 0 rgba(99,102,241,0.25);
}

.variant-glass {
  background: rgba(30,41,59,0.7);
  backdrop-filter: blur(12px);
}

.variant-gradient {
  background: linear-gradient(135deg, #6366f1 0%, #a21caf 100%);
}

.variant-neon {
  background: linear-gradient(135deg, #f472b6 0%, #6366f1 100%);
  box-shadow: 0 0 20px rgba(244, 114, 182, 0.3);
}`;

const initialScript = `const { ref } = Vue;
const variant = ref('classic');
const cardStyle = {
  borderRadius: '16px',
  width: '320px',
  height: '200px',
  padding: '24px'
};

return {
  variant,
  cardStyle
};`;
</script>