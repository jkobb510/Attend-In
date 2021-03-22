import * as React from 'react';
import { CSSModule } from './index';

export interface CardImgOverlayProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
}

declare class CardImgOverlay extends React.Component<CardImgOverlayProps> {}
export default CardImgOverlay;
