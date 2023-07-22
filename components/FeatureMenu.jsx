import { CopyIcon } from "@radix-ui/react-icons"

import { CursorProvider } from "@/lib/CursorContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function FeatureMenu() {
  return (
    <div hidecircel="true" showhand="true">
      <Popover>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Abbandoned UI features
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="flex flex-col space-y-2 text-center sm:text-left">
                  <h3 className="text-lg font-semibold">Previous landings</h3>
                  <p className="text-sm text-muted-foreground">
                    These are some of the UI features that I have never finished
                    because...
                  </p>
                </div>{" "}
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </Popover>
    </div>
  )
}
