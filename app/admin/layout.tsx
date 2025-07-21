import Header from "../../components/AdminHeader";

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Header user_role="admin"/>
            <div>{children}</div>
            <div>Admin footer</div>
        </div>
    )
}