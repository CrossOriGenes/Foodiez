import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import TableReservationPaymentSuccess from "../components/success/TableReservationPaymentSuccess";
import {
  fetchTableReservationDetils,
  type DataProp,
} from "../utils/apiCallers";

function TableReservationSuccess() {
  const [data, setData] = useState<DataProp | null>(null);
  const [isLoading, setLoadReciept] = useState<boolean>(false);
  const navigate = useNavigate();
  const { search } = useLocation();
  const b_id = new URLSearchParams(search)?.get("b_id");
  const fetchedRef = useRef(false);

  let content = (
    <>
      <header className="absolute top-0 left-0 w-full py-3 px-6 z-10 bg-white">
        <div
          className="w-full flex items-center text-2xl cursor-pointer"
          onClick={() => navigate("../..")}
        >
          <i className="fa-solid fa-angle-left text-orange-500" />
          <span className="text-gray-800 font-bold">Back</span>
        </div>
      </header>
      <main>
        <TableReservationPaymentSuccess
          data={data}
          isLoading={isLoading}
          bookingId={b_id}
        />
      </main>
    </>
  );
  if (!b_id) {
    content = (
      <>
        <Navigate to="../.." />
        {toast.warning(
          <h4 className="text-lg font-bold text-amber-50 capitalize">
            Unauthorized Access!
          </h4>
        )}
      </>
    );
  }
  const fetchReservationData = async () => {
    try {
      setLoadReciept(true);
      const result = await fetchTableReservationDetils(b_id);
      if (result.status === "failed") {
        navigate("../..");
        toast.error(result.msg);
        return;
      }
      console.log(result.msg);
      console.log(result.reservation);
      setData(result.reservation);
    } catch (e) {
      console.error("Server error!", e);
    } finally {
      setLoadReciept(false);
    }
  };

  useEffect(() => {
    if (!fetchedRef.current) {
      fetchReservationData();
      fetchedRef.current = true;
    }
  }, []);

  return <>{content}</>;
}

export default TableReservationSuccess;
