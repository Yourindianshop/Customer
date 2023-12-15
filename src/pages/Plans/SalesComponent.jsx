const SaleComponent = () => (
  <div className="p-2 overflow-auto">
    <div className="">
      <h1 className="text-center text-lg lg:text-4xl text-primary-light bg-red rounded-t-lg p-2">
        Free
      </h1>
      <div className="bg-pink bg-opacity-50 rounded-b-lg">
        <table className="w-full border-collapse">
          <tbody>
            <TableRow label="CONSOLIDATION" value="₹399/SHIPMENT" />
            <TableRow
              label="STORAGE"
              value="25 DAYS (After 25 Days ₹75 Per Item Per Day)"
            />
            <TableRow
              label="PHOTO"
              value="3 PHOTOS FREE (DETAILED PHOTO SERVICE UPTO 10, ₹400)"
            />
            <TableRow label="PACKAGE RETURN" value="₹50 PER ITEM" />
            <TableRow label="Warehouse Pickup" value="₹400" />
            <TableRow
              label="Scanned Copies Of Documents"
              value="₹80 Per Page"
            />
            <TableRow label="Shipping Address" value="Upto 5" />
            <TableRow
              label="Semiliquid/Liquid Clearance Charge"
              value="10% (EXCLUSIVE OF ALL OTHER CHARGES)"
            />
            <TableRow label="Real-Time Tracking" value="Free" />
            <TableRow
              label="Personal Shopper"
              value="7% Of Item Value (Exclusive Of All Charges)"
            />
            <TableRow label="Personal Shopper" value="Free" />
            <TableRow
              label="Assisted Purchase"
              value="Actual Charges + Other Charges"
            />
          </tbody>
        </table>

        {/* Add your "For Sale" component content here */}
        <a href="/SignIn" className="flex justify-center items-center">
          <button className="p-4 bg-red mt-3 rounded-lg">Buy Now</button>
        </a>
      </div>
    </div>
  </div>
);

// TableRow component to render a table row
const TableRow = ({ label, value }) => (
  <tr className="flex gap-5 p-2 justify-between border-b">
    <td className="">
      <div className="flex max-w-xs whitespace-normal flex-wrap items-center">
        <div className=""></div>
        {label}
      </div>
    </td>
    <td className="ml-4 flex-shrink max-w-xs whitespace-normal">{value}</td>
  </tr>
);

export default SaleComponent;
