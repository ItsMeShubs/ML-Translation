<script>
  import { onMount } from 'svelte';
  let file;
  let targetLanguage = 'DE'; // Example target language
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

    const result = await response.json();
    if (response.ok) {
      statusMessage = `Translation submitted successfully. Document ID: ${result.document_id}`;
      // Implement polling for status here or redirect to a status page
    } else {
      statusMessage = 'Error submitting document for translation.';
    }
  }
</script>

<div class="upload-container">
  <h1>Translate Your Document</h1>
  <input type="file" on:change="{(e) => (file = e.target.files[0])}">
  <select bind:value="{targetLanguage}">
    <option value="DE">German</option>
    <option value="FR">French</option>
    <!-- Add more languages as needed -->
  </select>
  <button on:click="{handleFileUpload}">Upload and Translate</button>
  <p>{statusMessage}</p>
</div>

<style>
  .upload-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
  }

  input, select, button {
    width: 300px;
    padding: 8px;
    margin: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  button {
    background-color: #0056b3;
    color: white;
    cursor: pointer;
  }

  p {
    color: #333;
  }
</style>
