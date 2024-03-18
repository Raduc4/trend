<template>
  <div>
    <!-- Form -->
    <form @submit.prevent="submitForm">
      <div class="space-y-4 mt-4">
        <input
          v-model="formData.name"
          class="w-full bg-slate-900 border-2 border-white border-opacity-30 rounded-md px-4 py-3 text-white"
          type="text"
          required
          placeholder="Nume și prenume"
        />
        <input
          v-model="formData.phone"
          class="w-full bg-slate-900 border-2 border-white border-opacity-30 rounded-md px-4 py-3 text-white"
          type="number"
          required
          placeholder="Telefon"
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
          placeholder="Mesaj"
        ></textarea>
        <div class="flex">
          <button
            class="block text-custom-1 bg-white rounded-md text-base font-bold px-4 py-3 text-center w-[200px]"
            type="submit"
          >
            Trimite acum
          </button>
        </div>
      </div>
    </form>
    <p v-if="success" class="text-green-600 mt-4">
      Mesajul a fost transmis cu succes.
    </p>
    <p v-else-if="error" class="text-red-600 mt-4">
      A apărut o eroare la trimiterea mesajului.
    </p>
  </div>
  <!-- Form -->
</template>

<script>
export default {
  layout: "En",
  name: "FormRo",
  data() {
    return {
      success: false,
      error: false,
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
