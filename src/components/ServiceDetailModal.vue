<template>
  <div v-if="modelValue" class="modal-overlay" @click="$emit('update:modelValue', false)">
    <div class="modal-content" @click.stop>
      <button class="modal-close" @click="$emit('update:modelValue', false)">
        <i class="fas fa-times"></i>
      </button>
      
      <div class="modal-header">
        <h2 class="modal-title">{{ title }}</h2>
      </div>
      
      <div class="modal-body">
        <div v-if="image" class="modal-image">
          <img :src="image" :alt="title" class="w-full h-64 object-cover rounded-lg">
        </div>
        
        <div class="modal-description">
          <p>{{ description }}</p>
        </div>
        
        <div v-if="features && features.length" class="modal-features">
          <h3 class="features-title">Key Features</h3>
          <ul class="features-list">
            <li v-for="(feature, index) in features" :key="index" class="feature-item">
              <i class="fas fa-check text-primary-green mr-2"></i>
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
      
      <div class="modal-footer">
        <button 
          class="modal-button"
          @click="$emit('update:modelValue', false)"
        >
          Close
        </button>
        <router-link 
          :to="link" 
          class="modal-button modal-button-primary"
          @click="$emit('update:modelValue', false)"
        >
          Learn More
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: ''
  },
  features: {
    type: Array,
    default: () => []
  },
  link: {
    type: String,
    required: true
  }
});

defineEmits(['update:modelValue']);
</script>

<style scoped>
.modal-overlay {
  @apply fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4;
}

.modal-content {
  @apply bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto relative;
}

.modal-close {
  @apply absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl;
}

.modal-header {
  @apply p-6 border-b border-gray-200;
}

.modal-title {
  @apply text-2xl font-bold text-gray-800;
}

.modal-body {
  @apply p-6 space-y-6;
}

.modal-image {
  @apply mb-6;
}

.modal-description {
  @apply text-gray-600 leading-relaxed;
}

.modal-features {
  @apply mt-6;
}

.features-title {
  @apply text-xl font-semibold text-gray-800 mb-4;
}

.features-list {
  @apply space-y-3;
}

.feature-item {
  @apply flex items-center text-gray-600;
}

.modal-footer {
  @apply p-6 border-t border-gray-200 flex justify-end space-x-4;
}

.modal-button {
  @apply px-6 py-2 rounded-full font-semibold transition-all duration-300;
}

.modal-button-primary {
  @apply bg-gradient-to-r from-primary-blue to-secondary-blue text-white hover:from-secondary-blue hover:to-primary-blue;
}
</style> 