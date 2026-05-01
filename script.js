/* ============================================
   AI Ecommerce Tools Hub - Simulated AI Logic
   ============================================ */

/* ---------- PRODUCT FINDER ---------- */
const productDatabase = {
  fitness: [
    {name:"Smart Resistance Bands",desc:"Bluetooth-enabled bands that track reps via app.",profit:"$15-$30 per sale"},
    {name:"Posture Corrector Belt",desc:"Trending wellness product targeted at office workers.",profit:"$20-$40 per sale"},
    {name:"Mini Massage Gun",desc:"Portable recovery tool with viral TikTok demand.",profit:"$25-$50 per sale"}
  ],
  beauty: [
    {name:"LED Face Mask",desc:"Skincare device gaining traction on TikTok Shop.",profit:"$30-$60 per sale"},
    {name:"Heatless Hair Curler",desc:"Viral hair tool with low competition.",profit:"$10-$20 per sale"},
    {name:"Ice Roller for Face",desc:"Affordable beauty essential with massive impulse appeal.",profit:"$8-$15 per sale"}
  ],
  home: [
    {name:"Smart LED Strip Lights",desc:"App-controlled RGB lights, evergreen seller.",profit:"$15-$35 per sale"},
    {name:"Mini Portable Blender",desc:"USB-rechargeable blender, perfect for travelers.",profit:"$18-$30 per sale"},
    {name:"Magnetic Window Cleaner",desc:"Niche home tool with high demand on Facebook ads.",profit:"$20-$40 per sale"}
  ],
  pets: [
    {name:"Self-Cleaning Slicker Brush",desc:"Pet grooming tool that sells on impulse.",profit:"$10-$25 per sale"},
    {name:"Interactive Cat Laser Toy",desc:"Automated pet entertainment, repeat buyers.",profit:"$15-$30 per sale"},
    {name:"Anti-Anxiety Dog Bed",desc:"Calming bed trending in pet niche.",profit:"$25-$50 per sale"}
  ],
  tech: [
    {name:"Wireless Charging Stand 3-in-1",desc:"Premium tech accessory with high perceived value.",profit:"$20-$45 per sale"},
    {name:"Magnetic Phone Mount",desc:"Evergreen automotive tech accessory.",profit:"$8-$18 per sale"},
    {name:"Bluetooth Sleep Headband",desc:"Sleep niche meets tech — winning combo.",profit:"$15-$35 per sale"}
  ]
};

function findProducts(){
  const country = document.getElementById('country').value;
  const niche = document.getElementById('niche').value;
  const budget = parseInt(document.getElementById('budget').value);
  const resultEl = document.getElementById('product-results');

  if(!country||!niche||!budget){
    resultEl.innerHTML="<p style='color:red'>Please fill all fields.</p>";return;
  }

  const products = productDatabase[niche] || productDatabase.tech;
  let html = `<h3>🎯 Top Products for ${niche} in ${country} (Budget: $${budget})</h3>`;
  products.forEach(p=>{
    html += `<div class="result-item">
      <h4>${p.name}</h4>
      <p>${p.desc}</p>
      <strong>💰 Profit Potential:</strong> ${p.profit}
    </div>`;
  });
  html += `<p style="margin-top:15px"><em>Tip: Combine with our <a href="ad-generator.html">Ad Copy Generator</a> for instant campaigns.</em></p>`;
  resultEl.innerHTML = html;
}

/* ---------- AD COPY GENERATOR ---------- */
function generateAds(){
  const product = document.getElementById('ad-product').value.trim();
  const audience = document.getElementById('ad-audience').value.trim();
  const resultEl = document.getElementById('ad-results');

  if(!product||!audience){
    resultEl.innerHTML="<p style='color:red'>Please enter both fields.</p>";return;
  }

  const ads = [
    {
      title:"🔥 Emotional Hook",
      copy:`Tired of struggling without a ${product}? Join thousands of ${audience} who finally found the solution. Limited stock — grab yours today before it's gone!`
    },
    {
      title:"⚡ Benefit-Driven",
      copy:`Discover the #1 ${product} loved by ${audience} worldwide. Save time, look better, and feel confident — all in one. Order now and get FREE shipping today!`
    },
    {
      title:"🎯 Problem-Solution",
      copy:`Attention ${audience}! Stop wasting money on poor-quality alternatives. Our premium ${product} is the upgrade you've been waiting for. Try risk-free for 30 days.`
    }
  ];

  let html = `<h3>✨ 3 High-Converting Ad Variations</h3>`;
  ads.forEach(a=>{
    html += `<div class="result-item">
      <h4>${a.title}</h4>
      <p>${a.copy}</p>
    </div>`;
  });
  resultEl.innerHTML = html;
}

/* ---------- DESCRIPTION GENERATOR ---------- */
function generateDescription(){
  const product = document.getElementById('desc-product').value.trim();
  const resultEl = document.getElementById('desc-results');

  if(!product){
    resultEl.innerHTML="<p style='color:red'>Please enter a product name.</p>";return;
  }

  const description = `
    <h4>${product} — Premium Quality That Speaks for Itself</h4>
    <p>Upgrade your lifestyle with the <strong>${product}</strong>, designed with cutting-edge innovation and crafted for everyday excellence. Whether you're a beginner or a pro, this product delivers unmatched performance, durability, and style.</p>
    <p><strong>✨ Key Benefits:</strong></p>
    <ul>
      <li>✅ Premium-grade materials built to last for years</li>
      <li>✅ Sleek, modern design that fits any lifestyle</li>
      <li>✅ Easy to use, even for first-time buyers</li>
      <li>✅ Loved by thousands of happy customers worldwide</li>
    </ul>
    <p><strong>🎁 Why Buy Today?</strong> Limited stock available — once it's gone, it's gone. Order your <em>${product}</em> now and experience the difference instantly.</p>
    <p><strong>🚚 Free Shipping</strong> | <strong>💯 Money-Back Guarantee</strong> | <strong>🔒 Secure Checkout</strong></p>
  `;

  resultEl.innerHTML = `<h3>📝 Your Persuasive Product Description</h3><div class="result-item">${description}</div>`;
}