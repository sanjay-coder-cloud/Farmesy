import React, { useState, useEffect } from 'react';

interface ImageBannerProps {
  image: string;
  title: string;
  subtitle?: string;
  className?: string;
}

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80';

export const ImageBanner: React.FC<ImageBannerProps> = ({
  image,
  title,
  subtitle,
  className = '',
}) => {
  const [imgSrc, setImgSrc] = useState<string>(image);

  useEffect(() => {
    setImgSrc(image);
  }, [image]);

  return (
    <div className={`relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${className}`}>
      <img
        src={imgSrc}
        alt={title}
        onError={() => setImgSrc(FALLBACK_IMAGE)}
        className="w-full h-[300px] md:h-[400px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-2 font-display">{title}</h3>
        {subtitle && <p className="text-sm md:text-base text-slate-200">{subtitle}</p>}
      </div>
    </div>
  );
};
