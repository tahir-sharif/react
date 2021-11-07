import React from 'react'

const ResultRow = ({ inputData, srNo, showInfo }) => {
    const { name, marks, totalMarks, id } = inputData

    const percentage = (marks / totalMarks * 100).toFixed(2)

    const gradeCheck = () => {
        var grade = '?'
        if (percentage < 35) {
            grade = 'F'
        } else if (percentage < 40) {
            grade = 'D'
        } else if (percentage < 50) {
            grade = 'E'
        } else if (percentage < 60) {
            grade = 'C'
        } else if (percentage < 70) {
            grade = 'B'
        } else if (percentage < 80) {
            grade = 'A'
        } else if (percentage < 90) {
            grade = 'A+1'
        } else if (percentage <= 100) {
            grade = 'A++'
        }
        return grade
    }
    const grade = gradeCheck();
    return (
        <div className="rows fade" onClick={() => { showInfo(id) }}>
            <div className="row rowNum">
                {srNo}
            </div>
            <div className="row">
                {name}
            </div>
            <div className="row">
                {marks}
            </div>
            <div className={`row ${grade === 'F' ? 'fail' : ''}`}>
                {grade}
            </div>
            <div className="row">
                {percentage}%
            </div>
        </div>
    )
}

export default ResultRow
