(() => {
  function getAuthStorage() {
    function shouldRememberSession() {
      try {
        return localStorage.getItem("sakeena-remember-session") !== "false";
      } catch (error) {
        console.error("Could not read the remember-session preference:", error);
        return true;
      }
    }

    function activeStorage() {
      return shouldRememberSession() ? localStorage : sessionStorage;
    }

    function inactiveStorage() {
      return shouldRememberSession() ? sessionStorage : localStorage;
    }

    return {
      getItem: (key) => activeStorage().getItem(key),
      setItem: (key, value) => {
        inactiveStorage().removeItem(key);
        activeStorage().setItem(key, value);
      },
      removeItem: (key) => {
        localStorage.removeItem(key);
        sessionStorage.removeItem(key);
      }
    };
  }

  function createClient() {
    const config = window.TITO_SUPABASE_CONFIG;
    if (!window.supabase?.createClient || !config?.url || !config?.anonKey) return null;
    try {
      return window.supabase.createClient(config.url, config.anonKey, {
        auth: { storage: getAuthStorage() }
      });
    } catch (error) {
      console.error("Could not initialize the Supabase client:", error);
      return null;
    }
  }

  function mapPropertyRow(row) {
    return {
      id: row.id,
      title: row.title,
      area: row.area,
      city: row.city,
      price: Number(row.price),
      kind: row.kind,
      type: row.property_type,
      beds: Number(row.beds),
      baths: Number(row.baths),
      size: Number(row.size),
      description: row.description || "",
      images: Array.isArray(row.images) ? row.images : [],
      image: Array.isArray(row.images) ? row.images[0] || "" : "",
      lat: row.lat,
      lng: row.lng,
      publisher: row.publisher,
      initials: String(row.publisher || "").slice(0, 2),
      phone: row.phone,
      ownerId: row.owner_id || null,
      userAdded: true,
      source: "supabase"
    };
  }

  window.SakeenaBackend = { createClient, mapPropertyRow };
})();
