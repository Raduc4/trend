<template>
  <div>
    <form @submit.prevent="submitForm">
      <div class="space-y-4 mt-4">
        <input
          v-model="formData.name"
          class="w-full bg-slate-900 border-2 border-white border-opacity-30 rounded-md px-4 py-3 text-white"
          type="text"
          required
          placeholder="Full name"
        />
        <input
          v-model="formData.phone"
          class="w-full bg-slate-900 border-2 border-white border-opacity-30 rounded-md px-4 py-3 text-white"
          type="number"
          required
          placeholder="Phone"
        />
        <input
          v-model="formData.email"
          class="w-full bg-slate-900 border-2 border-white border-opacity-30 rounded-md px-4 py-3 text-white"
          type="email"
          required
          placeholder="Email"
        />
        <textarea
          v-model="formData.message"
          class="w-full bg-slate-900 border-2 border-white border-opacity-30 rounded-md px-4 py-3 text-white min-h-[120px]"
          required
          placeholder="Message"
        ></textarea>
        <div class="flex">
          <button
            class="block text-custom-1 bg-white rounded-md text-base font-bold px-4 py-3 text-center w-[200px]"
            type="submit"
          >
            Send now
          </button>
        </div>
      </div>
    </form>
    <!-- Form -->
    <p v-if="success" class="text-green-600 mt-4">Message succesfully sent.</p>
    <p v-else-if="error" class="text-red-600 mt-4">
      There was an error sending the message. Please try again or conteact us
      directly at office@example.com
    </p>
  </div>
</template>

<script>
export default {
  layout: "En",
  name: "FormEn",
  data() {
    return {
      error: false,
      success: false,
      formData: {
        name: "",
        phone: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        await this.$axios.post("/api/", this.formData);
        this.formData = {
          name: "",
          phone: "",
          email: "",
          message: "",
        };
        this.success = true;
      } catch (error) {
        this.error = true;
      }
    },
  },
};
</script>
