import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
   

    // Fetch orders for the logged-in user
    const orders = await prisma.order.findMany({
      
      include: {
        products: {
          include: {
            product: true,
          },
        },
      },
    });

    // Return orders
    return NextResponse.json(orders, { status: 200 });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { message: "Failed to fetch orders" },
      { status: 500 }
    );
  } 
}

export async function PATCH(req: Request) {
  try {
    /* const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    } */ 

    const { orderId, status } = await req.json();

    const order = await prisma.order.update({
      where: { id: orderId },
      data: { status },
    });

    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.error("Error updating order:", error);
    return NextResponse.json({ message: "Error updating order" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    /* const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    } */

    const { orderId } = await req.json();

    await prisma.order.delete({
      where: { id: orderId },
    });

    return NextResponse.json({ message: "Order deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting order:", error);
    return NextResponse.json({ message: "Error deleting order" }, { status: 500 });
  }
}


