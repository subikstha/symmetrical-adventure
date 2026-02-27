'use client';

import type { Page } from '@/payload-types';

import React from 'react';

import { useLivePreview } from '@payloadcms/live-preview-react';

import { BlockRenderer } from './BlockRenderer';

type LivePreviewRendererProps = {
  initialData: Page;
  component?: React.ComponentType<{ data: Page }>;
};

export const LivePreviewRenderer: React.FC<LivePreviewRendererProps> = ({
  initialData,
  component: Component,
}) => {
  const { data } = useLivePreview({
    depth: 2,
    initialData,
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  });

  if (Component) {
    return <Component data={data} />;
  }

  return <BlockRenderer blocks={data.layout} />;
};
