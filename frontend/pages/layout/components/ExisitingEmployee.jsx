function ExistingEmployee({ employees, setResults }) {
  return (
    <div className="mx-6">
      <h1 className="text-2xl font-bold">Existing Employee Requests</h1>

      <div className="flex items-center justify-between py-2 px-3 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 text-white my-2">
        <p>Employee ID</p>
        <p>Access Level</p>
        <p>Request Time</p>
        <p>Room</p>
      </div>

      {employees.map((employee) => (
        <div className="flex items-center justify-between py-2 px-3 rounded-md border border-purple-500 my-2">
          <p>{employee.id}</p>
          <p>{employee.access_level}</p>
          <p>{employee.request_time}</p>
          <p>{employee.room}</p>
        </div>
      ))}

      <button className="my-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition w-full" onClick={() => setResults(true)}>
        Simulate Access
      </button>
    </div>
  );
}

export default ExistingEmployee;
