export const Students = (props) => {
  return (
    <div>
      <h2>Studentu sarasas</h2>

      {props.atrinktiStudentai.map((atrinktiStudentai) => (
        <div key={atrinktiStudentai.id + " "}>
          <spam>{atrinktiStudentai.name + " "}</spam>
          <spam>{atrinktiStudentai.surname + " "}</spam>
          <spam>{atrinktiStudentai.age}</spam>
        </div>
      ))}
    </div>
  );
};
