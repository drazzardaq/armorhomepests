<template>
  <main class="venus-project-content flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-tvp-blue/10 px-0 pb-8 text-gray-900 md:px-0">
    <!-- Hero Section -->
    <section class="glassy-bg animate-fade-in-up max-w-7xl mx-auto mb-12 rounded-2xl shadow-2xl px-4 py-12 md:py-16 text-center">
      <h1 class="text-gradient text-4xl md:text-5xl font-extrabold mb-6">Visit The Venus Project</h1>
      <p class="mx-auto max-w-3xl text-xl text-gray-700 dark:text-gray-300">Experience the future firsthand at our research center in Venus, Florida. Tour our facilities, see our models, and learn about sustainable living.</p>
    </section>
    <!-- Tour Information -->
    <section class="glassy-bg animate-fade-in-up max-w-7xl mx-auto mb-12 rounded-2xl shadow-xl px-4 py-12 md:py-16 grid gap-12 md:grid-cols-2 items-center">
      <div>
        <h2 class="text-gradient text-3xl font-bold mb-6">Tour Information</h2>
        <div class="space-y-4">
          <div class="frosted-glass-card bg-white/80 rounded-xl p-5 border border-blue-200/30 shadow-lg">
            <h3 class="mb-2 font-semibold text-tvp-blue">Public Tours</h3>
            <p class="text-sm text-gray-700 dark:text-gray-300">Every Saturday at 2:00 PM. Duration: 2 hours. Includes facility tour, model viewing, and Q&A session.</p>
          </div>
          <div class="frosted-glass-card bg-white/80 rounded-xl p-5 border border-blue-200/30 shadow-lg">
            <h3 class="mb-2 font-semibold text-tvp-blue">Private Tours</h3>
            <p class="text-sm text-gray-700 dark:text-gray-300">Available by appointment. Customized experience with detailed discussions and extended facility access.</p>
          </div>
          <div class="frosted-glass-card bg-white/80 rounded-xl p-5 border border-blue-200/30 shadow-lg">
            <h3 class="mb-2 font-semibold text-tvp-blue">Educational Groups</h3>
            <p class="text-sm text-gray-700 dark:text-gray-300">Special programs for schools, universities, and educational organizations. Includes interactive workshops and curriculum support.</p>
          </div>
        </div>
      </div>
      <!-- <div class="flex items-center justify-center">
        <img src="/the-venus-project-circular-city.jpg" alt="TVP Research Center" class="rounded-2xl shadow-xl w-full max-w-md object-cover" loading="lazy" />
      </div> -->
    </section>
    <!-- Booking Form -->
    <section class="glassy-bg animate-fade-in-up max-w-2xl mx-auto mb-12 rounded-2xl shadow-2xl px-4 py-12 md:px-10">
      <h2 class="text-gradient text-3xl font-bold text-center mb-8">Book Your Visit</h2>
      <form @submit.prevent="submitBooking" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="firstName" class="block text-sm font-semibold text-tvp-blue mb-1">First Name</label>
            <input v-model="booking.firstName" id="firstName" type="text" required class="w-full rounded-lg border border-blue-200 px-4 py-2 focus:ring-2 focus:ring-tvp-blue" />
          </div>
          <div>
            <label for="lastName" class="block text-sm font-semibold text-tvp-blue mb-1">Last Name</label>
            <input v-model="booking.lastName" id="lastName" type="text" required class="w-full rounded-lg border border-blue-200 px-4 py-2 focus:ring-2 focus:ring-tvp-blue" />
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="email" class="block text-sm font-semibold text-tvp-blue mb-1">Email</label>
            <input v-model="booking.email" id="email" type="email" required class="w-full rounded-lg border border-blue-200 px-4 py-2 focus:ring-2 focus:ring-tvp-blue" />
          </div>
          <div>
            <label for="phone" class="block text-sm font-semibold text-tvp-blue mb-1">Phone</label>
            <input v-model="booking.phone" id="phone" type="tel" class="w-full rounded-lg border border-blue-200 px-4 py-2 focus:ring-2 focus:ring-tvp-blue" />
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="tourType" class="block text-sm font-semibold text-tvp-blue mb-1">Tour Type</label>
            <select v-model="booking.tourType" id="tourType" required class="w-full rounded-lg border border-blue-200 px-4 py-2 focus:ring-2 focus:ring-tvp-blue">
              <option value="">Select...</option>
              <option value="public">Public Tour</option>
              <option value="private">Private Tour</option>
              <option value="educational">Educational Group</option>
            </select>
          </div>
          <div>
            <label for="groupSize" class="block text-sm font-semibold text-tvp-blue mb-1">Group Size</label>
            <input v-model="booking.groupSize" id="groupSize" type="number" min="1" class="w-full rounded-lg border border-blue-200 px-4 py-2 focus:ring-2 focus:ring-tvp-blue" />
          </div>
        </div>
        <div>
          <label for="preferredDate" class="block text-sm font-semibold text-tvp-blue mb-1">Preferred Date</label>
          <input v-model="booking.preferredDate" id="preferredDate" type="date" class="w-full rounded-lg border border-blue-200 px-4 py-2 focus:ring-2 focus:ring-tvp-blue" />
        </div>
        <div>
          <label for="specialRequests" class="block text-sm font-semibold text-tvp-blue mb-1">Special Requests</label>
          <textarea v-model="booking.specialRequests" id="specialRequests" rows="3" class="w-full rounded-lg border border-blue-200 px-4 py-2 focus:ring-2 focus:ring-tvp-blue"></textarea>
        </div>
        <div class="flex justify-center">
          <BaseButton :loading="isSubmitting" :disabled="isSubmitting" class="btn-unified-cta px-8 py-3 text-lg font-bold">Book Tour</BaseButton>
        </div>
      </form>
    </section>
    <!-- Location & Contact -->
    <section class="glassy-bg animate-fade-in-up max-w-7xl mx-auto mb-12 rounded-2xl shadow-xl px-4 py-12 md:py-16 grid gap-12 md:grid-cols-2 items-start">
      <div>
        <h2 class="text-gradient text-3xl font-bold mb-6">Location & Contact</h2>
        <p class="mb-4 text-lg text-gray-800">The Venus Project Research Center<br>21 Valley Lane, Venus, FL 33960, USA</p>
        <ul class="mb-4 text-lg text-gray-800">
          <li>Email: <a href="mailto:info@thevenusproject.com" class="underline text-tvp-blue">info@thevenusproject.com</a></li>
          <li>Phone: <a href="tel:+18636357000" class="underline text-tvp-blue">+1 (863) 635-7000</a></li>
        </ul>
        <div class="flex gap-4 mt-4">
          <a href="mailto:info@thevenusproject.com" class="btn-glass">Email Us</a>
          <a href="https://goo.gl/maps/2Qw8Qw8Qw8Qw8Qw8A" target="_blank" class="btn-glass">View on Map</a>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.123456789!2d-81.4061234!3d27.0251234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88ddc123456789ab%3A0x123456789abcdef!2s21%20Valley%20Ln%2C%20Venus%2C%20FL%2033960%2C%20USA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" width="100%" height="300" style="border:0; border-radius: 1rem;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from "vue";
