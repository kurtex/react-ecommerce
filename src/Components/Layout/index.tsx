import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-col mt-20 items-center">
            {children}
        </div>
    );
};

export default Layout;