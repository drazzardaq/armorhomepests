<template>
  
    <div class="space-y-16">
      <!-- Hero Section -->
      <section class="py-16 text-center">
        <h1 class="mb-6 text-4xl font-bold md:text-5xl">Visit The Venus Project</h1>
        <p class="mx-auto max-w-3xl text-xl text-gray-300">Experience the future firsthand at our research center in Venus, Florida. Tour our facilities, see our models, and learn about sustainable living.</p>
      </section>

      <!-- Tour Information -->
      <section class="grid gap-12 md:grid-cols-2">
        <div>
          <h2 class="mb-6 text-3xl font-bold">Tour Information</h2>
          <div class="space-y-4">
            <div class="rounded-lg bg-white/5 p-4">
              <h3 class="mb-2 font-semibold text-white">Public Tours</h3>
              <p class="text-sm text-gray-300">Every Saturday at 2:00 PM. Duration: 2 hours. Includes facility tour, model viewing, and Q&A session.</p>
            </div>

            <div class="rounded-lg bg-white/5 p-4">
              <h3 class="mb-2 font-semibold text-white">Private Tours</h3>
              <p class="text-sm text-gray-300">Available by appointment. Customized experience with detailed discussions and extended facility access.</p>
            </div>

            <div class="rounded-lg bg-white/5 p-4">
              <h3 class="mb-2 font-semibold text-white">Educational Groups</h3>
              <p class="text-sm text-gray-300">Special programs for schools and universities. Interactive presentations and hands-on activities.</p>
            </div>
          </div>
        </div>

        <div>
          <img src="/tvp/sustainable-future-the-venus-project.jpg" alt="Venus Project Facility" class="w-full rounded-lg shadow-2xl" />
        </div>
      </section>

      <!-- Booking Form -->
      <section class="mx-auto max-w-2xl">
        <h2 class="mb-8 text-center text-3xl font-bold">Book Your Visit</h2>
        <form @submit.prevent="submitBooking" class="space-y-6">
          <div class="grid gap-6 md:grid-cols-2">
            <div>
              <label class="mb-2 block text-sm font-medium text-gray-300">First Name</label>
              <input v-model="booking.firstName" type="text" required class="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none" placeholder="Enter your first name" />
            </div>

            <div>
              <label class="mb-2 block text-sm font-medium text-gray-300">Last Name</label>
              <input v-model="booking.lastName" type="text" required class="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none" placeholder="Enter your last name" />
            </div>
          </div>

          <div>
            <label class="mb-2 block text-sm font-medium text-gray-300">Email</label>
            <input v-model="booking.email" type="email" required class="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none" placeholder="Enter your email" />
          </div>

          <div>
            <label class="mb-2 block text-sm font-medium text-gray-300">Phone</label>
            <input v-model="booking.phone" type="tel" class="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none" placeholder="Enter your phone number" />
          </div>

          <div class="grid gap-6 md:grid-cols-2">
            <div>
              <label class="mb-2 block text-sm font-medium text-gray-300">Tour Type</label>
              <select v-model="booking.tourType" required class="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white focus:border-blue-500 focus:outline-none">
                <option value="">Select tour type</option>
                <option value="public">Public Tour</option>
                <option value="private">Private Tour</option>
                <option value="educational">Educational Group</option>
              </select>
            </div>

            <div>
              <label class="mb-2 block text-sm font-medium text-gray-300">Group Size</label>
              <input v-model="booking.groupSize" type="number" min="1" max="50" required class="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none" placeholder="Number of people" />
            </div>
          </div>

          <div>
            <label class="mb-2 block text-sm font-medium text-gray-300">Preferred Date</label>
            <input v-model="booking.preferredDate" type="date" required class="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white focus:border-blue-500 focus:outline-none" />
          </div>

          <div>
            <label class="mb-2 block text-sm font-medium text-gray-300">Special Requests</label>
            <textarea v-model="booking.specialRequests" rows="4" class="w-full rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none" placeholder="Any special accommodations or questions?"></textarea>
          </div>

          <BaseButton color="primary" class="w-full rounded-lg">
            Submit
          </BaseButton>
        </form>
      </section>

      <!-- Location & Contact -->
      <section class="grid gap-12 md:grid-cols-2">
        <div>
          <h2 class="mb-6 text-3xl font-bold">Location & Contact</h2>
          <div class="space-y-4">
            <div>
              <h3 class="mb-2 font-semibold text-white">Address</h3>
              <p class="text-gray-300">
                21 Valley Lane<br />
                Venus, FL 33960<br />
                United States
              </p>
            </div>

            <div>
              <h3 class="mb-2 font-semibold text-white">Contact Information</h3>
              <p class="text-gray-300">
                Phone: +1 (863) 465-0321<br />
                Email: tours@thevenusproject.com<br />
                Website: thevenusproject.com
              </p>
            </div>

            <div>
              <h3 class="mb-2 font-semibold text-white">Hours</h3>
              <p class="text-gray-300">
                Tours: Saturdays 2:00 PM<br />
                Private tours by appointment<br />
                Office: Monday-Friday 9:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 class="mb-6 text-3xl font-bold">Getting Here</h2>
          <div class="rounded-lg bg-white/5 p-6">
            <h3 class="mb-3 font-semibold text-white">Directions</h3>
            <p class="mb-4 text-gray-300">The Venus Project is located in rural Highlands County, Florida. We recommend using GPS navigation for the most accurate directions.</p>

            <h4 class="mb-2 font-semibold text-white">From Major Cities:</h4>
            <ul class="space-y-1 text-sm text-gray-300">
              <li>• From Orlando: 1.5 hours south via US-27</li>
              <li>• From Tampa: 1 hour southeast via US-98</li>
              <li>• From Miami: 2 hours northwest via US-27</li>
              <li>• From Fort Myers: 1 hour northeast via SR-80</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  
</template>

<script setup>
import { ref } from "vue";
import { headingClass, subheadingClass } from '@/layouts/layoutClasses';

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
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Here you would typically send the booking data to your backend
    console.log("Booking submitted:", booking.value);

    // Reset form
    booking.value = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      tourType: "",
      groupSize: 1,
      preferredDate: "",
      specialRequests: "",
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
