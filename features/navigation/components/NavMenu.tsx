import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"

export default function NavMenu() {
  return (
    <nav className="relative">
      <MobileNav />
      <DesktopNav />
    </nav>
  )
}
