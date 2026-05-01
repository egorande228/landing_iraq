import Image from 'next/image';

import { joinClasses } from '@/lib/classes';

type CardMediaProps = {
  tone?:
    | 'default'
    | 'sports'
    | 'casino'
    | 'offers'
    | 'trust'
    | 'opportunity'
    | 'routes'
    | 'tools'
    | 'onboarding'
    | 'faq'
    | 'stage';
  variant?: 'default' | 'compact' | 'banner';
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
  sizes?: string;
};

function getImageSizes(variant: NonNullable<CardMediaProps['variant']>) {
  if (variant === 'banner') {
    return '(min-width: 1024px) 42vw, 100vw';
  }

  if (variant === 'compact') {
    return '(min-width: 1024px) 18vw, (min-width: 640px) 42vw, 100vw';
  }

  return '(min-width: 1280px) 18vw, (min-width: 640px) 42vw, 100vw';
}

export function CardMedia({
  tone = 'default',
  variant = 'default',
  className,
  imageSrc,
  imageAlt = '',
  sizes,
}: CardMediaProps) {
  return (
    <div
      aria-hidden="true"
      className={joinClasses('card-media', `card-media--${tone}`, `card-media--${variant}`, className)}
      data-has-image={imageSrc ? 'true' : 'false'}
    >
      {imageSrc ? (
        <>
          <Image
            alt={imageAlt}
            className="card-media__image"
            fill
            sizes={sizes ?? getImageSizes(variant)}
            src={imageSrc}
          />
          <span className="card-media__image-overlay" />
        </>
      ) : null}
      <span className="card-media__glow card-media__glow--primary" />
      <span className="card-media__glow card-media__glow--secondary" />
      <span className="card-media__panel card-media__panel--back" />
      <span className="card-media__panel card-media__panel--front" />
      <span className="card-media__orb" />
      <span className="card-media__grid" />
    </div>
  );
}
