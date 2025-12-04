document.addEventListener('DOMContentLoaded', function() {
  const message = document.getElementById("message");
  const btn = document.getElementById("btn");
  const heartsBg = document.getElementById("heartsBg");

  const fullMessage = `My dearest Buhlebendalo,

My love for you is not just a feeling — it's the quiet peace I find when I think of you, the sudden smile that appears when your name crosses my mind, the warmth that spreads through me when I remember your laughter.

There are days when I sit and marvel at how incredibly lucky I am to have found you. You are not just my girlfriend — you are my safe place, my person. The one I want to share both the beautiful sunrises and the difficult sunsets with.

I love the way your eyes light up when you talk about things you're passionate about. I love the sound of your voice first thing in the morning. I love how you make even ordinary moments feel magical. I love the way you understand me without me having to say a word.

When I look at you, I don't just see your beautiful face — I see my future. I see someone I want to grow with, learn with, build with. Someone I want to hold through all of life's storms and celebrate with during all its beautiful moments.

You've changed me in the best possible ways. Because of you, I understand what it means to love completely, to trust absolutely, to hope endlessly. You've shown me that true love isn't about finding someone perfect, but about seeing someone imperfect perfectly — and that's exactly how I see you.

No matter what happens in life, I want you to know this: my love for you is constant. It's in the way I think of you first when something good happens. It's in the way your happiness has become my main priority. It's in the way I can't wait to see you again, to hold you close, to tell you once more just how much you mean to me.

I promise to always be your biggest supporter, your soft place to land, and the hand you can always reach for. I promise to love you not only when it's easy, but especially when it's not. I promise to choose you, every single day.

Thank you for being exactly who you are. Thank you for your beautiful soul, your kind heart, your brilliant mind. Thank you for trusting me with your love. I love you more deeply than words can express, more fiercely than I ever thought possible.

You are my favorite person in this entire world, and loving you is the greatest privilege of my life. i can't wait to see where our journey takes us next, hand in hand, heart to heart.`;

  message.textContent = fullMessage;

  // Create floating background hearts
  function createBackgroundHearts() {
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const heart = document.createElement('div');
        heart.className = 'heart-bg';
        heart.innerHTML = '💖';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 1 + 0.8) + 'rem';
        heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heartsBg.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
          if (heart.parentNode === heartsBg) {
            heartsBg.removeChild(heart);
          }
        }, 20000);
      }, i * 500);
    }
  }

  // Create initial background hearts
  createBackgroundHearts();
  // Keep creating hearts periodically
  setInterval(createBackgroundHearts, 15000);

  // Personal memories and thoughts to show on button click
  const personalThoughts = [
    "The way your hand fits perfectly in mine — it feels like they were made to hold each other.",
    "I save all the funny memes and videos I see throughout the day, just to share them with you later.",
    "Sometimes I just stare at photos of us and smile like a fool. You make me so incredibly happy.",
    "Your morning voice is my favorite sound in the world — sleepy, soft, and filled with warmth.",
    "I love how you scrunch your nose when you're thinking deeply about something.",
    "When you're passionate about something, your entire face lights up. It's the most beautiful thing I've ever seen.",
    "I've started liking things I never cared about before, just because they remind me of you.",
    "My phone background is still that picture of us from our first night. I never want to change it.",
    "I find myself telling stories that start with 'My girlfriend...' just because I love saying you're mine.",
    "Your laughter is my favorite melody — I could listen to it forever.",
    "I love how you always know exactly what I'm thinking, even when I don't say it.",
    "Watching you sleep peacefully is one of my secret joys. You look so innocent and beautiful.",
    "I've started planning our future in my head — all the adventures we'll have, the home we'll build.",
    "You've seen me at my worst and still choose to love me. That means more than you'll ever know."
  ];

  btn.addEventListener("click", function() {
    showLoveModal();
    createFloatingHearts();
  });

  function showLoveModal() {
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    
    // Create modal content
    const modal = document.createElement('div');
    modal.className = 'modal-content';
    
    // Random thought
    const randomThought = personalThoughts[Math.floor(Math.random() * personalThoughts.length)];
    
    modal.innerHTML = `
      <h2 class="modal-title">A Little Piece of My Heart 💝</h2>
      <div class="modal-text">"${randomThought}"</div>
      <div class="modal-subtext">Just one of the million little reasons why I adore you...</div>
      <button class="modal-close-btn">Hold This Close to Your Heart</button>
    `;
    
    document.body.appendChild(overlay);
    document.body.appendChild(modal);
    
    // Close button functionality
    const closeBtn = modal.querySelector('.modal-close-btn');
    closeBtn.addEventListener('click', function() {
      closeModal(overlay, modal);
    });
    
    // Close when clicking overlay
    overlay.addEventListener('click', function() {
      closeModal(overlay, modal);
    });
    
    // Close with Escape key
    document.addEventListener('keydown', function closeOnEscape(e) {
      if (e.key === 'Escape') {
        closeModal(overlay, modal);
        document.removeEventListener('keydown', closeOnEscape);
      }
    });
  }

  function closeModal(overlay, modal) {
    if (overlay.parentNode) {
      overlay.style.animation = 'fadeIn 0.3s ease reverse';
      modal.style.animation = 'modalFadeIn 0.4s ease reverse';
      
      setTimeout(() => {
        if (overlay.parentNode) document.body.removeChild(overlay);
        if (modal.parentNode) document.body.removeChild(modal);
      }, 300);
    }
  }

  function createFloatingHearts() {
    const buttonRect = btn.getBoundingClientRect();
    const heartTypes = ['💖', '💗', '💓', '💞', '💕'];
    
    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = heartTypes[Math.floor(Math.random() * heartTypes.length)];
        heart.style.left = buttonRect.left + buttonRect.width / 2 + 'px';
        heart.style.top = buttonRect.top + buttonRect.height / 2 + 'px';
        heart.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
        
        // Random movement variables
        const heartX = Math.random() * 100 - 50;
        const heartRotate = Math.random() * 360;
        heart.style.setProperty('--heart-x', `${heartX}px`);
        heart.style.setProperty('--heart-rotate', `${heartRotate}deg`);
        
        document.body.appendChild(heart);
        
        // Remove heart after animation
        setTimeout(() => {
          if (heart.parentNode) {
            document.body.removeChild(heart);
          }
        }, 3000);
      }, i * 150);
    }
  }

  // Add gentle glow to container
  setInterval(() => {
    const container = document.querySelector('.container');
    if (container) {
      const glowIntensity = 0.2 + Math.sin(Date.now() / 1000) * 0.1;
      container.style.boxShadow = `
        0 10px 30px rgba(255, 182, 193, ${glowIntensity}),
        0 0 0 1px rgba(255, 182, 193, 0.1),
        inset 0 0 30px rgba(255, 255, 255, 0.8)
      `;
    }
  }, 100);
});