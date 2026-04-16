interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const studentsList: Student[] = [];

let student1: Student = {
  firstName: "Haidar",
  lastName: "Alessa",
  age: 35,
  location: "Hofuf"
};

let student2: Student = {
  firstName: "Ali",
  lastName: "Alessa",
  age: 40,
  location: "Riyadh"
};

studentsList.push(student1, student2);

const createStudentsTable = () => {
  const studentsTable = document.createElement('table');
  studentsList.forEach((el): void => {
    if (studentsTable.tHead === null) {
      const theadRow = document.createElement('tr');
      const thName = document.createElement('th');
      const thLocation = document.createElement('th');
      const thead = document.createElement('thead');

      thName.textContent = 'Name';
      thLocation.textContent = 'Location';

      theadRow.appendChild(thName);
      theadRow.appendChild(thLocation);
      thead.appendChild(theadRow);
      studentsTable.appendChild(thead);
    }
    
    const row = document.createElement('tr')
    const td_name = document.createElement('td');
    const td_location = document.createElement('td');

    td_name.textContent = el.firstName;
    td_location.textContent = el.location;

    row.appendChild(td_name);
    row.appendChild(td_location);

    studentsTable.appendChild(row);
  })
  
  document.documentElement.appendChild(studentsTable);
}
  
createStudentsTable();
