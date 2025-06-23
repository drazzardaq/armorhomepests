<template>
  <SeoHead
    title="FAQ | The Venus Project"
    description="Frequently asked questions about The Venus Project, resource-based economy, and our approach to global challenges."
    keywords="The Venus Project, FAQ, questions, resource-based economy, sustainability, solutions, mission"
    image="/the-venus-project-circular-city.jpg"
    url="https://www.thevenusproject.com/faq"
    type="website"
    :schema="{
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What is a resource-based economy?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'A resource-based economy is a system in which goods and services are available without the use of money, credits, barter, or any other form of debt or servitude. Resources are managed scientifically for the benefit of all.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How does TVP address global challenges?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'TVP proposes holistic, science-based solutions to issues like poverty, war, and environmental degradation by redesigning our social and economic systems from the ground up.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How can I get involved?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'You can join our global network, participate in projects, volunteer, or help spread awareness. Visit the Get Involved section or contact us for more information.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Is TVP a political movement?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'No, The Venus Project is not affiliated with any political party or ideology. It is a non-profit organization focused on systemic, scientific solutions for humanity’s future.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How would the transition to a resource-based economy happen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'The transition would be gradual, starting with demonstration projects, education, and global collaboration. As more people see the benefits, larger communities and cities can adopt the model.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What role does technology play in TVP’s vision?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Technology is used to free humanity from repetitive labor, optimize resource use, and create abundance. It is always applied with human and ecological well-being as the highest priorities.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How does TVP address criticism or skepticism?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'We welcome critical thinking and open dialogue. TVP provides evidence-based proposals and encourages people to examine the root causes of today’s problems and consider alternative solutions.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Is a resource-based economy realistic?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes, the technical means exist today. The main barriers are social, cultural, and political. TVP focuses on education, demonstration, and collaboration to overcome these challenges.'
          }
        }
      ]
    }"
  />
  <section class="faq-section animate-fade-in-up glassy-bg glassy-interact mx-auto my-16 w-full max-w-5xl rounded-2xl px-4 py-12 shadow-2xl md:py-16">
    <h1 class="text-gradient mb-6 text-center text-5xl font-extrabold">Frequently Asked Questions</h1>
    <p class="mx-auto mb-8 max-w-3xl text-center text-lg text-gray-700">
      Find answers to the most common questions about The Venus Project, our vision, and how you can participate in building a better future. We believe in transparency, open dialogue, and empowering everyone to explore new possibilities for humanity.
    </p>
    <div class="mx-auto max-w-4xl divide-y divide-blue-100 rounded-xl bg-white/80 p-6 shadow-lg">
      <div class="py-4">
        <h2 class="mb-2 text-lg font-bold text-tvp-blue">What is a resource-based economy?</h2>
        <p class="text-gray-700">A resource-based economy is a system in which goods and services are available without the use of money, credits, barter, or any other form of debt or servitude. Resources are managed scientifically for the benefit of all.</p>
      </div>
      <div class="py-4">
        <h2 class="mb-2 text-lg font-bold text-tvp-blue">How does TVP address global challenges?</h2>
        <p class="text-gray-700">TVP proposes holistic, science-based solutions to issues like poverty, war, and environmental degradation by redesigning our social and economic systems from the ground up.</p>
      </div>
      <div class="py-4">
        <h2 class="mb-2 text-lg font-bold text-tvp-blue">How can I get involved?</h2>
        <p class="text-gray-700">You can join our global network, participate in projects, volunteer, or help spread awareness. Visit the Get Involved section or contact us for more information.</p>
      </div>
      <div class="py-4">
        <h2 class="mb-2 text-lg font-bold text-tvp-blue">Is TVP a political movement?</h2>
        <p class="text-gray-700">No, The Venus Project is not affiliated with any political party or ideology. It is a non-profit organization focused on systemic, scientific solutions for humanity’s future.</p>
      </div>
      <div class="py-4">
        <h2 class="mb-2 text-lg font-bold text-tvp-blue">How would the transition to a resource-based economy happen?</h2>
        <p class="text-gray-700">The transition would be gradual, starting with demonstration projects, education, and global collaboration. As more people see the benefits, larger communities and cities can adopt the model.</p>
      </div>
      <div class="py-4">
        <h2 class="mb-2 text-lg font-bold text-tvp-blue">What role does technology play in TVP’s vision?</h2>
        <p class="text-gray-700">Technology is used to free humanity from repetitive labor, optimize resource use, and create abundance. It is always applied with human and ecological well-being as the highest priorities.</p>
      </div>
      <div class="py-4">
        <h2 class="mb-2 text-lg font-bold text-tvp-blue">How does TVP address criticism or skepticism?</h2>
        <p class="text-gray-700">We welcome critical thinking and open dialogue. TVP provides evidence-based proposals and encourages people to examine the root causes of today’s problems and consider alternative solutions.</p>
      </div>
      <div class="py-4">
        <h2 class="mb-2 text-lg font-bold text-tvp-blue">Is a resource-based economy realistic?</h2>
        <p class="text-gray-700">Yes, the technical means exist today. The main barriers are social, cultural, and political. TVP focuses on education, demonstration, and collaboration to overcome these challenges.</p>
      </div>
    </div>
    <div class="mt-8 flex flex-col items-center gap-4">
      <router-link to="/mission" class="btn-glass-cta px-8 py-4 text-lg font-bold" aria-label="Our Mission">Our Mission</router-link>
      <router-link to="/solutions" class="btn-glass-cta px-8 py-4 text-lg font-bold" aria-label="Our Solutions">Our Solutions</router-link>
    </div>
  </section>
</template>
<script setup>
import SeoHead from '@/components/SeoHead.vue';
</script>
