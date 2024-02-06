<script>
  import { onMount } from 'svelte';
  let text = '';
  let translatedText = '';
  let isLoading = false;
  let targetLang = 'EN'; // Default target language
  const languages = [
    { code: 'DE', name: 'German' },
    { code: 'FR', name: 'French' },
    { code: 'ES', name: 'Spanish' },
    { code: 'IT', name: 'Italian' },
    { code: 'JA', name: 'Japanese' },
    // Add more languages as needed
  ];

  async function translate() {
    isLoading = true;
    translatedText = ''; // Clear previous translation

    try {
      const response = await fetch('translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, targetLang }),
      });

      if (!response.ok) {
        throw new Error('Failed to translate text');
      }

      const result = await response.json();
      translatedText = result.translations[0].text;
    } catch (error) {
      console.error('Translation error:', error);
      translatedText = 'Error translating text.';
    } finally {
      isLoading = false;
    }
  }

  let faqs = [
    {
      question: "How does TranslateMe ensure translation accuracy?",
      answer: "We use a combination of advanced AI and a network of linguistic experts to ensure high-quality, contextually aware translations.",
      isOpen: false
    },
    // Add more FAQ items as needed
  ];

  function toggleFAQ(index) {
  faqs = faqs.map((faq, i) => {
    if (i === index) {
      return { ...faq, isOpen: !faq.isOpen };
    }
    return faq;
  });
}

</script>

<nav class="navbar">
  <div class="nav-container">
    <a href="#" class="nav-logo">Translayte AI</a>
    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">Features</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</nav>



