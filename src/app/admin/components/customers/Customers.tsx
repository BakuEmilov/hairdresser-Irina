import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Checkbox } from "@/components/ui/checkbox";

const customersData = [
  { name: "Aziret", contact: "+996707763896", time: "12:00" },
  { name: "John Doe", contact: "john@example.com", time: "13:00" },
  { name: "Alice Smith", contact: "+1234567890", time: "14:00" },
  { name: "Emily Brown", contact: "emily@example.com", time: "15:00" },
  { name: "Michael Johnson", contact: "+9876543210", time: "16:00" },
  { name: "Sophia Garcia", contact: "sophia@example.com", time: "17:00" },
  { name: "Liam Martinez", contact: "+1555123456", time: "18:00" },
  { name: "Olivia Rodriguez", contact: "olivia@example.com", time: "19:00" },
  { name: "William Lopez", contact: "+1999888777", time: "20:00" },
  { name: "Emma Lee", contact: "emma@example.com", time: "21:00" },
];

const Customers = () => {
  return (
    <div className="max-w-[1330px] mx-auto mt-6">
      <Table>
        <TableCaption>Список ваших Клиентов.</TableCaption>
        <TableHeader>
          <TableRow className="text-[12px] lg:text-sm">
            <TableHead>Имя</TableHead>
            <TableHead>Номер телефона</TableHead>
            <TableHead className="text-right">Время записи</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customersData.map((customer, index) => (
            <TableRow key={index} className="text-[12px] lg:text-sm">
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.contact}</TableCell>
              <TableCell className="text-right">{customer.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Customers;
