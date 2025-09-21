function ResultedEmployee({ employees }) {
  const rooms = {
    ServerRoom: {
      minAccess: 2,
      open: "09:00",
      close: "11:00",
      cooldown: 15,
    },
    Vault: {
      minAccess: 3,
      open: "09:00",
      close: "10:00",
      cooldown: 30,
    },
    "R&D Lab": {
      minAccess: 1,
      open: "08:00",
      close: "12:00",
      cooldown: 10,
    },
  };

  function toMinutes(timeStr) {
    const [h, m] = timeStr.split(":").map(Number);
    return h * 60 + m;
  }

  function simulateAccess(emp) {
    const rule = rooms[emp.room];
    if (!rule) return { status: "Denied", reason: "Invalid room" };

    // Check access level
    if (emp.access_level < rule.minAccess) {
      return { status: "Denied", reason: "Below required access level" };
    }

    // Check time window
    const reqTime = toMinutes(emp.request_time);
    const openTime = toMinutes(rule.open);
    const closeTime = toMinutes(rule.close);

    if (reqTime < openTime || reqTime > closeTime) {
      return { status: "Denied", reason: "Outside allowed time" };
    }

    // (Cooldown check would need history of requests, skipping here)
    return { status: "Granted", reason: `Access granted to ${emp.room}` };
  }

  return (
    <div className="mx-6 my-6">
      <h1 className="text-2xl font-bold mb-3">Simulation Results</h1>
      <div className="space-y-2">
        {employees.map((emp, index) => {
          const result = simulateAccess(emp);
          return (
            <div
              key={index}
              className={`flex justify-between items-center px-4 py-2 rounded-md shadow ${
                result.status === "Granted"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              <p>
                <span className="font-semibold">ID:</span> {emp.id}
              </p>
              <p>{result.status}</p>
              <p>{result.reason}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ResultedEmployee;
