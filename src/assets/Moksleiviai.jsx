export const Moksleiviai = (props) => {
  return (
    <div>
      <h2>Studentu sarasas</h2>

      {props.atrinktiMoksleiviai.map((atrinktiMoksleiviai) => (
        <div key={atrinktiMoksleiviai.id + " "}>
          <spam>{atrinktiMoksleiviai.name + " "}</spam>
          <spam>{atrinktiMoksleiviai.surname + " "}</spam>
          <spam>{atrinktiMoksleiviai.age}</spam>
        </div>
      ))}
    </div>
  );
};
