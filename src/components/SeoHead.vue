<template>
  <!-- This component doesn't render anything visible, it just manages the document head -->
</template>

<script setup>
import { onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  title: {
    type: String,
    default: 'The Venus Project | A Blueprint for a Sustainable Future'
  },
  description: {
    type: String,
    default: 'Explore The Venus Project: a comprehensive vision for a sustainable, resource-based economy, circular cities, and a future where technology and human values align. Discover our mission, solutions, proposals, and global network.'
  },
  image: {
    type: String,
    default: '/the-venus-project-circular-city.jpg'
  },
  url: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'website'
  },
  keywords: {
    type: String,
    default: 'The Venus Project, mission, solutions, resource-based economy, circular cities, sustainability, FAQ, media, proposals'
  },
  schema: {
    type: Object,
    default: null
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
  updateMetaTag('keywords', props.keywords)
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

// Update Schema.org structured data
const updateSchema = () => {
  if (props.schema) {
    let script = document.querySelector('script[type="application/ld+json"]')
    if (!script) {
      script = document.createElement('script')
      script.setAttribute('type', 'application/ld+json')
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(props.schema)
  }
}

// Watch for route changes to update meta tags and schema
watch(() => route.path, () => {
  updateMetaTags()
  updateSchema()
})

// Update meta tags and schema on mount
onMounted(() => {
  updateMetaTags()
  updateSchema()
})
</script>