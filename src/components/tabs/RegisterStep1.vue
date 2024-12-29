<script setup lang="ts">
import imgCloud from '@/assets/decorations/cloud.png'
import BtnGreenVarian from '@/components/buttons/BtnGreenVarian.vue';
import Selection from '@/components/forms/Selection.vue';
import TextInput from '@/components/forms/TextInput.vue';
import logoIkapeksi from '@/assets/logos/ikapeksi.png';
import logoIkapeksiBersatu from '@/assets/logos/ikapeksi-bersatu.png';
</script>

<template>
   <div class="grid lg:grid-cols-2 grid-cols-1 w-full">
      <div class="px-8 py-12 relative min-h-screen bg-gradient-to-b from-primary-lighter to-primary-darker">
         <div class="mb-10">
            <h1 class="text-center text-3xl font-bold mb-8">PENDAFTARAN ANGGOTA</h1>
            <ul class="steps w-full">
               <li class="step step-success">data diri</li>
               <li class="step">data alamat</li>
               <li class="step">data usaha</li>
            </ul>
         </div>
         <div class="relative z-10 grid md:grid-cols-2 grid-cols-1 gap-4">
            <TextInput required name="nama_lengkap" placeholder="nama">Nama Lengkap</TextInput>
            <TextInput required name="nik" placeholder="16 digit angka" type="number">NIK</TextInput>
            <TextInput required name="tempat_lahir" placeholder="tempat lahir">Tempat Lahir</TextInput>
            <TextInput required name="tanggal_lahir" type="date">Tanggal Lahir</TextInput>
            <div>
               <div class="label">
                  <span class="label-text font-bold">Jenis Kelamin</span>
               </div>
               <div class="flex gap-4 mt-2">
                  <div class="flex items-center gap-2">
                     <input required name="jenis_kelamin" id="jenis_kelamin" value="laki-laki" type="radio" class="radio radio-primary" />
                     <label for="jenis_kelamin">Laki - Laki</label>
                  </div>
                  <div class="flex items-center gap-2">
                     <input required name="jenis_kelamin" id="jenis_kelamin" value="perempuan" type="radio" class="radio radio-primary" />
                     <label for="jenis_kelamin">Perempuan</label>
                  </div>
               </div>
            </div>
            <Selection required name="agama" label="Agama">
               <option value="Islam">Islam</option>
               <option value="Protestan">Kristen Protestan</option>
               <option value="Katolik">Kristen Katolik</option>
               <option value="Konghucu">Konghucu</option>
               <option value="Budha">Budha</option>
               <option value="Hindu">Hindu</option>
            </Selection>
            <TextInput required name="email" placeholder="example@email.com" type="email">Email</TextInput>
            <TextInput required name="no_telepon" placeholder="no hp / whatsapp" type="number">No. HP / WhatsApp</TextInput>
            <Selection name="profesi" label="Profesi">
               <option value="Pensiunan">Pensiunan</option>
               <option value="Mengurus">Mengurus Rumah Tangga</option>
               <option value="Wiraswasta">Wiraswasta</option>
               <option value="Pelajar">Pelajar/Mahasiswa</option>
               <option value="Pegawai">Pegawai/Karyawan</option>
               <option value="Pengusaha">Pengusaha</option>
               <option value="Pengrajin">Pengrajin</option>
               <option value="Pedagang">Pedagang</option>
               <option value="Arsitek">Arsitek</option>
               <option value="Apoteker">Apoteker</option>
               <option value="Paramedis">Paramedis</option>
               <option value="Advokat">Advokat</option>
               <option value="Akuntan">Akuntan</option>
               <option value="Insinyur">Insinyur</option>
               <option value="Dokter">Dokter</option>
               <option value="Nelayan">Nelayan</option>
               <option value="Petani">Petani</option>
               <option value="Dosen">Dosen</option>
               <option value="Guru">Guru</option>
               <option value="Lain-lain">Lain-lain</option>
            </Selection>
            <TextInput name="profesi_lainnya" placeholder="Profesi Lainnya">Profesi Lainnya</TextInput>
            <Selection required name="pekerjaan" label="Pekerjaan">
               <option value="Negeri/TNI/POLRI">Negeri/TNI/POLRI</option>
               <option value="Instansi Swasta">Instansi Swasta</option>
               <option value="Wirasw asta">Wirasw asta</option>
               <option value="Belum Bekerja">Belum Bekerja</option>
            </Selection>
            <TextInput name="instansi" placeholder="Nama Instansi / Tempat Kerja">Nama Instansi / Tempat Kerja</TextInput>
            <TextInput name="nama_perusahaan_magang" placeholder="Lembaga Pemagangan Jepang">Lembaga Pemagangan Jepang</TextInput>
            <TextInput name="bidang_kerja_magang" placeholder="Bidang Kerja di Jepang">Bidang Kerja di Jepang</TextInput>
            <div>
               <div class="label">
                  <span class="label-text font-bold">Tahun Keberangkatan dan kepulangan</span>
               </div>
               <div class="grid grid-cols-2 gap-4">
                  <TextInput name="tahun_berangkat" type="number" placeholder="Berangkat"></TextInput>
                  <TextInput name="tahun_pulang" type="number" placeholder="Pulang"></TextInput>
               </div>
            </div>

           <div class="md:col-span-2 text-center mt-10">
              <RouterLink :to="{ name: 'home' }" class="text-center py-2 px-8 rounded-btn bg-gray-300 shadow-md font-semibold">Keluar</RouterLink>
              <a href="#page-2" class="md:col-span-2 text-center mt-10 ml-4">
                <BtnGreenVarian type="button">Lanjut</BtnGreenVarian>
              </a>
           </div>
         </div>

         <img :src="imgCloud" class="absolute bottom-0 left-0 w-full h-1/2 object-cover pointer-events-none">
      </div>
      <div class="lg:flex hidden bg-white flex-col gap-10 justify-center items-center">
         <img class="relative z-10 max-w-96 min-w-40 w-3/6" :src="logoIkapeksi" alt="">
         <img class="relative z-10 max-w-96 min-w-40 w-3/6" :src="logoIkapeksiBersatu" alt="">
      </div>
   </div>
</template>