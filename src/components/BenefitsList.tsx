import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Depósitos e saques rápidos em reais',
  'Suporte 24/7 em português',
  'Jogos populares e grandes prêmios',
  'Plataforma licenciada e protegida'
];

export function BenefitsList() {
  return (
    <ul className="flex flex-col gap-2 md:gap-3 lg:gap-4">
      {benefits.map((benefit, index) => (
        <li 
          key={index}
          className="flex items-start md:items-center gap-2 md:gap-3 text-white text-xs md:text-base lg:text-lg"
        >
          <CheckCircle2 
            className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-[#00C853] flex-shrink-0 mt-0.5 md:mt-0" 
            strokeWidth={2.5}
          />
          <span className="leading-tight md:leading-normal">{benefit}</span>
        </li>
      ))}
    </ul>
  );
}