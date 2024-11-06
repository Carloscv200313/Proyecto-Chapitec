export default function Home() {
  function Suma(a: number,b : number): number{
    if(a<b){
      return b-a
    }
    else {
      return a-b
    }
  }
  const Suma_flecha = (a:number, b:number): string => `la suma de los valores es ${a+b}`
  const suma=(a: number , b : number): number=>{
    if(a<b){
      return b-a
    }
    else {
      return a-b
    }
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>{Suma(10,8)} </h1>
      <h1>{Suma_flecha(10,8)} </h1>
      <h1>{suma(16,6)} </h1>
    </div>
  );
}
