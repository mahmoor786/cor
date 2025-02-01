document.addEventListener('deviceready', function() {
    // Initialize AdMob with your App ID
    admob.setOptions({
      appId: 'ca-app-pub-8555864231685399~7936695760'  // Replace with your actual AdMob App ID
    });
  
    // Create and load a rewarded interstitial ad
    var rewardedInterstitialAd = admob.createRewardedInterstitialAd({
      adId: 'ca-app-pub-8555864231685399/7659701465'  // Replace with your actual rewarded interstitial ad unit ID
    });
  
    // Load the ad when the device is ready
    rewardedInterstitialAd.load().then(function() {
      console.log('Rewarded interstitial ad loaded');
    }).catch(function(error) {
      console.log('Error loading rewarded interstitial ad:', error);
    });
  
    // Show the ad when the button is clicked
    document.getElementById('showAdButton').addEventListener('click', function() {
      if (rewardedInterstitialAd.isLoaded()) {
        rewardedInterstitialAd.show().then(function() {
          console.log('Rewarded interstitial ad shown');
        }).catch(function(error) {
          console.log('Error showing rewarded interstitial ad:', error);
        });
      } else {
        console.log('Rewarded interstitial ad not loaded yet');
      }
    });
  
    // Handle rewarded interstitial ad events (optional)
    rewardedInterstitialAd.on('rewarded', function(event) {
      console.log('User earned reward:', event);
      // Give the user their reward (e.g., in-app points, coins, etc.)
    });
  
    rewardedInterstitialAd.on('error', function(error) {
      console.log('Rewarded interstitial ad error:', error);
    });
  }, false);
  