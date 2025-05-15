
import React, { useState } from "react";

export default function PresupuestoOperativo() {
  const [ingresos, setIngresos] = useState("");
  const [egresosFijos, setEgresosFijos] = useState("");
  const [egresosVariables, setEgresosVariables] = useState("");

  const parseInput = (value) => parseFloat(value) || 0;

  const totalEgresos = parseInput(egresosFijos) + parseInput(egresosVariables);
  const resultado = parseInput(ingresos) - totalEgresos;

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-2xl shadow">
      <h1 className="text-2xl font-bold text-center mb-4 text-blue-800">
        Simulador de Presupuesto Operativo
      </h1>

      <div className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700">Ingresos Mensuales Estimados ($)</label>
          <input
            type="number"
            value={ingresos}
            onChange={(e) => setIngresos(e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Egresos Fijos Mensuales ($)</label>
          <input
            type="number"
            value={egresosFijos}
            onChange={(e) => setEgresosFijos(e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Egresos Variables Mensuales ($)</label>
          <input
            type="number"
            value={egresosVariables}
            onChange={(e) => setEgresosVariables(e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>

        <div className="mt-6 bg-gray-50 p-4 rounded-xl">
          <p className="text-lg font-semibold text-blue-700">Total de Egresos: ${totalEgresos.toFixed(2)}</p>
          <p className="text-lg font-semibold text-green-700">
            Resultado Operativo: ${resultado.toFixed(2)} {resultado < 0 ? "(Pérdida)" : "(Utilidad)"}
          </p>
        </div>
      </div>
    </div>
  );
}
