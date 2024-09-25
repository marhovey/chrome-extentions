const script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.setAttribute('src', chrome.extension.getURL('content_scripts/bugFire.js'));
document.body.appendChild(script);