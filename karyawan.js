//Deklarasi Object
const karyawan = {
    Nama : "Quin",
    Umur :  15,
    Gaji : 1000000,
    "Status Karyawan" : "Tetap",
    "Jabatan" : "Manager"
};
//template literal
console.log(`Nama karyawan adalalah: ${karyawan.Nama}`);
console.log(`Umur karyawan adalah : ${karyawan.Umur}`);
console.log(`Gaji karyawan adalah : ${karyawan.Gaji}`);
console.log(`Status Karyawan karyawan adalah : ${karyawan["Status Karyawan"]}`);