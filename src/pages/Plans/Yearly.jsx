const Yearly = () => (
  <div className="p-2 overflow-auto">
    <div>
      <h1 className="text-center text-lg lg:text-4xl text-primary-light bg-[#013C4F] rounded-t-lg p-2">
        ₹4499
      </h1>
      <div className="bg-[#013C4F] bg-opacity-30 rounded-b-lg">
        <table className="w-full border-collapse">
          <tbody>
            <TableRow label="CONSOLIDATION" value="Free" />
            <TableRow
              label="STORAGE"
              value="40 DAYS (After 30 Days ₹75 Per Item Per Day)"
            />
            <TableRow
              label="PHOTO"
              value="3 PHOTOS FREE (DETAILED PHOTO SERVICE UPTO 10, ₹250)"
            />
            <TableRow label="PACKAGE RETURN" value="Free" />
            <TableRow label="Warehouse Pickup" value="Free" />
            <TableRow
              label="Scanned Copies Of Documents"
              value="₹40 Per Page"
            />
            <TableRow label="Shipping Address" value="Unlimited" />
            <TableRow
              label="Semiliquid/Liquid Clearance Charge"
              value="10% (EXCLUSIVE OF ALL OTHER CHARGES)"
            />
            <TableRow label="Real-Time Tracking" value="Free" />
            <TableRow
              label="Personal Shopper"
              value="5% Of Item Value (Exclusive Of All Charges)"
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
          <button className="p-4 bg-[#013C4F] mt-3 rounded-lg">Buy Now</button>
        </a>
      </div>
    </div>
  </div>
);

// TableRow component to render a table row
const TableRow = ({ label, value }) => (
  <tr className="flex gap-5 p-2 justify-between border-b">
    <td className="">
      <div className="flex max-w-xs whitespace-normal items-center">
        {label}
      </div>
    </td>
    <td className="ml-4 flex-shrink max-w-xs whitespace-normal">{value}</td>
  </tr>
);

export default Yearly;
