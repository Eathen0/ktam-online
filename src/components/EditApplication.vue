<script setup lang="ts">
import TextInput from "@/components/forms/TextInput.vue";
import {shallowRef} from "vue";
import axios from "axios";
import {toast} from "vue3-toastify";
import Selection from "@/components/forms/Selection.vue";

const testVal1 = [
  'Your Name',
  '000000000000',
  'Islam',
  'perempuan',
]

const contents = {
  personalData1: {
    "Nama Lengkap": 'text',
    "NIK": 'number',
    "Agama|selection": {
      "Islam": "Islam",
      "Protestan": "Protestan",
      "Katolik": "Katolik",
      "Konghucu": "Konghucu",
      "Budha": "Budha",
      "Hindu": "Hindu"
    },
    "Jenis Kelamin|check-box": {
      "laki-laki": 'Laki-Laki',
      "perempuan": 'Perempuan'
    },
  },
  personalData2: {
    "Tempat Lahir": 'text',
    "Tangga Lahir": 'date',
    "Email": 'email',
    "No. Telp/HP": 'number',
    "Profesi|selection": {
      "Pensiunan": "Pensiunan",
      "Mengurus": "Mengurus",
      "Wiraswasta": "Wiraswasta",
      "Pelajar": "Pelajar",
      "Pegawai": "Pegawai",
      "Pengusaha": "Pengusaha",
      "Pengrajin": "Pengrajin",
      "Pedagang": "Pedagang",
      "Arsitek": "Arsitek",
      "Apoteker": "Apoteker",
      "Paramedis": "Paramedis",
      "Advokat": "Advokat",
      "Akuntan": "Akuntan",
      "Insinyur": "Insinyur",
      "Dokter": "Dokter",
      "Nelayan": "Nelayan",
      "Petani": "Petani",
      "Dosen": "Dosen",
      "Guru": "Guru",
      "Lain-lain": "Lain-lain"
    },
    "profesi_lainnya": 'text',
    "Pekerjaan|selection": {
      "Negeri/TNI/POLRI": "Negeri/TNI/POLRI",
      "Instansi Swasta": "Instansi Swasta",
      "Wirasw asta": "Wirasw asta",
      "Belum Bekerja": "Belum Bekerja"
    },
    "Nama Instansi Bekerja": 'text',
    "Lembaga Pemagangan Jepang": 'text',
    "Tahun Keberangkatan": 'number',
    "Tahun Kepulangan": 'number',
    "Nama Perusahaan Jepang": 'text',
    "Bidang Kerja di Jepang": 'text',
  },
  address: {
    "Provinsi": '',
    "Kabupaten": '',
    "Kecamatan": '',
    "Desa / Kelurahan": '',
    "RT": 'number',
    "RW": 'number',
    "Jalan": 'text',
    "Kode Pos": 'number'
  },
  business: {
    "Nama Usaha": 'text',
    "Bidang Usaha": 'text',
    "Jumlah Karyawan": 'number',
    "Tahun Berdiri Usaha": 'text',
    "Alamat Usaha": 'text',
    "Nama Instansi": 'text',
    "Jabatan / Posisi": 'text',
    "Alamat Instansi": 'text'
  }
}

const dataProvince = shallowRef<any>(null)
axios('https://ibnux.github.io/data-indonesia/provinsi.json').then(res => {
  dataProvince.value = res.data
}) .catch(() => toast('Gagal Memuat Data Provinsi', {type: 'error'}))
const dataKabupaten = shallowRef<any>(null)
const dataKecamatan = shallowRef<any>(null)
const dataKelurahan = shallowRef<any>(null)


const handdleProvinceChange = (e: any) => {
  const [ id ] = e.target.value.split('|')

  dataKabupaten.value = null;
  dataKecamatan.value = null;
  dataKelurahan.value = null

  if (id === '') return

  axios(`https://ibnux.github.io/data-indonesia/kabupaten/${id}.json`)
      .then(res => dataKabupaten.value = res.data)
}

const handdleKabupatenChange = (e: any) => {
  const [ id ] = e.target.value.split('|')

  dataKecamatan.value = null
  dataKelurahan.value = null

  if (id === '') return

  axios('https://ibnux.github.io/data-indonesia/kecamatan/' + id + '.json')
      .then(res => dataKecamatan.value = res.data)
}

const handdleKecamatanChange = (e: any) => {
  const [ id ] = e.target.value.split('|')

  dataKelurahan.value = null

  if (id === '') return

  axios('https://ibnux.github.io/data-indonesia/kelurahan/' + id + '.json')
      .then(res => dataKelurahan.value = res.data)
}
</script>

