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
  { id: 1, name: "Aziret", contact: "+996707763896" },
  { id: 2, name: "John Doe", contact: "john@example.com" },
  { id: 3, name: "Alice Smith", contact: "+1234567890" },
  { id: 4, name: "Emily Brown", contact: "emily@example.com" },
  { id: 5, name: "Michael Johnson", contact: "+9876543210" },
  { id: 6, name: "Sophia Garcia", contact: "sophia@example.com" },
  { id: 7, name: "Liam Martinez", contact: "+1555123456" },
  { id: 8, name: "Olivia Rodriguez", contact: "olivia@example.com" },
  { id: 9, name: "William Lopez", contact: "+1999888777" },
  { id: 10, name: "Emma Lee", contact: "emma@example.com" },
];

const Customers = () => {
  return (
    <div className="max-w-[1330px] mx-auto mt-6">
      <Table>
        <TableCaption>Список ваших Клиентов.</TableCaption>
        <TableHeader>
          <TableRow className="text-[12px] lg:text-sm">
            <TableHead className="w-[100px]">№</TableHead>
            <TableHead>Имя</TableHead>
            <TableHead>email или номер телефона</TableHead>
            <TableHead className="text-right">статус выполнения</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customersData.map((customer, index) => (
            <TableRow key={index} className="text-[12px] lg:text-sm">
              <TableCell className="font-medium">{customer.id}</TableCell>
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.contact}</TableCell>
              <TableCell className="text-right ">
                <Checkbox className="mr-6" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Customers;
