if (typeof global.fetch === "function") {
  const originalFetch = global.fetch;
  global.fetch = async (...args) => {
    console.log("[FETCH]", ...args);
    const res = await originalFetch(...args);
    console.log("[FETCH RES]", res.status, res.url);
    return res;
  };
}
