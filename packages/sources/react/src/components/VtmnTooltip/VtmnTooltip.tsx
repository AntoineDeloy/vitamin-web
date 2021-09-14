import * as React from 'react';
import { VtmnTooltipPosition } from './types';
import { VtmnIcon } from '../VtmnIcon';
import { VitamixId } from '../../../../icons/dist/vitamix/font/vitamix';

export interface VtmnTooltipProps
  extends React.ComponentPropsWithoutRef<'span'> {
  /**
   * The position of tooltip from original element.
   * @default 'top'
   */
  position?: VtmnTooltipPosition;

  /**
   * The tooltip text of the span.
   * @default ''
   */
  tooltip: string;

  /**
   * The tooltip associated icon.
   * @default ''
   */
  icon?: VitamixId;

  /**
   * The hoverable text.
   * @default ''
   */
  textValue?: string;
}

export const VtmnTooltip = ({
  textValue,
  icon,
  position = VtmnTooltipPosition.TOP,
  tooltip = '',
  className,
  ...props
}: VtmnTooltipProps) => {
  return (
    <div className="vtmn-flex">
      <span
        tabIndex={0}
        className={`vtmn-tooltip ${className ?? className}`}
        data-tooltip={tooltip}
        data-position={position}
        {...props}>
        {icon ? <VtmnIcon size={16} color="black" value={icon} /> : textValue}
      </span>
    </div>
  );
};

export default React.memo(VtmnTooltip);