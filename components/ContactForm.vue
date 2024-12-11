<template>
  <form ref="contactForm" @submit.prevent="handleSubmit">
    <h2 class="form-title">Kontakt</h2>
    <div class="form-group">
      <label for="name">Ime</label>
      <input class="form-input" type="text" id="name" name="name" v-model="formData.name" required />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input class="form-input" type="email" id="email" name="email" v-model="formData.email" required />
    </div>
    <div class="form-group">
      <label for="subject">Predmet</label>
      <input class="form-input" type="text" id="subject" name="subject" v-model="formData.subject" />
    </div>
    <div class="form-group">
      <label for="type">Vrsta usluge</label>
      <select class="form-label form-select form-input" id="type" name="type" v-model="formData.type" required>
        <option value="">Odaberite uslugu</option>
        <option value="Krovopokrivački radovi">Krovopokrivački radovi</option>
        <option value="Obnova krova">Obnova krova</option>
        <option value="Popravak krova">Popravak krova</option>
        <option value="Limarski radovi">Limarski radovi</option>
      </select>
    </div>
    <div class="form-group">
      <label for="city">Grad</label>
      <input class="form-input" type="text" id="city" name="city" v-model="formData.city" />
    </div>
    <div class="form-group">
      <label class="form-group" for="message">Poruka</label>
      <textarea class="form-label form-select form-input" id="message" name="message" v-model="formData.message" required></textarea>
    </div>
    <div class="form-group">
      <button class="form-button" type="submit">Pošalji poruku</button>
    </div>
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
form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.form-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

.form-label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.form-textarea {
  height: 100px;
  resize: vertical;
}

.form-actions {
  text-align: center;
}

.form-button {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.form-button:hover {
  background-color: #0056b3;
}
</style>
