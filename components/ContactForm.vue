<template>
  <form @submit.prevent="handleSubmit" class="form-container">
    <h2 class="form-title">Kontakt obrazac</h2>

    <div class="form-group">
      <label for="name" class="form-label">Ime</label>
      <input
          type="text"
          id="name"
          name="name"
          v-model="formData.name"
          class="form-input"
          required
      />
    </div>

    <div class="form-group">
      <label for="email" class="form-label">Email</label>
      <input
          type="email"
          id="email"
          name="email"
          v-model="formData.email"
          class="form-input"
          required
      />
    </div>

    <div class="form-group">
      <label for="subject" class="form-label">Predmet</label>
      <input
          type="text"
          id="subject"
          name="subject"
          v-model="formData.subject"
          class="form-input"
      />
    </div>

    <div class="form-group">
      <label for="type" class="form-label">Usluga</label>
      <select
          id="type"
          name="type"
          v-model="formData.type"
          class="form-select"
          required
      >
        <option value="">Odaberite uslugu</option>
        <option value="Krovopokrivanje">Krovopokrivanje</option>
        <option value="Obnova krova">Obnova krova</option>
        <option value="Popravak krova">Popravak krova</option>
        <option value="Limarski radovi">Limarski radovi</option>
      </select>
    </div>

    <div class="form-group">
      <label for="city" class="form-label">Grad</label>
      <input
          type="text"
          id="city"
          name="city"
          v-model="formData.city"
          class="form-input"
      />
    </div>

    <div class="form-group">
      <label for="message" class="form-label">Poruka</label>
      <textarea
          id="message"
          name="message"
          v-model="formData.message"
          class="form-textarea"
          required
      ></textarea>
    </div>

    <div class="form-actions">
      <button type="submit" class="form-button">Pošalji poruku</button>
    </div>
  </form>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'ContactForm',
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
      if (!this.formData.name || !this.formData.email || !this.formData.subject || !this.formData.message) {
        alert('Molimo ispunite sva polja!');
        return;
      }

      emailjs
          .sendForm(
              import.meta.env.VITE_EMAILJS_SERVICE_ID,
              import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
              this.formData,
              import.meta.env.VITE_EMAILJS_USER_ID
          )
          .then(
              (result) => {
                console.log(result.text);
                alert('Vaša poruka je uspješno poslana!');
                this.resetForm();
              },
              (error) => {
                console.log(error.message);
                alert('Došlo je do pogreške prilikom slanja poruke.');
              }
          );
    },
    resetForm() {
      this.formData = {
        name: '',
        email: '',
        subject: '',
        type: '',
        city: '',
        message: '',
      };
    },
  },
};
</script>

<style>
.form-container {
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
