import React from 'react';
import type { Testimonial, Feature, Benefit } from './types';

export const VolkreachLogo = () => (
  // FIX: Removed duplicate alt attribute
  <img src="data:image/webp;base64,UklGRmYMAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GZgAAAP////8AQU5NRkAAAAD//////wBWUDggtgIAALAVAJ0BKhIAEwA+bSSaTaa/2a/a8yEYAP7/2/8v/V9v/xf+D3G/ov+v/s/3/+//o/4z+z/5b3ff+L/xP/18n/kv9X/8fcX/kP6f/4/3T/Gfq7/j/YL/SP9n/gHwz+nf7P/y/8z+wH85/on+4/8//Nf3z90P5z/cf+d/pP81/uX/B/2f/D/1/8D+0P9N/5v/R/yH/G/2X/B/4n/Vf3j/jf7z/2v+h/yv+5/wH/L/2H/if7z/8/9v/////+h/3v/1f///+A/tv/e/2n///9j/////+p/8H///97/9v///+z+Q/uv/Zf///5f+F/3H/A/yH+k/uX/K/1n+P/wP+B/oP/j/57+7/wX+u/1n/u/5b/Cf4D/Bf5r+9/7n/O/0//Nf6L/M/1P+o/yn+K/z3+c/zH98/5D/Hf33/o/6D/D/7r/L/5L+4/7z/Af4r/Gf7L/Of5r/F/5D/C/6L/Af7r/Wf7D/Gf5L+9/7v/o/+n/oP8F/rv91/6v+V/un+Q/yv+H/xH+B/y/+G/0X+Z/vH/Y/4z/Cf7z/m/8T/q/73/Wf6D/Wf7b/Ef5T/Hf6n/Bf6T/Rf7L/Jf4L/Bf7b/cf8D/Gf6f/qf6T+////9L/zv/t/4P///7n/7v/b////z/Tv+D/////n/8j////+8/73/9////8L+oH3gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gP7gProul-e" alt="Volkreach Logo" className="h-8 w-auto filter invert" />
);

export const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35.0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const ZapIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
);

export const ShieldCheckIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
);

export const CoffeeIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M17 8h1a4 4 0 1 1 0 8h-1"></path><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"></path><line x1="6" x2="6" y1="2" y2="4"></line><line x1="10" x2="10" y1="2" y2="4"></line><line x1="14" x2="14" y1="2" y2="4"></line></svg>
);

export const GrowthIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
);

export const DollarSignIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
);

export const NAV_LINKS = [
  { href: '#', label: 'Docs' },
  { href: '#', label: 'Blog' },
  { href: '#', label: 'Careers' },
  { href: '#', label: 'Pricing' },
];

export const COMPANY_LOGOS = ['stripe', 'ramp', 'dropbox', 'brex', 'notion', 'retool'];

export const FEATURES: Feature[] = [
    {
        overline: 'SEO strategies, reimagined',
        title: 'Drive 10x traffic with 1/10th the effort',
        description: 'No more guesswork. We implement data-driven SEO strategies that consistently drive qualified leads to your SaaS, reducing your reliance on expensive PPC.',
        imageUrl: 'https://picsum.photos/seed/feature1/600/500',
        imageAlt: 'Volkreach SEO strategy dashboard',
        layout: 'image-right'
    },
    {
        overline: 'Tired of SEO promises? Get real results.',
        title: 'Predictable Organic Growth.',
        description: 'We target the exact keywords your ideal customers are searching for, ensuring every visitor from organic search is a highly qualified, potential client.',
        imageUrl: 'https://picsum.photos/seed/feature2/600/500',
        imageAlt: 'Chart showing organic traffic growth',
        layout: 'image-left'
    },
    {
        overline: 'Be present everywhere, including Answer Engines.',
        title: 'AEO is the new SEO',
        description: 'Appear in AI-generated answers across ChatGPT, Perplexity, and voice assistants. Capture users where they get instant information without clicking through. Stay ahead as search evolves beyond traditional result pages.',
        imageUrl: 'https://picsum.photos/seed/feature3/600/500',
        imageAlt: 'Volkreach visibility on AI answer engines',
        layout: 'image-right'
    },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Volkreach has been a quiet superpower for our engineering team. We're shipping faster, with higher quality, and developers are less stressed.",
    author: 'Will Larsen',
    title: 'CTO, Stripe',
    avatarUrl: 'https://picsum.photos/seed/avatar1/64/64'
  },
  {
    quote: "Stacking PRs is a superpower. It's the biggest unlock in my developer workflow in years. I can't imagine going back.",
    author: 'Emil Soman',
    title: 'Engineer, Ramp',
    avatarUrl: 'https://picsum.photos/seed/avatar2/64/64'
  },
  {
    quote: 'Volkreach has made our team more productive by enabling us to ship smaller, incremental changes. It\'s a huge improvement over our previous workflow.',
    author: 'John Doe',
    title: 'Senior Engineer, Notion',
    avatarUrl: 'https://picsum.photos/seed/avatar3/64/64'
  }
];

export const BENEFITS: Benefit[] = [
    {
        icon: <ZapIcon className="w-8 h-8 text-graphite-accent"/>,
        title: 'Move faster',
        description: 'Move faster by creating, reviewing, and merging smaller, incremental changes.'
    },
    {
        icon: <ShieldCheckIcon className="w-8 h-8 text-graphite-accent"/>,
        title: 'Improve crawlability',
        description: 'Freshness of the content makes crawlers visit your site often. Thereby increasing your chances on ranking across search engines and LLMs'
    },
    {
        icon: <DollarSignIcon className="w-8 h-8 text-graphite-accent"/>,
        title: 'Maximize ROI',
        description: 'Stop burning cash on ineffective ads. Our SEO strategies deliver a higher return on investment by attracting customers actively looking for your solution.'
    }
]

export const FOOTER_LINKS = {
    'Product': [
        { href: '#', label: 'Docs' },
        { href: '#', label: 'CLI' },
        { href: '#', label: 'VS Code Extension' },
        { href: '#', label: 'Pricing' },
    ],
    'Company': [
        { href: '#', label: 'About' },
        { href: '#', label: 'Blog' },
        { href: '#', label: 'Careers' },
        { href: '#', label: 'Contact' },
    ],
    'Legal': [
        { href: '#', label: 'Privacy Policy' },
        { href: '#', label: 'Terms of Service' },
    ],
};