// Microsoft Clarity tracking utilities

declare global {
  interface Window {
    clarity?: (action: string, ...args: any[]) => void;
  }
}

let clarityInitialized = false;

// Initialize Clarity script (deferred)
export const initClarity = () => {
  if (typeof window === 'undefined' || clarityInitialized) return;
  
  clarityInitialized = true;
  
  // Defer Clarity loading to after page is interactive
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(() => {
      loadClarityScript();
    });
  } else {
    setTimeout(loadClarityScript, 2000);
  }
};

const loadClarityScript = () => {
  // Add Clarity script to document
  const script = document.createElement('script');
  script.innerHTML = `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ugb68nlz07");
  `;
  document.head.appendChild(script);
};

// Track custom events
export const trackClarityEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.clarity) {
    window.clarity('event', eventName, eventData);
  }
};

// Specific event trackers for our landing page
export const trackLogoClick = () => {
  trackClarityEvent('logo_click', { location: 'top_left' });
};

export const trackBrazilBadgeClick = (isMobile: boolean) => {
  trackClarityEvent('brazil_badge_click', { device: isMobile ? 'mobile' : 'desktop' });
};

export const trackOnlineCounterClick = (isMobile: boolean) => {
  trackClarityEvent('online_counter_click', { device: isMobile ? 'mobile' : 'desktop' });
};

export const trackGamingVisualClick = () => {
  trackClarityEvent('gaming_visual_click', { location: 'center_right' });
};

export const trackCTAButtonClick = () => {
  trackClarityEvent('cta_button_click', { button_text: 'JOGAR AGORA' });
};

export const trackTermsClick = () => {
  trackClarityEvent('terms_click', { location: 'footer' });
};