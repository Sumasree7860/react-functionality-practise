export default function ArrayList() {
    const arrayList = ["a", "b", "c", "dum", "suma"];
  
    return (
      <div className="w-[500px] flex flex-col items-center">
        <ol>
          {arrayList.map((item: any, index: any) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    );
  }
  