import jsPDF from "jspdf";
import logoIkapeksi from '@/assets/logos/ikapeksi.png'
import signatureKetum from '@/assets/signatures/ttd_ketum.png';
import signatureSekre from '@/assets/signatures/ttd_sekre.png';
import stample from '@/assets/signatures/stample.png';

const PAGE1_CONTENT = [
   "Nama Lengkap",
   "NIK",
   "Tempat, Tangga Lahir",
   "Jenis Kelamin",

   "Agama",
   "Email",
   "No. Telp/HP",
   "Profesi",
   "Pekerjaan",
   "Nama Instansi",
   "Lembaga Pemagangan Jepang",
   "Tahun Keberangkatan",
   "Tahun Kepulangan",
   "Nama Perusahaan Jepang",
   "Bidang Kerja di Jepang",
]

const PAGE2_CONTENT = [
   "Provinsi",
   "Kabupaten",
   "Kecamatan",
   "Desa / Kelurahan",
   "RT",
   "RW",
   "jalan",
   "Kode Pos"
]

const PAGE2_CONTENT2 = [
   "Nama Usaha",
   "Bidang Usaha",
   "Jumlah Karyawan",
   "Tahun Berdiri",
   "Alamat Usaha",
   "Nama Instansi Bekerja",
   "Jabatan",
   "Alamat Instansi Bekerja",
]


const OUTER_MARGIN = 32
const INNER_MARGIN = 44
const MAX_CHAR_LENGTH = 45

const addContent = (content: string[], doc: jsPDF, currentYPositon: number, values: string[]) => {
   let ypos = currentYPositon
   content.forEach((field, ix) => {
      const value = values[ix]
      if (value.length > MAX_CHAR_LENGTH) {
         doc.text(`${field}`, INNER_MARGIN, ypos);
         value.match(new RegExp(`.{1,${MAX_CHAR_LENGTH}}`, 'g'))
            ?.forEach((line, ix, arr) => {
               if (ix === 0) doc.text(`: ${line}-`, INNER_MARGIN + 130, ypos); // Add line for input
               else if (ix < arr.length - 1) doc.text(`  -${line}-`, INNER_MARGIN + 130, ypos);
               else doc.text(`  -${line}`, INNER_MARGIN + 130, ypos); // Add line for input
               ypos += 15;
            })
      } else {
         doc.text(`${field}`, INNER_MARGIN, ypos);
         doc.text(`: ${values[ix]}`, INNER_MARGIN + 130, ypos); // Add line for input
         ypos += 15;
      }
   })

   return ypos
}

interface IValues {
    content1: string[];
    content2: string[];
    content3: string[];
}
export default (signature: string, sigOrient: string, values: IValues) => {
   const doc = new jsPDF({
      format: 'a4',
      orientation: 'portrait',
      unit: 'px'
   })
   const 
      docWidth = doc.internal.pageSize.getWidth(),
      docHeight = doc.internal.pageSize.getHeight(),
      centerOfDoc = docWidth / 2;
   
   doc
      .addImage(logoIkapeksi, 'PNG', centerOfDoc - 40, 40, 80, 36.07)
      .setFontSize(18)
      .text('BLANKO PENDAFTARAN \n KTA IKAPEKSI', centerOfDoc, 100, { align: 'center' })
      .setFontSize(16)
      .text('Data Diri', OUTER_MARGIN, 140, { align: 'left' })
      .setFontSize(12)
      
   let yPosition = 155;
   addContent(PAGE1_CONTENT, doc, yPosition, values.content1)
   doc
      .addPage()
      .setFontSize(16)
   doc.text('Data Alamat', OUTER_MARGIN, 40, { align: 'left' })
   yPosition = 55;
   doc.setFontSize(12)
   yPosition = addContent(PAGE2_CONTENT, doc, 55, values.content2)
   doc.setFontSize(16)
   yPosition += 15;
   doc.text('Data Usaha / Pekerjaan', OUTER_MARGIN, yPosition, { align: 'left' })
   doc.setFontSize(12)
   yPosition += 15;
   addContent(PAGE2_CONTENT2, doc, yPosition, values.content3)

   const namaPemohon = values.content1[0]

   
   doc.text('Pemohon', 50, docHeight - 100, { align: 'left' })
   doc.text(namaPemohon, 50 - (namaPemohon.length > 7 ? namaPemohon.length : 0), docHeight - 25, { align: 'left' })

   if (sigOrient == "landscape")
      doc.addImage(signature, 'PNG', 100, docHeight - 100, 75, 75, undefined, undefined, -270)
   else
      doc.addImage(signature, 'PNG', 50, docHeight - 100, 75, 75)
   
   doc.text('Ketua', centerOfDoc - 37.5 + 20, docHeight - 100, { align: 'left' })
   doc.text('Supriyanto', centerOfDoc - 37.5 + 10, docHeight - 25, { align: 'left' })
   doc.addImage(signatureKetum, 'PNG', centerOfDoc - 37.5, docHeight - 100, 75, 75)
   doc.addImage(stample, 'PNG', centerOfDoc + 35, docHeight - 100, 75, 75)
   doc.text('Sekertaris', docWidth - 100, docHeight - 100, { align: 'left' })
   doc.text('Rohwan, SH. MH', docWidth - 110 - 5, docHeight - 25, { align: 'left' })
   doc.addImage(signatureSekre, 'PNG', docWidth - 110, docHeight - 100, 75, 75)

   // .text(':.......................................', INNER_MARGIN, 160, { align: 'left' })
   // doc.addImage(logoIkapeksi, 'PNG', 10, 10, 30, 30)
   return doc
}