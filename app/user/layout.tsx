export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <div>User Header</div>
            <div>{children}</div>
            <div>User footer</div>
        </div>
    )
}