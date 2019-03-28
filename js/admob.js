var admobid = {};

// TODO: replace the following ad units with your own
if( /(android)/i.test(navigator.userAgent) ) {
  admobid = { // for Android
    banner: '',
    interstitial: 'ca-app-pub-6251426836814427/3272732399',
    rewardvideo: 'ca-app-pub-6251426836814427/4960531197',
  };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  admobid = { // for iOS
    banner: '',
    interstitial: 'ca-app-pub-6251426836814427/7913997593',
    rewardvideo: 'ca-app-pub-6251426836814427/9390730792',
  };
} /*else {
  admobid = { // for Windows Phone
    banner: 'ca-app-pub-6869992474017983/8878394753',
    interstitial: 'ca-app-pub-6869992474017983/1355127956',
    rewardvideo: '',
  };
}*/

function initApp() {
  if (! AdMob ) { alert( 'admob plugin not ready' ); return; }

  // this will create a banner on startup
 /* AdMob.createBanner( {
    adId: admobid.banner,
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
    isTesting: true, // TODO: remove this line when release
    overlap: false,
    offsetTopBar: false,
    bgColor: 'black'
  } );
*/
  // this will load a full screen ad on startup
  AdMob.prepareInterstitial({
    adId: admobid.interstitial,
   // isTesting: true, // TODO: remove this line when release
    autoShow: true
  });
  
  prepareRewardVideoAd({
	  adId: admobid.rewardvideo, 
   // isTesting: true, // TODO: remove this line when release
    autoShow: true });
}

if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
    document.addEventListener('deviceready', initApp, false);
} else {
    initApp();
}