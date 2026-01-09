const BASE_URL = import.meta.env.VITE_API_URL!;

export interface CreateTTLPayload {
  baseTable: string;
  selectedTables: string[];
  email: string;
}
export interface CreateTTLPayload2 {
  selectedTables: string[];
  email: string;
}
export interface TTLResponse {
  msg: string;
  data?: {
    choosedBy: string;
    baseTable?: string;
    selectedTables?: string[];
  };
  status?: string;
}
export interface BookedTablesResponse {
  msg: string;
  bookedTables?: string[];
  status?: string;
}
export interface UserDataPayload {
  email: string;
  name: string;
  selectedTables: string[];
  chosenDateToVisit: string;
  chosenTimeToVisit: string;
  amountPaid: number;
  members: number;
  noteMsg: string;
}
export interface RazorpayOrder {
  id: string;
  amount: number;
  currency: string;
}
export interface VerifyPaymentPayload {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
  amountPaid?: number;
  members?: number;
  name?: string;
  email?: string;
  tables?: string[];
  date?: string;
  time?: string;
  message?: string;
}
export interface VerifyResponse {
  msg: string;
  status?: string;
  bookingId?: string;
}
export interface DataProp {
  _id?: string;
  name?: string;
  tables?: string[];
  dateToVisit?: string;
  timeToVisit?: string;
  totalMembers?: number;
  message?: string;
  paymentData?: {
    paymentId: string;
    amountPaid: number;
  };
}
interface ReservationDataResponse {
  msg?: string;
  status?: string;
  reservation: DataProp | null;
}

// Create TTL (on base table click)
export const createTTL = async (
  payload: CreateTTLPayload
): Promise<TTLResponse> => {
  const res = await fetch(`${BASE_URL}/reservations/create_ttl`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return res.json();
};

// Update TTL selected tables (members +/-)
export const updateTTL = async (
  payload: CreateTTLPayload2
): Promise<TTLResponse> => {
  const res = await fetch(`${BASE_URL}/reservations/update_ttl`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return res.json();
};

// Validate before payment
export const checkTTL = async (
  email: string,
  selectedTables: string[]
): Promise<TTLResponse> => {
  const res = await fetch(`${BASE_URL}/reservations/check_ttl`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, selectedTables }),
  });

  return res.json();
};

// fetch reserved tables array for a specfic date-time
export const fetchBookedTables = async (
  date: string,
  time: string
): Promise<BookedTablesResponse> => {
  const res = await fetch(
    `${BASE_URL}/reservations/booked_tables?date=${date}&time=${time}`
  );

  return res.json();
};

// fetch reserved tables array for a specfic date-time
export const fetchTableReservationDetils = async (
  b_id: string | null
): Promise<ReservationDataResponse> => {
  const res = await fetch(
    `${BASE_URL}/reservations/get_reservation_details?bookingId=${b_id}`
  );

  return res.json();
};

// create reservation order API
export const createPaymentOrder = async (
  totalAmt: number
): Promise<RazorpayOrder> => {
  const res = await fetch(`${BASE_URL}/payments/create_order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amountPaid: totalAmt }),
  });
  if (!res.ok) throw new Error("Failed to create order");
  return res.json();
};

// verify table-reservation payment API
export const verifyPayment = async (
  payload: VerifyPaymentPayload
): Promise<VerifyResponse> => {
  const res = await fetch(`${BASE_URL}/payments/table_reservation/verify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const result = await res.json();
  if (res.status === 409) return result;
  if (!res.ok) throw new Error(result.msg || "verification failed");
  return result;
};

// razorpay checkout popup opener
export const openRazorpayCheckout = (
  order: RazorpayOrder,
  userData: UserDataPayload,
  onSuccess: (data: VerifyResponse) => void,
  onError?: (err: unknown) => void
) => {
  const options = {
    key: import.meta.env.VITE_RAZORPAY_KEY!,
    amount: order.amount,
    currency: order.currency,
    order_id: order.id,
    description: "Table reservation payment",
    image: "https://foodiezeats.vercel.app/logo.png",

    handler: async (response: any) => {
      try {
        const verifyPayload: VerifyPaymentPayload = {
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
          name: userData.name,
          email: userData.email,
          tables: userData.selectedTables,
          date: userData.chosenDateToVisit,
          time: userData.chosenTimeToVisit,
          amountPaid: userData.amountPaid,
          members: userData.members,
          message: userData.noteMsg,
        };

        const data = await verifyPayment(verifyPayload);
        onSuccess(data);
      } catch (err) {
        onError?.(err);
      }
    },

    prefill: {
      name: userData.name,
      email: userData.email,
    },

    theme: { color: "#0f172a" },

    modal: {
      ondismiss: () => {
        console.log("Payment popup closed");
      },
    },
  };

  const rzp = new (window as any).Razorpay(options);
  rzp.open();
};
