import Link from "next/link";

const Navbar = () => {
    return (
        <>

    <nav className="flex justify-between items-center px-6 py-4 bg-gray-100 border-b border-gray-300">
  <div className="flex gap-4">
    <Link href="/" className="hover:text-blue-500">Home</Link>
    <Link href="/about" className="hover:text-blue-500">About</Link>
    <Link href="/contact" className="hover:text-blue-500">Contact</Link>
  </div>

  <div className="flex gap-4">
    <Link href="/login" className="hover:text-blue-500">Login</Link>
    <Link href="/register" className="hover:text-blue-500">Register</Link>
  </div>
</nav>
        </>
    )
}
export default Navbar;