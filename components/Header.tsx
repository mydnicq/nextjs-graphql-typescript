import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Users</a>
    </Link>
    <Link href="/users/addUser">
      <a style={linkStyle}>Add User</a>
    </Link>
    <Link href="/courses">
      <a style={linkStyle}>Courses</a>
    </Link>
  </div>
);

export default Header;