<template>
  <div>
    <div class="grid gap-4 lg:grid-cols-2">
      <div class="bg-white rounded-lg shadow p-6 h-fit">
        <h2 class="text-lg font-semibold mb-4">DATA DIRI</h2>
        <div class="flex gap-4 mb-6 xl:flex-row flex-col">
          <img src="https://i.pinimg.com/originals/01/f1/3d/01f13d4fe963f269a2ad0a70d19e50df.jpg" alt="Profile"
               class="w-[150px] h-[150px] object-cover rounded-lg lg:self-start self-center"/>
          <table class="w-full text-sm">
            <tbody>
              <tr v-for="([key, type], ix) in Object.entries(contents.personalData1)" :key="ix">
                <td class="align-middle py-1 w-32">{{ key.split('|')[0] }}</td>
                <td class="align-middle py-1 px-2">:</td>
                <td class="align-middle py-1">
                  <template v-if="key.split('|').length >= 2">
                    <Selection v-if="key.split('|')[1] == 'selection'" name="profesi">
                      <option :value="optVal" :selected="optVal == testVal1[ix]" v-for="([optVal, optDis]) in Object.entries(type)">{{ optDis }}</option>
                    </Selection>
                    <div v-if="key.split('|')[1] == 'check-box'" class="flex gap-4 mt-2">
                      <div class="flex items-center gap-2" v-for="([value, label]) in Object.entries(type)">
                        <input :name="key.split('|')[0]" id="jenis_kelamin" :checked="testVal1[ix] == value" :value="value" type="radio" class="radio radio-primary" />
                        <label :for="key.split('|')[0]">{{ label }}</label>
                      </div>
                    </div>
                  </template>
                  <TextInput v-else :type="type" :initial-value="testVal1[ix]" :name="key.split('|')[0]" class="border border-gray-300" :placeholder="key" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <table class="w-full text-sm">
          <tbody>
          <tr v-for="([key, type], ix) in Object.entries(contents.personalData2)" :key="ix">
            <td class="align-middle py-1 w-32">{{ key.split('|')[0] }}</td>
            <td class="align-middle py-1 px-2">:</td>
            <td class="align-middle py-1">
              <template v-if="key.split('|').length >= 2">
                <Selection v-if="key.split('|')[1] == 'selection'" name="profesi">
                  <option :value="optVal" v-for="([optVal, optDis]) in Object.entries(type)">{{ optDis }}</option>
                </Selection>
                <div v-if="key.split('|')[1] == 'check-box'" class="flex gap-4 mt-2">
                  <div class="flex items-center gap-2" v-for="([label, value]) in Object.entries(type)">
                    <input :name="label" id="jenis_kelamin" :value="label" type="radio" class="radio radio-primary" />
                    <label :for="label">{{ value }}</label>
                  </div>
                </div>
              </template>
              <TextInput v-else :type="type" :name="key" class="border border-gray-300" :placeholder="key" />
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <div class="space-y-4">
        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-lg font-semibold mb-4">ALAMAT</h2>
          <table class="w-full text-sm">
            <tbody>
              <tr v-for="([key, type], ix) in Object.entries(contents.address)" :key="ix">
                <td class="align-middle py-1 w-32">{{ key.split('|')[0] }}</td>
                <td class="align-middle py-1 px-2">:</td>
                <td class="align-middle py-1">
                  <template v-if="key.split('|').length >= 2">
                    <Selection v-if="key.split('|')[1] == 'selection'" name="profesi">
                      <option :value="optVal" v-for="([optVal, optDis]) in Object.entries(type)">{{ optDis }}</option>
                    </Selection>
                    <div v-if="key.split('|')[1] == 'check-box'" class="flex gap-4 mt-2">
                      <div class="flex items-center gap-2" v-for="([label, value]) in Object.entries(type)">
                        <input :name="key" id="jenis_kelamin" :value="value" type="radio" class="radio radio-primary" />
                        <label :for="key">{{ label }}</label>
                      </div>
                    </div>
                  </template>
                  <TextInput v-else :type="type" :name="key" class="border border-gray-300" :placeholder="key" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-white rounded-lg shadow p-6">
          <h2 class="text-lg font-semibold mb-4">USAHA/PEKERJAAN</h2>
          <table class="w-full text-sm">
            <tbody>
              <tr v-for="([key, type], ix) in Object.entries(contents.business)" :key="ix">
                <td class="align-middle py-1 w-32">{{ key.split('|')[0] }}</td>
                <td class="align-middle py-1 px-2">:</td>
                <td class="align-middle py-1">
                  <template v-if="key.split('|').length >= 2">
                    <Selection v-if="key.split('|')[1] == 'selection'" name="profesi">
                      <option :value="optVal" v-for="([optVal, optDis]) in Object.entries(type)">{{ optDis }}</option>
                    </Selection>
                    <div v-if="key.split('|')[1] == 'check-box'" class="flex gap-4 mt-2">
                      <div class="flex items-center gap-2" v-for="([label, value]) in Object.entries(type)">
                        <input :name="key" id="jenis_kelamin" :value="value" type="radio" class="radio radio-primary" />
                        <label :for="key">{{ label }}</label>
                      </div>
                    </div>
                  </template>
                  <TextInput v-else :type="type" :name="key" class="border border-gray-300" :placeholder="key" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-white rounded-lg shadow p-6">
          <table class="w-full text-sm">
            <tbody>
            <tr>
              <td class="align-middle py-1 w-32">Bukti Pembayaran</td>
              <td class="align-middle py-1 px-2">:</td>
              <td class="align-middle py-1">
<!--                <TextInput class=border border-gray-300 :placeholder="detailName" />-->
              </td>
            </tr>
            <tr>
              <td class="align-middle py-1">Surat Keterangan</td>
              <td class="align-middle py-1 px-2">:</td>
              <td class="align-middle py-1">
<!--                <TextInput class=border border-gray-300 :placeholder="detailName" />-->
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="flex gap-4 justify-center mt-6">
      <button class="px-8 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
        Batal
      </button>
      <button class="px-8 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
        Simpan
      </button>
    </div>
  </div>
</template>