"use client"

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react";
import { AddProductDialog } from "@/components/AddProductDialog"
import { EditOrderDialog } from "@/components/EditOrderDialog"

type Order = {
  id: string;
  status: string;
  totalAmount: number;
  currency: string;
  products: { product: { title: string }; quantity: number }[];
};


export default function Orders() {

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const handleDeleteOrder = (id: string) => {
    setOrders(orders.filter(order => order.id !== id))
  }
  
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("/api/orders");
        if (!res.ok) throw new Error("Failed to fetch orders");
        const data = await res.json();
        setOrders(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Orders</h1>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Payment Method</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>${order.totalAmount}</TableCell>
              <TableCell>
                <Badge >
                  {order.status}
                </Badge>
              </TableCell>
              <TableCell>{order.products.map((product, index) => (
                  <div key={index}>
                    {product.product.title} (x{product.quantity})
                  </div>
                ))}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <EditOrderDialog order={order} />
                  <Button variant="destructive" onClick={() => handleDeleteOrder(order.id)}>Delete</Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