<div class="translator-container">
  <h1>Translayte AI</h1>

  <div class="input-group">
    <textarea bind:value={text} placeholder="Enter text to translate..." rows="5"></textarea>
    <select bind:value={targetLang}>
      {#each languages as {code, name}}
        <option value={code}>{name}</option>
      {/each}
    </select>
  </div>

  <button on:click={translate} disabled={!text || isLoading} class="translate-button">
    {#if isLoading}
      Translating...
    {:else}
      Translate
    {/if}
  </button>

  {#if translatedText}
    <div class="translation-output">
      <h2>Translation</h2>
      <p>{translatedText}</p>
    </div>
  {/if}
</div>

<div class="features-section">
  <div class="features-intro">
    <h2>Why Translayte AI?</h2>
    <p>Our tool is built with the vision to make language barriers a thing of the past, enabling seamless communication across the globe.</p>
  </div>
  <div class="features-list">
    <div class="feature-item">
      <h3>Instant Translations</h3>
      <p>Translate text in real-time across multiple languages with just a click.</p>
    </div>
    <div class="feature-item">
      <h3>Accuracy and Context</h3>
      <p>Our advanced algorithms ensure translations are not just accurate but also contextually appropriate.</p>
    </div>
    <div class="feature-item">
      <h3>Easy Integration</h3>
      <p>Integrate with your favorite apps and platforms effortlessly, enabling a seamless workflow.</p>
    </div>
    <!-- Add more features as needed -->
  </div>
</div>

<div class="faq-section">
  <h2>Frequently Asked Questions</h2>
  {#each faqs as faq, index}
    <div class="faq-item">
      <button class="faq-question" on:click={() => toggleFAQ(index)}>
        {faq.question}
      </button>
      {#if faq.isOpen}
        <div class="faq-answer">
          <p>{faq.answer}</p>
        </div>
      {/if}
    </div>
  {/each}
</div>

<div class="demo-section">
  <h2>See Translayte AI in Action</h2>
  <p>Book a demo and discover how we can transform your communication workflow.</p>
  <a href="#" class="demo-button">Book a Demo</a>
</div>


<div class="pricing-section">
  <h2>Pricing Plans</h2>
  <div class="plans-container">
    <div class="plan basic">
      <h3>Pro</h3>
      <p class="price">£45 / Month</p>
      <ul>
        <li>Unlimited Translations</li>
        <li>5 Documents</li>
        <li>Email support</li>
      </ul>
      <button>Choose Plan</button>
    </div>
    <div class="plan pro">
      <h3>Ultimate</h3>
      <p class="price">£70 / User</p>
      <ul>
        <li>Unlimited Translations</li>
        <li>Unlimited documents</li>
        <li>Priority email support</li>
      </ul>
      <button>Choose Plan</button>
    </div>
    <div class="plan enterprise">
      <h3>Enterprise</h3>
      <p class="price">Contact us</p>
      <ul>
        <li>Unlimited translations</li>
        <li>Unlimited Documents</li>
        <li>24/7 support</li>
      </ul>
      <button>Choose Plan</button>
    </div>
  </div>
</div>

<footer class="site-footer">
  <div class="footer-content">
    <div class="footer-section about">
      <h3>Translayte AI</h3>
      <p>Breaking down language barriers with advanced AI-driven translations.</p>
      <p>Developed by SG Software ltd.</p>
      <p>Distributed by BSR Software ltd.</p>
    </div>
    <div class="footer-section links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div class="footer-section social">
      <h4>Follow Us</h4>
      <div class="social-icons">
        <a href="#"><img src="path/to/twitter-icon.svg" alt="Twitter"></a>
        <a href="#"><img src="path/to/facebook-icon.svg" alt="Facebook"></a>
        <a href="#"><img src="path/to/linkedin-icon.svg" alt="LinkedIn"></a>
        <!-- Add more social icons as needed -->
      </div>
    </div>
  </div>
</footer>




<style>
  :global(body) {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: #f7f8fc;
    color: #333;
  }

  .translator-container {
    max-width: 800px;
    margin: 40px auto;
    padding: 40px;
    background-color: #fff;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  h1 {
    font-size: 24px;
    color: #333;
    text-align: center;
    margin-bottom: 40px;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
  }

  textarea, select {
    width: 100%;
    padding: 15px;
    font-size: 16px;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    background-color: #f7f8fc;
    resize: none; /* Prevents resizing of the textarea */
  }

  select {
    cursor: pointer;
  }

  .translate-button {
    width: 100%;
    padding: 15px;
    font-size: 18px;
    border: none;
    background-color: #4c51bf;
    color: white;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    box-shadow: 0 5px 15px rgba(76, 81, 191, 0.2);
  }

  .translate-button:hover {
    background-color: #434190;
  }

  .translate-button:disabled {
    background-color: #a0aec0;
    cursor: not-allowed;
    box-shadow: none;
  }

  .translation-output {
    margin-top: 30px;
    background-color: #edf2f7;
    padding: 20px;
    border-radius: 8px;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.06);
  }

  .translation-output h2 {
    margin-top: 0;
  }

  .pricing-section {
    text-align: center;
    padding: 40px 20px;
    background-color: #ffffff;
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    border-radius: 8px;
    margin-top: 40px;
  }

  .pricing-section h2 {
    color: #333;
    margin-bottom: 20px;
  }

  .plans-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }

  .plan {
    flex-basis: calc(33.333% - 20px);
    border: 1px solid #e2e8f0;
    padding: 20px;
    border-radius: 8px;
    background-color: #f7f8fc;
  }

  .plan h3 {
    margin-top: 0;
    color: #4a5568;
  }

  .plan .price {
    font-size: 24px;
    color: #2d3748;
    margin: 10px 0;
  }

  .plan ul {
    list-style: none;
    padding: 0;
    text-align: left;
  }

  .plan ul li {
    padding: 10px 0;
    border-bottom: 1px solid #e2e8f0;
  }

  .plan ul li:last-child {
    border-bottom: none;
  }

  .plan button {
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    background-color: #3182ce;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .plan button:hover {
    background-color: #2c5282;
  }

  .navbar {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}

.nav-logo {
  color: #333;
  font-weight: bold;
  font-size: 20px;
  text-decoration: none;
}

.nav-links {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin-left: 20px;
}

.nav-links a {
  color: #333;
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #007bff;
}

.features-section {
  background-color: #f7f8fc;
  padding: 40px 20px;
  text-align: center;
}

.features-intro h2 {
  color: #333;
  margin-bottom: 10px;
}

.features-intro p {
  color: #555;
  max-width: 600px;
  margin: auto;
  margin-bottom: 40px;
}

.features-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.feature-item {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 300px;
}

.feature-item h3 {
  color: #007bff;
}

.feature-item p {
  color: #555;
}

/* FAQ Section Styles */
.faq-section {
  padding: 40px 20px;
  background-color: #f7f8fc;
  text-align: center;
}

.faq-question {
  width: 100%;
  text-align: left;
  padding: 15px;
  background-color: #ffffff;
  border: none;
  border-bottom: 2px solid #e2e8f0;
  font-size: 18px;
  color: #333;
  cursor: pointer;
  transition: background-color 0.3s;
}

.faq-question:hover {
  background-color: #e2e8f0;
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  background-color: #ffffff;
  padding: 0 15px;
}

.faq-answer p {
  margin: 20px 0;
  text-align: left;
  color: #555;
}

/* Demo Section Styles */
.demo-section {
  padding: 40px 20px;
  background-color: #ffffff;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  margin-top: 40px;
}

.demo-button {
  display: inline-block;
  background-color: #007bff;
  color: #ffffff;
  padding: 10px 30px;
  font-size: 18px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.demo-button:hover {
  background-color: #0056b3;
}

/* Footer Styles */
.site-footer {
  background-color: #111827; /* Dark background for contrast */
  color: #f9fafb; /* Light text for readability */
  padding: 40px 0;
  font-size: 14px;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
}

.footer-section {
  margin: 20px 0;
}

.footer-section h3, .footer-section h4 {
  color: #007bff; /* A vibrant accent color for headings */
  margin-bottom: 20px;
}

.footer-section p, .footer-section ul {
  color: #e2e8f0; /* Light grey for text */
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li a {
  color: #e2e8f0; /* Ensuring links are visible */
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: #007bff; /* Accent color on hover */
}

.social-icons {
  display: flex;
  align-items: center;
}

.social-icons a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #1f2937; /* Slightly lighter dark shade for the icons' background */
  margin-right: 10px;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.social-icons a:hover {
  background-color: #007bff; /* Accent color on hover */
}

.social-icons img {
  width: 20px; /* Adjust based on your icon size */
  height: 20px; /* Adjust based on your icon size */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
  }

  .footer-section {
    margin: 10px 0;
  }

  .social-icons {
    margin-top: 20px;
  }
}



</style>


