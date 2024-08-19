import { atom } from 'recoil'

export const josndata=atom({
    key:'josndata',
    default:[
  {
    id:1,
    orderId: "#281209",
    status: "Successful",
    transactionID: "TRX123456",
    refundDate: "Today, 8:45 PM",
    orderAmount: "₹1125.00"
  },
  {
    id:2,
    orderId: "#281210",
    status: "Processing",
    transactionID: "TRX789012",
    refundDate: "Tomorrow, 10:00 AM",
    orderAmount: "₹950.50"
  },
  {
    id:3,
    orderId: "#281211",
    status: "Successful",
    transactionID: "TRX345678",
    refundDate: "Yesterday, 3:30 PM",
    orderAmount: "₹750.00"
  },
  {
    id:4,
    orderId: "#281212",
    status: "Successful",
    transactionID: "TRX901234",
    refundDate: "Today, 11:20 AM",
    orderAmount: "₹2000.00"
  },
  {
    id:5,
    orderId: "#281213",
    status: "Processing",
    transactionID: "TRX567890",
    refundDate: "Tomorrow, 9:00 AM",
    orderAmount: "₹1800.00"
  },
  {
    id:6,
    orderId: "#281214",
    status: "Processing",
    transactionID: "TRX098765",
    refundDate: "Yesterday, 2:00 PM",
    orderAmount: "₹500.00"
  },
  {
    id:7,
    orderId: "#281215",
    status: "Successful",
    transactionID: "TRX456789",
    refundDate: "Today, 10:30 AM",
    orderAmount: "₹3000.00"
  },
  {
    id:8,
    orderId: "#281216",
    status: "Processing",
    transactionID: "TRX987654",
    refundDate: "Tomorrow, 11:30 AM",
    orderAmount: "₹1200.00"
  },
  {
    id:9,
    orderId: "#281217",
    status: "Processing",
    transactionID: "TRX654321",
    refundDate: "Yesterday, 4:00 PM",
    orderAmount: "₹900.00"
  },
  {
    id:10,
    orderId: "#281218",
    status: "Successful",
    transactionID: "TRX234567",
    refundDate: "Today, 9:45 AM",
    orderAmount: "₹1500.00"
  }
]
})