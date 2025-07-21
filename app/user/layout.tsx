import Header from "../../components/AdminHeader";

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Header user_role="user"/>
            <div>{children}</div>
            <div>User footer</div>
        </div>
    )
}