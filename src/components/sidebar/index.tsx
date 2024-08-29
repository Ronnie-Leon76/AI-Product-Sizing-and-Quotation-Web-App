"use client"

import { cn } from '@/lib/utils';
import React from 'react'
import MaxMenu from './maximized-menu';
import useSideBar from '@/hooks/sidebar/use-sidebar';
import { MinMenu } from './minimized-menu';

type Props = {}

const SideBar = (props: Props) => {
  const { expand, onExpand, page, onSignOut } = useSideBar();
  return (
    <div
      className={cn(
        "bg-cream dark:bg-neutral-950 h-full w-[60px] fill-mode-forwards fixed md:relative",
        expand == undefined && "",
        expand == true
          ? "animate-open-sidebar"
          : expand == false && "animate-close-sidebar"
      )}
    >
      {expand ? (
        <MaxMenu
          current={page!}
          onExpand={onExpand}
          onSignOut={onSignOut}
        />
      ) : (
        <MinMenu
          onShrink={onExpand}
          current={page!}
          onSignOut={onSignOut}
        />
      )}
    </div>
  );
}

export default SideBar