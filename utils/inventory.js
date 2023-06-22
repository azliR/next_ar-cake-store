import { v4 as uuid } from "uuid"

let inventory = [
  {
    categories: ["donat"],
    name: "Lavender Dream Donat",
    price: "20000",
    image: "/products/cake15.png",
    qr: "/products/qrcake15.png",
    description:
      "Lavender Dream Donat adalah sebuah karya donat yang menawarkan pengalaman lezat dengan sentuhan keajaiban bunga lavender. Donat ini memiliki tampilan yang menggoda dengan warna ungu lembut yang menyerupai warna bunga lavender yang sedang mekar.Setelah menggigit Lavender Dream Donat, Anda akan langsung terpesona oleh rasa yang memikat. Donat ini memiliki tekstur lembut dan ringan, dengan rasa manis yang sempurna. Di dalamnya terdapat lapisan krim vanilla lembut yang memberikan sentuhan lembut dan harmonis.",
    brand: "Go Bakery",
    currentInventory: 4,
  },
  {
    categories: ["cake"],
    name: "Kue Varian Strawberry Delight",
    price: "45000",
    qr: "/products/qrcake2.png",
    image: "/products/cake2.png",
    description:
      "Strawberry Delight Cake adalah kue yang menggoda dengan kombinasi sempurna antara rasa manis dan segar dari stroberi serta kelezatan cokelat yang meleleh di lidah. Kue ini memukau mata dengan lapisan taburan cokelat yang menghiasi permukaannya. Setiap suapan dari Strawberry Delight Cake akan membawa Anda pada petualangan rasa yang memanjakan lidah. Lapisan kue yang lembut dan lezat memberikan fondasi yang sempurna untuk cita rasa stroberi yang manis dan segar. Potongan-potongan stroberi segar yang dihadirkan di dalam kue memberikan kejutan setiap kali Anda menggigitnya.",
    brand: "Go Bakery",
    currentInventory: 30,
  },
  {
    categories: ["cake"],
    name: "Strawberry Cherry Bliss Cake",
    price: "225000",
    qr: "/products/qrcake15.png",
    image: "/products/cake3.png",
    description:
      "Strawberry Cherry Bliss Cake adalah kue ultah yang menghadirkan kegembiraan dan kelezatan dengan sentuhan harmoni antara stroberi dan ceri. Kue ini mempesona mata dengan dekorasi yang menarik dan berwarna-warni, memberikan kesan yang ceria dan meriah.Saat Anda memotong Strawberry Cherry Bliss Cake, Anda akan langsung terpesona oleh aroma segar dan manis yang menyelimuti udara. Lapisan kue yang lembut dan lezat memberikan dasar yang sempurna untuk kelezatan stroberi dan ceri yang memanjakan lidah.",
    brand: "Go Bakery",
    currentInventory: 8,
  },
  {
    categories: ["cake"],
    name: "Cherry Bliss Cream Cake",
    price: "25000",
    qr: "/products/qrcake15.png",
    image: "/products/cake4.png",
    description:
      "Cherry Bliss Cream Cake adalah kue yang menggoda dengan kombinasi lezat antara krim putih yang lembut dan ceri segar yang manis. Kue ini memikat mata dengan penampilannya yang cantik dan sentuhan taburan ceri segar yang memikat.Setiap potongan dari Cherry Bliss Cream Cake memanjakan lidah dengan rasa yang lembut dan kenikmatan yang mempesona. Lapisan kue yang lembut dan ringan menjadi dasar yang sempurna untuk krim putih yang lembut dan creamy. Krim putih memberikan kelembutan yang luar biasa pada setiap gigitan, menciptakan sensasi yang memanjakan.",
    brand: "Go Bakery",
    currentInventory: 10,
  },
  {
    categories: ["cake"],
    name: "Purple Velvet Dream Cake",
    price: "68000",
    qr: "/products/qrcake15.png",
    image: "/products/cake5.png",
    description:
      "Lavender Dream Cake adalah kue yang mempesona dengan nuansa ungu yang menawan dan cita rasa yang memikat. Kue ini menghadirkan pengalaman yang indah dengan perpaduan harmonis antara rasa lembut dan aroma yang menenangkan.Setiap potongan dari Lavender Dream Cake memanjakan lidah dengan rasa yang lezat dan kenikmatan yang memikat. Kue ini memiliki tekstur yang lembut dan lezat, hampir seperti menikmati sepotong awan manis. Rasa yang manis dan lembut akan meluncur di lidah Anda dengan kelezatan yang memanjakan.",
    brand: "Go Bakery",
    currentInventory: 7,
  },
  {
    categories: ["cake"],
    name: "Aquamarine Velvet Dream Cake",
    price: "75000",
    qr: "/products/qrcake15.png",
    image: "/products/cake6.png",
    description:
      "Aquamarine Velvet Dream Cake adalah kue yang memikat dengan keanggunan dan pesona dari warna aquamarine yang menawan. Kue ini menghadirkan pengalaman rasa yang luar biasa dengan kombinasi sempurna antara kelembutan dan kelezatan. Setiap potongan Aquamarine Velvet Dream Cake memanjakan lidah dengan tekstur yang lembut dan kenikmatan yang memukau. Kue ini memiliki lapisan yang halus dan lezat, hampir seperti menyentuh sutra. Rasa yang manis dan lembut akan meluncur dengan lembut di lidah Anda, menciptakan sensasi yang memanjakan.",
    brand: "Go Bakery",
    currentInventory: 13,
  },
  {
    categories: ["cake"],
    name: "Big Velvet Dream Cake",
    price: "254000",
    qr: "/products/qrcake15.png",
    image: "/products/cake7.png",
    description:
      "Setiap potongan Aquamarine Velvet Dream Cake memanjakan lidah dengan tekstur yang lembut dan kenikmatan yang memukau. Kue ini memiliki lapisan yang halus dan lezat, hampir seperti menyentuh sutra. Rasa yang manis dan lembut akan meluncur dengan lembut di lidah Anda, menciptakan sensasi yang memanjakan.",
    brand: "Go Bakery",
    currentInventory: 9,
  },
  {
    categories: ["cake"],
    name: "Big Velvet Dream Cake",
    price: "274000",
    qr: "/products/qrcake15.png",
    image: "/products/cake8.png",
    description:
      "Setiap potongan Aquamarine Velvet Dream Cake memanjakan lidah dengan tekstur yang lembut dan kenikmatan yang memukau. Kue ini memiliki lapisan yang halus dan lezat, hampir seperti menyentuh sutra. Rasa yang manis dan lembut akan meluncur dengan lembut di lidah Anda, menciptakan sensasi yang memanjakan.",
    brand: "Go Bakery",
    currentInventory: 9,
  },
  {
    categories: ["cake"],
    name: "Amazing Velvet Cake",
    price: "254000",
    image: "/products/cake9.png",
    description:
      "Setiap potongan Aquamarine Velvet Dream Cake memanjakan lidah dengan tekstur yang lembut dan kenikmatan yang memukau. Kue ini memiliki lapisan yang halus dan lezat, hampir seperti menyentuh sutra. Rasa yang manis dan lembut akan meluncur dengan lembut di lidah Anda, menciptakan sensasi yang memanjakan.",
    brand: "Go Bakery",
    currentInventory: 9,
  },
  {
    categories: ["cake"],
    name: "Big Velvet Strawberry Cake",
    price: "294000",
    qr: "/products/qrcake11.png",
    image: "/products/cake11.png",
    description:
      "Setiap potongan Aquamarine Velvet Dream Cake memanjakan lidah dengan tekstur yang lembut dan kenikmatan yang memukau. Kue ini memiliki lapisan yang halus dan lezat, hampir seperti menyentuh sutra. Rasa yang manis dan lembut akan meluncur dengan lembut di lidah Anda, menciptakan sensasi yang memanjakan.",
    brand: "Go Bakery",
    currentInventory: 9,
  },
  {
    categories: ["cake"],
    name: "pink Velvet Dream Cake",
    price: "40000",
    qr: "/products/qrcake15.png",
    image: "/products/cake10.png",
    description:
      "Setiap potongan Aquamarine Velvet Dream Cake memanjakan lidah dengan tekstur yang lembut dan kenikmatan yang memukau. Kue ini memiliki lapisan yang halus dan lezat, hampir seperti menyentuh sutra. Rasa yang manis dan lembut akan meluncur dengan lembut di lidah Anda, menciptakan sensasi yang memanjakan.",
    brand: "Go Bakery",
    currentInventory: 9,
  },
  {
    categories: ["donat"],
    name: "Donat Velvet Dream",
    price: "55000",
    qr: "/products/qrcake15.png",
    image: "/products/cake14.png",
    description:
      "Setiap potongan Aquamarine Velvet Dream Cake memanjakan lidah dengan tekstur yang lembut dan kenikmatan yang memukau. Kue ini memiliki lapisan yang halus dan lezat, hampir seperti menyentuh sutra. Rasa yang manis dan lembut akan meluncur dengan lembut di lidah Anda, menciptakan sensasi yang memanjakan.",
    brand: "Go Bakery",
    currentInventory: 9,
  },
]

inventory.map((i) => {
  i.id = uuid()
  return i
})

export default inventory
