/*
<h2>Challenge:</h2>
        <p>💫 Generar una colección de Objetos de tipo Product que tenga las siguientes propiedades:</p>
        <ul>
          <li>nombre</li>
          <li>description</li>
          <li>precio de costo</li>
          <li>clasificación</li>
          <li>porcentaje de Ganancia</li>
          <li>precio de venta</li> precio de costo + porcentaje de Ganancia
          <li>precios de los ultimos 6 meses en una colección</li> precios aleatorios de 6 lengths
          <li>Cantidad vendidas en la ultima semana</li> aleatorio en lengths
          <li>Fecha de Caducidad</li>
        </ul>
        <p>💫 De igual forma es necesario realizar lo siguientes calculos por cada Producto:</p>
        <ol>
          <li>Calcular el precio de Venta y asignarlo a su correspondiente propiedad</li>
            prescio dde costo + porcentage de de ganancia = precio de venta
          <li>Obtener los diás restantes para que caduque el producto</li>
          <li>Obtener el promedio de precio de los ultimos 6 meses</li>
        </ol>
        <p>💫 Una vez obtenido la colleción de Productos obtener lo siguiente:</p>
        <ol>
          <li>Los productos que tengan mayor a 50 cantidades vendidas en la ultima semana</li>
          <li>Los productos que tengan menor a 10 cantidades vendidas en la ultima semana</li>
          <li>Los productos que se encuentren a menos de 15 días proximas a caducar</li>
        </ol>
*/

const Product = [
  {
    name: "leche",
    description: "Bote de leche de 1.5 lt tetrapac",
    price: 15.50,
    clasification: "Lacteo",
    earningPorcentage: ".20", 
    priceSales: 0,
    sixMontPrices:[10.5,11.10,12.15,13.40,14.80,15.60],
    cuantitySold: 11,
    caducity: "03/10/2022",
  },
  {
    name: "crema",
    description: "Bote con 1lt de crema",
    price: 15.50,
    clasification: "Lacteo",
    earningPorcentage: ".20", 
    priceSales: 0,
    sixMontPrices:[10.5,11.10,12.15,13.40,14.80,15.60],
    cuantitySold: 50,
    caducity: "2022-05-05",
  },
  {
    name: "huevo",
    description: "Paquete de 12 blamquillos",
    price: 31.80,
    clasification: "ovino",
    earningPorcentage: ".50", 
    priceSales: 0,
    sixMontPrices:[10.5,11.10,12.15,13.40,14.80,15.60],
    cuantitySold: 5,
    caducity: "2022-03-30",
    },
    {
    name: "azucar clara",
    description: "Bolsa de 1k",
    price: 10.90,
    clasification: "costales",
    earningPorcentage: ".20", 
    priceSales: 0,
    sixMontPrices:[10.5,11.10,12.15,13.40,14.80,15.60],
    cuantitySold: 30,
    caducity: "2022-08-01",
    },
    {
    name: "azucar morena",
    description: "Bolsa de 1k",
    price: 10.90,
    clasification: "costales",
    earningPorcentage: ".20", 
    priceSales: 0,
    sixMontPrices:[10.5,11.10,12.15,13.40,14.80,15.60],
    cuantitySold: 45,
    caducity: "2022-03-10",
    },
    {
    name: "Jugo de naranja",
    description: "bote de 600mlt",
    price: 12.90,
    clasification: "bebidas",
    earningPorcentage: ".20", 
    priceSales: 0,
    sixMontPrices:[10.5,11.10,12.15,13.40,14.80,15.60],
    cuantitySold: 51,
    caducity: "2022-04-08",
    },
    {
      name: "prueba",
      description: "prueba",
      price: 50,
      clasification: "prueba",
      earningPorcentage: ".50", 
      priceSales: 0,
      sixMontPrices:[10.5,11.10,12.15,13.40,14.80,15.60],
      cuantitySold: 50,
      caducity: "1970-01-01",
      }
]

//console.log(Product)

function productsList( name, description, price, clasification, earningporcentage, sixMontPrices =[], cuantitySold, caducity){
    this.name = name;
    this.description = description; 
    this.price = price; 
    this.clasification = clasification;
    this.earningPorcentage = earningporcentage;
    this.sixMontPrices = sixMontPrices; 
    this.cuantitySold = cuantitySold; 
    this.caducity = caducity;


    this.getpriceSales = function(){ // Calcular el precio de Venta y asignarlo a su correspondiente propiedad
        let precio = this.price;
        let porcentage = this.earningPorcentage;
        let priceSales = Math.round((precio*porcentage)+price)
        console.log("$",priceSales)
        return priceSales;
        };
    this.priceSales = this.getpriceSales();


    this.getDaysLeft = function(){   // Obtener los diás restantes para que caduque el producto

      let caduca = new Date(caducity)
      console.log(caduca)
      let today = new Date();
      let milSDia = 24 * 60 * 60 * 1000;
      let milSTransc = Math.abs( caduca-today);
      let diastranscurridos = Math.round( milSTransc/milSDia);

        console.log("Caduca en ",diastranscurridos+1," Dias")
      return diastranscurridos
    }
    this.caducityDays = this.getDaysLeft();


    this.getAverageMonths = function(){ // Obtener el promedio de precio de los ultimos 6 meses
      const average = this.sixMontPrices.reduce((accum,item)=>{
//      [10.5, 11.10, 12.15, 13.40, 14.80, 15.60]/this.sixMontPrices.length
        return (accum + item);
      },0)/this.sixMontPrices.length
      console.log("promedio de precio de los ultimos 6 meses",average)
      return average
    }
    this.averagePriceMont = this.getAverageMonths();

  }

//console.log(Product)

const products = Product.map(item=>{
  return new productsList(item.name, item.description, item.price, item.clasification, item.earningPorcentage, item.sixMontPrices, item.cuantitySold, item.caducity);
});


/*const Productslist1 = []
Product.forEach((item)=>{
let producto = new productsList(item.name, item.description, item.price, item.clasification, item.earningporcentage, item.sixMontPrices, item.cuantitySold, item.caducity, item.caducityDays);
Productslist1.push(producto)
})
console.log("array: ", Productslist1)*/



const newProduct = new productsList("pan de caja", "pan de caja blanco sin orillas", 35, "Harinas", ".50", [10.5,11.10,12.15,13.40,14.80,15.60], 17, "2022-08-15")
const newProduct2 = new productsList("pan de caja integral", "pan de caja blanco integral", 50, "Harinas", ".50", [10.5,11.10,12.15,13.40,14.80,15.60], 17, "2022-04-15")
console.log(newProduct)
console.log(newProduct2)

console.log("productos: ",products)

const abovefifty = products.filter(item=>{
  return item.cuantitySold > 50;
})
console.log("productos que tengan mayor a 50 cantidades vendidas en la ultima semana ",abovefifty)

const underTen = products.filter(item=>{
  return item.cuantitySold < 10;
})
console.log("menor a 10 cantidades vendidas en la ultima semana", underTen)

const fiveteenDaysOrLess = products.filter(item=>{
  return item.caducityDays < 15;
})
console.log("menos de 15 días proximas a caducar", fiveteenDaysOrLess)

