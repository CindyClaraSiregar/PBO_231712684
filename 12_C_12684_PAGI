console.log("PENDAFTARAN MAHASISWA BARU UNIVERSITAS CENDRAWASIH");
console.log("_".repeat(50));

function validateData(studentData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!studentData.nama || !studentData.ktp) {
                reject("Invalid data");
            } else if (studentData.umur < 17) {
                reject("Student is too young");
            } else if (studentData.ktp.length !== 16) {
                reject("Invalid KTP number");
            } else {
                resolve("Valid");
            }
        }, 5000); 
    });
}
async function processData(studentData) {
    try {
        await validateData(studentData);
        console.log(`Student ${studentData.nama} has been successfully registered`);
    } catch (error) {
        console.log(`An error occurred: ${error}`);
    }
}

processData({ nama: "", umur: 22, ktp: "1234567890123456" });
processData({ nama: "Fahmy", umur: 16, ktp: "1234567890123456" });
processData({ nama: "Kevin", umur: 20, ktp: "12345" });
processData({ nama: "Cindy", umur: 19, ktp: "2317126841234567" });
processData({ nama: "Kay", umur: 22, ktp: "1122334455667788" });
