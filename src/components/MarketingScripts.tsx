import React from 'react';

interface MarketingScriptsProps {
  analytics?: {
    googleAnalytics?: string;
    googleTagManager?: string;
    facebookPixel?: string;
  };
  chat?: {
    intercom?: string;
    zendesk?: string;
    tawk?: string;
  };
  priority?: 'high' | 'normal' | 'low';
}

const MarketingScripts: React.FC<MarketingScriptsProps> = ({
  analytics = {},
  chat = {},
  priority = 'normal'
}) => {
  const { googleAnalytics, googleTagManager, facebookPixel } = analytics;
  const { intercom, zendesk, tawk } = chat;

  return (
    <>
      {/* Google Analytics */}
      {googleAnalytics && (
        <script
          data-defer
          data-src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalytics}`}
          async
        />
      )}

      {/* Google Tag Manager */}
      {googleTagManager && (
        <>
          <script
            data-defer
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${googleTagManager}');
              `
            }}
          />
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${googleTagManager}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        </>
      )}

      {/* Facebook Pixel */}
      {facebookPixel && (
        <script
          data-defer
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${facebookPixel}');
              fbq('track', 'PageView');
            `
          }}
        />
      )}

      {/* Intercom Chat */}
      {intercom && (
        <script
          data-defer
          dangerouslySetInnerHTML={{
            __html: `
              (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${intercom}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
            `
          }}
        />
      )}

      {/* Zendesk Chat */}
      {zendesk && (
        <script
          data-defer
          dangerouslySetInnerHTML={{
            __html: `
              (function(){var w=window;var d=document;var s=function(){s.q.push(arguments)};s.q=[];s.d=function(){s.d=function(){};var z=d.createElement("script");var e=d.getElementsByTagName("script")[0];z.type="text/javascript";z.async=true;z.src="https://static.zdassets.com/ekr/sdk.js?key=${zendesk}";e.parentNode.insertBefore(z,e);};s.d();w.zE=w.zE||s;})();
            `
          }}
        />
      )}

      {/* Tawk.to Chat */}
      {tawk && (
        <script
          data-defer
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/${tawk}/default';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `
          }}
        />
      )}
    </>
  );
};

export default MarketingScripts;
