import React, { useEffect, useState } from "react";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  activeProps?: { className?: string; [key: string]: any };
  activeOptions?: { exact?: boolean };
}

export const Link: React.FC<LinkProps> = ({
  to,
  activeProps,
  activeOptions,
  className = "",
  children,
  onClick,
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      
      // Clean up paths for comparison (remove trailing slashes except for root)
      const cleanPath = (p: string) => {
        const withSlash = p.startsWith("/") ? p : "/" + p;
        return withSlash.endsWith("/") && withSlash !== "/" ? withSlash.slice(0, -1) : withSlash;
      };

      const normalizedPath = cleanPath(currentPath);
      const normalizedTo = cleanPath(to);

      if (activeOptions?.exact) {
        setIsActive(normalizedPath === normalizedTo);
      } else {
        // If it's root, do an exact match, otherwise do startswith
        if (normalizedTo === "/") {
          setIsActive(normalizedPath === "/");
        } else {
          setIsActive(normalizedPath.startsWith(normalizedTo));
        }
      }
    }
  }, [to, activeOptions]);

  // Combine classNames
  const activeClass = isActive && activeProps?.className ? activeProps.className : "";
  const combinedClassName = `${className} ${activeClass}`.trim();

  // Combine other activeProps
  const combinedProps = {
    ...props,
    ...(isActive ? activeProps : {}),
  };

  return (
    <a href={to} className={combinedClassName} onClick={onClick} {...combinedProps}>
      {children}
    </a>
  );
};
