import { Search, ShoppingCart, User, Menu, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm text-muted-foreground border-b">
          <p>Free shipping on orders over $50</p>
          <div className="flex items-center gap-4">
            <Link to="/support" className="hover:text-foreground">Support</Link>
            <Link to="/track" className="hover:text-foreground">Track Order</Link>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            Luxe
          </Link>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 w-full"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary">
                3
              </Badge>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 py-4 border-t">
          <Link to="/products" className="text-sm font-medium hover:text-primary">
            All Products
          </Link>
          <Link to="/categories/clothing" className="text-sm font-medium hover:text-primary">
            Clothing
          </Link>
          <Link to="/categories/accessories" className="text-sm font-medium hover:text-primary">
            Accessories
          </Link>
          <Link to="/categories/shoes" className="text-sm font-medium hover:text-primary">
            Shoes
          </Link>
          <Link to="/categories/bags" className="text-sm font-medium hover:text-primary">
            Bags
          </Link>
          <Link to="/sale" className="text-sm font-medium text-sale hover:text-sale/80">
            Sale
          </Link>
        </nav>
      </div>
    </header>
  );
}
