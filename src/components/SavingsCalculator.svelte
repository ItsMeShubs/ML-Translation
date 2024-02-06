<script>
    let documentsToTranslate = 0;
    let costPerDocument = 0; // Average cost of professional translation per document in GBP
    let serviceCostPerDocument = 5; // Your service cost per document in GBP
    let totalTranslationCost = 0;
    let totalServiceCost = 0;
    let savings = 0;
  
    function calculateCosts() {
      totalTranslationCost = documentsToTranslate * costPerDocument;
      totalServiceCost = documentsToTranslate * serviceCostPerDocument;
      savings = totalTranslationCost - totalServiceCost;
    }
  </script>
  
  <div class="savings-calculator">
    <h2>Calculate Your Translation Costs</h2>
    <div class="input-field">
      <label for="documents">Number of documents:</label>
      <input type="number" id="documents" bind:value={documentsToTranslate} min="0" placeholder="Enter number of documents" />
    </div>
    <div class="input-field">
      <label for="cost">Cost per document for professional translation (GBP):</label>
      <input type="number" id="cost" bind:value={costPerDocument} min="0" placeholder="Average cost per document" />
    </div>
    <button on:click={calculateCosts}>Calculate Costs</button>
    {#if savings > 0}
      <div class="results">
        <p>Total cost with a professional translator: <strong>£{totalTranslationCost.toFixed(2)}</strong></p>
        <p>Total cost using our service: <strong>£{totalServiceCost.toFixed(2)}</strong></p>
        <p>You could save: <strong>£{savings.toFixed(2)}</strong></p>
      </div>
    {:else if savings === 0}
      <p>No savings - our service matches the professional translator's cost.</p>
    {/if}
  </div>
  
  <style>
    .savings-calculator {
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
      margin-top: 20px;
    }
  
    .input-field {
      margin-bottom: 15px;
    }
  
    label {
      display: block;
      margin-bottom: 5px;
    }
  
    input[type="number"] {
      width: calc(100% - 20px);
      padding: 10px;
      margin: 0 10px;
      border-radius: 5px;
      border: 1px solid #ccc;
      font-size: 16px;
    }
  
    button {
      background-color: #007bff;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      margin-top: 10px;
    }
  
    button:hover {
      background-color: #0056b3;
    }
  
    .results {
      margin-top: 20px;
      background-color: #f1f1f1;
      padding: 10px;
      border-radius: 5px;
    }
  </style>
  