// sursa.js — RSA 1024 & 3072-bit Encryption/Decryption
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('signupForm').addEventListener('submit', e => {
    e.preventDefault();

    // Collect form data
    const data = JSON.stringify({
      fullname: document.getElementById('fullname').value,
      dob: document.getElementById('dob').value,
      yearlevel: document.getElementById('yearlevel').value,
      gender: document.getElementById('gender').value,
      username: document.getElementById('username').value,
      password: document.getElementById('password').value
    }, null, 2);

    // Run both key sizes
    processRSA(data, 1024, 'encrypted1024', 'decrypted1024');
    processRSA(data, 3072, 'encrypted3072', 'decrypted3072');
  });
});

// Generate keys → encrypt → decrypt → display
function processRSA(text, keySize, encId, decId) {
  const crypt = new JSEncrypt({ default_key_size: keySize });
  crypt.getKey(() => {
    const enc = crypt.encrypt(text);
    const dec = crypt.decrypt(enc);
    document.getElementById(encId).value = enc || 'Failed';
    document.getElementById(decId).value = dec || 'Failed';
  });
}