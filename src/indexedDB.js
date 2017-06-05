let db;

const getDatabaseConnection = async () => {
    return db ? db :
    await new Promise((resolve, reject) => {
        let request = indexedDB.open("userGalleries");
        request.onerror = function(event) {
            alert(event.target.error);
        };
        request.onsuccess = function(event) {
            db = event.target.result;
            console.log("indexeddb connected!");
            resolve(db);
        };
        request.onupgradeneeded = function(event) {
            db = event.target.result;
            db.createObjectStore("galleries", { autoIncrement: true });
        };
    });
};

export const retrieveUserData = () => {
    return new Promise(async(resolve, reject) => {
        let userData = [], db = await getDatabaseConnection();
        let objectStore = db.transaction("galleries").objectStore("galleries");

        objectStore.openCursor().onsuccess = function(event) {
            let cursor = event.target.result;
            if (cursor) {
                userData.push(cursor.value);
                cursor.continue();
            } else {
                console.log("Got all data: ");
                console.log(userData);
                resolve(userData[0]);
            }
        };
    });
};

export const saveUserData = async (userData) => {
    let db = await getDatabaseConnection();
    let objectStore = db.transaction("galleries", "readwrite").objectStore("galleries");
    objectStore.clear();
    let request = objectStore.add(userData);
    request.onsuccess = function(event) {
        console.log("user data saved successfully!");
    };
};

export const deleteDataById = (targetId) => {
    let newData = {};
    
    retrieveUserData().then((o) => {
        for(var id in o) {
            if (id !== targetId) newData[id] = o[id];
        }
        saveUserData(newData);
    });
}