'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Pages where AdSense ads are allowed (content-rich public pages only).
 * All other pages (login, register, dashboard, admin, contact, etc.)
 * will NOT show ads to comply with Google AdSense policy:
 * "Ads on screens without publisher-content / Low value content"
 */
const AD_ALLOWED_PATHS = ['/', '/about', '/faq', '/privacy', '/terms'];
const AD_ALLOWED_PREFIXES = ['/guides'];

interface ConditionalAdUnitProps {
  adClient: string;
  adSlot: string;
  adFormat?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function ConditionalAdUnit({
  adClient,
  adSlot,
  adFormat = 'auto',
  className = '',
  style = { display: 'block' },
}: ConditionalAdUnitProps) {
  const pathname = usePathname();

  const isAllowed =
    AD_ALLOWED_PATHS.includes(pathname) ||
    AD_ALLOWED_PREFIXES.some((prefix) => pathname.startsWith(prefix));

  useEffect(() => {
    if (!isAllowed) return;
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).adsbygoogle = (window as any).adsbygoogle || [];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((window as any).adsbygoogle as any[]).push({});
    } catch {
      // AdSense not loaded yet — silently ignore
    }
  }, [isAllowed]);

  if (!isAllowed) return null;

  return (
    <ins
      className={`adsbygoogle ${className}`}
      style={style}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive="true"
    />
  );
}
