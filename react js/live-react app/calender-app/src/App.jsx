import { useState } from "react";

export default function CalendarApp() {
  const [date, setDate] = useState(new Date());

  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const today = new Date();

  const prevMonth = () => {
    setDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setDate(new Date(year, month + 1, 1));
  };

  const days = [];

  // Empty slots
  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={"empty" + i}></div>);
  }

  // Actual days
  for (let i = 1; i <= daysInMonth; i++) {
    const isToday =
      i === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();

    days.push(
      <div
        key={i}
        className={`p-3 rounded text-center ${
          isToday ? "bg-blue-500" : "bg-gray-800"
        }`}
      >
        {i}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">

      <h1 className="text-3xl font-bold text-center mb-6">
        Calendar 📅
      </h1>

      {/* Header */}
      <div className="flex justify-between items-center max-w-md mx-auto mb-4">
        <button onClick={prevMonth}>⬅️</button>
        <h2 className="text-xl font-semibold">
          {date.toLocaleString("default", { month: "long" })} {year}
        </h2>
        <button onClick={nextMonth}>➡️</button>
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-2 max-w-md mx-auto">
        {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map((d) => (
          <div key={d} className="text-center font-bold">
            {d}
          </div>
        ))}

        {days}
      </div>

    </div>
  );
}