import { ReactNode } from "react";
import AdSpace from "./AdSpace";

interface PageLayoutProps {
  children: ReactNode;
  showLeftSidebar?: boolean;
  showRightSidebar?: boolean;
}

const PageLayout = ({ 
  children, 
  showLeftSidebar = false, 
  showRightSidebar = true 
}: PageLayoutProps) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar - Hidden on mobile */}
        {showLeftSidebar && (
          <aside className="hidden lg:block lg:col-span-2 space-y-6">
            <AdSpace size="banner" label="Sidebar Ad" className="sticky top-4" />
            <AdSpace size="medium" label="Sidebar Ad" />
            <AdSpace size="small" label="Sidebar Ad" />
          </aside>
        )}

        {/* Main Content */}
        <main 
          className={`
            ${showLeftSidebar && showRightSidebar ? 'lg:col-span-8' : ''}
            ${showLeftSidebar && !showRightSidebar ? 'lg:col-span-10' : ''}
            ${!showLeftSidebar && showRightSidebar ? 'lg:col-span-9' : ''}
            ${!showLeftSidebar && !showRightSidebar ? 'lg:col-span-12' : ''}
          `}
        >
          {children}
        </main>

        {/* Right Sidebar - Hidden on mobile */}
        {showRightSidebar && (
          <aside className="hidden lg:block lg:col-span-3 space-y-6">
            <div className="sticky top-4 space-y-6">
              <AdSpace size="banner" label="Sponsored" />
              <AdSpace size="medium" label="Advertisement" />
              <AdSpace size="small" label="Promo" />
              <AdSpace size="banner" label="Featured" />
              <AdSpace size="small" label="Partner Ad" />
            </div>
          </aside>
        )}
      </div>
    </div>
  );
};

export default PageLayout;
