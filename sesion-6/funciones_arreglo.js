const arreglo1 = [
    {tipo: "verdura", descripcion: "tomates"},
    {tipo: "fruta", descripcion: "uva"},
    {tipo: "fruta", descripcion: "pasa"},
    {tipo: "verdura", descripcion: "cebolla"},
]

let  resultado = arreglo1.filter((tipoFruto)=>typeof tipoFruto.descripcion === "string")



