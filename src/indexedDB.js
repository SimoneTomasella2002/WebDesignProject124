import { openDB } from 'idb';

const dbPromise = openDB('image-store', 1, {
    upgrade(db) {
        db.createObjectStore('images');
    },
});

export async function setImage(key, image) {
    const db = await dbPromise;
    await db.put('images', image, key);
}

export async function getImage(key) {
    const db = await dbPromise;
    return await db.get('images', key);
}
