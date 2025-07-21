export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div>Admin Header</div>
            <div>{children}</div>
            <div>Admin footer</div>
        </div>
    )
}