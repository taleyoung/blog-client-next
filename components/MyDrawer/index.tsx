import React, { FC, useState, ReactNode } from "react";
import { Drawer } from "antd";

interface Props {
  children: ReactNode;
  showIcon: ReactNode;
  placement: "right" | "top" | "bottom" | "left";
  topVh: string;
  containerClass: string;
  title?: string;
}

const MyDrawer: FC<Props> = ({
  children,
  showIcon,
  placement = "right",
  topVh,
  containerClass,
  title
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div>
      <div className="drawer-btn" onClick={() => setDrawerOpen(true)}>
        {showIcon}
      </div>
      <Drawer
        title={title ? title : "Taleyoung's Blog"}
        placement={placement}
        closable={false}
        onClose={() => setDrawerOpen(false)}
        visible={drawerOpen}
        getContainer={() => document.querySelector(containerClass)}
      >
        {children}
      </Drawer>
      <style jsx>{`
        .drawer-btn {
          display: none;
        }
        @media screen and (max-width: 736px) {
          .drawer-btn {
            display: block;
            position: fixed;
            width: 40px;
            height: 40px;
            top: ${topVh};
            left: 10px;
            box-shadow: 2px 0 8px rgba(0, 0, 0, 0.15);
            border-radius: 4px 0 0 4px;
            text-align: center;
            line-height: 41px;
            z-index: 999;
            background: #fff;
          }
        }
      `}</style>
    </div>
  );
};

export default MyDrawer;
