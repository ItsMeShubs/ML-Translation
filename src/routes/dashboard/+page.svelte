<script>
    import { onMount } from 'svelte';
    // Placeholder functions and variables
    let userName = "Shubs"; // Fetch dynamically
  
    function handleTranslate() {
      // Add translation logic
    }
  
    function handleFileUpload(event) {
      // Handle document upload and translation
    }
  
    function navigateToSettings() {
      // Settings navigation logic
    }
  
    onMount(() => {
      // Component setup
    });
  </script>
  
  <div class="dashboard-layout">
    <header class="dashboard-header">
      <h1>Welcome back, {userName}!</h1>
    </header>
  
    <nav class="dashboard-nav">
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/dashboard/documents">Documents</a></li>
        <li><a href="/dashboard/settings">Settings</a></li>
      </ul>
    </nav>
  
    <main class="dashboard-main">
      <section class="translate-section">
        <div class="card">
          <h2>Quick Translate</h2>
          <textarea placeholder="Enter text here..."></textarea>
          <select>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <!-- Additional languages -->
          </select>
          <button on:click={handleTranslate}>Translate</button>
        </div>
      </section>
  
      <section class="upload-section">
        <div class="card">
          <h2>Upload Document</h2>
          <input type="file" multiple on:change={handleFileUpload}>
          <select>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <!-- Additional languages -->
          </select>
          <button>Upload & Translate</button>
        </div>
      </section>
    </main>
  
    <footer class="dashboard-footer">
      <button on:click={navigateToSettings}>Logout</button>
    </footer>
  </div>
  
  <style>
    .dashboard-layout {
      display: grid;
      grid-template-rows: auto 1fr auto;
      grid-template-columns: 100%;
      height: 100vh;
      color: #333;
      background-color: #f4f7fa;
    }
  
    .dashboard-header, .dashboard-footer {
      padding: 1rem;
      background-color: #fff;
      text-align: center;
      border-bottom: 1px solid #eaeaea;
    }
  
    .dashboard-nav ul {
      display: flex;
      justify-content: center;
      padding: 0;
      list-style: none;
    }
  
    .dashboard-nav a {
      padding: 10px 15px;
      margin: 0 10px;
      text-decoration: none;
      color: #007bff;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }
  
    .dashboard-nav a:hover {
      background-color: #e7f1ff;
    }
  
    .dashboard-main {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 20px;
    }
  
    .card {
      background: #ffffff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  
    textarea, input[type="file"], select {
      width: 100%;
      padding: 10px;
      margin-top: 10px;
      border-radius: 4px;
      border: 1px solid #dce4ec;
      font-size: 16px;
      color: #333;
    }
  
    button {
      width: 100%;
      padding: 10px;
      margin-top: 15px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.2s;
    }
  
    button:hover {
      background-color: #0056b3;
    }
  
    .dashboard-footer button {
      background: none;
      color: #007bff;
      padding: 10px;
      border: 1px solid #007bff;
      border-radius: 4px;
      transition: all 0.2s;
    }
  
    .dashboard-footer button:hover {
      background-color: #007bff;
      color: white;
    }
  </style>
  