import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./style.css";
import { bindActionCreators } from "redux";
import { geStackExchanegeData } from "./actions";
import NavBar from "../../components/NavBar";
import { authenticateUserAction } from "../Login/actions";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import DatePicker from "react-datepicker";

import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import "react-datepicker/dist/react-datepicker.css";

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const Container = styled.div`
  margin-top: 100px;
`;
const ErrorClass = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: red;
  font-size: small;
  font-weight: 600;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0% 10%;
  @media (max-width: 840px) {
    padding: 0% 5%;
  }
  @media (max-width: 720px) {
    display: block;
  }
`;

const Home = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [pageNumber, setPageNumber] = useState();
  const [pageSize, setPageSize] = useState();
  const [isError, setIsError] = useState(false);
  const [loadingState, setLoadingState] = useState(false);

  const onChange = (dates) => {
    setIsError(false);
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const currentStateData = useSelector((state) => state?.homeData?.data);
  const getPageSizes = (value, name) => {
    setIsError(false);
    if (name === "size") {
      setPageSize(value);
    } else if (name === "pageNumber") {
      setPageNumber(value);
    }
  };
  const dateConversion = (date) => {
    const newFormat = {
      mm: date.getMonth() + 1,
      dd: date.getDate(),
      yy: date.getFullYear().toString().slice(-2),
      yyyy: date.getFullYear(),
    };
    const newFormat2 = `${newFormat.yyyy}-${
      newFormat.mm > 9 ? newFormat.mm : "0" + newFormat.mm
    }-${newFormat.dd > 9 ? newFormat.dd : "0" + newFormat.dd}`;
    return newFormat2;
  };
  const filteredData = () => {
    if (
      endDate !== null &&
      pageNumber !== undefined &&
      pageNumber !== "" &&
      pageSize !== undefined &&
      pageSize !== ""
    ) {
      setLoadingState(true);
      const newStartDate = dateConversion(startDate);
      const newEndDate = dateConversion(endDate);
      dispatch(
        geStackExchanegeData(newStartDate, newEndDate, pageSize, pageNumber)
      ).then((res) => {
        setLoadingState(false);
        if (res?.data?.items.length === 0) {
          setIsError(true);
        }
      });
    } else {
      toastMessage("error", "Please fill all the details.");
    }
  };
  const toastMessage = (toastType, message) => {
    toast.dismiss();
    toast[toastType](message, {
      position: "top-right",
      autoClose: 1800,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <React.Fragment>
      <Container>
        {!loadingState ? (
          <>
            <TopWrapper>
              <div className="form-group">
                <label>Start & End Date</label>
                <DatePicker
                  selected={startDate}
                  onChange={onChange}
                  startDate={startDate}
                  endDate={endDate}
                  selectsRange
                  inline
                />
              </div>
              <div className="form-group">
                <label>Page number</label>
                <input
                  className="form-control"
                  type="text"
                  id="input2"
                  name="pageNumber"
                  placeholder="Page number"
                  value={pageNumber}
                  onChange={(event) =>
                    getPageSizes(event.target.value, "pageNumber")
                  }
                />
              </div>
              <div className="form-group">
                <label>Page Size</label>
                <input
                  className="form-control"
                  type="text"
                  id="input1"
                  name="size"
                  placeholder="Page Size"
                  value={pageSize}
                  onChange={(event) => getPageSizes(event.target.value, "size")}
                />
              </div>
            </TopWrapper>
            <div>
              <button className="btn btn-primary" onClick={filteredData}>
                Filter
              </button>
            </div>
            {Object.keys(currentStateData).length > 0 &&
              currentStateData?.dataSource?.data.length > 0 && (
                <div style={{ margin: "50px 0px" }}>
                  <ReactFC {...currentStateData} />
                </div>
              )}
            {isError && (
              <>
                {toastMessage(
                  "warn",
                  "No data found. Please fill the detail again"
                )}
              </>
            )}
          </>
        ) : (
          <div>loading...</div>
        )}
      </Container>
    </React.Fragment>
  );
  // }
};

export default Home;
