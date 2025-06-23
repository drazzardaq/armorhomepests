<template>
  <!-- This component doesn't render anything visible, it just manages the document head -->
</template>

<script setup>
import { onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  title: {
    type: String,
    default: 'Armor Home Solutions'
  },
  description: {
    type: String,
    default: 'Protecting homes and families with advanced security and pest control solutions.'
  },
  image: {
    type: String,
    default: '/prop/01.png' // Updated default image path
  },
  url: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'website'
  }
})

const route = useRoute()

// Function to update meta tags
const updateMetaTags = () => {
  // Get the current URL if not provided
  const currentUrl = props.url || `${window.location.origin}${route.fullPath}`
  
  // Update title
  document.title = props.title
  
  // Update meta tags
  updateMetaTag('description', props.description)
  updateMetaTag('og:title', props.title)
  updateMetaTag('og:description', props.description)
  updateMetaTag('og:image', props.image)
  updateMetaTag('og:url', currentUrl)
  updateMetaTag('og:type', props.type)
  updateMetaTag('twitter:card', 'summary_large_image')
  updateMetaTag('twitter:title', props.title)
  updateMetaTag('twitter:description', props.description)
  updateMetaTag('twitter:image', props.image)
  
  // Update canonical URL
  updateMetaTag('canonical', currentUrl)
}

// Helper function to update or create meta tags
const updateMetaTag = (name, content) => {
  let element = document.querySelector(`meta[name="${name}"]`) || 
                document.querySelector(`meta[property="${name}"]`)
  
  if (!element) {
    element = document.createElement('meta')
    if (name.startsWith('og:')) {
      element.setAttribute('property', name)
    } else {
      element.setAttribute('name', name)
    }
    document.head.appendChild(element)
  }
  
  element.setAttribute('content', content)
}

// Watch for route changes to update meta tags
watch(() => route.path, () => {
  updateMetaTags()
})

// Update meta tags on mount
onMounted(() => {
  updateMetaTags()
})
</script>