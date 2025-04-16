<template>
  <footer class="bg-dark-gray text-white">
    <div class="container-custom py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="space-y-4">
          <div class="flex items-center gap-2">
            <img src="/icons/roidlogo.png" alt="Logo" class="w-auto h-10 rounded-lg">
            <span class="text-xl font-bold text-white">MyArmorHome</span>
          </div>
          <p class="text-gray-300">
            Professional pest control and security solutions for your home. Protecting what matters most.
          </p>
          <div class="flex gap-4">
            <a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">
              <i class="fab fa-facebook text-xl"></i>
            </a>
            <a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">
              <i class="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">
              <i class="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" class="text-gray-300 hover:text-white transition-colors duration-200">
              <i class="fab fa-linkedin text-xl"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="item in navItems" :key="item.path">
              <router-link 
                :to="item.path"
                class="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">Our Services</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/services#pest-control" class="text-gray-300 hover:text-white transition-colors duration-200">
                Pest Control
              </router-link>
            </li>
            <li>
              <router-link to="/services#security" class="text-gray-300 hover:text-white transition-colors duration-200">
                Security Systems
              </router-link>
            </li>
            <li>
              <router-link to="/services#maintenance" class="text-gray-300 hover:text-white transition-colors duration-200">
                Maintenance
              </router-link>
            </li>
            <li>
              <router-link to="/services#consultation" class="text-gray-300 hover:text-white transition-colors duration-200">
                Free Consultation
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4 text-white">Contact Us</h3>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <i class="fas fa-phone-alt mt-1 text-primary-blue"></i>
              <div>
                <p class="text-gray-300">Call us at</p>
                <a href="tel:480-839-3333" class="text-white hover:text-primary-blue transition-colors duration-200">
                  480-839-3333
                </a>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <i class="fas fa-envelope mt-1 text-primary-blue"></i>
              <div>
                <p class="text-gray-300">Email us at</p>
                <a href="mailto:info@myarmorhome.com" class="text-white hover:text-primary-blue transition-colors duration-200">
                  info@myarmorhome.com
                </a>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <i class="fas fa-map-marker-alt mt-1 text-primary-blue"></i>
              <div>
                <p class="text-gray-300">Visit us at</p>
                <address class="text-white not-italic">
                  123 Security Street<br>
                  Phoenix, AZ 85001
                </address>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-700">
      <div class="container-custom py-4">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-400 text-sm">
            © {{ new Date().getFullYear() }} MyArmorHome. All rights reserved.
          </p>
          <div class="flex gap-6 text-sm">
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
];
</script> 