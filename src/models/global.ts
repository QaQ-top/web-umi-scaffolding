import React, { useState, useCallback } from 'react';
export default function Global() {
  const [collapsed, setCollapsed] = useState(false);
  const onResize = useCallback(() => {
    const event = document.createEvent('Event');
    event.initEvent('resize', true, true);
    window.dispatchEvent(event);
  }, []);

  return {
    collapsed,
    toggleCollapsed: () => {
      setCollapsed(state => !state);
      onResize();
    },
    onResize,
  };
}
