<template>
  <form ref="contactForm" @submit.prevent="handleSubmit">
    <h2>Kontakt</h2>
    <div>
      <label for="name">Ime</label>
      <input type="text" id="name" v-model="formData.name" required />
    </div>
    <div>
      <label for="email">Email</label>
      <input type="email" id="email" v-model="formData.email" required />
    </div>
    <div>
      <label for="subject">Predmet</label>
      <input type="text" id="subject" v-model="formData.subject" />
    </div>
    <div>
      <label for="type">Vrsta usluge</label>
      <select id="type" v-model="formData.type" required>
        <option value="">Odaberite uslugu</option>
        <option value="Krovopokrivački radovi">Krovopokrivački radovi</option>
        <option value="Obnova krova">Obnova krova</option>
        <option value="Popravak krova">Popravak krova</option>
        <option value="Limarski radovi">Limarski radovi</option>
      </select>
    </div>
    <div>
      <label for="city">Grad</label>
      <input type="text" id="city" v-model="formData.city" />
    </div>
    <div>
      <label for="message">Poruka</label>
      <textarea id="message" v-model="formData.message" required></textarea>
    </div>
    <button type="submit">Pošalji poruku</button>
  </form>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        type: '',
        city: '',
        message: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      // Reference the form using Vue's ref
      const form = this.$refs.contactForm;

      // Validate form fields
      if (!this.formData.name || !this.formData.email || !this.formData.message) {
        alert('Molimo ispunite sva obavezna polja.');
        return;
      }

      // Send email using emailjs
      emailjs
          .sendForm(
              import.meta.env.VITE_EMAILJS_SERVICE_ID,
              import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
              form, // Pass the form reference
              import.meta.env.VITE_EMAILJS_USER_ID
          )
          .then(() => {
            alert('Vaša poruka je uspješno poslana.');
            // Reset form fields
            this.formData = {
              name: '',
              email: '',
              subject: '',
              type: '',
              city: '',
              message: '',
            };
          })
          .catch((error) => {
            console.error('Error sending email:', error);
            alert('Došlo je do pogreške prilikom slanja poruke.');
          });
    },
  },
};
</script>

<style>
/* Your custom CSS styles */
form {
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  font-weight: bold;
}

input,
textarea,
select {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
