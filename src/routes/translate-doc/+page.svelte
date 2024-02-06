<script>
  import { onMount } from 'svelte';
  let file;
  let targetLanguage = 'DE'; // Default target language
  let statusMessage = '';

  async function handleFileUpload() {
    if (!file || !targetLanguage) {
      statusMessage = 'Please select a file and a target language.';
      return;
    }
    const formData = new FormData();
    formData.append('document', file);
    formData.append('targetLanguage', targetLanguage);

    const response = await fetch('/translate-doc/translate', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const result = await response.json();
      statusMessage = `Translation submitted successfully. Tracking ID: ${result.document_id}.`;
      // Here you might implement polling for status or redirect.
    } else {
      statusMessage = 'Error submitting document for translation.';
    }
  }
</script>

<div class="upload-container">
  <h1>Document Translation</h1>
  <input type="file" on:change="{(e) => (file = e.target.files[0])}">
  <select bind:value="{targetLanguage}">
    <option value="DE">German</option>
    <option value="FR">French</option>
    <!-- Add more options as needed -->
  </select>
  <button on:click="{handleFileUpload}">Upload & Translate</button>
  <p class="status-message">{statusMessage}</p>
</div>

<style>
  .upload-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 40px auto;
    padding: 40px;
    max-width: 600px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  h1 {
    color: #102A43;
    margin-bottom: 20px;
  }

  input, select, button {
    width: 100%;
    padding: 12px;
    margin: 5px 0;
    border: 2px solid #CBD2D9;
    border-radius: 8px;
    font-size: 16px;
    background-color: #F7FAFC;
  }

  select {
    appearance: none; /* Removes default styling */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>');
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1.5em;
    color: #2D3748;
  }

  button {
    background-color: #4C51BF;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }

  button:hover {
    background-color: #2B6CB0;
  }

  .status-message {
    color: #C53030;
    font-weight: bold;
  }
</style>
