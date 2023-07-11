//Datatypes-Memoryallocation

const Memoryallocation={
      string:"2 Byte * no.of length of the string",
      boolean:"1 Byte",
      number:"64-bit floating-point",
      object:"number of properties and the size of the values stored within them,therfore dynamnically it will grow or shrink",
      array:"number of elements and the type and size of each element.",
      functions:" Depend on its internal code and any captured variables within its scope"
}
console.table(Memoryallocation);