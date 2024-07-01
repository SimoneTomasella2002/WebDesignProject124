const DB_NAME = "ImageCache";
const STORE_NAME = "images";
const DB_VERSION = 1;

let db;

const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onerror = () => reject("IndexedDB error");

    request.onsuccess = (event) => {
      db = event.target.result;
      resolve(db);
    };

    request.onupgradeneeded = (event) => {
      db = event.target.result;
      db.createObjectStore(STORE_NAME, { keyPath: "url" });
    };
  });
};

const getImageFromCache = (url) => {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], "readonly");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.get(url);

    request.onerror = () => reject("Error getting image from cache");
    request.onsuccess = (event) => resolve(event.target.result?.data);
  });
};

const saveImageToCache = (url, data) => {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORE_NAME], "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    const request = store.put({ url, data });

    request.onerror = () => reject("Error saving image to cache");
    request.onsuccess = () => resolve();
  });
};

export const cacheImage = async (url) => {
  if (!url) {
    console.warn("No URL provided for caching");
    return null;
  }

  if (!db) await openDB();

  try {
    const cachedImage = await getImageFromCache(url);
    if (cachedImage) return cachedImage;

    const response = await fetch(url);
    const blob = await response.blob();

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64data = reader.result;
        try {
          await saveImageToCache(url, base64data);
          resolve(base64data);
        } catch (error) {
          console.error("Error saving image to cache:", error);
          resolve(base64data); // Ritorna l'immagine anche se il salvataggio in cache fallisce
        }
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error("Error in cacheImage:", error);
    throw error;
  }
};
