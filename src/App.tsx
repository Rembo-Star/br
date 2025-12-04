import { CTAButton } from './components/CTAButton';
import { OnlineCounter } from './components/OnlineCounter';
import { BenefitsList } from './components/BenefitsList';
import { GamingVisual } from './components/GamingVisual';
import { BrazilLogo } from './components/BrazilLogo';
import { useEffect, useState } from 'react';
import { initClarity, trackBrazilBadgeClick, trackTermsClick } from './utils/clarity';
import { preloadCriticalResources } from './utils/performance';

export default function App() {
  const casinoUrl = "https://flagman-route-four.com/cbfffcdfe"; // URL казино
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Update page title
    document.title = "Welcome";
    
    // Preload critical resources immediately
    preloadCriticalResources();

    // Mark as loaded for deferred animations
    setIsLoaded(true);

    // Initialize Microsoft Clarity (deferred)
    initClarity();
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#050816] via-[#071a3f] to-[#050816]">
      {/* Animated background particles - deferred */}
      {isLoaded && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-64 h-64 bg-[#00C853] rounded-full blur-[100px] opacity-20 animate-pulse top-20 left-20" style={{ willChange: 'opacity' }}></div>
          <div className="absolute w-96 h-96 bg-[#FFEA00] rounded-full blur-[120px] opacity-10 animate-pulse bottom-20 right-20" style={{ animationDelay: '1s', willChange: 'opacity' }}></div>
          <div className="absolute w-48 h-48 bg-[#0036A5] rounded-full blur-[80px] opacity-15 animate-pulse top-1/2 left-1/2" style={{ animationDelay: '2s', willChange: 'opacity' }}></div>
        </div>
      )}

      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-between px-5 md:px-12 lg:px-32 py-5 md:py-6 lg:py-8">
        <BrazilLogo url={casinoUrl} />
        
        <a 
          href={casinoUrl}
          className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00C853]/20 to-[#FFEA00]/20 rounded-full border border-[#00C853]/30 cursor-pointer hover:opacity-90 transition-opacity"
          onClick={() => trackBrazilBadgeClick(false)}
        >
          <span className="text-xl leading-none">🇧🇷</span>
          <span className="text-white text-sm leading-none">Exclusivo para o Brasil</span>
        </a>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-between px-5 md:px-12 lg:px-32 h-[calc(100vh-140px)] md:h-[calc(100vh-180px)] lg:h-[calc(100vh-200px)]">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center w-full max-w-7xl h-full">
          
          {/* Left Column - Content */}
          <div className="flex flex-col gap-6 text-left">
            <h1 className="text-white text-6xl lg:text-7xl" style={{ 
              textShadow: '0 0 30px rgba(0, 200, 83, 0.5), 0 0 60px rgba(255, 234, 0, 0.3)' 
            }}>
              Sua nova sorte<br />
              <span className="bg-gradient-to-r from-[#00C853] to-[#FFEA00] bg-clip-text text-transparent">
                começa aqui
              </span>
            </h1>

            <h2 className="text-[#B0BEC5] text-xl lg:text-2xl max-w-xl">
              Cadastre-se em 1 minuto, receba até <span className="text-[#FFEA00]">R$ 5.000</span> em bônus e comece a jogar agora mesmo.
            </h2>

            <BenefitsList />

            {/* Desktop Online Counter */}
            <div className="mt-4">
              <OnlineCounter url={casinoUrl} isMobile={false} />
            </div>
          </div>

          {/* Right Column - CTA & Character */}
          <div className="flex flex-col items-center justify-center gap-8">
            {/* Premium gaming visual */}
            <GamingVisual url={casinoUrl} />

            <CTAButton url={casinoUrl} />

            <p className="text-[#B0BEC5] text-sm text-center max-w-md">
              Você será redirecionado(a) para a página oficial do parceiro.
            </p>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:flex lg:hidden flex-col items-center w-full h-full justify-between py-6">
          
          {/* Top Section - Headings */}
          <div className="flex flex-col gap-5 w-full max-w-2xl">
            <h1 className="text-white text-5xl text-center" style={{ 
              textShadow: '0 0 30px rgba(0, 200, 83, 0.5), 0 0 60px rgba(255, 234, 0, 0.3)',
              lineHeight: '1.2'
            }}>
              Sua nova sorte<br />
              <span className="bg-gradient-to-r from-[#00C853] to-[#FFEA00] bg-clip-text text-transparent">
                começa aqui
              </span>
            </h1>

            <h2 className="text-[#B0BEC5] text-lg text-center px-8">
              Cadastre-se em 1 minuto, receba até <span className="text-[#FFEA00]">R$ 5.000</span> em bônus e comece a jogar agora mesmo.
            </h2>
          </div>

          {/* Middle Section - Benefits & Counter */}
          <div className="flex flex-col gap-6 w-full max-w-2xl items-center">
            <BenefitsList />
            <OnlineCounter url={casinoUrl} isMobile={false} />
          </div>

          {/* Bottom Section - Visual & CTA */}
          <div className="flex flex-col gap-6 w-full items-center">
            <div className="relative w-64 h-64 flex-shrink-0">
              <GamingVisual url={casinoUrl} />
            </div>

            <div className="w-full max-w-md px-8">
              <CTAButton url={casinoUrl} />
            </div>

            <p className="text-[#B0BEC5] text-sm text-center px-8">
              Você será redirecionado(a) para a página oficial do parceiro.
            </p>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col items-center w-full h-full justify-between py-4">
          
          {/* Top Section - Headings */}
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-white text-3xl text-center" style={{ 
              textShadow: '0 0 30px rgba(0, 200, 83, 0.5), 0 0 60px rgba(255, 234, 0, 0.3)',
              lineHeight: '1.2'
            }}>
              Sua nova sorte<br />
              <span className="bg-gradient-to-r from-[#00C853] to-[#FFEA00] bg-clip-text text-transparent">
                começa aqui
              </span>
            </h1>

            <h2 className="text-[#B0BEC5] text-sm text-center px-2">
              Cadastre-se em 1 minuto, receba até <span className="text-[#FFEA00]">R$ 5.000</span> em bônus e comece a jogar agora mesmo.
            </h2>
          </div>

          {/* Middle Section - Decorative Visual (smaller) */}
          <div className="relative w-48 h-48 flex-shrink-0">
            <GamingVisual url={casinoUrl} />
          </div>

          {/* Bottom Section - Benefits, Counter, CTA */}
          <div className="flex flex-col gap-5 w-full items-center">
            <BenefitsList />

            <OnlineCounter url={casinoUrl} isMobile={true} />

            <div className="w-full px-4">
              <CTAButton url={casinoUrl} />
            </div>

            <p className="text-[#B0BEC5] text-xs text-center px-4">
              Você será redirecionado(a) para a página oficial do parceiro.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-between px-5 md:px-12 lg:px-32 py-4 md:py-6 gap-2 border-t border-white/5">
        <p className="text-[#B0BEC5] text-xs text-center md:text-left">
          Jogue com responsabilidade. Somente para maiores de 18 anos.
        </p>
        <a 
          href={casinoUrl} 
          className="text-[#00C853] hover:text-[#FFEA00] transition-colors text-xs underline"
          onClick={trackTermsClick}
        >
          Termos & Condições
        </a>
      </div>
    </div>
  );
}