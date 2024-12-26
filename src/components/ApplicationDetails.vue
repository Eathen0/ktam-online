<script setup lang="ts">
const contents = {
   personalData1: [
      "Nama Lengkap",
      "NIK",
      "Agama",
      "Jenis Kelamin",
   ],
   personalData2: [
      "Tempat, Tangga Lahir",
      "Email",
      "No. Telp/HP",
      "Profesis",
      "Pekerjaan",
      "Nama Instansi",
      "Lembaga Pemagangan Jepang",
      "Tahun Keberangkatan",
      "Tahun Kepulangan",
      "Nama Perusahaan Jepang",
      "Bidang Kerja di Jepang",
   ],
   address: [
      "Profinsi",
      "Kabupaten",
      "Kecamatan",
      "Desa / Kelurahan",
      "Alamat",
      "Kode Pos",
   ],
   business: [
      "Nama Usaha",
      "Bidang Usaha",
      "Jumlah Karyawan",
      "Tahun Berdiri Usaha",
      "Alamat Usaha",
      "Nama Instansi",
      "Jabatan / Posisi",
      "Alamat Instansi",
   ],
}
</script>

<template>
   <div>
      <div className="grid gap-4 lg:grid-cols-2">
         <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold mb-4">DATA DIRI</h2>
            <div className="flex gap-4 mb-6 xl:flex-row flex-col">
               <img src="https://i.pinimg.com/originals/01/f1/3d/01f13d4fe963f269a2ad0a70d19e50df.jpg" alt="Profile"
                  className="w-[150px] h-[150px] object-cover rounded-lg lg:self-start self-center" />
               <table className="w-full text-sm">
                  <tbody>
                     <tr v-for="(detailName, ix) in contents.personalData1" :key="ix">
                        <td className="align-top py-1 w-32">{{ detailName }}</td>
                        <td className="align-top py-1 px-2">:</td>
                        <td className="align-top py-1"></td>
                     </tr>
                  </tbody>
               </table>
            </div>
            <table className="w-full text-sm">
               <tbody>
                  <tr v-for="(detailName, ix) in contents.personalData2" :key="ix">
                     <td className="align-top py-1 w-32">{{ detailName }}</td>
                     <td className="align-top py-1 px-2">:</td>
                     <td className="align-top py-1"></td>
                  </tr>
               </tbody>
            </table>
         </div>
   
         <div className="space-y-4">
            <div className="bg-white rounded-lg shadow p-6">
               <h2 className="text-lg font-semibold mb-4">ALAMAT</h2>
               <table className="w-full text-sm">
                  <tbody>
                     <tr v-for="(detailName, ix) in contents.address" :key="ix">
                        <td className="align-top py-1 w-32">{{ detailName }}</td>
                        <td className="align-top py-1 px-2">:</td>
                        <td className="align-top py-1"></td>
                     </tr>
                  </tbody>
               </table>
            </div>
   
            <div className="bg-white rounded-lg shadow p-6">
               <h2 className="text-lg font-semibold mb-4">USAHA/PEKERJAAN</h2>
               <table className="w-full text-sm">
                  <tbody>
                     <tr v-for="(detailName, ix) in contents.business" :key="ix">
                        <td className="align-top py-1 w-32">{{ detailName }}</td>
                        <td className="align-top py-1 px-2">:</td>
                        <td className="align-top py-1"></td>
                     </tr>
                  </tbody>
               </table>
            </div>
   
            <div className="bg-white rounded-lg shadow p-6">
               <table className="w-full text-sm">
                  <tbody>
                     <tr>
                        <td className="align-top py-1 w-32">Bukti Pembayaran</td>
                        <td className="align-top py-1 px-2">:</td>
                        <td className="align-top py-1"></td>
                     </tr>
                     <tr>
                        <td className="align-top py-1">Surat Keterangan</td>
                        <td className="align-top py-1 px-2">:</td>
                        <td className="align-top py-1"></td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   
      <div className="flex gap-4 justify-center mt-6">
         <button className="px-8 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
            Tolak
         </button>
         <button className="px-8 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
            Setuju
         </button>
      </div>
   </div>
</template>