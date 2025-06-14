// gatsby-ssr.js
import React from "react";

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setHeadComponents([
    // GTM <head> script
    <script
      key="gtm-head"
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T9PJR9K');
        `.trim(),
      }}
    />,
  ]);

  setPreBodyComponents([
    // GTM <body> noscript fallback
    <noscript
      key="gtm-body"
      dangerouslySetInnerHTML={{
        __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T9PJR9K"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `.trim(),
      }}
    />,
  ]);
};
