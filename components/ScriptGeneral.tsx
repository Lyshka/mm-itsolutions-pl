import Image from "next/image";
import Script from "next/script";

export const ScriptGeneral = () => {
  return (
    <>
      {/* google start */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-KY314T9EDJ"
      />
      <Script id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            } 

            gtag('js', new Date());
            gtag('config', 'G-KY314T9EDJ');
        `}
      </Script>
      {/* google end */}

      {/* google start */}
      <Script id="google-metric">
        {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MFT2XZNC');
      `}
      </Script>
      {/* google end */}
    </>
  );
};
