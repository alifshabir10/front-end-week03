import React, { Component, Fragment } from "react";
import Students from "./student";
import { studentData } from "../data/student-data";
import { star, chevronUp, thumbsOUp, heart } from "react-icons-kit/fa/";

import "./student.css";

export default class ListStudent extends Component {
  state = {
    student: [],
    search: "",
    select: "",
    inSelected: false,
  };

  componentDidMount() {
    this.setState({
      student: studentData,
    });
  }

  //setiap kali user input keyboard, maka value akan disimpan di state search
  onHandleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
    // console.log(e.target.value);
    console.log(this.state.search);
  };

  onHandleSelect = (e) => {
    // ternary operation
    const value =
      e.target.selectedIndex !== 0
        ? e.target.options[e.target.selectedIndex].value
        : null;
    console.log(value);

    if (value !== null) {
      this.setState({
        select: value,
        isSelected: true,
      });
    }
  };

  handleUpVote = () => {
    this.props.onVote(this.props.id);
  };
  handleLike = () => {
    this.props.onLike(this.props.id);
  };

  render() {
    const { students, search, select, isSelected } = this.state;
    return (
      <>
        <div>
          <input
            placeholder="Search Student..."
            value={search}
            onChange={this.onHandleChange}
          ></input>
          <select value={select} onChange={this.onHandleSelect}>
            <option value="">Filter By</option>
            <option value="nama">Nama</option>
            <option value="ipk">Ipk</option>
            <option value="kota">Kota</option>
          </select>
          
          <div>
            <div className="students">
              {!isSelected
                ? studentData
                    .filter((f) =>
                      f.nama.toLowerCase().includes(search.toLowerCase())
                    )

                    .map((value) => {
                      return (
                        <Students
                          nim={value.nim}
                          nama={value.nama}
                          ipk={value.ipk}
                          kota={value.kota}
                          picture={value.picture}
                          vote={value.vote}
                        />
                      );
                    })
                : studentData
                    .sort((a, b) => {
                      if (select === "nama") {
                        return ("" + a.nama).localeCompare(b.nama);
                      }
                      if (select === "ipk") {
                        return ("" + a.ipk).localeCompare(b.ipk);
                      }
                      if (select === "kota") {
                        return ("" + a.kota).localeCompare(b.kota);
                      }
                    })
                    .map((value) => {
                      return (
                        <Students
                          nim={value.nim}
                          nama={value.nama}
                          ipk={value.ipk}
                          kota={value.kota}
                          
                        />
                      );
                    })}
            </div>
          </div>
        </div>
      </>
    );
    // const galery = studentData.map((student) => {
    //   return (
    //     <Student
    //       picture={student.picture}
    //       nim={student.nim}
    //       nama={student.nama}
    //       ipk={student.ipk}
    //       kota={student.kota}
    //     />
    //   );
    // });
    // return <div className="student">{galery}</div>;
  }
}
