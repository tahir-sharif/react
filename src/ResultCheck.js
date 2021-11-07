import React, { useEffect, useState } from "react";
import InputForm from "./inputForm/InputForm";
import ResultRow from "./ResultRow";

const ResultCheck = () => {
  const [studentsInfo, setstudentsInfo] = useState([]);

  // Form Toggler
  const [inputToggle, setinputToggle] = useState(false);
  const [inputError, setinputError] = useState(false);
  const closeForm = () => {
    setinputToggle(false);
    setinputError(false);
    setinputFormData({
      name: "",
      marks: "",
      totalMarks: "",
    });
  };
  const [otherSelectBox, setotherSelectBox] = useState(false);

  // Result Data Object
  const [resultsData, setresultsData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    localStorage.setItem('resultsData' , JSON.stringify(resultsData))
  }, [resultsData]);
  const getData = () => {
    const rd = localStorage.getItem("resultsData");
    if (rd) {
      setresultsData(JSON.parse(rd));
    } else {
      setresultsData([]);
    }
  };

  // Form value handlers
  const [inputFormData, setinputFormData] = useState({
    name: "",
    marks: "",
    totalMarks: "",
  });

  const inputFormDataHandler = (e) => {
    setinputError(false);
    const name = e.target.name;
    const value = e.target.value;

    if (name === "class") {
      // If user change the value of selectBox
      setotherSelectBox(false);
      var totalMarks = "";
      if (value === "matric") {
        totalMarks = 850;
      } else if (value === "nine") {
        totalMarks = 425;
      } else if (value === "other") {
        setotherSelectBox(true);
      }
      setinputFormData({ ...inputFormData, totalMarks, marks: "" });
    } else if (name === "marks") {
      const totalMarks = inputFormData.totalMarks;

      if (+value > +totalMarks) {
        setinputFormData({
          ...inputFormData,
          marks: totalMarks,
        });
      } else {
        setinputFormData({
          ...inputFormData,
          marks: value,
        });
      }
    } else {
      // Set data Normally
      setinputFormData({
        ...inputFormData,
        [name]: value,
        id: new Date().getTime(),
      });
    }
  };
  // Submit Form
  const inputFormSubmit = () => {
    const { name, marks, totalMarks } = inputFormData;
    if (name && marks && totalMarks) {
      setresultsData([...resultsData, inputFormData]);
      closeForm();
    } else {
      setinputError("All fields are required !");
    }
  };

  const showInfo = (id) => {
    // var id = 1635855480173;
    const resultData = resultsData.filter((obj) => {
      return obj.id === id;
    });
    setstudentsInfo(resultData);
  };
  const closeShowInfo = () => {
    setstudentsInfo([]);
  };
  const deleteStudent = () => {
    if (studentsInfo.length) {
      const newData = resultsData.filter((obj) => {
        return studentsInfo[0].id !== obj.id;
      });
      console.log(newData);
      setresultsData(newData);
      closeShowInfo();
    } else {
      alert("can't delete");
    }
  };

  return (
    <div className="resultBox">
      {/* Input Form */}
      {inputToggle ? (
        <InputForm
          inputFormData={inputFormData}
          inputError={inputError}
          inputFormDataHandler={inputFormDataHandler}
          closeForm={closeForm}
          otherSelectBox={otherSelectBox}
          inputFormSubmit={inputFormSubmit}
        />
      ) : (
        ""
      )}
      {
        /* Form Button */
        inputToggle ? (
          ""
        ) : (
          <div
            className="formBtn fade scale"
            onClick={() => {
              setinputToggle(true);
            }}
          >
            <button>Add Student's Info</button>
          </div>
        )
      }

      {/* Page Data */}
      <h1>Percentage Calculator</h1>
      {resultsData.length ? (
        <>
          <div className="header">
            <span>Sr No#</span>
            <span>Name</span>
            <span>Marks</span>
            <span>Grade</span>
            <span>Percentage</span>
          </div>
          <div className="rowContainer">
            {resultsData.map((inputData, index) => {
              return (
                <ResultRow
                  srNo={index + 1}
                  inputData={inputData}
                  key={index}
                  showInfo={showInfo}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div className="noStudent fade">
          Student's Data will be shown here <br />
          Try with adding a new student !
        </div>
      )}
      {studentsInfo.map((infoObj, index) => {
        return (
          <div className="studentsInfo" key={index}>
            <div onClick={closeShowInfo} className="studentsInfoOverlay"></div>

            <div className="studentsInfoDiv fade">
              <h2>Student Information</h2>
              <div className="studentsRow">
                <div className="rowContent">
                  <div className="half">Name : </div>
                  <div className="half">{infoObj.name}</div>
                </div>
                <div className="rowContent">
                  <div className="half">Marks : </div>
                  <div className="half">{infoObj.marks}</div>
                </div>
                <div className="rowContent">
                  <div className="half">Total Marks : </div>
                  <div className="half">{infoObj.totalMarks}</div>
                </div>
                <div className="rowContent">
                  <div className="half">Percentage : </div>
                  <div className="half">
                    {((infoObj.marks / infoObj.totalMarks) * 100).toFixed(2)}%
                  </div>
                </div>
              </div>
              <div className="buttons">
                <button
                  style={{ backgroundColor: "#ff5200" }}
                  onClick={deleteStudent}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
                <button onClick={closeShowInfo}>Okay</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ResultCheck;
