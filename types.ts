// FIX: Import ReactNode type to resolve typing errors.
import type { ReactNode } from 'react';

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  avatarUrl: string;
}

export interface Feature {
  overline: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  layout: 'image-right' | 'image-left';
}

export interface Benefit {
  icon: ReactNode;
  title: string;
  description: string;
}