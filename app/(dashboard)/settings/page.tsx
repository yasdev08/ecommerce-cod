import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export default function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">General Settings</h2>
          <div className="space-y-2">
            <div>
              <Label htmlFor="store-name">Store Name</Label>
              <Input id="store-name" placeholder="Enter your store name" />
            </div>
            <div>
              <Label htmlFor="store-description">Store Description</Label>
              <Textarea id="store-description" placeholder="Enter your store description" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Payment Settings</h2>
          <div className="flex items-center space-x-2">
            <Switch id="cod" />
            <Label htmlFor="cod">Enable Cash on Delivery</Label>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Notification Settings</h2>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Switch id="email-notifications" />
              <Label htmlFor="email-notifications">Email Notifications</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="sms-notifications" />
              <Label htmlFor="sms-notifications">SMS Notifications</Label>
            </div>
          </div>
        </div>
        <Button>Save Settings</Button>
      </div>
    </div>
  )
}

