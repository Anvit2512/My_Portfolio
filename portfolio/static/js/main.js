console.log("JavaScript is working!");

document.addEventListener('DOMContentLoaded', function() {
    // Change background color after delay to see the transition
    setTimeout(function() {
        document.body.style.backgroundColor = '#ffffff';
    }, 1000);
    
    // Create verification element
    const verificationDiv = document.createElement('div');
    verificationDiv.className = 'verification-box';
    verificationDiv.innerHTML = `
        <h2 class="verification-title">Everything is working!</h2>
        <p class="verification-text">CSS is styling this box, and JavaScript created it.</p>
        <p class="verification-text">Background color changed from pink to white.</p>
    `;
    
    document.body.appendChild(verificationDiv);
    
    // Add interactive element
    verificationDiv.addEventListener('click', function() {
        this.style.backgroundColor = '#ffebee';
        this.querySelector('.verification-title').textContent = "JavaScript is interactive!";
    });
});