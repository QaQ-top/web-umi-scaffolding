import React, { ReactNode } from 'react';
import { Typography, Tooltip } from 'antd';
import { ParagraphProps } from 'antd/lib/typography/Paragraph';
import { TooltipPlacement } from 'antd/lib/tooltip';

interface Props {
  children?: ReactNode;
  containerClassName?: string;
  placement?: TooltipPlacement;
  paragraphAttr?: ParagraphProps; // paragraph组件的属性
}
const { Paragraph } = Typography;

const TableColEllipsis: React.FC<Props> = ({
  // maxWidth,
  children,
  containerClassName,
  placement,
  paragraphAttr = {},
}) => {
  return (
    <div className={containerClassName}>
      <Tooltip
        title={children}
        trigger="hover"
        placement={placement || 'bottom'}
        getPopupContainer={(triggerNode: any) => triggerNode.parentNode}
      >
        <Paragraph ellipsis {...paragraphAttr}>
          {children}
        </Paragraph>
      </Tooltip>
    </div>
  );
};
export default TableColEllipsis;
