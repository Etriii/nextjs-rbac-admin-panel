type HeaderProps = {
  user_role: string;
};

export default function Header({ user_role }: HeaderProps) {
  return <div>{user_role === "admin" ? "Admin" : "User"} Header</div>;
}
