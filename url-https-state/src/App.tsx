import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Search, PlusCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from  "@/components/ui/dialog";
import { DialogFooter, DialogHeader } from "./components/ui/dialog";
import '@radix-ui/themes/styles.css';
import { Label } from "@radix-ui/react-label";
import { DialogClose } from "@radix-ui/react-dialog";
import { ThemeProvider } from "./components/theme-provider";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="p-4 md:p-6 max-w-4xl mx-auto space-y-4 text-gray-200">
        <h1 className="text-2xl md:text-3xl font-bold">Products</h1>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <form className="flex flex-col md:flex-row items-center gap-2 w-full md:w-auto">
            <Input name="id" placeholder="Product ID" className="w-full md:w-auto bg-gray-700 text-gray-200 border-gray-600" />
            <Input name="name" placeholder="Product Name" className="w-full md:w-auto bg-gray-700 text-gray-200 border-gray-600" />
            <Button type="submit" variant="outline" className="bg-gray-700 text-gray-200 border-gray-600 w-full md:w-auto">Filter<Search className="w-3 h-3 ml-2" /></Button>
          </form>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 text-white w-full md:w-auto"><PlusCircle className="mr-2 w-5 h-5" />New Product </Button>
            </DialogTrigger>

            <DialogContent className="bg-gray-800 text-gray-200">
              <DialogHeader>
                <DialogTitle>New product</DialogTitle>
                <DialogDescription>Add a product to the system</DialogDescription>
              </DialogHeader>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 items-center text-right gap-3">
                  <Label htmlFor="name">Name</Label>
                  <Input className="md:col-span-3 bg-gray-700 text-gray-200 border-gray-600" id="name" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 items-center text-right gap-3">
                  <Label htmlFor="price">Price</Label>
                  <Input className="md:col-span-3 bg-gray-700 text-gray-200 border-gray-600" id="price" />
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="outline" className="bg-gray-700 text-gray-200 border-gray-600 w-full md:w-auto">Cancel</Button>
                  </DialogClose>
                  <Button type="submit" className="bg-blue-600 text-white w-full md:w-auto">Save</Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
        <div className="border border-gray-600 rounded-lg p-2 overflow-x-auto">
          <Table className="bg-gray-800 text-gray-200 min-w-full">
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map((_, i) => {
                return (
                  <TableRow key={i} className="border-b border-gray-700">
                    <TableCell>#0000{i}</TableCell>
                    <TableCell>Product 0{i}</TableCell>
                    <TableCell>$129.99</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </ThemeProvider>
  );
}
