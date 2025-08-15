// src/data/metrics.js

// Build a month list from a start (YYYY-MM) through the current month
export function buildMonthBuckets(startYM = "2024-10") {
  const [startY, startM] = startYM.split("-").map(Number);
  const start = new Date(startY, startM - 1, 1);
  const now = new Date();
  const months = [];

  const fmt = new Intl.DateTimeFormat("en", { month: "short", year: "numeric" });

  for (let d = new Date(start); d <= new Date(now.getFullYear(), now.getMonth(), 1); d.setMonth(d.getMonth() + 1)) {
    const ym = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    months.push({
      ym,
      label: fmt.format(d), // e.g., "Oct 2024"
    });
  }
  return months;
}

/**
 * Helper that turns a sparse { 'YYYY-MM': value } object into a full monthly series
 * filling missing months with 0.
 */
export function seriesFromMap(months, mapObj) {
  return months.map(m => ({
    month: m.label,
    value: mapObj[m.ym] ?? 0,
  }));
}

/**
 * ---- Update THESE with your real monthly numbers ----
 * Keys must be 'YYYY-MM'. Missing months auto-fill to 0.
 */

// Raids per month (example data)
const raidsMap = {
  "2024-10": 12,
  "2024-11": 18,
  "2024-12": 25,
  "2025-01": 30,
  "2025-02": 22,
  "2025-03": 27,
  "2025-04": 35,
  "2025-05": 31,
  "2025-06": 29,
  "2025-07": 33,
  "2025-08": 21,
};

// Modding tickets/decisions per month (example)
const moddingMap = {
  "2024-10": 40,
  "2024-11": 45,
  "2024-12": 51,
  "2025-01": 63,
  "2025-02": 58,
  "2025-03": 70,
  "2025-04": 72,
  "2025-05": 69,
  "2025-06": 75,
  "2025-07": 80,
  "2025-08": 77,
};

// Events run per month (example)
const eventsMap = {
  "2024-10": 2,
  "2024-11": 3,
  "2024-12": 4,
  "2025-01": 2,
  "2025-02": 3,
  "2025-03": 4,
  "2025-04": 5,
  "2025-05": 3,
  "2025-06": 4,
  "2025-07": 4,
  "2025-08": 3,
};

export function getCategorySeries(category) {
  const months = buildMonthBuckets("2024-10");

  if (category === "raids") {
    return {
      title: "Monthly Raids",
      data: seriesFromMap(months, raidsMap),
      color: "#b18bff",
    };
  }
  if (category === "modding") {
    return {
      title: "Monthly Mod Actions",
      data: seriesFromMap(months, moddingMap),
      color: "#8be9fd",
    };
  }
  if (category === "events") {
    return {
      title: "Monthly Events",
      data: seriesFromMap(months, eventsMap),
      color: "#ff79c6",
    };
  }

  // "all" → summed series
  const combined = {};
  months.forEach(m => {
    const v =
      (raidsMap[m.ym] ?? 0) +
      (moddingMap[m.ym] ?? 0) +
      (eventsMap[m.ym] ?? 0);
    combined[m.ym] = v;
  });

  return {
    title: "All Activities (Sum)",
    data: seriesFromMap(months, combined),
    color: "#c4baff",
  };
}
