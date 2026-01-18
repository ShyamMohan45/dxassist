// export default function SeverityCard({ condition }) {
//   const severityColors = {
//     Critical: "border-red-500 text-red-400",
//     Urgent: "border-yellow-500 text-yellow-400",
//     Stable: "border-green-500 text-green-400",
//     Low: "border-green-500 text-green-400"
//   }

//   return (
//     <div className={`border rounded-lg p-4 ${severityColors[condition.severity] || "border-gray-500"}`}>
//       <div className="flex justify-between items-center mb-2">
//         <h3 className="font-semibold text-lg">{condition.name}</h3>
//         <span className="text-sm font-bold">{condition.severity}</span>
//       </div>

//       <p className="text-sm text-gray-300">
//         {condition.justification}
//       </p>
//     </div>
//   )
// }


export default function SeverityCard({ condition }) {
  const color =
    condition.severity === "High"
      ? "border-red-500 text-red-400"
      : condition.severity === "Medium"
      ? "border-yellow-400 text-yellow-300"
      : "border-green-400 text-green-400";

  return (
    <div className={`border rounded p-4 ${color}`}>
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">{condition.name}</h3>
        <span className="text-sm">{condition.severity}</span>
      </div>
      <p className="text-sm text-white/70">
        {condition.justification}
      </p>
    </div>
  );
}
