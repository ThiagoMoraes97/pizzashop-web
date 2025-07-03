import { Link } from "react-router"
import type { LinkProps } from "react-router"
import { useLocation } from "react-router"

type NavLinkProps = LinkProps

export function NavLink(props:NavLinkProps ) {
  
  const { pathname } = useLocation()

  return (
    <Link 
      data-current={pathname === props.to} 
      {...props} 
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
    />
  )
}