import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import moment from "moment";
const RandomDataContext = createContext(null);
const RandomDataGenContext = createContext(null);

export function useRandomData() {
  return useContext(RandomDataContext);
}

export function useRandomDataGenerator() {
  return useContext(RandomDataGenContext);
}

export default function DashBoardContext({ children }) {
  const [data, setData] = useState({ chartData: [], tableData: [] });

  useEffect(() => {
    generateRandomData();
  }, []);

  const generateRandomData = useCallback(() => {
    const chartData = Array.from({ length: 9 }).map((_, i) => ({
      id: i + 1,
      accounts: Math.floor(Math.random() * 50),
      invoices: Math.floor(Math.random() * 100),
      date: moment().add(i, "month").add(i, "day").format("DD-MMM-YY"),
    }));

    const tableData = [
      {
        account: "Sales",
        thisMonth: Math.floor(Math.random() * 10000),
        ytd: Math.floor(Math.random() * 10000000),
      },
      {
        account: "Advertising",
        thisMonth: Math.floor(Math.random() * 10000),
        ytd: Math.floor(Math.random() * 10000000),
      },
      {
        account: "Inventory",
        thisMonth: Math.floor(Math.random() * 10000),
        ytd: Math.floor(Math.random() * 10000000),
      },
      {
        account: "Entertainment",
        thisMonth: Math.floor(Math.random() * 10000),
        ytd: Math.floor(Math.random() * 10000000),
      },
      {
        account: "Product",
        thisMonth: Math.floor(Math.random() * 10000),
        ytd: Math.floor(Math.random() * 10000000),
      },
    ];

    setData({ chartData, tableData });
  }, []);

  return (
    <RandomDataContext.Provider value={data}>
      <RandomDataGenContext.Provider value={generateRandomData}>
        {children}
      </RandomDataGenContext.Provider>
    </RandomDataContext.Provider>
  );
}