import BaseButton from '@/components/BaseButton.vue';

const booking = ref({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  tourType: "",
  groupSize: 1,
  preferredDate: "",
  specialRequests: "",
});

const isSubmitting = ref(false);

const submitBooking = async () => {
  isSubmitting.value = true;
  try {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Booking submitted:", booking.value);
    booking.value = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      tourType: "",
      groupSize: 1,
    };
    alert("Tour booking submitted successfully! We will contact you soon to confirm your visit.");
  } catch (error) {
    console.error("Booking error:", error);
    alert("There was an error submitting your booking. Please try again.");
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<SeoHead
  title="Visit The Venus Project | Research Center Tour"
  description="Book a tour of The Venus Project research center in Venus, Florida. Experience sustainable living, see our models, and learn about the future."
  keywords="The Venus Project, visit, tour, research center, sustainable living, Florida, booking"
  image="/tvp/sustainable-future-the-venus-project.jpg"
  url="https://www.thevenusproject.com/visit"
  type="article"
  :schema="{
    '@context': 'https://schema.org',
    '@type': 'Event',
    'name': 'Visit The Venus Project',
    'location': {
      '@type': 'Place',
      'name': 'The Venus Project Research Center',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '21 Valley Lane',
        'addressLocality': 'Venus',
        'addressRegion': 'FL',
        'postalCode': '33960',
        'addressCountry': 'US'
      }
    },
    'description': 'Book a tour of The Venus Project research center in Venus, Florida. Experience sustainable living, see our models, and learn about the future.',
    'image': '/tvp/sustainable-future-the-venus-project.jpg',
    'startDate': '',
    'endDate': '',
    'eventStatus': 'https://schema.org/EventScheduled',
    'eventAttendanceMode': 'https://schema.org/OfflineEventAttendanceMode',
    'organizer': {
      '@type': 'Organization',
      'name': 'The Venus Project',
      'url': 'https://www.thevenusproject.com/'
    }
  }"
/>
