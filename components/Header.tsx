import { Bell, User } from "lucide-react"

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-gray-800 text-xl font-bold">E-commerce Management</h1>
          </div>
          <div className="flex items-center">
            <button className="text-gray-500 focus:outline-none mr-4">
              <Bell size={20} />
            </button>
            <button className="text-gray-500 focus:outline-none">
              <User size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

