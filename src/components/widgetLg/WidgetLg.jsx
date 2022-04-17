import "./widgetLg.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">New Invoices</h3>
      <table className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Invoice ID</th>
            <th className="widgetLgTh">Category</th>
            <th className="widgetLgTh">Price</th>
            <th className="widgetLgTh">Status</th>
            <th className="widgetLgTh"></th>
          </tr>
        </thead>
        <tr className="widgetLgTrd">
          <td className="widgetLgUser">
            {/* <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            /> */}
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">Android</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
          <td>
            <MoreVertIcon fontSize="small" />
          </td>
        </tr>
        <tr className="widgetLgTrd">
          <td className="widgetLgUser">
            {/* <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            /> */}
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">Android</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
          <td>
            <MoreVertIcon fontSize="small" />
          </td>
        </tr>
        <tr className="widgetLgTrd">
          <td className="widgetLgUser">
            {/* <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            /> */}
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">Windows</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
          <td>
            <MoreVertIcon fontSize="small" />
          </td>
        </tr>
        <tr className="widgetLgTrd">
          <td className="widgetLgUser">
            {/* <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            /> */}
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">Mac</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
          <td>
            <MoreVertIcon fontSize="small" />
          </td>
        </tr>
        <tr className="widgetLgTrd">
          <td className="widgetLgUser">
            {/* <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            /> */}
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">Mac</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
          <td>
            <MoreVertIcon fontSize="small" />
          </td>
        </tr>
        <tr className="widgetLgTrd">
          <td className="widgetLgUser">
            {/* <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            /> */}
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">Mac</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
          <td>
            <MoreVertIcon fontSize="small" />
          </td>
        </tr>
        <tr className="widgetLgTrd">
          <td className="widgetLgUser">
            {/* <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            /> */}
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">Mac</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
          <td>
            <MoreVertIcon fontSize="small" />
          </td>
        </tr>
      </table>
    </div>
  );
}
