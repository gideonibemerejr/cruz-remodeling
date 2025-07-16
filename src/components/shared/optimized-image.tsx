"use client";

import React from "react";
import Image, { ImageProps } from "next/image";

interface OptimizedImageProps extends Omit<ImageProps, "placeholder"> {
	className?: string;
	priority?: boolean;
	blur?: boolean;
	sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
	src,
	alt,
	className = "",
	priority = false,
	blur = true,
	sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
	...props
}) => {
	return (
		<Image
			src={src}
			alt={alt}
			className={`object-cover ${className}`}
			priority={priority}
			placeholder={blur ? "blur" : "empty"}
			blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
			sizes={sizes}
			quality={85}
			{...props}
		/>
	);
};

export default OptimizedImage;
