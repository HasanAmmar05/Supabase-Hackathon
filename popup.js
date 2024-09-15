document.addEventListener('DOMContentLoaded', () => {
    const loginScreen = document.getElementById('loginScreen');
    const statsScreen = document.getElementById('statsScreen');
    const loginButton = document.getElementById('loginButton');
    const logoutButton = document.getElementById('logoutButton');
    const leaderboardButton = document.getElementById('leaderboardButton');
  

    if (loginScreen && statsScreen) {
 
      loginScreen.style.display = 'flex';
      statsScreen.style.display = 'none';
    }
  

    if (loginButton) {
      loginButton.addEventListener('click', () => {
        if (loginScreen && statsScreen) {
          loginScreen.style.display = 'none';
          statsScreen.style.display = 'block';
        }
      });
    }
  
    if (logoutButton) {
      logoutButton.addEventListener('click', () => {

        chrome.tabs.create({ url: 'After-Log-Out.html' });
      });
    }

  
    if (leaderboardButton) {
      leaderboardButton.addEventListener('click', () => {

        window.location.href = 'https://your-leaderboard-site.com';
      });
    }
  });
  