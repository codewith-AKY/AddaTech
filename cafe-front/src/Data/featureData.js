import { 
  User,          // <-- Add User here!
  ShoppingCart, 
  Utensils, 
  Armchair, 
  Package, 
  TrendingUp, 
  Bell, 
  Smartphone ,ComputerIcon,
} from 'lucide-react';
export const featureData = [
    {
        id: 1,
        title: "User Management",
        description: "Secure login for owners and waiters with role based acess adnd easy profile management. Owners can manage their staff and assign roles and permissions.",
        icon: User,
    },
    {
        id: 2,
        title: "Menu Management",
        description: "Easily manage your menu items, prices, and descriptions. Update your offerings in real-time to keep your customers informed.",
        icon: Utensils,
    },
    {
        id: 3,
        title: "Table Reservation",
        description: "Enable customers to reserve tables online, reducing wait times and improving the overall dining experience.",
        icon: Armchair,
    },
    {
        id: 4,
        title: "Inventory Tracking",
        description: "Keep track of your inventory levels, receive alerts for low stock, and streamline your supply chain management.",
        icon: Package,
    },
    {
        id: 5,
        title: "Sales Analytics",
        description: "Gain insights into your sales performance, customer preferences, and trends to make data-driven decisions for your cafe.",
        icon: TrendingUp,
    },
    {
        id: 6,
        title: "Notifications & Alerts",
        description: "Receive real-time notifications for new orders, reservations, and important updates to stay on top of your cafe operations.",
        icon: Bell,
    },
    {
        id: 7,
        title: "Work Everywhere",
        description: "Integrate with mobile apps to provide a seamless experience for customers who prefer to order and pay through their smartphones.",
        icon: Smartphone,
        icon: ComputerIcon,
    },
];

